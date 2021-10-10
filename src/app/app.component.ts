import { Component } from '@angular/core';
import { HeaderLinkCONSTANTS } from './shared/header-link.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  selectedLink: string = HeaderLinkCONSTANTS.RECEIPES;
  readonly HeaderLinkCONSTANTS = HeaderLinkCONSTANTS;

  getLink(data: string) {
    this.selectedLink = data;
  }
}
