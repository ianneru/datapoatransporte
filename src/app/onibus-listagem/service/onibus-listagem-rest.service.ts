import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ItemOnibusRequestModel } from '../integracao/item-onibus-request.model';
import { ItemOnibusResponseModel } from '../integracao/item-onibus-response.model';

@Injectable()
export class OnibusListagemRestService {

    constructor(private http: HttpClient) {}

    public obterListaOnibus(itemOnibus: ItemOnibusRequestModel): Observable<ItemOnibusResponseModel[]> {
        return this.http.get<ItemOnibusResponseModel[]>(`${environment.onibusApiUrl}&p=${itemOnibus.nome}&t=o`);
    }
}
