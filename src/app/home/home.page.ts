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
    {name: 'África', id: 'africa'},
    {name: 'Asia', id: 'asia'},
    {name: 'Oceanía', id: 'oceania'},
    {name: 'América del Norte', id: 'north-america'},
    {name: 'América del Sur', id: 'south-america'},
    {name: 'España', id: 'spain'},
    {name: 'Aragón', id: 'aragon'},
    {name: 'Zaragoza', id: 'zaragoza'},
    {name: 'Huesca', id: 'huesca'},
    {name: 'Teruel', id: 'teruel'},
    {name: 'Cinco Villas', id: 'cinco-villas'},
  ];

  constructor() {}

}
