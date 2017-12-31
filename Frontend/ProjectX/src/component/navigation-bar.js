import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { connect } from "react-redux"

class NavigationBar extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', width: Dimensions.get('window').width * 20 / 100 }}>
          <TouchableHighlight
            style={{ alignItems: 'center' }}>
            <Text style={{}}> LEFT ICON</Text>
          </TouchableHighlight>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width * 60 / 100 }}>
          <Text style={{}}> {this.props.title}</Text>
        </View>
        <View style={{ justifyContent: 'center', width: Dimensions.get('window').width * 20 / 100 }}>
          <TouchableHighlight
            style={{ alignItems: 'center' }}>
            <Text style={{}}> RIGHT ICON</Text>
          </TouchableHighlight>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCCC',
  }
})

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)