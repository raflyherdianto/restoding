import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/loader.css';
import './view/navigation';
import './view/skip-link';
import registerSW from './utils/register-sw';
import Main from './view/main';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  Main.renderPage();
});

window.addEventListener('hashchange', () => {
  Main.renderPage();
});
