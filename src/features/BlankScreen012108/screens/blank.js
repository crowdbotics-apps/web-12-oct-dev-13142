import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_3: "" }
  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_2}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
    </View>
  )
}

Blank = withStyles(_Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
