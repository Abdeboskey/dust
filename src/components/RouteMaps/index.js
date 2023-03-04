import routemapsbanner from '../../assets/photos/routemaps-banner.jpg';
import cityPark from '../../assets/routemapimages/CityPark.png';
import denverDowntown from '../../assets/routemapimages/DenverDowntown.png';
import arvadaEasy from '../../assets/routemapimages/ArvadaEasy.png';
import belmabrook from '../../assets/routemapimages/Belmabrook.png';
import crownHill from '../../assets/routemapimages/CrownHill.png';
import berkley from '../../assets/routemapimages/Berkley.png';
import boulder from '../../assets/routemapimages/Boulder.png';
import centralPark from '../../assets/routemapimages/CentralPark.png';
import cherryCreek from '../../assets/routemapimages/CherryCreek.png';
import golden from '../../assets/routemapimages/Golden.png';
import lakewoodGulch from '../../assets/routemapimages/LakewoodGulch.png';
import rino from '../../assets/routemapimages/RiNo.png';
import washPark from '../../assets/routemapimages/WashPark.png';
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
        <h2>Popular Regular</h2>
          <h3 className="text-3xl font-bold m-8 mt-12">River North (RiNo)</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 7 miles (11.2 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> ⬛ <a href="../welcome#ratings" target="_blank">Black</a><br />
            <strong>Average Speed:</strong> ~10 mph (16 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 126 ft (38.4 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/x5Fe3Rz4efgmc5Cx6" target="_blank" rel="noopener noreferrer">Out front of Ratio Beerworks</a>
          </p>
          <img
            src={rino}
            alt="River North (RiNo) route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Wash Park</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 2 miles (3.2 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟩 <a href="../welcome#ratings" target="_blank">Green</a><br />
            <strong>Average Speed:</strong> ~6 mph (9.6 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 42 ft (12.8 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/qi9thDCAnn9W22yb6" target="_blank" rel="noopener noreferrer">Wash Park Basketball Courts</a>
          </p>
          <img
            src={washPark}
            alt="Wash Park route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">City Park</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 7 miles (11.2 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 90 ft (27.4 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/1qKccJXAj2AkcUDR9" target="_blank" rel="noopener noreferrer">SW corner of Denver Museum of Nature and Science</a>
          </p>
          <img
            src={cityPark}
            alt="City Park route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Denver Downtown</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 8 miles (12.9 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> ⬛ <a href="../welcome#ratings" target="_blank">Black</a><br />
            <strong>Average Speed:</strong> ~10 mph (16 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 180 ft (54.8 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/Wvd2p7gUUE3dwSyR7" target="_blank" rel="noopener noreferrer">Civic Center Park</a>
          </p>
          <a href="https://www.strava.com/activities/7656908869" target="_blank" rel="noopener noreferrer"><img
            src={denverDowntown}
            alt="Denver Downtown route map"
            className="w-4/5 mx-auto"
          /></a>
          <h3 className="text-3xl font-bold m-8 mt-12">Sloan&#39;s Lake</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 5 miles (8 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> lake loop 🟩 <a href="../welcome#ratings" target="_blank">Green</a> full route 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~6 mph (9.6 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 40 ft (12.2 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/DAKHAQpKsjEmvKYq5" target="_blank" rel="noopener noreferrer">Sloan&#39;s Lake Boat House</a>
          </p>
          <a href="https://www.strava.com/activities/7079331780" target="_blank" rel="noopener noreferrer"><img
            src={sloansLake}
            alt="Sloan's Lake route map"
            className="w-4/5 mx-auto"
          /></a>
          <h3 className="text-3xl font-bold m-8 mt-12">Central Park</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 8 miles (12.9 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 156 ft (47.5 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/54qgNR8kUiHvVQ67A" target="_blank" rel="noopener noreferrer">Pavilion at Central Park</a>
          </p>
          <img
            src={centralPark}
            alt="Central Park route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Cherry Creek</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 9 miles (14.4 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> ⬛ <a href="../welcome#ratings" target="_blank">Black</a><br />
            <strong>Average Speed:</strong> ~10 mph (16 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 193 ft (58.8 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/re1sVufuwRK46s7j6" target="_blank" rel="noopener noreferrer">The Pavilion at Cheeseman Park</a>
          </p>
          <img
            src={cherryCreek}
            alt="Cherry Creek route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Berkley</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 6 miles (16 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 151 ft (46 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/TcLGXf1sreCSfTtB8" target="_blank" rel="noopener noreferrer">Elitch Carousel</a>
          </p>
          <img
            src={berkley}
            alt="Berkley route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Golden</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 6 miles (16 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 194 ft (59.1 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/7hNycdiaiMdKnYCD8" target="_blank" rel="noopener noreferrer">Parfet Park</a>
          </p>
          <img
            src={golden}
            alt="Golden route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Lakewood Gulch</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 10 miles (16 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 356 ft (108.5 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/RBH3rkQNswPRLXbD7" target="_blank" rel="noopener noreferrer">Denver Skate Park</a>
          </p>
          <img
            src={lakewoodGulch}
            alt="Lakewood Gulch route map"
            className="w-4/5 mx-auto"
          />
        <h2>New or Experimental</h2>
          <h3 className="text-3xl font-bold m-8 mt-12">Arvada Easy Mode</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 7 miles (11.2 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 111 ft (33.8 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/L4VmRazTidLH9gWp9" target="_blank" rel="noopener noreferrer">Arvada Memorial Skate Park</a>
          </p>
          <img
            src={arvadaEasy}
            alt="Arvada Easy route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Belmabrook</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 5 miles (8 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 153 ft (46.6 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/3cXb5b693HxTJdPk9" target="_blank" rel="noopener noreferrer">Heritage Lakewood Building</a>
          </p>
          <img
            src={belmabrook}
            alt="Belmabrook route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Boulder</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 9 miles (14.5 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~8 mph (12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 163 ft (49.7 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/eg35HiPMHLCy9E7o9" target="_blank" rel="noopener noreferrer">Valmont Skate Park</a>
          </p>
          <img
            src={boulder}
            alt="Boulder route map"
            className="w-4/5 mx-auto"
          />
          <h3 className="text-3xl font-bold m-8 mt-12">Crown Hill</h3>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ 1 or 7 miles (1.6 or 11.2 km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> inner loop 🟩 <a href="../welcome#ratings" target="_blank">Green</a> full route 🟦 <a href="../welcome#ratings" target="_blank">Blue</a><br />
            <strong>Average Speed:</strong> ~6 or ~8 mph (9.6 or 12.9 kmh) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Elevation Change:</strong> 40 or 170 ft (12.2 or 51.8 m) <br />
            <strong>Start:</strong> <a href="https://goo.gl/maps/tWRe872AJfeRjqX17" target="_blank" rel="noopener noreferrer">Crown Hill main parking lot</a>
          </p>
          <img
            src={crownHill}
            alt="Crown Hill route map"
            className="w-4/5 mx-auto"
          />
      </div>
    </div>
  );
};

export default RouteMaps;
