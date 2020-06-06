import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
import { Franchises } from '../lib/collections';

import './main.html';

Template.body.onCreated(function helloOnCreated() {
  this.sort = new ReactiveVar(-1);
});

Template.body.helpers({
  franchises(){
    return Franchises.find({}, {sort: {score: Template.instance().sort.get()}});
  }
})

Template.body.events({
  'click .order'(event, instance){
    instance.sort.set(instance.sort.get() * -1);
  }
})

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();
    
    const target = event.target;
    const title = target.title.value;
    
    Franchises.insert({
      title,
      score: 0,
      createdAt: new Date()
    });

    target.title.value = '';

    var instance = M.Modal.getInstance(elem);
    instance.close();
  }
})

Template.franchise.events({
  'click .delete-franchise': function(){
    Franchises.remove(this._id);
  },

  'click .upvote': function(){
    Franchises.update(this._id, {
      title: this.title,
      score: this.score + 1,
      createdAt: this.createdAt
    });
  },

  'click .downvote': function(){
    Franchises.update(this._id, {
      title: this.title,
      score: this.score - 1,
      createdAt: this.createdAt
    });
  }
})
