import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMenComponent } from './browse-men.component';

describe('BrowseMenComponent', () => {
  let component: BrowseMenComponent;
  let fixture: ComponentFixture<BrowseMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
