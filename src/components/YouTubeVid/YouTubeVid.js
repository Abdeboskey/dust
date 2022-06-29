const YouTubeVid = (props) => {
  const { videoURL } = props;
  
  return (
    <div>
      <iframe
        className="md:w-[560px] md:h-[315px] mt-8 mx-auto"
        src={videoURL}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />{" "}
    </div>
  );
}

export default YouTubeVid;
