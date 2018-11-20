import React from 'react';
import { View } from 'react-native';

const CardSection = () => {
   return (
     <View style={styles.containerStyle} />
   );
};

const styles = {

    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff000',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#c0c0c0',
        positive: 'relative'
    }
};

export default CardSection;
