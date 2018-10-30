import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableHighlight, Alert, ScrollView} from 'react-native';
import { fetchPlaces } from '../../api/google_api';
import axios from 'axios';

class RouteSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: '',
            predictions: [],
            button: ''
        };

        this.fetchPlaces = this.fetchPlaces.bind(this);
    }
    
    componentDidMount() {
        this.fetchPlaces();
    }

    fetchPlaces() {
        axios
        .get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=SanFrancisco&key=AIzaSyDQKxMvYxiQzgIHDF1_QHYG1ysmifP6XDY')
        .then(res => {
            const { predictions } = res.data;
            this.setState({predictions: predictions})
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <ScrollView style={{padding: 10, margin: 10}}>
                <TextInput
                    style={styles.input}
                    placeholder="Search pickup spot"
                    onChangeText={(input) => this.setState({currentLocation: input})}
                    />

                <TextInput
                    style={styles.input}
                    placeholder="Search destination"
                    onChangeText={(input) => this.setState({destination: input})}
                />

                <View>
                    {this.state.predictions.map((obj, idx) => {
                        return <Text key={idx}>{obj.description}</Text>;
                    })}
                </View>

                <Text >Button: {this.state.button}</Text>
                <Text >currentLocation: {this.state.currentLocation}</Text>
                <Text >destination: {this.state.destination}</Text>
                <Text >Google Response: {this.state.googleResponse}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 100,
        fontSize: 100,
        padding: 10
    },
});

export default RouteSearch;