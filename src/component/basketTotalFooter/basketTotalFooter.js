import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import IconButton from '../iconButton';
import styles from './basketTotalFooterStyle';

const BasketTotalFooter = ({price}) => {
  const [isExpend, setExpand] = useState(false);

  const ExpendRow = ({text, value}) => {
      return(
          <View style={styles.expandRow}>
              <Text style={styles.ExpandItem}>{text}</Text>
              <Text style={styles.ExpandItem}>{value}</Text>
          </View>
      )
  }


  return (
    <View style={styles.container}>
       { isExpend && 
        <View style={styles.expand}>
            <ExpendRow text="Ara Toplam" value={price} />
            <ExpendRow text="Kargo" value={0} />
        </View>
    }
      <View style={styles.totalContainer}>
        <IconButton
          size={25}
          iconName="arrow-drop-up"
          style={styles.iconbutton}
          color="#ff3d00"
          handlePress={() => setExpand(!isExpend)}
        />
        <View style={styles.totalPriceContainer}>
          <Text>Toplam</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sepeti Onayla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketTotalFooter;
