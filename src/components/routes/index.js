import denverdowntown from '../../assets/photos/denverdowntown.jpg';
import CentralPark from '../../assets/routes/regular/CentralPark.png';

const Resources = () => {
  return (
    <div className="flex">
      <img
        src={denverdowntown}
        alt="A stylized route map for a downtown Denver skate"
        className="lg:w-1/2"
      />
      <div className="text-center px-4 mx-auto absolute sm:top-44 left-0 right-0 lg:relative lg:top-0 text-white lg:text-gray-900">
        <h1 className="text-5xl font-bold m-8 mt-12">Route Maps</h1>
        <p className="max-w-md sm:text-xl mx-auto">
          Curious about where or how far we skate? Here are some of our favorites.
        </p>
        <p className="max-w-md sm:text-xl mx-auto">
          Our routes are rated from Green to Black in difficulty. Please see <a href="#">this guide</a> to learn more.
        </p>
          <img
            src={CentralPark}
            alt="City Park route map"
          />
      </div>
    </div>
  );
};

export default Resources;