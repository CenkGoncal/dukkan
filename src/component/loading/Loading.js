import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = () => {

    return(
        <View style={{ flex:1, justifyContent:"center", alignContent:"center" }}>
           <ActivityIndicator  size={100} color="tomato" />
        </View>
    )
}

export default Loading;