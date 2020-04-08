import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseWomenComponent } from './browse-women.component';

describe('BrowseWomenComponent', () => {
  let component: BrowseWomenComponent;
  let fixture: ComponentFixture<BrowseWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
