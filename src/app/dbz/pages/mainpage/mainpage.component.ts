import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzServiceService } from '../../services/dbz-service.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

  constructor( private dbz:DbzServiceService){}

  get characters():Character[]{
    return this.dbz.characters;
  }

  onDeleteCharacter(id:string):void{
    this.dbz.deleteCharacterById(id)
  }
  
  onNewCharacter(character:Character):void{
    this.dbz.addNewCharacter(character)
  }
}
