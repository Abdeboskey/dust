import routemapsbanner from '../../assets/photos/routemaps-banner.jpg';
import cityPark from '../../assets/routemapimages/CityPark.png';
import denverDowntown from '../../assets/routemapimages/DenverDowntown.png';
import sloansLake from '../../assets/routemapimages/SloansLake.png';

const RouteMaps = () => {
  return (
    <div className="flex-col">
      <img
        src={routemapsbanner}
        alt="A stylized depiction of a downtown Denver skate route"
        className="w-full h-1/2"
      />
      <div className="text-center px-4 mx-auto absolute sm:top-44 left-0 right-0 lg:relative lg:top-0 text-white lg:text-gray-900">
        <h1 className="text-5xl font-bold m-8 mt-12">Route Maps</h1>
        <p className="max-w-md sm:text-xl mx-auto">
          Curious about where or how far we skate? Here are some of our favorites. Our paths usually vary some on each skate.
        </p>
        <p className="max-w-md sm:text-xl mx-auto">
          Our routes are rated from Green to Black in difficulty. Please see <a href="../welcome#ratings" target="_blank">this guide</a> to learn more.
        </p>
          <h2 className="text-3xl font-bold m-8 mt-12">Central Park</h2>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 7 miles (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (9.6 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 90 ft (27.4 m) <br />
            <strong>Start:</strong> <a href="https://www.google.com/search?client=firefox-b-1-d&q=39.74684933187119%2C+-104.94319335163887" target="_blank">Denver Museum of Nature and Science</a>
          </p>
          <a href="https://www.strava.com/activities/7567616273" target="_blank"><img
            src={cityPark}
            alt="City Park route map"
            className="w-4/5 mx-auto"
          /></a>
          <h2 className="text-3xl font-bold m-8 mt-12">Denver Downtown</h2>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ __ miles ( km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> ⬛ <a href="../welcome#ratings" target="_blank">Black</a><br />
            <strong>Average Speed:</strong> ~10 mph (16 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 180 ft (54.8 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/Wvd2p7gUUE3dwSyR7" target="_blank">Civic Center Park</a>
          </p>
          <a href="https://www.strava.com/activities/7656908869" target="_blank"><img
            src={denverDowntown}
            alt="Denver Downtown route map"
            className="w-4/5 mx-auto"
          /></a>
          <h2 className="text-3xl font-bold m-8 mt-12">Sloan&#39;s Lake</h2>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 5 miles (8 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟩 <a href="../welcome#ratings" target="_blank">Green</a><br />
            <strong>Average Speed:</strong> ~6 mph (9.6 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 40 ft (12.2 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/DAKHAQpKsjEmvKYq5" target="_blank">Sloan&#39;s Lake Boat House</a>
          </p>
          <a href="https://www.strava.com/activities/7079331780" target="_blank"><img
            src={sloansLake}
            alt="Sloan's Lake route map"
            className="w-4/5 mx-auto"
          /></a>
      </div>
    </div>
  );
};

export default RouteMaps;
