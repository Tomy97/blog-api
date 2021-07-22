import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  Links = [
    {
      title: 'Usuario',
      fragment: 'usuario',
      link: 'usuarios'
    },
    {
      title: 'Posteos',
      fragment: 'posteos',
      link: 'post'
    },
    {
      title: 'Albumes',
      fragment: 'albumes',
      link: 'albumes'
    },
  ];
  constructor(public route: ActivatedRoute) {}
}
