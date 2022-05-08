import React  from 'react';
import UserProvider from './context/provider';
import Router from './Router';

export default () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
