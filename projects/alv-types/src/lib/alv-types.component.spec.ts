import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvTypesComponent } from './alv-types.component';

describe('AlvTypesComponent', () => {
  let component: AlvTypesComponent;
  let fixture: ComponentFixture<AlvTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlvTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
