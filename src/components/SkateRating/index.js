import SkateRatingCopy from "./SkateRatingCopy";

const SkateRating = () => {
  return (
    <div id="skate-rating" className="my-12">
      <p className="text-4xl font-bold m-8">Skate Rating System</p>
      <p className="mx-5 text-lg">Each route will have a color associated with it which represents that route's difficulty level. </p>
      <div className="bg-gray-500 border-dusteal border-8 border-solid rounded-xl m-5 shadow-2xl">
        <SkateRatingCopy
          color="🟩"
          title="Green - Easy"
          description="Beginner skate. Characteristics: flat, smooth surfaces, away from traffic, skating at a slower pace."
        />
        <SkateRatingCopy
          color="🟦"
          title="Blue - Medium"
          description="Intermediate Skate. Characteristics: some hills, skating on public
          roads near traffic, encountering stop signs/traffic lights."
        />
        <SkateRatingCopy
          color="⬛"
          title="Black - Hard"
          description="Advanced Skate. Characteristics: very hilly, fast speeds, long
          distance."
        />
      </div>
    </div>
  );
}

export default SkateRating;