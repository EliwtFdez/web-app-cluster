import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-slidebard',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatDividerModule, MatListModule, ],
  templateUrl: './slidebard.component.html',
  styleUrl: './slidebard.component.scss',
})
export class SlidebardComponent {
  isCollapsed = false; 
  @Output() toggle = new EventEmitter<boolean>(); // Emite el estado del sidebar



  // Lista principal de elementos del menú
  menuItems = [
    { icon: 'home', label: 'Registro de Viviendas', route: '/housing-registry' },
    { icon: 'people', label: 'Gestión de Residentes', route: '/resident-management' },
    { icon: 'security', label: 'Control de Acceso', route: '/access-control' },
    { icon: 'build', label: 'Mantenimiento', route: '/maintenance' },
    { icon: 'payment', label: 'Pagos y Facturación', route: '/billing' },
    { icon: 'message', label: 'Comunicación', route: '/communication' },
  ];

  lastMenuItems = [
    { icon: 'exit_to_app', label: 'Cerrar sesión', route: '/login'},

    { icon: 'settings', label: 'Configuracion', route: '/config' },

  ];


  // Función para alternar el estado del sidebar
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.toggle.emit(this.isCollapsed);
  console.log('toggleslide func')
  }
}