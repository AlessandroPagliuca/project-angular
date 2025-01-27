import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterLinkList } from '../../../shared/models/linkList/router-link-list';
import { API_PATH } from '../../../shared/enums/api-path';


@Component({
  selector: 'app-navbar-link',
  imports: [MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  linkList: RouterLinkList[] = [
    {
      path: API_PATH.HOME,
      name: API_PATH.HOME
    },
    {
      path: API_PATH.CONFERENCES,
      name: API_PATH.CONFERENCES,
    },
    {
      path: API_PATH.SIGNUP,
      name: API_PATH.SIGNUP,
    },
  ];

  @Input() styleClasses!: string;
  @Input() activeLi!: string;
  @Input() closeSideNav?: () => void;
  constructor() { }
}
