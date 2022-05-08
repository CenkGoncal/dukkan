import React,{useState,useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';
import InitialState from './store';

const UserProvider = ({children}) => {
  
  const [loading,setLoading] = useState(true);
  const [User,setUser] = useState(null);

  const store = createStore(reducers, {...InitialState,user:User, AuthLoading:loading});

  useEffect(()=> {
    AsyncStorage.getItem("@user").then(usersesion => {

      if(usersesion)
      {
        debugger;
        setUser(JSON.parse(usersesion));
        setLoading(false);
      }

      return () => {
        debugger;
        setUser(null); // This worked for me
        setLoading(true);
      };
    })
  },[InitialState]);

  return <Provider store={store}>{children}</Provider>;
};

export default UserProvider;
