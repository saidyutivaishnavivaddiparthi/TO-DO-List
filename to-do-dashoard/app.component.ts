import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTheme = 'theme1';

  applyTheme(themeName: string): void {
    this.currentTheme = themeName;
  }

  getTheme(): string {
    return this.currentTheme;
  }
  
}
