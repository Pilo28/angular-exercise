import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes:string[] = ['Batman', 'Pantro', 'Heman', 'Chitara', 'Vegeta']
  public heroDelete:string=''
  deleteLastHero():void{
    const herodelete = this.heroes.pop();
    if (herodelete !== undefined) {
      this.heroDelete = herodelete;
    } else {
      // Manejo si la lista de héroes está vacía
      console.log("No hay héroes para eliminar.");
    }
  }
}
