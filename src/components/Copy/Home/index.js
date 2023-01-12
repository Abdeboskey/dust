import { Link } from "react-router-dom";

const HomeCopy = () => {
    return (
        <div>
            <p className="text-lg my-8 mx-2 md:mx-auto max-w-prose">
                Check out our{" "}
                <Link to="/welcome" className="text-sky-500 underline font-medium">
                  Welcome/FAQ
                </Link>{" "}
                and{" "}
                <Link
                  to="/resources"
                  className="text-sky-500 underline font-medium"
                >
                  Resources
                </Link>{" "}
                sections to learn more about DUST, or get some sweet merch from our{" "}
                <a
                  href="https://denverurbanskatetroop.bigcartel.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-500 underline font-medium"
                >
                  Shop!
                </a>
            </p>
        </div>
    )
}

export default HomeCopy; 
