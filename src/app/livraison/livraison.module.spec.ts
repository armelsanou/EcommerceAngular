import { LivraisonModule } from './livraison.module';

describe('LivraisonModule', () => {
  let livraisonModule: LivraisonModule;

  beforeEach(() => {
    livraisonModule = new LivraisonModule();
  });

  it('should create an instance', () => {
    expect(livraisonModule).toBeTruthy();
  });
});
