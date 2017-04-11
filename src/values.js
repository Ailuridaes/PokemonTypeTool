export const TYPES = ['BUG', 'DARK', 'DRAGON', 'ELECTRIC', 'FAIRY', 'FIGHTING', 'FIRE', 'FLYING', 'GHOST', 'GRASS', 'GROUND', 'ICE', 'NORMAL', 'POISON', 'PSYCHIC', 'ROCK', 'STEEL', 'WATER'];
export const MATCHUPS = {    
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: ['GHOST']
    },
    FIRE: {
        weaknesses: ['WATER', 'GROUND', 'ROCK'],
        resistances: ['FIRE', 'GRASS', 'ICE', 'BUG', 'STEEL', 'FAIRY'],
        immunities: []
    },
    WATER: {
        weaknesses: ['ELECTRIC', 'GRASS'],
        resistances: ['FIRE', 'WATER', 'ICE', 'STEEL'],
        immunities: []
    },
    ELECTRIC: {
        weaknesses: ['GROUND'],
        resistances: ['ELECTRIC', 'FLYING', 'STEEL'],
        immunities: []
    },
    GRASS: {
        weaknesses: ['FIRE', 'ICE', 'POISON', 'FLYING', 'BUG'],
        resistances: ['WATER', 'ELECTRIC', 'GRASS', 'GROUND'],
        immunities: []
    },
    ICE: {
        weaknesses: ['FIRE', 'FIGHTING', 'ROCK', 'STEEL'],
        resistances: ['ICE'],
        immunities: []
    },
    FIGHTING: {
        weaknesses: ['FLYING', 'PSYCHIC', 'FAIRY'],
        resistances: ['BUG', 'ROCK', 'DARK'],
        immunities: []
    },
    POISON: {
        weaknesses: ['GROUND', 'PSYCHIC'],
        resistances: ['GRASS', 'FIGHTING', 'POISON', 'BUG', 'FAIRY'],
        immunities: []
    },
    GROUND: {
        weaknesses: ['WATER', 'GRASS', 'ICE'],
        resistances: ['POISON', 'ROCK'],
        immunities: ['ELECTRIC']
    },
    // TODO: Finish definining types!
    /*
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    },
    NORMAL: {
        weaknesses: ['FIGHTING'],
        resistances: [],
        immunities: []
    }
    */
}
