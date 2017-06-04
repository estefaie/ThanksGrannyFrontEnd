import { ElementRef, Component } from '@angular/core';

@Component({
    selector: 'autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    templateUrl: './autocomplete.component.html'
})
export class AutocompleteComponent {
    public query = '';
    public countries = [ 'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus',
                        'Belgium', 'Bosnia & Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus',
                        'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia',
                        'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo',
                        'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta',
                        'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland',
                        'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia',
                        'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'];
    public filteredList = [];
    public elementRef;
 
    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }

    filter() {
        if (this.query !== '') {
            let filteredList = this.countries.filter(function(el){
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
            if (filteredList.length > 10) {
                filteredList = filteredList.slice(10, filteredList.length - 1);
            }
            this.filteredList = filteredList;
        } else {
            this.filteredList = [];
        }
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
    }

    handleClick(event){
        let clickedComponent = event.target;
        let inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside){
            this.filteredList = [];
        }
    }
}
