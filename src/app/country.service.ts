export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { common: string; official: string } }; // Pour les noms natifs
  };
  tld: string[]; // Liste des domaines de premier niveau
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [code: string]: { name: string; symbol?: string } }; // Liste des devises
  // Ajoutez d'autres propriétés si nécessaire en fonction de l'API
}
