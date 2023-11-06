import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './vehiculo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class VehiculoService {
    private apiUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getCourses(): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>(this.apiUrl);
    }


}
