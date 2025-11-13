import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalService } from '../../services/animal-service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-component',
  imports: [ReactiveFormsModule],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
  animalList: any = [];
  animalForm: FormGroup | any;

  constructor(private animalService: AnimalService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  getAllAnimals() { //se puede cambiar nombre si no gusta
    this.animalService.getAllAnimalsData().subscribe((data: {}) => { //toma el objeto del servicio y hace el metodo del servicio/ en data se guarda lo que devuelva el servicio
      this.animalList = data;
    });
  }
  ngOnInit() {  //caundo se haga un llamado a este componente, llama al metodo getAllAnimals
    this.getAllAnimals();
    this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: 0,
      tipo: ''
    })
  }
  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }
  newAnimalEntry() {
    this.animalService.newAnimal(this.animalForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /inicio y recargando la ventana
        this.router.navigate(['/inicio'])
          .then(() => {
            this.newMessage('Registro exitoso');
          })
      }
    );
  }

}
