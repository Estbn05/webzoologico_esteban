import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  apiUri = '/api/animals';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {

  }
//Metodo para consultar todos los animales
  getAllAnimalsData(): Observable<any> {  //coja el objeto http creado en el constructor y haga un get 
    return this.http.get<any>(this.apiUri) //retorno de la infromacion, al get le envio la uri que defini en la linea 11
  }

  newAnimal(data: any): Observable<any> {
      return this.http.post<any>(
        this.apiUri,
        data,
        { headers: this.httpOptions });
  }
  updateAnimal(id: any, data: any): Observable<any> {
      console.log(data)
      return this.http.put<any>(
        this.apiUri + '/' + id,
        data,
        { headers: this.httpOptions });
    }
  getOneAnimal(id: any): Observable<any> {
      return this.http.get<any>(
        this.apiUri + '/' + id,
        { headers: this.httpOptions });
    }
    
    deleteAnimal(id: any) {
    return this.http.delete<any>(
      this.apiUri + "/" + id,
      { headers: this.httpOptions });
  }



} // cierra clase
