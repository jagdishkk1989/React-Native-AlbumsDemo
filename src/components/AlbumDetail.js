import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
//import MyButton from './MyButton';
//import Card from './Card';
//import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
const { title, artist, thumbnail_image, image, url } = album;
const { containerCardStyle, containerSectionStyle, thumbnailContainerStyle,
     thumbnailStyle, headerStyle, headerTextStyle, imageStyle, buttonStyle, textStyle } = styles;
return (
 <View style={containerCardStyle}>
     <View style={containerSectionStyle}>
         <View style={thumbnailContainerStyle} >
              <Image 
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }} 
              />
         </View>
         <View style={headerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
     </View>
     <View style={containerSectionStyle}>
      <Image style={imageStyle} source={{ uri: image }} /> 
     </View>
     <View style={containerSectionStyle}>
     <TouchableOpacity onPress={() => Linking.openURL(url)} style={buttonStyle}>
     <Text style={textStyle}>Buy Now</Text>
     </TouchableOpacity>
     </View>
 </View>
 );
};

const styles = {

    containerCardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        maringRight: 5,
        marginTop: 10
    },
    containerSectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#c0c0c0',
        positive: 'relative'
    },
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      //  marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aaf'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aaf',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
};

export default AlbumDetail;
