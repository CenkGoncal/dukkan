import axios from "axios";

export const AddBasket = (data, isAddtion) => {
  return {type: 'ADD_BASKET', payload: {item: data, IsAddtion:isAddtion}};
};

export const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export const OnAddBasketWithControl = (list, item, isIncrease = true) => {
  if (list.includes(item)) {
    return list.map(function(element){

        if(element == item)
        {   
            if(!isIncrease)
                element.OrderCount = element.OrderCount - 1 <=0 ?  1 :  element.OrderCount - 1;
            else
                element.OrderCount = element.OrderCount + 1;
        }

        return element;
    });
  }

  item.OrderCount = 1;
  return [...list, item];
};

export const getUserInformation = async (username) => {

  var {data:responseData} = await axios.get("https://fakestoreapi.com/users");
  let user = responseData.filter(f=>f.username == username);
  return user;
}