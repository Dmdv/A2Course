import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html"

})
export class AppComponent {

    name="John";
    section: string;

    setSection(section:string) {
        this.section = section;
    }
}
