import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotacaoListagemComponent } from './lotacao-listagem.component';

describe('LotacaoListagemComponent', () => {
  let component: LotacaoListagemComponent;
  let fixture: ComponentFixture<LotacaoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotacaoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotacaoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
