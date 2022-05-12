# JavaScript project 2020-2021: Minesweeper

In dit practicum implementeren we het spel [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game)) in Javascript.
De opgave zal ingediend worden via Git. We maken hiervoor gebruik van GitHub classroom.
Tijdens de verdediging kijken we naar de recentst gepushte commit versie vóór het verstrijken van de deadline.

## Afspraken

Overloop eerst de afspraken vooraleer je begint aan de opgave.


### Gedragscode

De practica worden gequoteerd, en het examenreglement is dan ook van toepassing.
Soms is er echter wat onduidelijkheid over wat toegestaan is en niet inzake samenwerking bij opdrachten zoals deze.

De oplossing en/of programmacode die ingediend wordt moet volledig het resultaat zijn van werk dat je zelf gepresteerd hebt.
Je mag je werk uiteraard bespreken met andere studenten, in de zin dat je praat over algemene oplossingsmethoden of algoritmen, maar de bespreking mag niet gaan over specifieke code of verslagtekst die je aan het schrijven bent, noch over specifieke resultaten die je wenst in te dienen.
Als je het met anderen over je practicum hebt, mag dit er dus *nooit* toe leiden, dat je op om het even welk moment in het bezit bent van een geheel of gedeeltelijke kopie van het opgeloste practicum of verslag van anderen, onafhankelijk van of die code of verslag nu op papier staat of in elektronische vorm beschikbaar is, en onafhankelijk van wie de code of het verslag geschreven heeft (mede-studenten, eventueel uit andere studiejaren, volledige buitenstaanders, internet-bronnen, e.d.).
Dit houdt tevens ook in dat er geen enkele geldige reden is om je code of verslag door te geven aan mede-studenten, noch om dit beschikbaar te stellen via publiek bereikbare directories of websites. De git-repository die we jullie ter beschikking stellen is standaard op privaat ingesteld.

