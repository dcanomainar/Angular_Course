import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent {
    show = true;


    frase:any = {
        message: 'This is just a normal message for test',
        author: 'Unknown'
    };

    characters: string[] = ['unknown 1', 'unknown 2', 'unknown 3']
}
