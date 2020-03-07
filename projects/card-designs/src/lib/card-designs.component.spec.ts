import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesignsComponent } from './card-designs.component';

describe('CardDesignsComponent', () => {
  let component: CardDesignsComponent;
  let fixture: ComponentFixture<CardDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
