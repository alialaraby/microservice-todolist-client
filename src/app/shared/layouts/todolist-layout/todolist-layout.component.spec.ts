import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistLayoutComponent } from './todolist-layout.component';

describe('TodolistLayoutComponent', () => {
  let component: TodolistLayoutComponent;
  let fixture: ComponentFixture<TodolistLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
