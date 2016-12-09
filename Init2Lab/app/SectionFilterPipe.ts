import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by st11236 on 12/9/2016.
 */

@Pipe({
    name: 'sectionFilter',  pure:false
})
export class SectionFilterPipe implements PipeTransform {
    transform(sections: Section[], v: string):Section[] {
        if (!sections) return [];
        return sections.filter(
            s => s.title.toLowerCase().startsWith(v. toLowerCase()));
    }
}

interface Section {
    _id?: string;
    title: string;
}