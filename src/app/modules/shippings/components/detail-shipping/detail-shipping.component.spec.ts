import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShippingComponent } from './detail-shipping.component';

describe('DetailShippingComponent', () => {
  let component: DetailShippingComponent;
  let fixture: ComponentFixture<DetailShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
