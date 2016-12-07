"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
//import {Observable} from "rxjs";
var NotesComponent = (function () {
    function NotesComponent(http) {
        this.http = http;
        this.notesUrl = 'http://localhost:3000/notes'; // URL to web api
        this.notes = [
            { text: "Note one" },
            { text: "Note two" }
        ];
        this.readNotes();
    }
    NotesComponent.prototype.readNotes = function () {
        var _this = this;
        this.getNotes().then(function (notes) {
            _this.notes = notes;
            console.log(notes);
        });
    };
    NotesComponent.prototype.add = function () {
        console.log(this.text);
        var note = { text: this.text };
        this.addNote(note);
    };
    NotesComponent.prototype.addNote = function (note) {
        var _this = this;
        this.http.post(this.notesUrl, note).toPromise()
            .then(function (response) {
            console.log("note sent, response", response);
            _this.readNotes();
        });
    };
    NotesComponent.prototype.remove = function (id) {
        var _this = this;
        var params = new http_1.URLSearchParams();
        params.set('id', id);
        this.http.delete(this.notesUrl, { search: params })
            .toPromise()
            .then(function (response) {
            console.log("note with id {{id}} removed, response", response);
            _this.readNotes();
        });
    };
    NotesComponent.prototype.getNotes = function () {
        return this.http.get(this.notesUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'notes',
            template: "Notes list:\n                <ul>\n                    <li *ngFor=\"let note of notes\">\n                        {{note.text}} <button (click)=\"remove(note._id)\">remove</button>\n                    </li>\n                </ul>\n                \n                <textarea [(ngModel)]=\"text\"></textarea>\n                <button (click)=\"add()\">Add</button>"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map