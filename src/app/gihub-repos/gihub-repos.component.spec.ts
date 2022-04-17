import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GihubReposComponent } from './gihub-repos.component';

describe('GihubReposComponent', () => {
  let component: GihubReposComponent;
  let fixture: ComponentFixture<GihubReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GihubReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GihubReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
