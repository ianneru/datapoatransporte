import { Component, OnInit } from '@angular/core';
import { ItemOnibusModel } from './model/item-onibus.model';
import { OnibusListagemService } from './service/onibus-listagem.service';
import { ItemOnibusRequestModel } from './integracao/item-onibus-request.model';
import { ItemOnibusResponseModel } from './integracao/Item-onibus-response.model';
@Component({
  selector: 'app-onibus-listagem',
  templateUrl: './onibus-listagem.component.html',
  styleUrls: ['./onibus-listagem.component.css']
})
export class OnibusListagemComponent implements OnInit {
  
  public onibusNome: string;
  public exibeLista: boolean = false;
  public onibusItens: ItemOnibusModel[];
  public searchText: string;
  
  constructor(
    private onibusListagemService : OnibusListagemService
  ) { }

  ngOnInit() {
  }

  public buscarItens(onibusNome?: string){
    let onibus = new ItemOnibusRequestModel(this.onibusNome); 
       
    this.onibusListagemService.buscarOnibusListagem(onibus)
        .subscribe( 
            res => {                         
                this.onibusItens = res;
                this.exibeLista = true;
            },
            err =>{
                this.exibeLista = false;
            }
        );
  }

  updateTable(ev: any) {
    this.buscarItens(this.searchText);
  }
}
