import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Engin Demiroğ";
  
}

//Datayı yönettiğimiz yer
//Angularda component demek Html' in datasını yöettiğimiz yer.