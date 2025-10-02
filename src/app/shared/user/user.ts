import { Component, computed, signal } from '@angular/core';

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
  public edad = computed(() =>{
    return 20 + this.cont();
  }) 
  public cont = signal(0);

  public Users = signal(
    [
      {
        id : 1,
        nombre : 'Adrian',
        apellido : 'Huanca',
        carrera : 'ingenieria en sistemas',
        ci: '12345678',
        foto: 'https://media.tenor.com/qqjSGTHg1N8AAAAe/okayge-okayge-business.png',
        nro: 1
      },
      { id : 2,
        nombre : 'Elias',
        apellido : 'Quentasi',
        carrera : 'ingenieria en sistemas',
        ci: '87654321',
        foto: 'https://media.tenor.com/qqjSGTHg1N8AAAAe/okayge-okayge-business.png',
        nro: 2
      },
      { id : 3,
        nombre : 'Jhonatan',
        apellido : 'Candy',
        carrera : 'ingenieria en sistemas',
        ci: '11223344',
        foto: 'https://media.tenor.com/qqjSGTHg1N8AAAAe/okayge-okayge-business.png',
        nro: 3
      },
      { id : 4,
        nombre : 'Roberto',
        apellido : 'Ereño',
        carrera : 'ingenieria en sistemas',
        ci: '44332211',
        foto: 'https://media.tenor.com/qqjSGTHg1N8AAAAe/okayge-okayge-business.png',
        nro: 4
      },
      { id : 5,
        nombre : 'Aldo',
        apellido : 'Bracamonte',
        carrera : 'ingenieria en sistemas',
        ci: '55667788',
        foto: 'https://media.tenor.com/qqjSGTHg1N8AAAAe/okayge-okayge-business.png',
        nro: 5
      },
      { id : 6,
        nombre : 'Nelson',
        apellido : 'Cruz',
        carrera : 'ingenieria en sistemas',
        ci: '88776655',
        foto: 'https://media.tenor.com/qqjSGTHg1N8AAAAe/okayge-okayge-business.png',
        nro: 6
      },
      { id : 7,
        nombre : 'Efrain',
        apellido : 'Marca',
        carrera : 'ingenieria en sistemas',
        ci: '10293847',
        foto: 'https://media.tenor.com/qqjSGTHg1N8AAAAe/okayge-okayge-business.png',
        nro: 7
      }

    ]
  );

  public onCLickUperLower() {
    this.ci.set(++this.contador);
    this.cont.update((n) => n + 1);
    for(let i=0; i<this.Users().length; i++){
      this.Users.update((arr) => {
        arr[i].nro = arr[i].nro + 1;
        return arr;
      });
    }
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
