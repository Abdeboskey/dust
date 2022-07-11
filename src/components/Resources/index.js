import rachelAndEd from '../../assets/photos/RachelAndEd.jpg';

const Resources = () => {
  return (
    <div className="flex">
      <img
        src={rachelAndEd}
        alt="One skater sitting in a trash can, and one standing next to the trash can"
        className="lg:w-1/2"
      />
      <div className="text-center px-4 mx-auto absolute sm:top-44 left-0 right-0 lg:relative lg:top-0 text-white lg:text-gray-900">
        <h1 className="text-5xl font-bold m-8 mt-12">Community Resources</h1>
        <span className="hidden lg:block lg:text-[18rem]">⏳</span>
        <p className="max-w-md sm:text-xl mx-auto">
          Coming soon! Please check back for a list of community resources,
          including friends of DUST, local skate spots, links to tutorials and
          skill-building materials, and more!
        </p>
        <div className="hidden lg:flex lg:text-8xl mt-16 mb-8">
          <span className="motion-safe:animate-spin ml-auto">🔘</span>
          <span className="motion-safe:animate-spin">🔘</span>
          <span className="motion-safe:animate-spin">🔘</span>
          <span className="motion-safe:animate-spin mr-auto">🔘</span>
        </div>
      </div>
    </div>
  );
};

export default Resources;