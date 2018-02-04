import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';

import '../imports/api/collections/links.js';

Meteor.publish('links', function() {
  return Links.find({userId: this.userId});
});

Meteor.startup(() => {
  Meteor.methods({
    addLink: function(input) {
      if(!Meteor.userId()) {
        throw new Meteor.Error("No Access.");
      }
      var suffix = Random.hexString( 6 );
  
      var short = "will.ing/" + suffix;
      Links.insert({
        url: input,
        hash: short,
        userId: Meteor.userId(),
        createdAt: new Date()
      });
    },
    deleteLink: function(id) {
      Links.remove(id);
    },
    updateLink: function(input, id) {
      console.log(Links.find().fetch());
      Links.update({_id: id}, {$set: {url: input}});
    }
  });
});