/**
 * Created by st11236 on 12/8/2016.
 */
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
var http_1 = require("@angular/http");
var SectionsComponent = (function () {
    function SectionsComponent(http) {
        this.http = http;
        this.sectionsUrl = 'sections'; // URL to web api
        this.sectionChanged = new core_1.EventEmitter();
        this.readSections();
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent.prototype.showSection = function (section) {
        console.log("Show section: " + section.title);
        this.activeSection = section.title;
        this.sectionChanged.emit(this.activeSection);
    };
    SectionsComponent.prototype.readSections = function () {
        var _this = this;
        this.getSections().subscribe(function (sections) {
            _this.sections = sections;
            if (_this.activeSection == null) {
                _this.showSection(_this.sections[0]);
            }
        });
    };
    SectionsComponent.prototype.getSections = function () {
        return this.http.get(this.sectionsUrl)
            .map(function (response) { return response.json(); });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SectionsComponent.prototype, "sectionChanged", void 0);
    SectionsComponent = __decorate([
        core_1.Component({
            selector: 'sections',
            templateUrl: "app/sections.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SectionsComponent);
    return SectionsComponent;
}());
exports.SectionsComponent = SectionsComponent;
//# sourceMappingURL=sections.component.js.map