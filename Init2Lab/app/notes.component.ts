import {Component} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx'
//import {Observable} from "rxjs";

@Component({
    selector: 'notes',
    template: `Notes list:
                <ul>
                    <li *ngFor="let note of notes">
                        {{note.text}} <button (click)="remove(note._id)">remove</button>
                    </li>
                </ul>
                
                <textarea [(ngModel)]="text"></textarea>
                <button (click)="add()">Add</button>`
})

export class NotesComponent {

    private notesUrl = 'http://localhost:3000/notes';  // URL to web api

    text: string

    notes: Note[] = [
        {text:"Note one"},
        {text:"Note two"}
    ]

    constructor(private http: Http) {
        this.readNotes();
    }

    readNotes() {
        this.getNotes().then(notes=>{
            this.notes=notes
            console.log(notes);
        });
    }

    add(){
        console.log(this.text);
        let note = {text:this.text};
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

    getNotes(): Promise<Note[]> {
        return this.http.get(this.notesUrl)
            .toPromise()
            .then(response => response.json() as Note[]);
    }
}

interface Note {
    text: string;
}
