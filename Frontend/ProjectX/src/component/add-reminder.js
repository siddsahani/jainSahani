import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  TextInput,
  Modal
} from 'react-native';
import { connect } from "react-redux"
import OS from "../platform/os"
import Icon from "react-native-vector-icons/Ionicons"
import CustomCalendar from './calendar'


class AddReminder extends Component<{}> {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      description: '',
      amount: '0.0',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={'ascii-capable'}
          style={{ width: 300, height: 40 }}
          placeholder="Description"
          autoCorrect={false}
          returnKeyType={'next'}
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={(event) => {
            this.refs.amountInput.focus();
          } }
          />
        <TextInput
          ref='amountInput'
          keyboardType={'decimal-pad'}
          style={{ width: 300, height: 40 }}
          placeholder="Amount"
          autoCorrect={false}
          returnKeyType={'go'}
          onChangeText={(text) => this.setState({ text })}
          />
        <CustomCalendar />
        <TouchableHighlight
          style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
          //onPress={() => this.setState({ showCalender: true })}
          >
          <Text>Set </Text>
        </TouchableHighlight>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder)