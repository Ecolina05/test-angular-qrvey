import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Function to turn the first letter of a word into mayuscula
   * @param word 
   */
  firstLetterMayus(word: string) {
    if (word)
      return word.replace(/\b\w/g, l => l.toUpperCase());
  }
}
