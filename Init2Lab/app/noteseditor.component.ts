/**
 * Created by st11236 on 12/9/2016.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'notes-editor',
    templateUrl: "app/noteseditor.component.html"
})

export class NotesEditorComponent {

    ngOnInit() {
        console.log("NotesEditorComponent");
    }
    section: string;

    setSection(section: string) {
        this.section = section;
    }
}