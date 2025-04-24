import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDiskusijaComponent } from './panel-diskusija.component';

describe('PanelDiskusijaComponent', () => {
  let component: PanelDiskusijaComponent;
  let fixture: ComponentFixture<PanelDiskusijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDiskusijaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDiskusijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
