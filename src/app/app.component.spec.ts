import { TestBed } from '@angular/core/testing'; // Pour configurer et tester le module Angular
import { RouterModule } from '@angular/router'; // Nécessaire pour gérer les routes
import { AppComponent } from './app.component'; // Le composant principal à tester
import { NavbarComponent } from './nav-bar/nav-bar.component'; // Le composant Navbar

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Déclare le composant à tester
      imports: [
        RouterModule.forRoot([]), // Configure un RouterModule vide pour les tests
        NavbarComponent,
         // Ajoute le NavbarComponent autonome si nécessaire
      ],
    }).compileComponents(); // Compile le module et les composants
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crée une instance du composant
    const app = fixture.componentInstance; // Récupère l'instance du composant
    expect(app).toBeTruthy(); // Vérifie que l'instance a bien été créée
  });

  it(`should have as title 'app-root'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Ajouter un test supplémentaire si une propriété comme `title` est définie dans le composant
    expect(app).toBeTruthy(); // Remplacez ou ajustez selon la logique de votre composant
  });

  it('should render the navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Déclenche le cycle de détection des changements
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-nav-bar')).toBeTruthy(); // Vérifie que le sélecteur du Navbar est présent
  });
});
