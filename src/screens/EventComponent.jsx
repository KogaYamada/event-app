import React from 'react';
import {View, StyleSheet, Text, Image,} from 'react-native';

const EventComponent = () => {
    return(
        <View style={styles.frame}>
            
                <View style={styles.innerFrame}>
                    <View style={styles.image}>
                    <Image
                    style={{width: 300, height: 160, borderRadius: 5}}
                    source={{uri: "https:picsum.photos/200/300"}}
                    />
                </View>

            <View style={styles.textWrap}>
                <View style={styles.wrapContainer}>
                    <Text style={styles.leftContainer}>{'３月\n9日'}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.textTopWrap}>
                        <Text style={styles.rightText}>12:00 ~</Text>
                        <Text>あと2日</Text>
                    </View>
                        <Text style={styles.group}>グループ名</Text>
                        <Text style={styles.subText}>タイトルタイトルタイトルタイトル</Text>
                        <Text style={styles.organizer}>開催者名</Text>
                        <Text style={styles.organizerName}>開催場所</Text>
                    </View>
                </View>
            </View>
        </View>
    
    );
};

const styles = StyleSheet.create({
    
    frame: {
<<<<<<< HEAD:src/screens/EventComponent.jsx
        height:300,
        width:600,
        borderRadius: 5,
=======
        height:310,
        width:320,
        borderRadius: 10,
>>>>>>> サーチスクリーンの作成:components/EventComponent.jsx
    },
    innerFrame: {
        borderColor: '#d1cfd6',
        borderWidth: 1,
        height: 260,
        width: 300,
        borderRadius: 5,
        
    },
    image: {
        height: 160,
        width: 300,
        borderBottomColor: '#d1cfd6',
        borderBottomWidth: 1,
    },
    month: {
        backgroundColor: '#d1cfd6'
    },
    wrapContainer: {
        flexDirection: 'row',
        borderRightColor: '#d1cfd6',
        borderRightWidth: 2,
        padding: 5
    },
    leftContainer: {
        fontSize: 25,
        textAlign: 'center', 
    },
    textWrap: {
        flexDirection: 'row',
        justifyContent: "space-between",
        
    },
    rightText: {
        fontSize: 20,
        marginLeft: 15,
        
        
    },
    group: {
        fontSize: 15,
        marginLeft: 10
    },
    subText: {
        fontSize: 15,
        marginLeft: 10,
        
    },
    organizer: {
        fontSize: 10,
        marginLeft: 10,
    },
    organizerName: {
        fontSize:10,
        marginLeft: 10,
    },
    textTopWrap: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 5
    }



    

});

export default EventComponent;