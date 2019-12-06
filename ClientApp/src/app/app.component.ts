
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';




  constructor(private router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            if (event.url.match('/menu/') || event.url.match('/prueba/')) {
                this.hideElement = true;
            } else {
                this.hideElement = false;
            }
        }
    });
}


public hideElement = false;

ngOnInit() {
   
}



}
