const Event = (props) => {
  const {
    weekday,
    month,
    date,
    time,
    title,
    color,
    location,
  } = props;

  const displayDateTime = `${weekday}, ${month} ${date} - roll out @${time}`;
  const displayLocation = location.replace(/, usa/i, "");

  const getLocationURL = (location) => {
    const formattedLocation = location
      .replaceAll(/\s/gi, "+")
      .replaceAll(/,/gi, "%2C");

    return `https://www.google.com/maps/search/?api=1&query=${formattedLocation}`;
  };

  const getSkateRating = (color) => {
    const rating = color.toUpperCase();
    if (rating.includes("GREEN")) {
      return '🟩';
    } else if (rating.includes("BLUE")) {
      return '🟦';
    } else if (rating.includes("BLACK")) {
      return '⬛';
    } else {
      return 'Route rating TBD';
    }
  };

  return (
    <div className="bg-dusteal rounded-lg shadow-lg text-white w-11/12 max-w-[24rem] md:w-96 p-4 mx-auto mb-6">
      <div className="flex items-center">
        <span className="text-3xl mr-4">{getSkateRating(color)}</span>
        <p className="mr-1 italic">{displayDateTime}</p>
      </div>
      <p className="font-semibold text-3xl m-2">• {title} •</p>
      <p>Meet at:</p>
      <p>{displayLocation}</p>
      <a
        href={getLocationURL(location)}
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        <button className="bg-gray-200 rounded-lg shadow-lg text-gray-900 w-60 p-2 mt-4">
          📍 Open in Google Maps
        </button>
      </a>
    </div>
  );
}

export default Event;