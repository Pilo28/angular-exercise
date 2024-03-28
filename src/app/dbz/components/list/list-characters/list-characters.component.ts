import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

 @Input() 
 public characterList: Character[] = [
  {
    name:'piccolo',
    power: 500
  }
 ]

 @Output()
 public onDelete:EventEmitter<string> = new EventEmitter

 onDeleteCharacter(id?:string):void{
  if (!id) return
  this.onDelete.emit(id)
 }
}
