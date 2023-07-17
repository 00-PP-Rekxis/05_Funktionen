"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hey.");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() {
    // what happens in VEGAS ...
    let firstName = "Peter";
    console.log(`Hallo ${firstName}!`);
}

// console.log(firstName); // Fehler --> SCOPE!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Arugmente sind Daten für PArameter
// ausgabeNamenZwei("Peter"); // call + Argument(e)
// ausgabeNamenZwei("Sohrab");
// ausgabeNamenZwei("Yalcin");

// Funktion mit Parameter(n)
function ausgabeNamenZwei(firstName) {
    console.log(`Hallo ${firstName}!`);
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

ausgabeNamenParams("Max", "Muetze")
ausgabeNamenParams(prompt("Vorname?"), prompt("Name?"))

function ausgabeNamenParams(firstName, familyName) {
    console.log(`Hallo ${firstName} ${familyName}!`);
}
