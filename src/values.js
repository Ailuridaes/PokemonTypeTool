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
    FLYING: {
        weaknesses: ['ELECTRIC', 'ICE', 'ROCK'],
        resistances: ['GRASS', 'FIGHTING', 'BUG'],
        immunities: ['GROUND']
    },
    PSYCHIC: {
        weaknesses: ['BUG', 'GHOST', 'DARK'],
        resistances: ['FIGHTING', 'PSYCHIC'],
        immunities: []
    },
    BUG: {
        weaknesses: ['FIRE', 'FLYING', 'ROCK'],
        resistances: ['GRASS', 'FIGHTING', 'GROUND'],
        immunities: []
    },
    ROCK: {
        weaknesses: ['WATER', 'GRASS', 'FIGHTING', 'GROUND', 'STEEL'],
        resistances: ['NORMAL', 'FIRE', 'POISON', 'FLYING'],
        immunities: []
    },
    GHOST: {
        weaknesses: ['GHOST', 'DARK'],
        resistances: ['POISON', 'BUG'],
        immunities: ['NORMAL', 'FIGHTING']
    },
    DRAGON: {
        weaknesses: ['ICE', 'DRAGON', 'FAIRY'],
        resistances: ['FIRE', 'WATER', 'ELECTRIC', 'GRASS'],
        immunities: []
    },
    DARK: {
        weaknesses: ['FIGHTING', 'BUG', 'FAIRY'],
        resistances: ['GHOST', 'DARK'],
        immunities: ['PSYCHIC']
    },
    STEEL: {
        weaknesses: ['FIRE', 'FIGHTING', 'GROUND'],
        resistances: ['BUG', 'DRAGON', 'FAIRY', 'FLYING', 'GRASS', 'ICE', 'NORMAL', 'PSYCHIC', 'ROCK', 'STEEL'],
        immunities: ['POISON']
    },
    FAIRY: {
        weaknesses: ['POISON', 'STEEL'],
        resistances: ['FIGHTING', 'BUG', 'DARK'],
        immunities: ['DRAGON']
    }
}
export const RESOURCE_URL = 'https://s3-us-west-1.amazonaws.com/pokemon-type-tool/pokemonTypeList.json';
