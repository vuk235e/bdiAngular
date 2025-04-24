import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatoriComponent } from './organizatori.component';

describe('OrganizatoriComponent', () => {
  let component: OrganizatoriComponent;
  let fixture: ComponentFixture<OrganizatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizatoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
