import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Components1Component } from './components/components1/components1.component';
import { Components2Component } from './components/components2/components2.component';
import { Components3Component } from './components/components3/components3.component';
import { Components4Component } from './components/components4/components4.component';
import { Components5Component } from './components/components5/components5.component';
import { Components6Component } from './components/components6/components6.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Components1Component, Components2Component, Components3Component, Components4Component, Components5Component, Components6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-colegio';

}

