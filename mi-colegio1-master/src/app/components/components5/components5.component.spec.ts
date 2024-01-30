import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components5Component } from './components5.component';

describe('Components5Component', () => {
  let component: Components5Component;
  let fixture: ComponentFixture<Components5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Components5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
