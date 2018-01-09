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
import { Calendar } from 'react-native-calendars';
import { addSelectedDateAction } from '../action/calendar-action'

class CustomCalendar extends Component<{}> {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      showCalendar: false,
      //selectedDate: this.getTodayDate(),
    }
  }

  componentDidMount() {
    this.props.addSelectedDate(this.getTodayDate())
  }

  getTodayDate() {
    let todayDate = new Date();
    let dd = todayDate.getDate();
    let mm = todayDate.getMonth() + 1;
    let yyyy = todayDate.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    todayDate = yyyy + '-' + mm + '-' + dd;
    return todayDate
  }

  setDate = (date) => {
    this.setState({ showCalendar: false })
    this.props.addSelectedDate(date.dateString)

    //this.setState({ selectedDate: date.dateString })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: 300, alignItems: 'center' }}>
          <Icon.Button
            name={OS.icon("calendar")}
            size={32}
            backgroundColor="#00000000"
            color={'black'}
            iconName="Calendar"
            iconStyle={{}}
            onPress={() => this.setState({ showCalendar: true })}
            underlayColor="#00000000" />
          <Text onPress={() => this.setState({ showCalendar: true })}
            >{this.props.selectedDate}</Text>
        </View>
        {this.state.showCalendar && < Modal
          transparent={true}
          animationType={'none'}
          presentationStyle={'overFullScreen'}
          supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
          visible={true}>
          <View style={{ flex: 1, backgroundColor: "#00000044", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <View style={{ height: 350, backgroundColor: "white", padding: 30, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
              <Calendar
                // Initially visible month. Default = Date()
                //current={'2012-03-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                //minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                //maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => this.setDate(day)}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                //monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => { console.log('month changed', month) } }
                // Hide month navigation arrows. Default = false
                hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                // renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                //hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                //hideDayNames={true}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                />
            </View>
          </View>
        </Modal>}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    selectedDate: state.calendar.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectedDate: (date) => dispatch(addSelectedDateAction(date)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomCalendar)