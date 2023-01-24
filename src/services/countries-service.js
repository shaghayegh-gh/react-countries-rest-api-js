import { api } from "../setup/api";
import { getRequest } from "../setup/axios-config";

export const getCountries = () =>
  getRequest(api.countries).then((response) => {
    return response.data;
  });

export const getCountriesByRegion = (region) =>
  getRequest(api.region(region)).then((response) => {
    return response.data;
  });

export const getCountryByName = (name) =>
  getRequest(api.county(name)).then((response) => {
    return response.data;
  });
