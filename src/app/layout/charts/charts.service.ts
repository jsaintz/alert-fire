import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiNasaService {

    constructor(private httpClient: HttpClient) { }

    public getEvents() {
        return this.httpClient.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`);
    }
}