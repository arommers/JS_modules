'use strict';

let gameEvents = new Map ([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow Card'],
    [64, '🟥 Red Card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🟨 Yellow Card'],    
]);

// #1

let events = [...new Set(gameEvents.values())];
console.log(events);

// #2

for (let [key, value] of gameEvents)
{
    if (key === 64 && value === '🟨 Yellow Card')
        gameEvents.delete(key);
}
console.log(gameEvents);

// #3

let average = 90 / gameEvents.size;

console.log(`An event happened on average, every ${average} minutes`);

// #4

for (let [key, value] of gameEvents)
    key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`)
