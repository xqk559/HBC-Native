import React from 'react';
import { StyleSheet, Text, TextInput, Image, View, Linking } from 'react-native';
import './doge2.jpg';
import jsonData from './output.json';

const reactStringReplace = require('react-string-replace')
require('bootstrap')

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: jsonData,
      investment: 50,
      date1: null
    };
  }
  //whatever.name, " ",whatever.value, " ",
  investHandler = (event) => {
    this.setState({
      investment: parseFloat(event.nativeEvent.text).toFixed(2)
    })
  }

  dateHandler = (event) => {
    this.setState({
      date1: event.nativeEvent.text
    })
  }

  textReplacer = () => {
    let jsn = this.state.data.title;
    let replacedText = reactStringReplace(jsn, "\n", (match, i) => (
      <a></a>
    ));
  }

  render() {
    let jsn = this.state.data.title;
    const reactStringReplace = require('react-string-replace')

    let replacedText = reactStringReplace(jsn, "\n", (match, i) => (
      <a></a>
    ));

    let str = this.state.data.title;
    let searchAlt = str.search(this.state.date1);

    let k = str.slice(searchAlt + 13, searchAlt + 19);

    let coins = this.state.investment / k;
    let rounder = coins.toFixed(5);

    let todayValue;
    todayValue = rounder * replacedText[24];
    let tvRound = todayValue.toFixed(2);

    let per = (100 * (replacedText[24] / k)).toFixed(2);
    const url = 'https://www.youtube.com/watch?v=qileP4bAzek'
    const uhf = per > 1000 ? <Text style={{color: 'blue'}} onPress={() => Linking.openURL(url)}>Follow Up Link</Text> : null;
    return (
      <View style={styles.container}>
        <Text>Hindsight BC~{"\n"}</Text>
        <Image source={require('./doge2.jpg')} style={{ width: 100, height: 100 }} />
        <Text>Date (ex: Apr 02, 2014): </Text>
        <TextInput ref={(ref) => { this.FirstInput = ref; }} type="text" onChange={this.dateHandler} key="date" placeholder="Type date here" />
        <Text> Investment (US$):</Text>
        <TextInput type="text" onChange={this.investHandler} key="invst" placeholder="Type investment here" />
        <Text>Today, Bitcoin is worth ${replacedText[24]}.</Text>
        <Text>On {this.state.date1}, Bitcoin was worth ${k}.</Text>
        <Text>If you invested ${this.state.investment} on {this.state.date1},</Text>
        <Text>You would have {rounder} coins, valued today at: ${tvRound}.</Text>
        <Text>This would be a {per}% difference.</Text>
        {uhf}
        <Text>{this.state.investment}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
