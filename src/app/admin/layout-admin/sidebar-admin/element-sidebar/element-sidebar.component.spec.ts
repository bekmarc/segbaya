import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSidebarComponent } from './element-sidebar.component';

describe('ElementSidebarComponent', () => {
  let component: ElementSidebarComponent;
  let fixture: ComponentFixture<ElementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
