import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseChildrenComponent } from './browse-children.component';

describe('BrowseChildrenComponent', () => {
  let component: BrowseChildrenComponent;
  let fixture: ComponentFixture<BrowseChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
