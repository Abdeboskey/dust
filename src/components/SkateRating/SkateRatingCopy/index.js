const SkateRatingCopy = ({color, title, description}) => {
  return (
    <div className="flex text-white">
      <span className="m-4 text-6xl md:self-center">{color}</span>
      <div className="flex-col my-4 pr-4 text-left">
        <p className="text-2xl font-semibold self-start">{title}</p>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default SkateRatingCopy;