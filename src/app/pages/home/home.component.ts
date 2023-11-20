import { Component } from '@angular/core';
import dbjson from '../../data/db.json';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  db: Card[] = [];
  constructor(){
    this.db = dbjson;
  }
}
