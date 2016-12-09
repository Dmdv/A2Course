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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var notes_component_1 = require('./notes.component');
var http_1 = require('@angular/http');
var sections_component_1 = require("./sections.component");
var ng2_dragula_1 = require("ng2-dragula");
var router_1 = require("@angular/router");
var noteseditor_component_1 = require("./noteseditor.component");
var pagenotfound_component_1 = require("./pagenotfound.component");
var SectionFilterPipe_1 = require("./SectionFilterPipe");
var appRoutes = [
    { path: '', component: noteseditor_component_1.NotesEditorComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule, http_1.HttpModule, ng2_dragula_1.DragulaModule],
            declarations: [
                app_component_1.AppComponent,
                notes_component_1.NotesComponent,
                sections_component_1.SectionsComponent,
                noteseditor_component_1.NotesEditorComponent,
                pagenotfound_component_1.PageNotFoundComponent,
                SectionFilterPipe_1.SectionFilterPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map