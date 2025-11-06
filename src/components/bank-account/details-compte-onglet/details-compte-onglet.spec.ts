import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCompteOnglet } from './details-compte-onglet';

describe('DetailsCompteOnglet', () => {
  let component: DetailsCompteOnglet;
  let fixture: ComponentFixture<DetailsCompteOnglet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCompteOnglet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCompteOnglet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
