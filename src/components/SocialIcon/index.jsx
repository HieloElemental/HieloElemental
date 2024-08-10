import { PropTypes } from "prop-types";

import Css3Icon from "./assets/css3-logo.svg?react";
import CPPIcon from "./assets/cpp-logo.svg?react";
import ExpressjsIcon from "./assets/expressjs-logo.svg?react";
import GitIcon from "./assets/git-logo.svg?react";
import GitHubLogoIcon from "./assets/github-logo.svg?react";
import Html5Icon from "./assets/html5-logo.svg?react";
import JavaIcon from "./assets/java-logo.svg?react";
import JavascriptIcon from "./assets/javascript-logo.svg?react";
import KnexjsIcon from "./assets/knexjs-logo.svg?react";
import LinkedInLogoIcon from "./assets/linkedin-logo.svg?react";
import MySQL from "./assets/mysql-logo.svg?react";
import NodejsIcon from "./assets/nodejs-logo.svg?react";
import NPMIcon from "./assets/npm-logo.svg?react";
import PHPIcon from "./assets/php-logo.svg?react";
import ReactIcon from "./assets/react-logo.svg?react";
import ReactRouterIcon from "./assets/react-router-dom-logo.svg?react";
import TailwindIcon from "./assets/tailwind-logo.svg?react";

const icons = (className) => {
  return {
    Css3: <Css3Icon className={className} />,
    CPP: <CPPIcon className={className} />,
    Expressjs: <ExpressjsIcon className={className} />,
    Git: <GitIcon className={className} />,
    GitHub: <GitHubLogoIcon className={className} />,
    Html5: <Html5Icon className={className} />,
    Java: <JavaIcon className={className} />,
    Javascript: <JavascriptIcon className={className} />,
    Knexjs: <KnexjsIcon className={className} />,
    LinkedIn: <LinkedInLogoIcon className={className} />,
    MySQL: <MySQL className={className} />,
    Nodejs: <NodejsIcon className={className} />,
    NPM: <NPMIcon className={className} />,
    PHP: <PHPIcon className={className} />,
    React: <ReactIcon className={className} />,
    ReactRouter: <ReactRouterIcon className={className} />,
    Tailwind: <TailwindIcon className={className} />,
  };
};

const SocialIcon = ({ icon, className }) => {
  return <>{icons(className)[icon]}</>;
};
SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SocialIcon;
