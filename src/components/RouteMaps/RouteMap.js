const RouteMap = (props) => {
  const {
    name,
    length,
    avgSpeed,
    rating,
    elevation,
    startName,
    startUrl,
    img,
  } = props;

  const getRatingEmoji = (color) => {
    if (color === 'Green') {
      return '🟩';
    } else if (color === 'Blue') {
      return '🟦';
    } else if (color === 'Black') {
      return '⬛';
    }
  }

  const milesToKm = (miles) => {
    return Math.round(miles * 1.609344);
  }

  const feetToMeters = (feet) => {
    return Math.round(feet * 3.28084);
  }

  return (
    <div className="my-8">
      <h3 className="text-3xl font-bold m-8">{name}</h3>
      <img
        src={img}
        alt={name + "route map"}
        className="w-4/5 md:w-1/3 my-6 mx-auto"
      />
      <p className="max-w-md sm:text-xl md:text-left mx-auto">
        <strong>Length:</strong> ~{length} miles ({milesToKm(length)} km) <br />
        <strong>Difficulty:</strong><a href="../welcome#ratings" target="_blank"> {getRatingEmoji(rating)} {rating}</a><br />
        <strong>Average Speed:</strong> ~{avgSpeed} mph ({milesToKm(avgSpeed)} kmh) <br />
        <strong>Elevation Change:</strong> {elevation} ft ({feetToMeters(elevation)} m) <br />
        <strong>Start:</strong><a href={startUrl} target="_blank" rel="noopener noreferrer"> {startName}</a>
      </p>
    </div>
  );
};

export default RouteMap;
