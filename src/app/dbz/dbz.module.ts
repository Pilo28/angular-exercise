import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { ListCharactersComponent } from './components/list/list-characters/list-characters.component';
import { AddCharacterComponent } from './components/addCharacter/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainpageComponent,
    ListCharactersComponent,
    AddCharacterComponent
  ],
  exports:[
    MainpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
