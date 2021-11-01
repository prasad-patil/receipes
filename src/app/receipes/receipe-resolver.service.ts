import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Receipe } from './receipe.modal';
import { ReceipesService } from './receipes.service';

@Injectable({
  providedIn: 'root',
})
export class ReceipeResolver implements Resolve<Receipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private receipeService: ReceipesService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const receipes = this.receipeService.getReceipes();
    if (receipes.length === 0) {
      return this.dataStorageService.fetchReceipes();
    }
    return receipes;
  }
}
