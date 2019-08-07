/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"83FDA9CB-E584-4B4B-AA9A-716C3A6AF6A0",
}

// Sets the default scene you want for AR and VR
const ARScene = require('./js/ARScene')

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.

export default class ViroAppv2 extends Component {
  constructor() {
    super();
    this.state = {
      sharedProps : sharedProps
    }
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps} initialScene={{scene: ARScene}}/>
    )
  }

}


module.exports = ViroAppv2
