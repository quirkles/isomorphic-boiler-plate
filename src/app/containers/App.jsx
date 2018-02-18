import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    <ul>
      <li>
        <NavLink to="/home">home</NavLink>
      </li>
      <li>
        <NavLink to="/list">list</NavLink>
      </li>
    </ul>
    <div>{renderRoutes(route.routes)}</div>
  </div>
);

App.propTypes = {
  children: propTypes.arrayOf(propTypes.node),
  route: propTypes.object.isRequired,
};

export default App;
