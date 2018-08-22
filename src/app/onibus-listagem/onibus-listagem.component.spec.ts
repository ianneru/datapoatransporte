import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnibusListagemComponent } from './onibus-listagem.component';

describe('OnibusListagemComponent', () => {
  let component: OnibusListagemComponent;
  let fixture: ComponentFixture<OnibusListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnibusListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnibusListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
