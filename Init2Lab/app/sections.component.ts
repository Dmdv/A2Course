/**
 * Created by st11236 on 12/8/2016.
 */

import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {DragulaService} from "ng2-dragula";

@Component({
    selector: 'sections',
    templateUrl: "app/sections.component.html"
})

export class SectionsComponent implements OnInit {

    ngOnInit(): void {
    }

    private sectionsUrl = 'sections';  // URL to web api
    sections: Section[];
    activeSection: string;
    sectionsReplaceUrl = "/sections/replace";

    @Output() sectionChanged: EventEmitter<string> =
        new EventEmitter<string>();

    constructor(private http: Http, private dragulaService: DragulaService) {
        this.readSections();
        dragulaService.drop.subscribe(this.onDrop.bind(this));
    }

    showSection(section: Section) {
        console.log("Show section: " + section.title);
        this.activeSection = section.title;
        this.sectionChanged.emit(this.activeSection);
    }

    onDrop(value) {
        let [bag, elementMoved, targetContainer, srcContainer] = value;
        if (targetContainer.children) {
            let arr = Array.from(targetContainer.children);
            this.sections = arr.map((li: HTMLLIElement) => {
                return {title: li.textContent.trim()}
            });
            this.writeSections().subscribe();
        }
    }

    addSection(title: string) {
        if (!title) return;

        // check for duplicates
        if (this.sections.map(s => s.title).find(t => t === title)) return;

        const section: Section = {title};
        this.sections.unshift(section);
        this.showSection(section);
        this.writeSections().subscribe();
    }

    writeSections() {
        if (this.sections && this.sections.length > 0) {
            return this.http.post(this.sectionsReplaceUrl, this.sections);
        }
    }

    readSections() {

        this.getSections().subscribe(sections => {

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
    _id?: string;
    title: string;
}