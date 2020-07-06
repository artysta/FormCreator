# FormCreator
Aplikacja wykonana na potrzeby przedmiotu **Programowanie aplikacji webowych w Wyższej Szkole Ekonomii i Informatyki w Krakowie**. Aplikacja pozwala na tworzenie własnych formularzy i wypełnianie ich.

By możliwe było uruchomienie aplikacji, konieczne jest zainstalowanie środowiska `node.js`, które pobrać można ze strony https://nodejs.org/en/. Po zakończeniu instalacji instalujemy `npx`:

`npm i -g npx` (w przypadku systemów Linux i Max OS konieczne może okazać się użycie polecenia `sudo npm i -g npx`)

Następnie instalujemy wszystkie wymagane pakiety:

`npm install`

Serwer uruchamiamy za pomocą:

`npx webpack-dev-server --content-base src`

Aplikacja będzie działała pod adresem: http://localhost:8080/.
