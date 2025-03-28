import { Route, Router, useLocation } from '@solidjs/router';
import { createEffect, createSignal, JSX } from 'solid-js';
import { render } from 'solid-js/web';

import Navbar from './components/Navbar';

import Accordion from './pages/Accordion';
import AdvanceForms from './pages/AdvanceForms';
import Button from './pages/Button';
import Card from './pages/Card';
import FormElements from './pages/FormElements';
import Home from './pages/Home';
import Overlays from './pages/Overlays';

async function loadFlyonUI() {
  return import('flyonui/flyonui');
}

interface AppProps {
  children?: JSX.Element;
}

const App = (props: AppProps) => {
  const location = useLocation();
  const [_, setLoc] = createSignal(location.pathname);

  createEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  });

  createEffect(() => {
    setLoc(location.pathname);

    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  });

  return (
    <div class="bg-base-200/60 min-h-screen">
      <Navbar />
      <div class="p-6">{props.children}</div>
    </div>
  );
};

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/button" component={Button} />
      <Route path="/card" component={Card} />
      <Route path="/form-elements" component={FormElements} />
      <Route path="/accordion" component={Accordion} />
      <Route path="/advance-forms" component={AdvanceForms} />
      <Route path="/overlays" component={Overlays} />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);

export default App;