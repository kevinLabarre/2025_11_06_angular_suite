import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCompteOnglet } from './ajouter-compte-onglet';

describe('AjouterCompteOnglet', () => {
  let component: AjouterCompteOnglet;
  let fixture: ComponentFixture<AjouterCompteOnglet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterCompteOnglet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCompteOnglet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
