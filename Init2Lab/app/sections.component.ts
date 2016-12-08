/**
 * Created by st11236 on 12/8/2016.
 */

import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Component({
    selector: 'sections',
    templateUrl: "app/sections.component.html"
})

export class SectionsComponent implements OnInit{

    ngOnInit(): void {
    }

    private sectionsUrl = 'sections';  // URL to web api
    sections: Section[];
    activeSection : string;

    @Output() sectionChanged: EventEmitter<string> =
        new EventEmitter<string>();

    constructor(private http: Http) {
        this.readSections();
    }

    showSection(section:Section) {
        console.log("Show section: " + section.title);
        this.activeSection = section.title;
        this.sectionChanged.emit(this.activeSection);
    }

    readSections() {

        this.getSections().subscribe(sections=>{

            this.sections = sections;

            if (this.activeSection == null) {
                this.showSection(this.sections[0]);
            }
        });
    }

    getSections(): Observable<Section[]> {
        return this.http.get(this.sectionsUrl)
            .map(response => response.json() as Section[]);
    }
}

interface Section {
    _id: string;
    title: string;
}