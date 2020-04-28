import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAccessoryComponent } from './browse-accessory.component';

describe('BrowseAccessoryComponent', () => {
  let component: BrowseAccessoryComponent;
  let fixture: ComponentFixture<BrowseAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
