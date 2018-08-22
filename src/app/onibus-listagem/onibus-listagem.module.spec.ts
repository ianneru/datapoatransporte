import { OnibusListagemModule } from './onibus-listagem.module';

describe('OnibusListagemModule', () => {
  let onibusListagemModule: OnibusListagemModule;

  beforeEach(() => {
    onibusListagemModule = new OnibusListagemModule();
  });

  it('should create an instance', () => {
    expect(onibusListagemModule).toBeTruthy();
  });
});
