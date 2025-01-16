import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatSidenav,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatSidenav,
  ]
})
export class MaterialModule { }
