import { Text, ScrollView, View } from "react-native";
import { Card } from "react-native-elements";
import React, { Component } from "react";
import * as Animatable from "react-native-animatable";

const contactInfo = {
  address: {
    line1: "1 Nucamp Way",
    line2: "Seattle, WA 98001",
    line3: "U.S.A",
  },
  phone: "+1-206-555-1234",
  email: "campsites@nucamp.co",
};

export default class ContactComponent extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card wrapperStyle={{ margin: 20 }} title="Contact Information">
            <Text>{contactInfo.address.line1}</Text>
            <Text>{contactInfo.address.line2}</Text>
            <Text style={{ marginBottom: 10 }}>
              {contactInfo.address.line3}
            </Text>
            <Text>Phone: {contactInfo.phone}</Text>
            <Text>Email: {contactInfo.email}</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}
