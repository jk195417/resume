import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create the app', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it('should render iframe pdf', () => {
    // Arrange
    const expectedSrc = 'aaron-yang-software-engineer-resume-en.pdf';

    // Act
    fixture.detectChanges();

    // Assert
    expect(element.querySelector('iframe')?.src).toContain(expectedSrc);
  });
});
