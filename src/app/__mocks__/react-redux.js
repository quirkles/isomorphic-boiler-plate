import React from 'react';

export const Provider = ({ store, children }) => ( //eslint-disable-line
  <div>
    {JSON.stringify(store)}
    {children}
  </div>
);
