import bridgeRoll from '../../assets/photos/bridge-rolls.jpg'

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="w-screen"
        src={bridgeRoll}
        alt="Skating on a slope under a bridge"
      />
      <div className="text-center md:text-left m-4 md:absolute md:top-[12%] lg:top-[14%] md:left-12 lg:left-16 text-white">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold italic drop-shadow-md text-white">
          Denver Urban Skate Troop
        </h1>
        <p className="lg:text-xl mt-4 drop-shadow-md">
          A weekly inline & roller skating community in Denver, Colorado USA
        </p>
      </div>
    </div>
  );
}

export default Hero;