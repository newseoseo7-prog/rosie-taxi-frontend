declare module "react-use-keypress";

export type FixedFareConfig = {
    locations: string[];
    routes: {
        from: string;
        to: string;
        fare: number;
    }[];
};