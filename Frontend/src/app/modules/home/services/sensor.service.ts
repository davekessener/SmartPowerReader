import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs';
import {Sensor} from 'core/interfaces/sensor.interface';
import {GET_SENSORS, UPDATE_SENSORS} from '../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class SensorService {
    host: string;
    serverUrl: string;
    sensorUrl: string;


    constructor(private httpClient: HttpClient) {
        const url = window.location.href;
        this.host = url.split(/http:\/\/|:/)[1];
        this.serverUrl = 'http://' + this.host + ':3000';
        this.sensorUrl = this.serverUrl + '/sensors';
        console.log(this.sensorUrl);
    }

    getData(params: any): Observable<any> {
        return this.httpClient.get<Sensor[]>(`${this.sensorUrl}/devices`, {params: params});
    }

    getAllSenors(): Observable<Sensor[]> {
        const params = {
            action: GET_SENSORS
        };
        return this.httpClient.get<Sensor[]>(`${this.sensorUrl}`, {params: params});
    }

    updateSensors(body: any): Observable<Object> {
        const params = {
            action: UPDATE_SENSORS
        };
        return this.httpClient.put<Object>(`${this.sensorUrl}`, body, {params: params});
    }


}
