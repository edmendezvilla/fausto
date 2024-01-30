import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components6Component } from './components6.component';

describe('Components6Component', () => {
  let component: Components6Component;
  let fixture: ComponentFixture<Components6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Components6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
