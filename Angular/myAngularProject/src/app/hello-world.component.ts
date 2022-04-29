import { Component } from '@angular/core';
// Presents the component as a classs and provides meta data about the component
//These are properties for each component
@Component ({
    
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1>',
    styles: [`
    h1 {
        color:blue
    }`]
 })

 export class HelloWorldComponent {
     title = 'Hello World!';
     // This is essentially uses the HTML template  from above component, normally it is separate
 }