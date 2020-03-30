import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateBrokerComponent } from './associate-broker.component';

describe('AssociateBrokerComponent', () => {
  let component: AssociateBrokerComponent;
  let fixture: ComponentFixture<AssociateBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
