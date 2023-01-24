import { useState, useEffect, useCallback } from "react";
import { getCountries } from "../../services/countries-service";
import Filters from "../../components/filters";
import Countries from "../../components/countries";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllCountries = useCallback(
    () =>
      getCountries().then((data) => {
        setLoading(false);
        setCountries(data);
      }),
    []
  );

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <div className="md:container md:mx-auto px-4">
      <Filters
        getAllCountries={getAllCountries}
        setCountries={setCountries}
        setLoading={setLoading}
        setError={setError}
      />
      <Countries countries={countries} loading={loading} error={error} />
    </div>
  );
};

export default Home;
