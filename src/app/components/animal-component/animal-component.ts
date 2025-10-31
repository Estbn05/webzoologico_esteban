import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../../services/animal-service';

@Component({
  selector: 'app-animal-component',
  imports: [FormsModule],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
  animalList: any = [];

  constructor(private animalService: AnimalService) { }

  getAllAnimals() { //se puede cambiar nombre si no gusta
    this.animalService.getAllAnimalsData().subscribe((data: {}) => { //toma el objeto del servicio y hace el metodo del servicio/ en data se guarda lo que devuelva el servicio
      this.animalList = data;
    });
  }
  ngOnInit() {  //caundo se haga un llamado a este componente, llama al metodo getAllAnimals
    this.getAllAnimals();
  }
}
