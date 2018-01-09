import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';
import { connect } from "react-redux"
import { displaySelectedPageAction } from "../action/tab-bar-action"
import Swipeout from 'react-native-swipeout';

// Buttons
const swipeoutBtns = [
  {
    text: 'Delete',
    backgroundColor: 'red',
    //underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    //onPress: () => { this.deleteNote(rowData) }
  },
  {
    text: 'Edit',
    backgroundColor: 'red',
    //underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    //onPress: () => { this.deleteNote(rowData) }
  }
]

class DetailedPersonalExpense extends React.PureComponent {

  renderSectionHeader(sectionData, date) {
    return (
      <View style={{ padding: 20, backgroundColor: 'lightgray' }}>
        <Text style={{}}>{date}</Text>
      </View>
    )
  }

  renderHeader() {
    return (<View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Text style={{}}>Description</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{}}>Amount</Text>
      </View>
    </View>)
  }

  renderRow(expense) {
    return (
      <Swipeout
        right={swipeoutBtns}
        autoClose={true}>
        <View style={{ height: 30, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ padding: 10 }}>{expense.description}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ padding: 10 }}> {expense.amount}</Text>
          </View>
        </View>
      </Swipeout>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableHighlight
            onPress={() => this.props.displaySelectedPage("ADD.PERSONAL")}>
            <Text style={{ padding: 10 }}>Add Expense</Text>
          </TouchableHighlight>
        </View>
        <ListView
          dataSource={this.props.dataSource}
          renderSectionHeader={this.renderSectionHeader}
          //renderHeader={this.renderHeader}
          renderRow={this.renderRow}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
})

const convertPersonalExpenseArrayToMap = (personalExpense) => {
  var personalExpenseMap = {}; // Create the blank map
  personalExpense.forEach(function (expense) {
    if (!personalExpenseMap[expense.date]) {
      // Create an entry in the map for the category if it hasn't yet been created
      personalExpenseMap[expense.date] = [];
    }
    personalExpenseMap[expense.date].push(expense);
  });
  return personalExpenseMap;
}

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRowsAndSections(convertPersonalExpenseArrayToMap(state.userPersonalExpense.personalExpense))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displaySelectedPage: (pageKey) => dispatch(displaySelectedPageAction(pageKey)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedPersonalExpense)