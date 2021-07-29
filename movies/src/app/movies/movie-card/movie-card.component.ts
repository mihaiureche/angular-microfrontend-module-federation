import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-movie-card',
    template: `<p-card [header]="title" [style]="{'width': '25rem', 'margin-bottom': '2em', 'margin-left':'10px'}">
        <ng-content select="[image]"></ng-content>
        </p-card>`
})
export class MovieCardComponent {
    @Input()
    title: string;

    constructor() {
        this.title = '';
    }
}