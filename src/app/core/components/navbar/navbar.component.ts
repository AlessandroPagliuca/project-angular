import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterLinkList } from '../../../shared/models/linkList/router-link-list';
import { API_PATH } from '../../../shared/enums/api-path';


@Component({
  selector: 'app-navbar',
  imports: [MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected linkList: RouterLinkList[] = [
    {
      path: API_PATH.HOME,
      name: API_PATH.HOME
    },
    {
      path: API_PATH.EVENTS,
      name: API_PATH.EVENTS,
    },
    {
      path: API_PATH.SIGNUP,
      name: API_PATH.SIGNUP,
    },
  ];

  constructor() {

  }
}
