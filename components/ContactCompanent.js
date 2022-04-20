import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';


const contactInfo = {
    address: {
      line1: "1 Nucamp Way",
      line2: "Seattle, WA 98001",
      line3: "U.S.A",
    },
    phone: "+1-206-555-1234",
    email: "campsites@nucamp.co",
  };
  
  export default class Contact extends Component {
    static navigationOptions = {
      title: "Contact Us",
    };
  
    render() {

    return(
        <ScrollView>

        </ScrollView>
        );
    }
}
