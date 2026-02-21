import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerLayoutSidebar } from "@ng-icons/tabler-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIcon, RouterLinkWithHref, FormsModule, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [provideIcons({ tablerLayoutSidebar })]
})
export class App {

  isSidebarOpen = signal(false);
  isDebugMode = signal(false);

  public routes = [
    { name: 'home', path: '/home' },
    { name: 'browse', path: '/browse' },
    { name: 'about', path: '/about' }
  ];

  public toggleSidebar() {
    this.isSidebarOpen.update(val => !val);
  }

  public toggleDebugBorders() {
    this.isDebugMode.update(val => !val);
  }
}
