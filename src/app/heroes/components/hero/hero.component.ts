import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public title:string = 'heroes'
  public name:string = 'ironman'
  public age:number = 39

  get complete():string{
    return `Nombre: ${this.name}, Edad: ${this.age}`
  }

  changeHero():void{
    if(this.name == 'ironman') {
      this.name = 'Batman'
      this.age = 45
    } else {
      this.name = 'ironman'
    this.age = 39  
    }
    
  }
}
