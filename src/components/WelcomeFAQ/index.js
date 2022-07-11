import SafetyExpectations from "../SafetyExpectations";
import YouTubeVid from "../YouTubeVid/YouTubeVid";

import bridgeRolls from '../../assets/photos/bridge-rolls.jpg';

const WelcomeFAQ = () => {
  const questionHeadingStyle = "text-2xl font-medium m-4";
  const faqCardStyle = `
    bg-gray-100
    border-dusteal
    border-4
    border-solid
    rounded-xl
    m-8
    shadow-lg
  `;
  
  return (
    <div className="container mx-auto md:px-10 sm:px-5 max-w-3xl text-center">
      <img className="hidden md:block w-screen fixed -top-32 left-0 opacity-20 -z-10"src={bridgeRolls} alt="A group of rollerbladers skating under a bridge" />
      <YouTubeVid embedId="4rArLZlkU8k" />
      <p className="text-4xl md:text-5xl font-bold m-8">Welcome to DUST!</p>
      <p className="mx-5">
        The Denver Urban Skate Troop (DUST) is a weekly inline/quad skating
        meetup community in Denver, CO. We are a diverse community of skaters
        open to all disciplines, wheel-types, and experience levels. Read on for
        answers to some <b>frequently asked questions</b> and our{" "}
        <a href="#safety">
          <b>community safety guidelines</b>
        </a>
        .
      </p>
      <div className={faqCardStyle}>
        <p className={questionHeadingStyle}>Q: When does DUST meet?</p>
        <p className="m-5">
          🛼 DUST meets regularly every <b>Monday & Wednesday night</b>, weather
          permitting. There are also spur of the moment get togethers prompted
          by folks within the community. Most often these are shared on our{" "}
          <a
            className="text-sky-500 underline"
            href="https://www.instagram.com/denverurbanskate/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          stories and/or a community owned and run{" "}
          <a
            className="text-sky-500 underline"
            href="https://discord.gg/FtUq99CPUB"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>{" "}
          server.
        </p>
        <p className="m-5">
          🛼 We typically meet <b>30 minutes prior</b> to the posted start time,
          providing time to get ready, warm up, and socialize. For example, if the posted start time is 7:00, we will meet starting at 6:30 and roll out at 7:00.
        </p>
      </div>
      <div className={faqCardStyle}>
        <p className={questionHeadingStyle}>
          Q: What should I expect from a DUST skate?
        </p>
        <p className="m-5">
          🛼 An inclusive and diverse group of skaters. This includes{" "}
          <b>all wheel types</b> (inline, rollerskate, skateboard, one wheel,
          etc.). <b>All disciplines</b> (recreational, aggressive/park, slalom,
          wizard, etc.). <b>All ages, backgrounds, ability levels</b>, and so
          on.
        </p>
        <p className="m-5">
          🛼 <b>A fun night</b> meeting new folks and improving your skills on
          skates. This happens through practice as well as watching and learning
          from others.
        </p>
        <p className="m-5">
          🛼 <b>Varying levels of difficulty</b> from week to week. Our goal is
          to provide a little something for everyone, so keep an eye on our
          difficulty rating system and be conscious of your ability level when
          attending a skate. It's great to progress, just take care to be safe
          and responsible.
        </p>
      </div>
      <div className={faqCardStyle}>
        <p className={questionHeadingStyle}>Q: How long are DUST skates?</p>
        <p className="m-5">
          🛼 Our Monday & Wednesday night skates often range from{" "}
          <b>one to two hours</b>. This depends on the route and difficulty
          level.
        </p>
        <p className="m-5">
          🛼 All Monday & Wednesday night skates include stopping points to
          allow the group to gather, rest, and often play at a spot like a
          basketball court, parking garage, or skatepark.
        </p>
        <p className="m-5">
          🛼 Our weekly skates typically average around <b>7-10 miles</b> in
          distance, with plenty of stops and socialization.
        </p>
      </div>
      <SafetyExpectations />
    </div>
  );
};

export default WelcomeFAQ;