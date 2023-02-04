import { Link } from "react-router-dom";
import { patch } from "../router/routePath";
import Card from "./card";

const Countries = ({ countries, loading, error }) => {
  return (
    <>
      {loading && (
        <p className="text-center font-bold m-20 text-4xl">Loading...</p>
      )}
      {error && !loading &&(
        <p className="text-center font-bold m-20 text-4xl">Not found!</p>
      )}
      {!loading && !error && (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 pb-8">
          {countries &&
            countries.map((country, i) => (
              <Link key={i} to={patch.country(country.name)}>
                <Card country={country} />
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default Countries;
