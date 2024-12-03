import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../anime/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [MenuBarComponent ,AboutComponent,FooterComponent],
  imports: [
    RouterModule, CommonModule
  ],exports:[MenuBarComponent,AboutComponent,FooterComponent]
})
export class ComponentsModule { }
