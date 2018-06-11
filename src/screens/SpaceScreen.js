import React, { Component } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Picker,
  ScrollView
} from "react-native";
import { StackNavigator } from "react-navigation";
import web3 from "../constants";
import styles from "../assets/styles";
import { connect } from "react-redux";
import BackButton from "../components/BackButton";
import MagicButton from "react-native-button";

class SpaceScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: (
        <View
          style={{
            flex: 1,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={{ flex: 1, height: 80, width: 80, borderRadius: 40 }}
            onPress={() => navigation.navigate("MenuOptions")}
          >
            <Image
              style={{
                height: 80,
                width: 80,
                alignSelf: "center",
                borderRadius: 40,
                resizeMode: "contain"
              }}
              source={{ uri: params.logo }}
            />
          </TouchableHighlight>
          <Text style={styles.assetHeaderLabel}>{params.name}</Text>
        </View>
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = this.props.asset;
  }

  _checkProps() {
    const { navigate } = this.props.navigation;
    this.state.hasOwnProperty("transactions")
      ? this.setState({
          tx: (
            <Button
              style={styles.picButton}
              title={"Transaction Viewer"}
              onPress={() =>
                navigate("TransSwiper", {
                  name: this.props.name,
                  logo: this.props.logo
                })
              }
            />
          )
        })
      : this.setState({
          tx: <Text style={styles.label}>No Transactions</Text>
        });
  }
  componentDidMount() {
    this._checkProps();
  }

  render() {
    const { navigate } = this.props.navigation;

    // const { params } = navigation.state;
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.tx}

        {/* <Button title={'Transaction Viewer'} onPress={() => navigate('TransSwiper', { name: this.props.name, logo: this.props.logo })} /> */}

        <Button
          title={"Block Scanner"}
          onPress={() =>
            navigate("BlockScanner", {
              name: this.props.name,
              logo: this.props.logo
            })
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  asset: state.AssetReducers.selectedAsset,
  name: state.AssetReducers.selectedAsset.Name,
  logo: state.AssetReducers.selectedAsset.Logo
});

// const mapDispatchToProps = (dispatch) => ({
//     setSet: (item) => dispatch(setSet(item))

// });

export default connect(mapStateToProps)(SpaceScreen);
