import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Hello World";
}







// These are called lifecycle hooks(any is required to avoid errors)
// export class AppComponent implements OnInit, OnDestroy {
//  intervalSub:any;

//   ngOnInit(){
//     this.intervalSub = setInterval(() => {
// console.log("Hello fron ngOnInit");
//     }, 1000);
//   }

//   ngOnDestroy() {
//     if(this.intervalSub) {
// clearInterval(this.intervalSub);
//     }
//   }

// }
