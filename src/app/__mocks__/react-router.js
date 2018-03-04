import React from 'react';

export const Router = ({ history, children }) => ( //eslint-disable-line
  <div>
    {JSON.stringify(history)}
    {children}
  </div>
);
