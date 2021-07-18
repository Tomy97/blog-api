import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  autor: string = 'Tomas Pandullo'
  year = new Date()
  anio = new Date(this.year.toLocaleDateString())
}
