import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receipe } from '../receipes/receipe.modal';
import { ReceipesService } from '../receipes/receipes.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private receipeService: ReceipesService
  ) {}

  storeReceipe() {
    const receipes = this.receipeService.getReceipes();

    this.http
      .put(
        'https://receipe-book-2b2e7-default-rtdb.firebaseio.com/receipes.json',
        receipes
      )
      .subscribe((res) => {
        console.log('response from put req', res);
      });
  }

  fetchReceipes(): Observable<Receipe[]> {
    return this.http
      .get<Receipe[]>(
        'https://receipe-book-2b2e7-default-rtdb.firebaseio.com/receipes.json'
      )
      .pipe(
        map((receipes: Receipe[]) => {
          receipes.map((receipe: Receipe) => {
            return {
              ...receipe,
              ingredients: receipe.ingredients ? receipe.ingredients : [],
            };
          });
          return receipes;
        }),
        tap((receipes: Receipe[]) => this.receipeService.setReceipes(receipes))
      );
  }
}
