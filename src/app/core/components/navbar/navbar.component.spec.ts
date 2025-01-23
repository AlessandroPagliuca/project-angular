import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { API_PATH } from '../../../shared/enums/api-path';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        provideRouter([
          {
            path: 'home',
            loadComponent: () =>
              import('../../pages/home/home.component').then((c) => c.HomeComponent),
          },
          {
            path: 'conferences',
            loadComponent: () =>
              import('../../pages/conferences/conferences.component').then((c) => c.ConferencesComponent),
          },
          {
            path: '**',
            loadComponent: () =>
              import('../../pages/errors/error404/error404.component').then((c) => c.Error404Component),
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    component.styleClasses = 'some-class';
    component.activeLi = 'active-li-class';
    component.linkList = [
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});