import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginFirstComponent } from './page-login-first.component';

describe('PageLoginFirstComponent', () => {
  let component: PageLoginFirstComponent;
  let fixture: ComponentFixture<PageLoginFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoginFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
