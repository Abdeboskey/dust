import PropTypes from "prop-types";

const YouTubeVid = (props) => {
  const { embedId } = props;

  return (
    <div>
      <iframe
        className="md:w-[560px] md:h-[315px] mt-8 mx-auto"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />{" "}
    </div>
  );
};

YouTubeVid.propTypes = {
  embedId: PropTypes.string.isRequired,
};


export default YouTubeVid;
