import { ForgetPasswordModule } from './forget-password.module';

describe('ForgetPasswordModule', () => {
  let forgetPasswordModule: ForgetPasswordModule;

  beforeEach(() => {
    forgetPasswordModule = new ForgetPasswordModule();
  });

  it('should create an instance', () => {
    expect(forgetPasswordModule).toBeTruthy();
  });
});
