import { OnAddBasketWithControl, getUserInformation  } from "../utils/common";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorities.includes(action.payload.item)) return state;

      const newList = [...state.favorities, action.payload.item];
      return {...state, favorities: newList};

    case 'REMOVE_FAVORITE':
      const removeList = state.favorities.filter(f => f != action.payload.item);
      return {...state, favorities: removeList};

    case 'ADD_BASKET':
      let newlist = OnAddBasketWithControl(state.basketlist, action.payload.item, action.payload.IsAddtion);
      return {...state, basketlist: newlist };

    case 'REMOVE_BASKET':
        const removeBasketList = state.basketlist.filter(f => f != action.payload.item);
        return {...state, basketlist: removeBasketList};
  

    case 'ADD_CACHE':
          const {url,data} = action.payload;
          state.CachedList[url] = data;
      return state;

   case 'CHANGE_TOKEN':
        const {user} = action.payload;
        console.log("")
        if(user)
          AsyncStorage.setItem("@user",JSON.stringify(user));
        else
          AsyncStorage.removeItem("@user");


        return {...state,user: user };

    case 'UPDATE_USER':
      const {updatedUser} = action.payload;
      AsyncStorage.setItem("@user",JSON.stringify(updatedUser));

    return {...state,  user: updatedUser};

    default:
      return state;
  }
};
