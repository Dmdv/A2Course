import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent}   from './app.component';
import {NotesComponent} from './notes.component';
import {HttpModule}    from '@angular/http';
import {SectionsComponent} from "./sections.component";
import {DragulaModule} from "ng2-dragula";
import {Routes, RouterModule} from "@angular/router";
import {NotesEditorComponent} from "./noteseditor.component";
import {PageNotFoundComponent} from "./pagenotfound.component";
import {SectionFilterPipe} from "./SectionFilterPipe";

const appRoutes: Routes = [
    {path: '', component: NotesEditorComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule, DragulaModule],
    declarations: [
        AppComponent,
        NotesComponent,
        SectionsComponent,
        NotesEditorComponent,
        PageNotFoundComponent,
        SectionFilterPipe
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}