const RouteMap = ({ props }) => {
  const {
    name,
    length,
    difficulty,
    startingLocation,
    img,
  } = props;

  return (
    <div>
      <h2 className="text-3xl font-bold m-8 mt-12">{name}</h2>
      <p className="max-w-md sm:text-xl mx-auto">
        <strong>Length:</strong> ~ {length} miles ( km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
        Start at {startingLocation}
      </p>
      <img
        src={img}
        alt={name + "route map"}
        className="w-4/5 mx-auto"
      />
    </div>
  );
};

export default RouteMap;
