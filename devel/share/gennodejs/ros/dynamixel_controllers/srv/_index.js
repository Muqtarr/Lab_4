
"use strict";

let SetComplianceMargin = require('./SetComplianceMargin.js')
let TorqueEnable = require('./TorqueEnable.js')
let StopController = require('./StopController.js')
let SetSpeed = require('./SetSpeed.js')
let SetComplianceSlope = require('./SetComplianceSlope.js')
let SetCompliancePunch = require('./SetCompliancePunch.js')
let RestartController = require('./RestartController.js')
let SetTorqueLimit = require('./SetTorqueLimit.js')
let StartController = require('./StartController.js')

module.exports = {
  SetComplianceMargin: SetComplianceMargin,
  TorqueEnable: TorqueEnable,
  StopController: StopController,
  SetSpeed: SetSpeed,
  SetComplianceSlope: SetComplianceSlope,
  SetCompliancePunch: SetCompliancePunch,
  RestartController: RestartController,
  SetTorqueLimit: SetTorqueLimit,
  StartController: StartController,
};
