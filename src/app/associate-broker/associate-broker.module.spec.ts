import { AssociateBrokerModule } from './associate-broker.module';

describe('AssociateBrokerModule', () => {
  let associateBrokerModule: AssociateBrokerModule;

  beforeEach(() => {
    associateBrokerModule = new AssociateBrokerModule();
  });

  it('should create an instance', () => {
    expect(associateBrokerModule).toBeTruthy();
  });
});
