import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes:string[]=['spider','thor'];
  heroeB:string ='';
  borrarHeroe():void{
   this.heroeB= this.heroes.shift() || ' ';
  }

}
