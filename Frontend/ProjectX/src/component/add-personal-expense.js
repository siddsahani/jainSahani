import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  TextInput,
  Modal,
  Alert
} from 'react-native';
import { connect } from "react-redux"
import OS from "../platform/os"
import Icon from "react-native-vector-icons/Ionicons"
import CustomCalendar from './calendar'
import { isDefined } from '../utils/util'
import { addPersonalExpenseAction } from '../action/add-action'

class AddPersonalExpense extends Component<{}> {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      description: undefined,
      amount: undefined,
    }
  }

  addPersonalExpense() {
    if (isDefined(this.state.description) && this.state.description !== '' && isDefined(this.state.amount) && this.state.amount !== '') {
      this.props.addPersonalExpense(this.state.description, this.state.amount, this.props.selectedDate)
      this.setState({ description: undefined })
      this.setState({ amount: undefined })
      Alert.alert("Expense added")
    } else {
      Alert.alert("Plesae enter details")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref='descriptionInput'
          keyboardType={'ascii-capable'}
          style={{ width: 300, height: 40 }}
          placeholder="Description"
          autoCorrect={false}
          returnKeyType={'next'}
          value={this.state.description}
          onChangeText={(description) => this.setState({ description })}
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
          value={this.state.amount}
          onChangeText={(amount) => this.setState({ amount })}
          />
        <CustomCalendar />
        <TouchableHighlight
          style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
          onPress={() => this.addPersonalExpense()}
          >
          <Text>Add </Text>
        </TouchableHighlight>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
})

const mapStateToProps = (state) => {
  return {
    selectedDate: state.calendar.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPersonalExpense: (description, amount, date) => dispatch(addPersonalExpenseAction(description, amount, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonalExpense)