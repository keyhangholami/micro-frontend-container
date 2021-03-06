import React from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_CREATEREACTAPP_HOST: createReactAppHost,
  REACT_APP_CREATEVUEAPP_HOST: createVueAppHost } = process.env;

const CreateReactApp = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createReactAppHost}
    name="ReactMFApp"
  />
);
const CreateVueApp = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createVueAppHost}
    name="VueMFApp"
  />
);

const Home = () => (
  <>
    <p>
      What is a micro front-ends approach? The term micro front-ends first came
      up in the ThoughtWorks Technology Radar in November 2016. It extends the
      concepts of microservices to front-end development.
    </p>
    <p>
      The approach is to split the browser-based code into micro front-ends by
      breaking down application features. By making smaller and feature-centered
      codebases, we achieve the software development goal of decoupling.
    </p>
    <p>
      Although the codebases are decoupled, the user experiences are coherent.
      In addition, each codebase can be implemented, upgraded, updated, and
      deployed independently.
    </p>
    <p>
      Here is the paradise of micro front-ends. JavaScript applications,
      regardless of frameworks and versions, are launched by a container. These
      applications, legacy and new, work together seamlessly, and act like one
      application.
    </p>
  </>
);

const App = props => {
  return (
    <BrowserRouter>
      <h1>
        This is an example of micro frontend.
      </h1>
      <p>
        In the links below, Home is a component bundled with the App Container,
        and Micro Frontend is a micro frontend app loaded from an outside route.
      </p>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/reactMFApp">
            Micro Frontend: Create React App
          </NavLink>
        </li>
        <li>
          <NavLink to="/vueMFApp">
            Micro Frontend: Create Vue App
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/reactMFApp" component={CreateReactApp} />
        <Route path="/vueMFApp" component={CreateVueApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
