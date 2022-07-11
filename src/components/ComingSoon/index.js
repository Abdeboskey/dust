import logo from '../../assets/nu-logo-teal.svg';
import './index.css';

const ComingSoon = () => {
  return (
    <header className="ComingSoon-header text-center">
      <img
        src={logo}
        className="ComingSoon-logo m-4"
        alt="denver-urban-skate-troop-logo"
      />
      <p className="text-dusteal font-bold">~ Best Night of the Week ~</p>
      <h2 className="text-2xl font-bold m-6">✨ COMING SOON ✨</h2>
      <p>
        Meanwhile...
        <br />
        Visit our&nbsp;
        <a
          className="ComingSoon-link"
          href="https://www.instagram.com/denverurbanskate/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        &nbsp;or&nbsp;
        <a
          className="ComingSoon-link"
          href="https://www.facebook.com/DenverUrbanSkate"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>
        .
      </p>
      <p className="mt-6">Happy Sk8ing! </p>
    </header>
  );
}

export default ComingSoon;