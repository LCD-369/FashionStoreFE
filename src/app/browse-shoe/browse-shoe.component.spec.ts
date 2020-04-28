import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseShoeComponent } from './browse-shoe.component';

describe('BrowseShoeComponent', () => {
  let component: BrowseShoeComponent;
  let fixture: ComponentFixture<BrowseShoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseShoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
