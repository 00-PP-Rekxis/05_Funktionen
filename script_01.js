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

// ausgabeNamenParams("Max", "Muetze")
// ausgabeNamenParams(prompt("Vorname?"), prompt("Name?"))

function ausgabeNamenParams(firstName, familyName) {
    console.log(`Hallo ${firstName} ${familyName}!`);
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung - Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParamsZwei("Max", "Muetze")

function ausgabeNamenParamsZwei(firstName, familyName) {

    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";

    // 2. Funktionalität: string output
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// 03b Funktionalitäten --> Funktionen | return

// 1. Funktionalität: string composing

output(getString("Max", "Muetze"));
output(getString(prompt("Vorname?"), prompt("Name?")));

/**  INPUT --> Parameter  |  return --> OUTPUT   **/
function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr; // Daten werden an den Ort des calls geschickt!
    console.log("Hi"); // return bricht die Funktion ab!
}

// 2. Funktionalität: string output
// output("Hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}
