import { ReductionModule } from './reduction.module';

describe('ReductionModule', () => {
  let reductionModule: ReductionModule;

  beforeEach(() => {
    reductionModule = new ReductionModule();
  });

  it('should create an instance', () => {
    expect(reductionModule).toBeTruthy();
  });
});
