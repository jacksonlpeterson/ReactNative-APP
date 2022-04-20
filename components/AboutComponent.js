import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';



function Mission() {
    const mission =
      "We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.";
  
    return (
      <Card title="Our Mission">
        <Text style={{ margin: 10 }}>{mission}</Text>
      </Card>
    );
  }


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigationOptions = {
        title: 'About Us'
    }
    render() {

        return(
            <ScrollView>
    
            </ScrollView>
            );
        }
    }

export default About;