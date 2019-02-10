import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../services/api';
import Tweet from '../components/Tweet';

export default class Timeline extends Component {

    state = {
        tweets: []
    };

    static navigationOptions = {
        title: "Inicio",
        headerRight: (
            <TouchableOpacity onPress={() => {}}>
                <Icon style={{ marginRight: 20 }} name="add-circle-outline" size={24} color="#4BB0EE"></Icon>
            </TouchableOpacity>
        )
    };

    async componentDidMount() {
        const response = await api.get('tweets');
        this.setState({ tweets: response.data });
    }

  render() {
        return (
          <View style={styles.container}>
            {/* {this.state.tweets.map(tweet => <Text>{tweet.author}</Text>)} */}

            <FlatList 
                data={this.state.tweets} 
                keyExtractor={tweet => tweet._id} 
                renderItem={({ item }) => <Tweet tweet={item}/> } 
            />

          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });  