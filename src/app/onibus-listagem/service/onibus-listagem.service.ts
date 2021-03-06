import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { Builder } from 'builder-pattern';

import { ItemOnibusModel } from '../model/item-onibus.model';
import { ItemOnibusResponseModel } from '../integracao/item-onibus-response.model';
import { OnibusListagemRestService } from './onibus-listagem-rest.service';

@Injectable()
export class OnibusListagemService {

    constructor(
        private onibusListamgeRestService: OnibusListagemRestService
    ) {}

    public buscarOnibusListagem(itemOnibusRequest: string) : Observable<ItemOnibusModel[]>{
        debugger;
        return this.onibusListamgeRestService.obterListaOnibus(itemOnibusRequest)
            //    .switchMap( res => of(this.mapperToItemOnibusModel(res)))            
            .switchMap( res => {
                console.log(res);
                return of(this.mapperToItemOnibusModel(res));
            });
                          
    }

    public mapperToItemOnibusModel(objeto: ItemOnibusResponseModel[]): ItemOnibusModel[]{
        return objeto.map( item =>{
           return Builder<ItemOnibusModel>()
                .id(item.id)
                .codigo(item.codigo)
                .nome(item.nome)                
                .build();
        });    
    }


}