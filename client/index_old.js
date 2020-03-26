// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './index.html';
// import {Meteor} from "meteor/meteor";
// import React from 'react';
// import { render } from 'react-dom';
// import {App} from '../imports/ui/App';
//
// Meteor.startup(() => {
//   render(<App/>, document.getElementById('react-target'));
// });
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
