import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Layout = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.box1}></Text>
            <Text style = {styles.box2}></Text>
            <Text style = {styles.box3}></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
      
    },
    box1:{
        height:50,
        width:50,
       // flex:1,
        backgroundColor : 'royalblue',
    },
    box2:{
        height:50,
        width:50,
        // flex: 10,
        backgroundColor : 'peru'
    },
    box3:{
        height:50,
        width:50,
       //flex: 1,
        backgroundColor : 'greenyellow' 
    },
   
})

export default Layout;