import { FixedFareConfig } from './type'; // Assuming you have this type defined


const FIXED_FARE_ROUTES: Record<string, Record<string, number>> = {
    "Los Angeles International Airport": {
        "Hollywood": 50,
        "Burbank": 40,
        "San Diego": 150,
        "Ojai": 280,
        "Ventura": 220
    },
    "Hollywood": {
        "Burbank": 30,
        "San Diego": 140
    },
    "Burbank": {
        "Los Angeles International Airport": 40,
        "Hollywood": 30,
        "San Diego": 130
    },
    "San Diego": {
        "Los Angeles International Airport": 150,
        "Hollywood": 140,
        "Burbank": 130
    }
};

export default FIXED_FARE_ROUTES;