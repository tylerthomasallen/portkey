import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableHighlight, Alert, ScrollView} from 'react-native';
import { fetchPlaces } from '../../api/google_api';
import axios from 'axios';
import { debounce } from 'lodash';

class RouteSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: '2713 Folsom St, San Francisco, CA 94110',
            predictions: [],
            destination: '',
            previousDestination: '',
            button: ''
        };

        this.fetchPlaces = debounce(this.fetchPlaces.bind(this), 500);
    }

    componentDidUpdate() {
        const { destination, previousDestination, predictions} = this.state;

        if (destination.length >= 1 && predictions.length <= 0) {
            this.fetchPlaces(destination);
        }
    }

    fetchPlaces(inputText) {
        axios
            .get('https://maps.googleapis.com/maps/api/place/autocomplete/json?', {
                params: {
                    key: 'AIzaSyDQKxMvYxiQzgIHDF1_QHYG1ysmifP6XDY',
                    input: inputText
                }
            })
            .then(res => {
                const { predictions } = res.data;
                this.setState({predictions: predictions});
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
                    value={this.state.currentLocation}
                    />

                <TextInput
                    style={styles.input}
                    placeholder="Search destination"
                    onChangeText={(input) => this.setState({destination: input, predictions: []})}
                    value={this.state.destination}
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
        fontSize: 20,
        padding: 10,
        marginTop: 20
    },
});

export default RouteSearch;