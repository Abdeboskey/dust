import logo from '../../assets/nu-logo-teal.svg';
import './index.css';

const ComingSoon = () => {
  return (
    <header className="ComingSoon-header">
      <img
        src={logo}
        className="ComingSoon-logo"
        alt="denver-urban-skate-troop-logo"
      />
      <p>~ Best Night of the Week ~</p>
      <h2>✨ COMING SOON ✨</h2>
      <p>
        Meanwhile...<br/><br/>
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
        </a>.
        <br/>
        <br/>
        Happy Skating!
      </p>
    </header>
  );
}

export default ComingSoon;