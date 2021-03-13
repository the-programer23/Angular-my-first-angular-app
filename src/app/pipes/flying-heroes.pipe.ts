import { Pipe, PipeTransform } from '@angular/core';

import { Flyer } from './heroes';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
    
  transform(allHeroes: Flyer[]) {
      console.log(allHeroes)
    return allHeroes.filter(hero => hero.canFly);
  }
}