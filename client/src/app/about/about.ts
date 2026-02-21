import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('About | Myzr');
  }
}
