import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturetteDividerComponent } from './featurette-divider.component';

describe('FeaturetteDividerComponent', () => {
  let component: FeaturetteDividerComponent;
  let fixture: ComponentFixture<FeaturetteDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturetteDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturetteDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
