import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected isMobileSizeScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 992px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isMobileSizeScreen = true;
      } else {
        this.isMobileSizeScreen = false;
      }
    });
  }

}