Elke student is verantwoordelijk voor de code en het werk dat hij of zij indient.
Als tijdens de beoordeling van het practicum er twijfels zijn over het feit of het practicum zelf gemaakt is (bvb. gelijkaardige code, of oplossingen met andere practica), zal de student gevraagd worden hiervoor een verklaring te geven.
Indien dit de twijfels niet wegwerkt, zal er worden overgegaan tot het melden van een onregelmatigheid, zoals voorzien in het onderwijs- en examenreglement (zie http://www.kuleuven.be/onderwijs/oer/).

**Alle inzendingen worden automatisch met elkaar vergeleken met behulp van plagiaatsoftware voor code.
Deze software geeft een score van gelijkaardigheid aan projecten.
De projecten die het meest op elkaar lijken worden nadien manueel nagekeken.**


### Toelichting

Het is toegestaan om gebruik te maken van informatie en code (bijvoorbeeld hulpfuncties) op het internet om je practicum op te lossen, **indien je de bron vermeldt**.
Het is niet de bedoeling om een volledig opgelost spel te downloaden en dit in te dienen, zelfs met bronvermelding.

Indien je twijfelt over wat al dan niet toegestaan is, stel dan een vraag op het discussieforum!

Alle inzendingen worden automatisch met elkaar vergeleken met behulp van plagiaatsoftware voor code. Deze software geeft een score van gelijkaardigheid aan projecten. De projecten die het meest op elkaar lijken worden nadien manueel nagekeken.


### Forum

Alle vragen over het practicum, *inclusief vragen aan medestudenten*, moeten gesteld worden via het **discussieforum** op [Toledo](https://toledo.kuleuven.be).

Alle antwoorden van assistenten op het discussieforum worden beschouwd als **deel van de opgave** en kunnen bijgevolg aanvullingen of correcties bevatten.
Zorg ervoor dat je deze posts leest!

Tip: open het forum en klik bovenaan op *subscribe* om een e-mail te krijgen wanneer nieuwe threads worden toegevoegd aan het forum.


### Indienen

De *deadline* voor dit practicum is **zondag 15 november 2020** om **23u59**.
Het practicum wordt ingediend met behulp van _Git_, door simpelweg je oplossing te pushen naar deze online repository.

Alle wijzigingen aan jullie repository na deze datum zullen niet aanvaard worden.

``` shell
$ git add index.html
$ git add code.js
... <alle bestanden toevoegen met git add> ...
$ git commit -m "Oplossing practicum"
$ git push origin master
```

**Kijk goed na of je alle bestanden correct hebt ingediend. Een foute inzending wordt gelijkgesteld aan laattijdige inzending!**
Controleer je inzending door je eigen repository opnieuw te clonen in een tijdelijke folder.

```shell
$ cd /tmp
$ git clone https://www.github.com/url-naar-eigen-repo/project-javascript-minesweeper.git
$ cd project-javascript-minesweeper
$ firefox index.html
```

Indien alles correct is gepusht zouden bovenstaande commando's je oplossing moeten downloaden van GitHub
en vervolgens openen in Firefox.

Je kan de inhoud van de repository ook nakijken op de website van GitHub zelf.

> :bulb: Het is een goed idee om gedurende het maken van je project regelmatig je bestanden te committen (en optioneel te pushen). Maak een commit wanneer je een deel van de opgave werkend hebt gekregen, voor je start aan een volgend deel. Zo heb je altijd een werkende versie van je code om naar terug te springen indien nodig. Door te pushen zorg je ervoor dat je code ook meteen gebackupet is op de server van GitHub.



### Verdediging

De verdediging van het practicum zal volledig online plaatsvinden.
Gedurende de verdediging overloop je je code samen met een assistent.
De beoordeling zal gebeuren op basis van de vooraf ingediende code en de verdediging hiervan.
Er wordt in de huidige omstandigheden *niet* gevraagd om ter plekke nog een uitbreiding te schrijven.

De praktische informatie omtrent de online verdediging en de planning volgen later via Toledo.

De verdediging is een examenmoment, behandel dit ook zo.
**Zorg ervoor dat je op tijd online bent op je toegekende moment.**
Indien je om eender welke reden niet op tijd op de verdediging kan geraken, neem dan zo snel mogelijk contact op met het assistententeam zodat er gezocht kan worden naar een oplossing.


> :exclamation: *Niet komen opdagen op je verdediging, zonder enige verwittiging, zal resulteren in een 0 op dit practicum*.
Indien je door ziekte je verdediging niet kan halen, bezorg je je ombudspersoon een doktersattest.
Via de ombudspersoon kan dan een inhaalverdediging vastgelegd worden.


## Evaluatiecriteria

In deze sectie beschrijven we kort enkele criteria die we gebruiken om een score toe te kennen aan het practicum.

### Functionaliteit

In de eerste plaats wordt er gekeken naar een correcte, foutloze werking van je programma.
Zorg ervoor dat alle functionaliteit die in de opgave gevraagd wordt aanwezig is ook in je programma.

> :exclamation: Je zal enkel kunnen slagen voor dit practicum als je een werkend spel oplevert!

### Leesbaarheid code

Zorg ervoor dat je code leesbaar is!

Enkele tips:

* Gebruik duidelijke, verklarende namen voor alle variabelen en functies
* Maak veel gebruik van functies om je code op te delen. Deel lange functies op in kleinere subfuncties die je probleem stap voor stap oplossen. Als je je code voldoende opsplitst in functies met heldere namen zal de code snel leesbaar worden.
* *Indenteer* je code! Vele editors hebben auto-formatting functionaliteit. Maak daar gebruik van! Er is niets vervelender dan code te lezen met foute of geen indentatie.
* Maak gebruik van commentaar, maar *enkel* voor de stukken code die slecht leesbaar zijn. Voeg deze commentaar dus pas toe nadat je alle bovenstaande stappen hebt uitgevoerd en nog steeds merkt dat het stuk code lastig te lezen is. In de eerste plaats is het beter om functies toe te voegen of betere variabele-namen te kiezen om zo je code leesbaarder te maken.
* Wees consequent met alle stijlkeuzes die je maakt. Indien je bijvoorbeeld beslist om een accolade telkens op een nieuwe regel te laten beginnen, doe dit dan voor het volledige document.

### Correcte inzending

Zorg ervoor dat je code correct en tijdig is ingediend via GitHub classroom.

### Niet gequoteerd

We geven geen punten op

* Mooiheid van de user interface. Het kan leuk zijn om je spel mooier te maken, maar hier kan je geen punten mee winnen.
* Extra (ongevraagde) functionaliteit. Je mag eigen functies toevoegen, maar hier kan je geen punten mee winnen.

### Verdediging

Op de verdediging is het uiterst belangrijk dat je goed kan uitleggen wat je code doet, en waarom je bepaalde keuzes hebt gemaakt.
Vergeet zeker niet om als voorbereiding voor de verdediging je eigen code opnieuw te bekijken, zeker de ingewikkelde delen.
Met code waarvan je niet kan uitleggen hoe deze werkt kan je uiteraard weinig punten verdienen.


# Opgave

De opdracht van in practicum bestaat eruit het spel [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game)) te implementeren met behulp van HTML, CSS en Javascript.
In deze sectie beschrijven we eerst de algemene regels en werking van het spel.
Vervolgens beschrijven we de specifieke functionaliteit die we verwachten in jullie oplossing.


## Minesweeper

### Online spelen

Om de regels van Minesweeper te leren kennen kan je het spel online spelen op http://minesweeperonline.com/.

We beschrijven de regels ook in deze sectie.

### Spelregels

Minesweeper is een puzzelspel dat gespeeld wordt op een rechthoeking bord van `M` x `N` vakjes. Willekeurig verspreid op het spelbord worden mijnen geplaatst. De speler weet niet op welke lokatie deze mijnen liggen.

Vervolgens is het de bedoeling dat de speler de locatie zoekt van alle mijnen op het spelbord. Hij kan dit doen door vakjes aan te klikken. Op dat moment kunnen er drie zaken gebeuren:
1. Op het vakje stond een mijn. De speler verliest het spel. Het volledige spelbord wordt zichtbaar gemaakt.
2. Op het vakje stond geen mijn, maar in een buurvakje (ook diagonaal gekeken) staan 1 of meerdere mijnen. Het vakje toont nu een nummer. Deze nummer geeft aan hoeveel mijnen er staan in buurvakjes.
3. Op het vakje stond geen mijn, in de buurvakjes stonden ook geen mijnen. Alle buurvakjes worden nu "aangeklikt". Dit volledige stappenplan wordt dus herhaald voor elk buurvakje apart.

Stap 3 kan er dus voor zorgen dat een groot deel van het spelbord zichtbaar wordt. De speler wint wanneer hij alle vakjes heeft aangeklikt waar geen mijn onder te vinden is.

Als hulpmiddel voor de speler kan deze vlaggen plaatsen op vakjes waarvan hij zeker weet dat er een mijn ligt. Deze vlaggen hebben verder geen enkele functie.

## Functionaliteit

In deze sectie beschrijven we de functionaliteit die we verwachten voor dit practicum.

### Interface

* Voorzie een spelbord waarvan de grootte en de breedte door de speler instelbaar is. Vertrek standaard vanuit een bord met breedte 10 en hoogte 10.
* Zorg ervoor dat de verschillende toestanden waarin een vakje zich kan bevinden (bedekt met vlag, bedekt zonder vlag, nummer, leeg, mijn) allen visueel te onderscheiden zijn.
* Toon een timer die aangeeft hoe lang de speler al aan de het huidige spelbord heeft gespendeerd
* Toon een teller die aangeeft hoeveel keren de speler heeft geklikt op een vakje
* Voorzie een knop op een nieuw spel te starten
* Voorzie een mogelijkheid in de interface om de grootte van het spelbord aan te passen

### Bordopstelling

#### Start spel

Bij het starten van een nieuw spel moeten de mijnen willekeurig verspreid worden doorheen het spelbord.
Alle vakjes moeten bedekt zijn.
De speler moet als eerste zet dus een volledige gok wagen.

Voorzie voor een 10 x 10 spelbord 10 mijnen. Voor andere groottes van spelborden mag je een eigen keuze maken.

#### Einde spel

De speler wint wanneer enkel vakjes met een mijn nog bedekt zijn.
Zorg ervoor dat, wanneer het spel gewonnen is, de timer stopt en de speler niet meer kan klikken op de bedekte vakjes van het spelbord (tot hij een nieuw spel heeft gestart).

#### Verloop spel

Ten slotte zorg je ervoor dat het spel gespeeld kan worden volgens de regels van Minesweeper. Bij twijfel kan er altijd verduidelijking gevraagd worden op het forum.

## Oplossingsstrategie

Om dit practicum op te lossen kan je het werk opsplitsen in verschillende stappen:

1. Maak eerst met behulp van HTML en CSS de volledige interface voor een willekeurig spelbord, ofwel je externe representatie.
Zorg ervoor dat je hierin alle grafische elementen al verwerkt. Je kan dus al enkele mijnen in onbedekte toestand tonen, enkele vlaggen plaatsen, ... .

2. Bedenk vervolgens een interne representatie in JavaScript die de volledige state van het spel kan beschrijven. Denk bijvoorbeeld aan de oefenzitting, waarin we een tweedimensionale array gebruikten om een Sliding Puzzle voor te stellen.

3. Schrijf nu een functie die deze interne Javascript-representatie kan omzetten naar jouw HTML-representatie. Kijk bijvoorbeeld naar de functies *draw_puzzle* en *generate_puzzle_html* uit de oefenzitting.

4. Vervolgens kan je functies schrijven die gebruik maken van de interne voorstelling van je spel om het spel te spelen. Bij iedere aanpassing van de interne representatie kan je deze opnieuw omzetten naar HTML met behulp van je omzetfunctie. Je kan je geschreven functies telkens testen door deze uit te voeren vanuit de JavaScript console.

5. Maak gebruik van de onclick-attributen van HTML om ervoor te zorgen dat wanneer men op het spelbord klikt, de correcte JavaScript functies (geschreven in de vorige stap) uitgevoerd worden.


## Opgave downloaden

Via GitHub Classroom hebben jullie een eigen private kopie gekregen van deze repository.

Deze repository kan je clonen met het commando:

``` bash
$ git clone https://www.github.com/informatica-werktuigen/herexamen-javascript-minesweeper-[github_accountnaam]
```

De repository bevat reeds een basis-HTML bestand gekoppeld aan een leeg Javascript-bestand en een leeg CSS-bestand.
Vanuit deze bestanden kan je starten.
Het is echter ook toegestaan je eigen bestanden toe te voegen of de meegeleverde bestanden te verwijderen.
