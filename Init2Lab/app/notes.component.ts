import {Component} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx'
import {Observable} from "rxjs";
//import {Observable} from "rxjs";

@Component({
    selector: 'notes',
    templateUrl: "app/notes.component.html"
})

export class NotesComponent {

    private notesUrl = 'http://localhost:3000/notes';  // URL to web api

    text: string;
    section: string;

    notes: Note[] = [
        {text:"Note one"},
        {text:"Note two"}
    ]

    constructor(private http: Http) {
        this.readNotes();
    }

    readNotes() {
        this.getNotes().subscribe(notes=>{

            console.log("Show notes");
            console.log(notes);
            this.notes = notes
            console.log(notes);
        });
    }

    add(){
        console.log("Added note: " + this.text + " " + this.section);
        let note = { text: this.text, section: this.section };
        this.addNote(note);
    }

    addNote(note:Note) {
        this.http.post(this.notesUrl, note).toPromise()
            .then(response => {
                console.log("note sent, response", response);
                this.readNotes();
            });
    }

    remove(id:string) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);
        this.http.delete(this.notesUrl, { search: params })
            .toPromise()
            .then(response => {
                console.log(
                    `note with id {{id}} removed, response`, response);
                this.readNotes();
            });
    }

    getNotes(): Observable<Note[]> {
        /*return this.http.get(this.notesUrl)
            .toPromise()
            .then(response => response.json() as Note[]);*/

        console.log("Get notes for section: " + this.section);

        let params: URLSearchParams = new URLSearchParams();
        params.set('section', this.section);
        return this.http.get(
            this.notesUrl,
            {search:params})
            .map(response => response.json() as Note[]);
    }
}

interface Note {
    text: string;
}