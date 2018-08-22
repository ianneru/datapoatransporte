import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { OnibusListagemService} from './service/onibus-listagem.service';
import { OnibusListagemRestService } from './service/onibus-listagem-rest.service';
import { OnibusListagemComponent } from './onibus-listagem.component';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  providers: [OnibusListagemService,OnibusListagemRestService],
  declarations: [OnibusListagemComponent],
  entryComponents:[OnibusListagemComponent],
  exports:[OnibusListagemComponent]
})
export class OnibusListagemModule { }
