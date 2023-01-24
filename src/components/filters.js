import { useState } from "react";
import {
  getCountriesByRegion,
  getCountryByName,
} from "../services/countries-service";

const Filters = ({ setCountries, setLoading, getAllCountries, setError }) => {
  const [regionFilter, setRegionFilter] = useState("");
  const [search, setSearch] = useState("");
  
  const options = [
    { value: "", label: "Select continent" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const handleFilterChange = (selected) => {
    let value = selected.target.value;
    setSearch("");
    setRegionFilter(value);
    setLoading(true);
    if (value) {
      getCountriesByRegion(value)
        .then((data) => {
          setCountries(data);
          setError(false)
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
      return;
    }
    getAllCountries();
  };

  const handleSearch = (value) => {
    setRegionFilter("");
    setSearch(value);
    setLoading(true);
    if (value) {
      getCountryByName(value)
        .then((data) => {
          if (data) {
            setCountries(data);
            setError(false)
          }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
      return;
    }
    getAllCountries();
  };

  return (
    <div className="flex justify-between  mb-5">
      <input
        className="p-2 xl:w-96 dark:bg-gray-600 rounded focus:outline-none focus:ring focus:border-blue-300 "
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="search for a country"
      />

          <select
            className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                rounded
                transition
                ease-in-out
                xl:w-96
                m-0
                focus:focus:border-blue-600 focus:outline-none
                dark:bg-gray-600 
                border-gray-600"
            aria-label="Default select example"
            value={regionFilter}
            onChange={(e) => handleFilterChange(e)}
          >
            {options.map((op, i) => (
              <option key={i} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
            
    
    </div>
  );
};

export default Filters;
