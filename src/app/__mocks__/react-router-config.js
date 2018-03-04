import React from 'react';

export const renderRoutes = jest.fn(routes => (
  <div>{JSON.stringify(routes)}</div>
));
