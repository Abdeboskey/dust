import routemaps-banner from '../../assets/photos/routemaps-banner.jpg';
import ArvadaEasy from '../../assets/routemapimages/ArvadaEasy.png';
import Belmabrook from '../../assets/routemapimages/Belmabrook.png';
import Berkley from '../../assets/routemapimages/Berkley.png';
import Boulder from '../../assets/routemapimages/Boulder.png';
import Broomfield from '../../assets/routemapimages/Broomfield.png';
import CentralParkMap from '../../assets/routemapimages/CentralPark.png';
import CherryCreek from '../../assets/routemapimages/CherryCreek.png';
import CityPark from '../../assets/routemapimages/CityPark.png';
import CrownHill from '../../assets/routemapimages/CrownHill.png';
import DenverDowntown from '../../assets/routemapimages/DenverDowntown.png';
import Golden from '../../assets/routemapimages/Golden.png';
import LakewoodGulch from '../../assets/routemapimages/LakewoodGulch.png';
import RiNo from '../../assets/routemapimages/RiNo.png';
import Sheridan from '../../assets/routemapimages/Sheridan.png';
import SloansLake from '../../assets/routemapimages/SloansLake.png';
import WashPark from '../../assets/routemapimages/WashPark.png';

const RouteMaps = () => {
  return (
    <div className="flex">
      <img
        src={routemaps-banner}
        alt="A stylized banner image for a downtown Denver skate route"
        className="w-full"
      />
      <div className="text-center px-4 mx-auto absolute sm:top-44 left-0 right-0 lg:relative lg:top-0 text-white lg:text-gray-900">
        <h1 className="text-5xl font-bold m-8 mt-12">Route Maps</h1>
        <p className="max-w-md sm:text-xl mx-auto">
          Curious about where or how far we skate? Here are some of our favorites.
        </p>
        <p className="max-w-md sm:text-xl mx-auto">
          Our routes are rated from Green to Black in difficulty. Please see <a href="../SkateRating" target="_blank">this guide</a> to learn more.
        </p>
          <h2 className="text-3xl font-bold m-8 mt-12">Central Park</h2>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ __ miles ( km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟦 <a href="#" target="_blank">Blue</a><br>
            Start at (location)
          </p>
          <img
            src={CentralParkMap}
            alt="City Park route map"
            className="w-4/5"
          />
          <h2 className="text-3xl font-bold m-8 mt-12">Denver Downtown</h2>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ __ miles ( km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> ⬛ <a href="#" target="_blank">Black</a><br>
            Start at (location)
          </p>
          <img
            src={DenverDowntown}
            alt="Denver Downtown route map"
            className="w-4/5"
          />
          <h2 className="text-3xl font-bold m-8 mt-12">Sloan's Lake'</h2>
          <p className="max-w-md sm:text-xl mx-auto">
            <strong>Length:</strong> ~ __ miles ( km) &nbsp;&nbsp;&nbsp;&nbsp;<strong>Difficulty:</strong> 🟩 <a href="#" target="_blank">Green</a><br>
            Start at (location)
          </p>
          <img
            src={SloansLake}
            alt="Sloan's Lake route map"
            className="w-4/5"
          />
      </div>
    </div>
  );
};

export default RouteMaps;