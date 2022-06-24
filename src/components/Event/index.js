const Event = (props) => {
  const {
    id,
    weekday,
    month,
    date,
    time,
    title,
    color,
    location,
    htmlLink,
  } = props;

  const dateString = `${weekday}, ${month} ${date}`
  let skateRating; 

  const getLocationURL = (location) => {
    const cleanLocation = location
      .replaceAll(/\s/gi, "+")
      .replaceAll(/,/gi, "%2C");

    return `https://www.google.com/maps/search/?api=1&query=${cleanLocation}`;
  };

  switch (color.toUpperCase()) {
    case 'GREEN':
      skateRating = '🟩';
      break
    case 'BLUE':
      skateRating = '🟦';
      break
    case 'BLACK':
      skateRating = '⬛'
      break
    default:
      skateRating = 'This route has not been rated'
  }

  return (
    <div
      className="bg-dusteal rounded-lg shadow-lg text-white w-80 p-4 mx-auto mb-6"
      // key={id}
    >
      <div className="flex items-center">
        <span className="font-semibold text-3xl mr-4">{skateRating}</span>
        <p className="mr-1 italic">{dateString}</p>
        <p className="italic">@{time}</p>
      </div>
      <p className="text-3xl">• {title} •</p>
      <p>Meet at</p>
      <a
        href={getLocationURL(location)}
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        <p>{location}</p>
      </a>
      <a href={htmlLink} target="_blank" rel="noreferrer">
        <button className="bg-gray-200 rounded-lg shadow-lg text-gray-900 w-60 p-2 mt-4">
          Open in Google Calendar
        </button>
      </a>
    </div>
  );
}

export default Event;