import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable,of } from 'rxjs';
import { ItemOnibusResponseModel } from '../integracao/item-onibus-response.model';

@Injectable()
export class OnibusListagemRestService {

    constructor(private http: HttpClient
    ) {}

    public obterListaOnibus(itemOnibus: string): Observable<ItemOnibusResponseModel[]> {

        // let reqHeaders: HttpHeaders = new HttpHeaders({
        //         'Access-Control-Allow-Headers': 'Origin, X-Request-Width, Content-Type, Accept',
        //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        //         'Access-Control-Allow-Origin': '*'
        //     });
        let reqHeaders: HttpHeaders = new HttpHeaders({
                 'Access-Control-Allow-Headers': 'Origin, X-Request-Width, Content-Type, Accept',
                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                 'Access-Control-Allow-Origin': '*'
        });
        const t =  this.http.get<ItemOnibusResponseModel[]>(`${environment.onibusApiUrl}&p=${itemOnibus}&t=o`, {headers: reqHeaders});
        return t;
    }
}
