import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import CustomTab from './component/customTab';
import Login from './pages/login';
import Loading from './component/loading/Loading';

const Router = () => {
  const user = useSelector(s => s.user);
  const AuthLoading = useSelector(s => s.AuthLoading);

  return (
    <NavigationContainer>
      {user ? <CustomTab /> : AuthLoading ? <Loading /> : <Login />}
    </NavigationContainer>
  );
};

export default Router;
