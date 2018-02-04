import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';

import './main.html';
import '../imports/api/collections/links.js';

if(Meteor.isClient) {
  Meteor.subscribe('links');
  
  Template.urls.onCreated(function urlsOnCreated() {
    //urls template created
  });

  Template.urls.helpers({
    urls: function() {
      return Links.find({}, {sort: {createdAt: 1}});
    }
  });

  Template.urls.events({
    'submit form': function(e){
      // Prevent form from submitting.
      e.preventDefault();
    },
    'submit .add-link': function(event) {
      var input = event.target.url.value;

      Meteor.call('addLink', input);
      event.target.url.value = '';
    },
    'click .delete-link': function(e) {
      if(confirm('Are you sure you want to delete this url?')) {
        Meteor.call('deleteLink', this._id);
      }
      return false;
    },
    'submit .edit-link': function(e) {
      if(confirm('Are you sure you want to edit this URL?')) {
        var input = e.target.url.value;
        Meteor.call('updateLink', input, this._id);
      }
    }
  });
}