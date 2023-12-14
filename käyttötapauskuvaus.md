#663

**Käyttötapauksen nimi:**
Etusivu

**Käyttäjät:**
Äänestäjä ja Ylläpitäjä.

**Laukaisija:**
Sivuston avaaminen käyttäjän toimesta.

**Esiehto:**
Käyttäjä avaa linkin sivustolle.

**Jälkiehto:**
Etusivu on ladannut, ja käyttäjä valinnut roolinsa.

**Käyttötapauksen kulku:**
1. Käyttäjä seuraa hyperlinkkiä joka johtaa sovelluksen etusivulle.
2. Käyttäjä valitsee kirjautuuko hän äänestäjänä vai ylläpitäjänä.
3. Järjestelmä ilmoittaa onnistuneesta kirjautumisesta ja ohjaa seuraavalle sivulle.

**Poikkeusellinen toiminta:**
1. Sivustoa ei löydy.
2. Käyttäjä antaa virheellisen kirjautumis tiedon.

---

**Käyttötapauksen nimi:**
Äänestys

**Käyttäjät:**
Äänestäjä.

**Laukaisija:**
Käyttäjän toimesta.

**Esiehto:**
Käyttäjä on tunnistautunut äänestäjäksi, eikä ole äänestänyt kyseisessä äänestyksessä.

**Jälkiehto:**
Äänestykseen lisätään yksi ääni.

**Käyttötapauksen kulku:**
1. Käyttäjä selaa äänestystarjontaa ja klikkaa äänestyksen johonka hän haluaa osallistua.
2. Näytetään äänestyksen nykyinen tilanne.
3. Käyttäjä äänestää.
4. Järjestelmä tarkistaa onko käyttäjä osallistunut kyseiseen äänestykseen.
5. Järjestelmä lisää äänestykseen käyttäjän valitseman vaihtoehdon.

**Poikkeusellinen toiminta:**
2a. Äänestys on suljettu.
4a. Käyttäjä on jo äänestänyt kyseisessä äänestyksessä, jonka takia hän ei voi äänestää toistamiseen.

---

**Käyttötapauksen nimi:**
Äänestyksen luominen.

**Käyttäjät:**
Ylläpitäjä.

**Laukaisija:**
Käyttäjän tarve luoda uusi äänestys.

**Esiehto:**
Käyttäjä on onnistuneesti kirjautunut ylläpitäjänä.

**Jälkiehto:**
Uusi äänestys on luotu, jota Äänestäjät voivat selata ja äänestää.

**Käyttötapauksen kulku:**
1. Käyttäjä valitsee luoda uuden äänestyksen.
2. Järjestelmä kysyy tietoja äänestyksen tarkoituksesta.
3. Käyttäjä täyttää kysytyt tiedot.
4. Järjestelmä käyttää annettuja tietoja uuden äänestyksen luomiseen.

**Poikkeusellinen toiminta:**
1a. Käyttäjä ei ole kirjautunut ylläpitäjänä.
4a. Vaadittuja tietoja ei ole määritetty.
---

**Käyttötapauksen nimi:**
Poista äänestys.

**Käyttäjät:**
Ylläpitäjä.

**Laukaisija:**
Tarpeettomaksi muodostuneen vaihtoehdon poistaminen.

**Esiehto:**
Käyttäjä on kirjautunut ylläpitäjän tunnuksilla.

**Jälkiehto:**
Valittu äänestys on poistettu.

**Käyttötapauksen kulku:**
1. Ylläpitäjä kirjautuu tilillensä
2. Käyttäjä käy läpi äänestyksiä, ja löytää tapauksen jonka hän haluaa poistaa.
3. Järjestelmä kysyy vahvistusta äänestyksen poistamiselle.
4. Järhjestelmä poistaa äänestyksen.
**Poikkeusellinen toiminta:**

---

Käyttötapauksen nimi:**

Käyttäjät:**

Laukaisija:**

Esiehto:**

Jälkiehto:**

Käyttötapauksen kulku:**

Poikkeusellinen toiminta:**

---