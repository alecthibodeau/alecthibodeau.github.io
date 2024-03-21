/* Interfaces */
import InformationItem from './interfaces/InformationItem';
import ProjectItem from './interfaces/ProjectItem';

/* Site Images */
import headshotIcon from './assets/images/alec_headshot_icon_150px.jpg'
import headshotPhoto from './assets/images/alec_headshot_photo_400px.jpg';
import tree from './assets/images/thibodeau_tree_circle.svg';

/* Project Images */
import cookieTimeTrivia from './assets/images/mobile_screenshot_cookie_time_trivia.jpg';
import artPortfolio from './assets/images/mobile_screenshot_alecthibodeau.jpg';
import huetown from './assets/images/mobile_screenshot_huetown.jpg';
import patturns from './assets/images/mobile_screenshot_patturns.jpg';
import radTabs from './assets/images/mobile_screenshot_radtabs.jpg';
import ticTacToe from './assets/images/mobile_screenshot_tic_tac_toe.jpg';

/* Information Images */
import iconEmail from './assets/images/icon_solid_email.svg';
import iconLinkedIn from './assets/images/icon_solid_linkedin.svg';
import iconGitHub from './assets/images/icon_solid_github.svg';
import iconResume from './assets/images/icon_solid_resume.svg';

const hypertextReference = {
  artPortfolio: 'https://alecthibodeau.com',
  codePortfolio: 'https://github.com/alecthibodeau/alecthibodeau.github.io',
  cookieTimeTrivia: 'https://alect.me/cookie-time-trivia',
  gitHub: 'https://github.com/alecthibodeau',
  huetown: 'https://huetown.com',
  linkedIn: 'https://www.linkedin.com/in/alecthibodeau',
  mailTo: 'mailto:alec@alect.me',
  pdfResumeView: 'https://github.com/alecthibodeau/alecthibodeau.github.io/blob/main/src/assets/documents/alec_thibodeau_resume_web.pdf'
};

const sections = {
  about: 'about',
  technologies: 'technologies',
  projects: 'projects',
  information: 'information'
};

const navItems: string[] = [sections.about, sections.projects, sections.information];

const projectItems: ProjectItem[] = [
  {
    id: 'huetown',
    name: 'Huetown',
    description: 'a web shop that consumes PayPal and Mailchimp APIs to, respectively, accept orders and record email list subscribers',
    infoText: 'The web shop for Huetown, my personal project for art sales',
    frontEndTechnology: 'React, TypeScript, React Router, CSS3/Sass, SVG',
    backEndTechnology: 'PayPal API, Mailchimp API',
    altText: 'Mobile screenshot of the Huetown web shop',
    website: hypertextReference.huetown,
    clientRepo: 'https://github.com/alecthibodeau/huetown',
    image: huetown
  },
  {
    id: 'cookieTimeTrivia',
    name: 'Cookie Time Trivia',
    description: 'a quiz interface with CRUD operations on localStorage for the user\'s high score and visual theme preference',
    infoText: 'A game with multiple categories and user-selectable visual themes',
    frontEndTechnology: 'React, TypeScript, React Router, Emotion, CSS3/Sass, SVG, localStorage',
    altText: 'Mobile screenshot of the Cookie Time Trivia game',
    website: hypertextReference.cookieTimeTrivia,
    clientRepo: 'https://github.com/alecthibodeau/cookie-time-trivia',
    image: cookieTimeTrivia
  },
  {
    id: 'artPortfolio',
    name: 'Art Portfolio',
    description: 'components rendered from JSON data to display galleries of my earlier work in drawing and printmaking',
    infoText: 'An art portfolio website for displaying my earlier work in drawing and printmaking',
    frontEndTechnology: 'React, TypeScript, React Router, Bootstrap 5, CSS3/Sass, SVG',
    altText: 'Mobile screenshot of Alec\'s art portfolio website',
    website: hypertextReference.artPortfolio,
    clientRepo: 'https://github.com/alecthibodeau/alecthibodeau.com',
    image: artPortfolio
  },
  {
    id: 'patturns',
    name: 'Patturns',
    infoText: 'A pattern-making visual tool that\'s both practical and fun',
    frontEndTechnology: 'JavaScript, jQuery, CSS3/Sass, HTML5, Handlebars',
    backEndTechnology: 'Node.js, Express, MongoDB',
    altText: 'Mobile screenshot of Patturns: a pattern-making visual tool that\'s both practical and fun',
    website: 'https://alect.me/patturns-client',
    clientRepo: 'https://github.com/alecthibodeau/patturns-client',
    apiRepo: 'https://github.com/alecthibodeau/patturns-api',
    image: patturns
  },
  {
    id: 'radTabs',
    name: 'RadTabs',
    infoText: 'A task-tracker for users to keep tabs on their self-directed projects',
    frontEndTechnology: 'JavaScript, jQuery, CSS3/Sass, HTML5, Handlebars',
    backEndTechnology: 'Ruby, Ruby on Rails, PostgreSQL',
    altText: 'Mobile screenshot of RadTabs: a task-tracker for users to keep tabs on their self-directed projects',
    website: 'https://alect.me/radtabs-client',
    clientRepo: 'https://github.com/alecthibodeau/radtabs-client',
    apiRepo: 'https://github.com/alecthibodeau/radtabs-api',
    image: radTabs
  },
  {
    id: 'ticTacToe',
    name: 'Tic-Tac-Toe',
    infoText: 'A colorful take on the classic pastime with a custom game engine',
    frontEndTechnology: 'JavaScript, jQuery, CSS3/Sass, HTML5',
    backEndTechnology: 'Third-party API',
    altText: 'Mobile screenshot of Alec T.\'s Tic-Tac-Toe: a colorful take on the classic pastime with a custom game engine',
    website: 'https://alect.me/tic-tac-toe-client',
    clientRepo: 'https://github.com/alecthibodeau/tic-tac-toe-client',
    image: ticTacToe
  }
];

const informationItems: InformationItem[] = [
  {
    name: 'Resume',
    href: hypertextReference.pdfResumeView,
    image: iconResume
  },
  {
    name: 'GitHub',
    href: hypertextReference.gitHub,
    image: iconGitHub
  },
  {
    name: 'LinkedIn',
    href: hypertextReference.linkedIn,
    image: iconLinkedIn
  },
  {
    name: 'Email',
    href: hypertextReference.mailTo,
    image: iconEmail
  }
];

const quarterCircleDirection: { [key: number]: string } = {
  0: 'top-left',
  1: 'top-right',
  2: 'bottom-left',
  3: 'bottom-right'
};

const constants = {
  headshotPhoto,
  headshotIcon,
  tree,
  navItems,
  sections,
  projectItems,
  informationItems,
  hypertextReference,
  quarterCircleDirection
};

export default constants;
