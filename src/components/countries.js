import Card from "./card";

const Countries = ({ countries, loading }) => {
  return (
    <>
      {loading && (
        <p className="text-center font-bold m-20 text-4xl">Loading...</p>
      )}
      {!loading && (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8">
          {countries &&
            countries.map((country, i) => (
                 <Card key={i} country={country} /> 
            ))}
        </div>
      )}
    </>
  );
};

export default Countries;
