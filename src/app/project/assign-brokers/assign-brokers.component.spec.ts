import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBrokersComponent } from './assign-brokers.component';

describe('AssignBrokersComponent', () => {
  let component: AssignBrokersComponent;
  let fixture: ComponentFixture<AssignBrokersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
