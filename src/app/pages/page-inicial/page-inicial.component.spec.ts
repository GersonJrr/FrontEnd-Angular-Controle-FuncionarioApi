import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInicialComponent } from './page-inicial.component';

describe('PageInicialComponent', () => {
  let component: PageInicialComponent;
  let fixture: ComponentFixture<PageInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInicialComponent]
    });
    fixture = TestBed.createComponent(PageInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
