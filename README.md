# Zadanie rekrutacyjne Mediporta

Projekt składa się głównie z komponentu DataGrid z MUI, który przyjmuje dane z API StackOverflow. 
Komponent ten jest idealnym wyborem, bo zawiera wbudowane funkcjonalności zaznaczone w treści zadania.
Dodany został skeleton podczas fazy ładowania danych. 
Przy błędzie HTTP requesta wyświetlony jest alert. Do fetchowania danych użyłem axiosa, jest to mój ulubiony wybór.

W Storybooku przedstawiony jest jeden komponent w trzech wariantach - mała tabela, duża tabela i błąd danych.

Odpalenie projektu :

- `cd my-app`
- `npm ci`
- `npm run start` `npm run storybook`
