import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzServiceService {

  constructor() {  console.log(this.characters);}
  public characters: Character[] = [
    {
      id: uuid(),
      name:'krilllin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 14000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 8500
    }
  ]
 
 addNewCharacter(character:Character):void {
  const newCharacter:Character ={id:uuid(), ...character}
  this.characters.push(newCharacter)
 }

 deleteCharacterById(id:string){
  this.characters = this.characters.filter(character => character.id !== id)
  //this.characters.splice(index,1)
 }
 
}
