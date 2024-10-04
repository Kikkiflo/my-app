# Receptappen - Baby Food Recipes

### Beskrivning
Receptappen är en React Native-applikation utvecklad för att ge föräldrar enkla och hälsosamma receptidéer för bebisar i olika åldersgrupper. Appen ger förslag på recept beroende på barnets åldersgrupp och låter användare markera sina favoritrecept. Projektet är byggt med React Native och Expo, och innehåller funktioner som animeringar, ljuduppspelning och en enkel navigeringsstruktur med React Navigation.

## Bygg och Kör Projektet

### Förutsättningar
Se till att du har följande verktyg installerade:

- Node.js
- Expo CLI
- Git

### Instruktioner för att köra appen lokalt
Klona detta repository:
- `git clone https://github.com/Kikkiflo/my-app.git`

Navigera till projektmappen:
- `cd my-app`

Installera paket:
- `npm install`

Starta appen:
- `npm start`

Använd en simulator för att köra appen. T.ex. Expo Go-appen på din mobil och skanna QR-koden som visas i terminalen eller tryck 'a' för att öppna i Android Studio på datorn om du har den installerad.

## Projektkrav och Uppfyllda Funktioner

### Krav
- [x] Projektet innehåller minst 4 React Native-komponenter.
- [x] Projektet innehåller minst 4 Expo-komponenter.
- [x] React Navigation används för att skapa en smidig navigering mellan skärmarna.
- [x] Appen använder Git och GitHub för versionshantering.

### Använda Komponenter
React Native-komponenter:
- ScrollView: För att kunna rulla igenom recepten i varje åldersgrupp.
- TouchableOpacity: För interaktiva knapptryckningar.
- View: För att strukturera layouten av komponenter.
- Image: För att visa receptbilder.
- ImageBackground: För att visa en bakgrundsbild.

Expo-komponenter:
- Expo Audio: För att spela upp ljud när ett recept gillas eller ogillas.
- LottieView: För att visa animerade hjärtan när användaren trycker på gilla-knappen.
- Expo Haptics: För att få mobilen att vibrera när man trycker på knapparna för varje åldersgrupp.
- StatusBar: Automatiskt justerar statusfältets stil baserat på bakgrundsfärgen på appens skärm.