import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormulaireComponent } from './contact-us-formulaire-component';

describe('ContactUsFormulaireComponent', () => {
  let component: ContactUsFormulaireComponent;
  let fixture: ComponentFixture<ContactUsFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsFormulaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsFormulaireComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
