const SafetyExpectations = () => {
  return (
    <div id="safety" className="mt-12">
      <p className="text-4xl text-red-900 font-bold m-8">
        <span className="text-yellow-400">⚠️</span> SAFETY & EXPECTATIONS{" "}
        <span className="text-yellow-400">⚠️</span>
      </p>
      <div className="bg-yellow-400 border-red-900 text-red-900 text-lg font-semibold border-8 border-solid rounded-xl m-5 shadow-2xl">
        <p className="m-5">Individuals join DUST events at their own risk.</p>
        <p className="m-5">
          Helmets and wrist-guards are required, though we cannot police
          everyone.
        </p>
        <p className="m-5">
          Pay attention to the skate ratings for each route and skate at your
          ability level.
        </p>
        <p className="m-5">Obey traffic laws, stop signs, and traffic lights.</p>
        <p className="m-5">
          Be respectful of other trail users and look out for each other.
        </p>
        <p className="m-5">
          DUST strives to be a safe space for all of our community members.
          Discrimination and deliberate harm to others will not be tolerated.
        </p>
      </div>
    </div>
  );
};

export default SafetyExpectations;