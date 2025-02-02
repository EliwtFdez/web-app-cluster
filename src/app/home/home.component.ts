import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SlidebardComponent } from '../slidebard/slidebard.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SlidebardComponent, RouterModule, MatIconModule], // Asegúrate de no usar BrowserModule
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}