import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  public nombre: string = 'usuario1';
  ci = signal(99999999);
  private band = false;
  private contador:number = 0;
  public onCLickUperLower() {
    this.ci.set(this.contador++);
    if(!this.band){
      this.nombre = this.nombre.toUpperCase();
      this.band = true;
    }
    else{
      this.nombre = this.nombre.toLowerCase();
      this.band = false;
    }
  }
}
