import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // publico para poder usarlo en el html del componente
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}
