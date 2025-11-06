import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCompteOnglet } from './modifier-compte-onglet';

describe('ModifierCompteOnglet', () => {
  let component: ModifierCompteOnglet;
  let fixture: ComponentFixture<ModifierCompteOnglet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierCompteOnglet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCompteOnglet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
