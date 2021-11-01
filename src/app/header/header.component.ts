import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderLinkCONSTANTS } from 'src/app/shared/header-link.enum';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output('getSelectedLink') selectedLink: EventEmitter<string>;
  readonly HeaderLinkCONSTANTS = HeaderLinkCONSTANTS;

  constructor(private datatStorageService: DataStorageService) {
    this.selectedLink = new EventEmitter();
    this.selectedLink.emit(HeaderLinkCONSTANTS.RECEIPES);
  }

  ngOnInit(): void {}

  onLinkSelected(param: string) {
    this.selectedLink.emit(param);
  }

  onSaveData() {
    this.datatStorageService.storeReceipe();
  }

  onFetchData() {
    this.datatStorageService.fetchReceipes().subscribe();
  }
}
