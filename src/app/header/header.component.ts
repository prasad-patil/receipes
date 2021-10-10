import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderLinkCONSTANTS } from 'src/app/shared/header-link.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output('getSelectedLink') selectedLink: EventEmitter<string>;
  readonly HeaderLinkCONSTANTS = HeaderLinkCONSTANTS;

  constructor() {
    this.selectedLink = new EventEmitter();
    this.selectedLink.emit(HeaderLinkCONSTANTS.RECEIPES);
  }

  ngOnInit(): void {}

  onLinkSelected(param: string) {
    this.selectedLink.emit(param);
  }
}
