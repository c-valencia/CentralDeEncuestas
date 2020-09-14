import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrespondenciaPage } from './correspondencia.page';

describe('CorrespondenciaPage', () => {
  let component: CorrespondenciaPage;
  let fixture: ComponentFixture<CorrespondenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrespondenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrespondenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
