import { useState } from "react";
import Select from "react-select";
import {
  getCountriesByRegion,
  getCountryByName,
} from "../services/countries-service";
import ls from "local-storage";

const Filters = ({ setCountries, setLoading }) => {
  let mod = ls.get("darkMod");

  const [regionFilter, setRegionFilter] = useState(null);
  const [search, setSearch] = useState("");
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 200,
      background: mod ? "#4b5563" : "#ffff",
      color: mod ? "#ffff" : "#333",
      border: "none",
    }),
    menu: (provided) => ({
      ...provided,
      background: mod ? "#4b5563" : "#ffff",
      color: mod ? "#ffff" : "#333",
    }),
  };

  const handleFilterChange = (selectedOption) => {
    setRegionFilter(selectedOption);
    setLoading(true);
    getCountriesByRegion(selectedOption.label).then((data) => {
      setLoading(false);
      setCountries(data);
    });
  };

  const handleSearch = (value) => {
    setSearch(value);
    setLoading(true);
    getCountryByName(value).then((data) => {
      if (data) {
        setCountries(data);
        setLoading(true);
      }
      setLoading(false);
    });
  };

  return (
    <div className="flex justify-between  mb-5">
      <input
        className="p-2 dark:bg-gray-600 rounded focus:outline-none focus:ring focus:border-blue-300 "
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="search for a country"
      />

        <Select
          value={regionFilter}
          onChange={(e) => handleFilterChange(e)}
          options={options}
          styles={customStyles}
        />
   
    </div>
  );
};

export default Filters;
