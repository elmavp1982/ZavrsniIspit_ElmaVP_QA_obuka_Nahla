Završni ispit iz QA obuke u Nahli (JavaScript + Selenium)
  
Zadatak:
Korištenjem JavaScripta, Seleniuma, Mocha frameworka i Page Object Modela, napraviti test projekat sa testnim fileovima i testovima unutar testnih fileova.  

Automatizirajti sljedeće testove:  

Test  1 - Prijava bez unosa kredencijala  

     1.   Otvori web stranicu https://www.saucedemo.com/ u maksimiziranom prozoru  
     2.   Klikni “Loginˮ dugme bez unosa vrijednosti u “Usernameˮ i “Passwordˮ polje 
     3.   Verifikuj da je ikonica X prikazana u “Usernameˮ polju  
     4.   Verifikuj da je ikonica X prikazana u “Passwordˮ polju  
     5.   Verifikuj da je sljedeća error poruka prikazana ispod “Passwordˮ polja: “Epic sadface: Username is requiredˮ  
     6.   Zatvori error poruku klikom na ikonicu X u gornjem desnom uglu poruke  
     7.   Verifikuj da je error poruka nestala  


Test 2 - Prijava korištenjem pogrešne šifre  

     1.   Otvori web stranicu https://www.saucedemo.com/ u maksimiziranom prozoru  
     2.   Unesi ispod navedene vrijednosti u “Usernameˮ i “Passwordˮ polje:  
             ○    Username: standard_user  
             ○    Password: pogresnaSifra  
     3.   Klikni “Loginˮ dugme  
     4.   Verifikuj da je ikonica X prikazana u “Usernameˮ polju  
     5.   Verifikuj da je ikonica X prikazana u “Passwordˮ polju  
     6.   Verifikuj da je sljedeća error poruka prikazana ispod “Passwordˮ polja:  “Epic sadface: Username and password do not match any user in this serviceˮ  
     7.   Zatvori error poruku klikom na ikonicu X u gornjem desnom uglu poruke  
     8.   Verifikuj da je error poruka nestala  
         

Test 3 - Kupovina proizvoda  

    1.   Otvori web stranicu https://www.saucedemo.com/ u maksimiziranom prozoru   
    2.   Unesi ispod navedene vrijednosti u “Usernameˮ i “Passwordˮ polje: 
             ○   Username: standard_user   
             ○   Password: secret_sauce  
    3.   Klikni  "Login" dugme   
    4.   Verifikuj da se nalaziš na  "Products" web stranici 
    5.   Klikni  "Add to cart" dugme za dva različita proizvoda  (po ličnom izboru)   
    6.   Verifikuj da se pojavio bedž sa brojem dodatih proizvoda  '2' na  Korpa ikonici u  gornjem desnom uglu 
    7.   Klikni ikonicu Korpa u gornjem desnom uglu   
    8.   Verifikuj da se nalaziš na  "Your Cart" web stranici   
    9.   Korištenjem imena prethodno dodanih proizvoda, verifikuj da se isti nalaze u košarici   
    10.  Klikni  "Checkout" dugme   
    11.  Verifikuj da se nalaziš na  "Checkout: Your Information" web stranici   
    12.  Unesi ispod navedene vrijednosti u “First Nameˮ, “Last Nameˮ i “Zip/Postal Codeˮ polje:  
             ○   First Name: <vaše ime>  
             ○   Last Name: <vaše prezime>  
             ○   Zip/Postal Code: 71000  
    13.  Klikni  "Continue" dugme   
    14. Verifikuj da se nalaziš na  "Checkout: Overview" web stranici   
    15.  Korištenjem imena prethodno dodanih proizvoda, verifikuj da se isti nalaze na "Checkout: Overview" web stranici   
    16.  Klikni  "Finish" dugme na  "Checkout: Overview" web stranici  
    17.  Verifikuj da se nalaziš na  "Checkout: Complete!" web stranici   
    18.  Klikni na ikonicu Menu u gornjem lijevom uglu   
    19.  Kada se izbornik učita, klikni  "Logout" link u izborniku   
    20. Verifikuj da se nalaziš na  "Login" stranici  

   

