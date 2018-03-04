import React from 'react';

export const NavLink = ({ to, children }) => <a href={to}>{children}</a>; //eslint-disable-line

export const StaticRouter = ({ location, context, children }) => ( // eslint-disable-line
  <div>
    {JSON.stringify(location)}
    {JSON.stringify(context)}
    {children}
  </div>
);
