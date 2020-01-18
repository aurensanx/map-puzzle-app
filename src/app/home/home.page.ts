import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  maps: MenuItem[] = [
    {name: 'USA', id: 'usa'},
    {name: 'Europa', id: 'europe'},
    // {name: 'África', id: 'africa'},
    // {name: 'Asia', id: 'asia'},
    // {name: 'Mundo', id: 'world'},
    // {name: 'América', id: 'america'},
    {name: 'España', id: 'spain'},
    {name: 'Aragón', id: 'aragon'},
    {name: 'Cinco Villas', id: 'cinco-villas'},
    {name: 'La Litera', id: 'litera'},
  ];

  constructor() {}

}
