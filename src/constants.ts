/* Site Images */
import headshot from './assets/images/alec_headshot_150px.jpg';
import tree from './assets/images/thibodeau_tree_circle.svg';
import coolTile from './assets/images/thibodeau_cool_tile.jpg';
import greenTile from './assets/images/thibodeau_green_tile.jpg';
import sunnyTile from './assets/images/thibodeau_sunny_tile.jpg';

/* Project Images */
import cookieTimeTrivia from './assets/images/mobile_screenshot_cookie_time_trivia.jpg';
import artPortfolio from './assets/images/mobile_screenshot_alecthibodeau.jpg';
import huetown from './assets/images/mobile_screenshot_huetown.jpg';
import patturns from './assets/images/mobile_screenshot_patturns.jpg';
import radTabs from './assets/images/mobile_screenshot_radtabs.jpg';
import ticTacToe from './assets/images/mobile_screenshot_tic_tac_toe.jpg';

/* Contact Images */
import email from './assets/images/icon_solid_email.svg';
import LinkedIn from './assets/images/icon_solid_linkedin.svg';
import GitHub from './assets/images/icon_solid_github.svg';
import resume from './assets/images/icon_solid_resume.svg';

const siteImages = {
  headshot,
  tree,
  coolTile,
  greenTile,
  sunnyTile
}

const projectImages = {
  cookieTimeTrivia,
  artPortfolio,
  huetown,
  patturns,
  radTabs,
  ticTacToe
};

const contactImages = {
  email,
  LinkedIn,
  GitHub,
  resume
};

const navItems = ['about', 'projects', 'contact'];

const projectItems = [
  {
    id: 'cookieTimeTrivia',
    name: 'Cookie Time Trivia',
    infoText: 'A game with multiple categories and user-selectable visual themes',
    frontEndTechnology: 'React, TypeScript, React Router, Emotion, CSS3/Sass, SVG, localStorage',
    altText: 'Mobile screenshot of Cookie Time Trivia game',
    website: 'https://alect.me/cookie-time-trivia',
    clientRepo: 'https://github.com/alecthibodeau/cookie-time-trivia'
  },
  {
    id: 'artPortfolio',
    name: 'Art Portfolio',
    infoText: 'An art portfolio website for displaying my earlier work in drawing and printmaking',
    frontEndTechnology: 'React, TypeScript, React Router, Bootstrap 5, CSS3/Sass, SVG',
    altText: 'Mobile screenshot of an art portfolio website for displaying my earlier work in drawing and printmaking',
    website: 'https://alecthibodeau.com',
    clientRepo: 'https://github.com/alecthibodeau/alecthibodeau.com'
  },
  {
    id: 'huetown',
    name: 'Huetown',
    infoText: 'The web shop for Huetown, my personal project for art sales',
    frontEndTechnology: 'JavaScript, CSS3/Sass, HTML5, SVG',
    backEndTechnology: 'PayPal API',
    altText: 'Mobile screenshot of the web shop for Huetown, my personal project for art sales',
    website: 'https://huetown.com',
    clientRepo: 'https://github.com/alecthibodeau/huetown-client'
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
    apiRepo: 'https://github.com/alecthibodeau/patturns-api'
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
    apiRepo: 'https://github.com/alecthibodeau/radtabs-api'
  },
  {
    id: 'ticTacToe',
    name: 'Tic-Tac-Toe',
    infoText: 'A colorful take on the classic pastime with a custom game engine',
    frontEndTechnology: 'JavaScript, jQuery, CSS3/Sass, HTML5',
    backEndTechnology: 'Third-party API',
    altText: 'Mobile screenshot of Alec T.\'s Tic-Tac-Toe: a colorful take on the classic pastime with a custom game engine',
    website: 'https://alect.me/tic-tac-toe-client',
    clientRepo: 'https://github.com/alecthibodeau/tic-tac-toe-client'
  }
]

const contactItems = [
  {
    name: 'email',
    href: 'mailto:alec@alect.me',
    linkText: 'alec@alect.me'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alecthibodeau'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/alecthibodeau'
  },
  {
    name: 'resume'
  }
]

export default {
  siteImages,
  projectImages,
  contactImages,
  navItems,
  projectItems,
  contactItems
};
