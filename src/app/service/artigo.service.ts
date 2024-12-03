import { Injectable } from '@angular/core';
import { Artigo } from '../interface/artigo';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  constructor() { }
  findById(id:number|string):Promise<Artigo>|undefined{

    return 
  }


}
