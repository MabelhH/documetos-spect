import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spect'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spect');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('spect');
  });

  it('should sumar two number',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    app.val1=4;
    app.val2=9;
    app.seleccionada='1'
    app.operacion();
    const expectTotal=13;
    expect(app.total).toEqual(expectTotal);
  });

   it('should restar two number',()=>{
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
    
    app.val1=9;
    app.val2=8;
     app.seleccionada='2'
     app.operacion();
     const expectTotal=1;
     expect(app.total).toEqual(expectTotal);
   });

   it('should multiplicar two number',()=>{
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
    
    app.val1=5;
    app.val2=3;
    app.seleccionada='3'
    app.operacion();
     const expectTotal=15;
    expect(app.total).toEqual(expectTotal);
   });

  it('should dividir two number',()=>{
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
    
     app.val1=8;
     app.val2=2;
     app.seleccionada='4'
     app.operacion();
     const expectTotal=4;
     expect(app.total).toEqual(expectTotal);
   });

});
