export interface TopCitiesProps {
  name: string;
  image: string;
  country: string;
  flag: string;
}

export interface ContinentProps {
  continent: {
    id: number;
    name: string;
    title: string;
    description: string;
    about: string;
    banner: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    numberOfCities: number;
    topCities: Array<TopCitiesProps>;
  };
}

export interface ContinentsProps {
  continents: Array<ContinentProps>;
}
