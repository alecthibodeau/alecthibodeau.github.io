/* Interfaces */
import InformationItem from './interfaces/InformationItem';
import ProjectItem from './interfaces/ProjectItem';

/* Site Images */
import headshot from './assets/images/alec_headshot_150px.jpg';
import tree from './assets/images/thibodeau_tree_circle.svg';

/* Project Images */
import artPortfolio from './assets/images/mobile_screenshot_alecthibodeau.jpg';
import cookieTimeTrivia from './assets/images/mobile_screenshot_cookie_time_trivia.jpg';
import huetown from './assets/images/mobile_screenshot_huetown.jpg';
import nonaAi from './assets/images/mobile_screenshot_nona_ai.jpg';
import patturns from './assets/images/mobile_screenshot_patturns.jpg';
import pupperland from './assets/images/mobile_screenshot_pupperland.jpg';
import radTabs from './assets/images/mobile_screenshot_radtabs.jpg';
import ticTacToe from './assets/images/mobile_screenshot_tic_tac_toe.jpg';

const hypertextReference = {
  artPortfolio: 'https://alecthibodeau.com',
  codePortfolio: 'https://github.com/alecthibodeau/alecthibodeau.github.io?tab=readme-ov-file#alectme',
  cookieTimeTrivia: 'https://alect.me/cookie-time-trivia',
  gitHub: 'https://github.com/alecthibodeau',
  huetown: 'https://huetown.com',
  linkedIn: 'https://www.linkedin.com/in/alecthibodeau',
  nonaAi: 'https://alect.me/nona-ai',
  pupperland: 'https://alect.me/pupperland',
  mailTo: 'mailto:alec@alect.me'
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
    id: 'pupperland',
    name: 'Pupperland',
    infoText: 'A simulated portal for browsing shelter dogs that are available to bring home.',
    frontEndTechnology: 'React, TypeScript, React Router, CSS3, SVG',
    backEndTechnology: 'Fetch API',
    altText: 'Mobile screenshot of Pupperland',
    website: hypertextReference.pupperland,
    clientRepo: 'https://github.com/alecthibodeau/pupperland/blob/main/README.md#pupperland',
    image: pupperland
  },
  {
    id: 'huetown',
    name: 'Huetown',
    infoText: 'The web shop for my art sales, which includes an animated digital lunar calendar.',
    frontEndTechnology: 'React, TypeScript, React Router, CSS3/Sass, SVG',
    backEndTechnology: 'PayPal API, Mailchimp API',
    altText: 'Mobile screenshot of the Huetown web shop',
    website: hypertextReference.huetown,
    clientRepo: 'https://github.com/alecthibodeau/huetown/blob/main/README.md#huetown',
    image: huetown
  },
  {
    id: 'cookieTimeTrivia',
    name: 'Cookie Time Trivia',
    infoText: 'A game with multiple categories and user-selectable visual themes.',
    frontEndTechnology: 'React, TypeScript, React Router, Emotion, CSS3/Sass, SVG, localStorage',
    altText: 'Mobile screenshot of the Cookie Time Trivia game',
    website: hypertextReference.cookieTimeTrivia,
    clientRepo: 'https://github.com/alecthibodeau/cookie-time-trivia/blob/main/README.md#cookie-time-trivia',
    image: cookieTimeTrivia
  },
  {
    id: 'artPortfolio',
    name: 'Art Portfolio',
    infoText: 'An art portfolio website for displaying my early work in drawing and printmaking.',
    frontEndTechnology: 'React, TypeScript, React Router, Bootstrap 5, CSS3/Sass, SVG',
    altText: 'Mobile screenshot of Alec\'s art portfolio website',
    website: hypertextReference.artPortfolio,
    clientRepo: 'https://github.com/alecthibodeau/alecthibodeau.com',
    image: artPortfolio
  },
  {
    id: 'nonaAi',
    name: 'Nona AI',
    infoText: 'A custom user interface for Google\'s Gemini Nano LLM',
    frontEndTechnology: 'React, TypeScript, CSS3, SVG',
    backEndTechnology: 'Google Gemini Nano API',
    altText: 'Mobile screenshot of the Nona AI interface',
    website: hypertextReference.nonaAi,
    clientRepo: 'https://github.com/alecthibodeau/nona-ai/blob/main/README.md#nona-ai',
    image: nonaAi
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
    name: 'LinkedIn',
    href: hypertextReference.linkedIn,
    pathDrawnOne: 'M74.284,0H5.699C2.557,0,0,2.591,0,5.768v68.464c0,3.177,2.556,5.768,5.699,5.768h68.585c3.147,0,5.716-2.591,5.716-5.768V5.768c0-3.177-2.569-5.768-5.716-5.768ZM24.176,68.572h-11.858V30.395h11.876v38.177h-.018ZM18.248,25.178c-3.802,0-6.876-3.085-6.876-6.876s3.074-6.876,6.876-6.876,6.876,3.09,6.876,6.876c-.002,3.807-3.07,6.876-6.876,6.876ZM68.624,68.572h-11.858v-18.572c0-4.427-.095-10.122-6.167-10.122-6.181,0-7.127,4.813-7.127,9.8v18.893h-11.853V30.394h11.372v5.217h.161c1.589-3.003,5.464-6.163,11.233-6.163,11.997,0,14.232,7.912,14.232,18.195l.007,20.929h0Z'
  },
  {
    name: 'GitHub',
    href: hypertextReference.gitHub,
    pathDrawnOne: 'M26.758,64.419c0,.329-.371.594-.838.594-.532.047-.902-.216-.902-.594,0-.334.371-.601.838-.601.485-.045.902.22.902.601ZM21.743,63.673c-.116.332.209.71.692.806.421.165.904,0,.999-.329.097-.334-.208-.712-.692-.861-.421-.113-.89.054-.999.384h0ZM28.872,63.392c-.469.116-.79.427-.742.806.048.334.467.545.949.43.467-.118.791-.43.741-.761-.047-.31-.482-.524-.948-.475ZM39.484,0C17.114,0,0,17.419,0,40.363c0,18.346,11.259,34.047,27.338,39.569,2.063.381,2.794-.926,2.794-2.001,0-1.026-.05-6.686-.05-10.159,0,0-11.292,2.482-13.662-4.928,0,0-1.836-4.814-4.483-6.054,0,0-3.694-2.6.256-2.551,0,0,4.016.332,6.226,4.269,3.533,6.388,9.451,4.55,11.761,3.461.371-2.646,1.418-4.483,2.579-5.576-9.018-1.024-18.115-2.366-18.115-18.277,0-4.551,1.227-6.834,3.806-9.747-.419-1.076-1.79-5.509.421-11.232,3.37-1.077,11.128,4.465,11.128,4.465,3.227-.925,6.693-1.406,10.128-1.406s6.903.481,10.132,1.406c0,0,7.758-5.556,11.128-4.465,2.209,5.741.84,10.154.417,11.232,2.58,2.929,4.16,5.211,4.16,9.745,0,15.964-9.496,17.235-18.516,18.277,1.482,1.307,2.741,3.788,2.741,7.677,0,5.573-.046,12.471-.046,13.827,0,1.077.742,2.384,2.792,2.003,16.13-5.489,27.063-21.194,27.063-39.54.002-22.938-18.143-40.358-40.514-40.358ZM15.677,57.055c-.209.165-.162.545.113.859.26.265.629.381.838.165.211-.165.165-.545-.113-.859-.257-.265-.631-.378-.838-.165ZM13.936,55.718c-.113.214.048.479.369.645.26.165.582.116.694-.118.114-.214-.048-.481-.371-.643-.324-.102-.579-.051-.692.116ZM19.162,61.605c-.257.216-.162.71.209,1.026.371.381.838.427,1.049.165.211-.218.114-.712-.209-1.024-.354-.381-.84-.432-1.049-.167ZM17.321,59.174c-.255.165-.255.599,0,.979.258.381.694.541.905.381.258-.22.258-.646,0-1.026-.227-.385-.646-.55-.905-.334h0Z'
  },
  {
    name: 'Email',
    href: hypertextReference.mailTo,
    pathDrawnOne: 'M74.284,0H5.699C2.557,0,0,2.591,0,5.768v9.519l40,40.001L80,15.287V5.769c0-3.178-2.569-5.769-5.716-5.769Z',
    pathDrawnTwo: 'M40,63.334c-.853,0-1.706-.326-2.357-.977L0,24.714v49.518c0,3.177,2.557,5.768,5.699,5.768h68.585c3.147,0,5.716-2.591,5.716-5.768V24.713l-37.643,37.644c-.651.651-1.504.977-2.357.977Z'
  }
];

const quarterDiscDirection: { [key: number]: string } = {
  0: 'top-left',
  1: 'top-right',
  2: 'bottom-left',
  3: 'bottom-right'
};

const colors: { [key: string]: string } = {
  fourPercentGray: '#f5f5f5'
};

const constants = {
  colors,
  headshot,
  tree,
  navItems,
  sections,
  projectItems,
  informationItems,
  quarterDiscDirection
};

export default constants;
