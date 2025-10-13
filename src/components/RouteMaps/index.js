import RouteMap from './RouteMap';
import { skateRoutes } from './routeData.js';
import routemapsbanner from '../../assets/photos/routemaps-banner.jpg';

const RouteMaps = () => {
  
  const createRoutes = (routeData) => {
    return routeData.map((route, i) => {
      return (
        <RouteMap
          key={i}
          name={route.name}
          length={route.length}
          avgSpeed={route.avgSpeed}
          rating={route.rating}
          elevation={route.elevation} 
          startName={route.startName}
          startUrl={route.startUrl}
          img={route.img}
        />
      )
    });
  }

  return (
    <div className="flex-col">
      <img
        src={routemapsbanner}
        alt="A stylized depiction of a downtown Denver skate route"
        className="w-full h-1/2"
      />
      <div className="text-center px-4 text-gray-900">
        <h1 className="text-5xl font-bold m-8 mt-12">Route Maps</h1>
        <p className="max-w-1/2 text-xl mx-auto">
          Curious about where or how far we skate? Here are some of our favorites. DUST routes usually vary some on each skate.
        </p>
        <p className="max-w-1/2 text-xl mx-auto">
          Our routes are rated either
          <span className="text-green-500"> Green, </span>
          <span className="text-blue-500"> Blue, </span>
            or
          <span className="font-bold"> Black </span>
          in difficulty. Please see
          <a href="../welcome#ratings" target="_blank"> this guide </a>
          to learn more.
        </p>
        {createRoutes(skateRoutes.regular)}
        {createRoutes(skateRoutes.experimental)}
      </div>
    </div>
  );
};

export default RouteMaps;
