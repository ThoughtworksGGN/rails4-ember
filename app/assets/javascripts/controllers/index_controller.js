Betting.IndexController = Ember.ObjectController.extend({
  isFancy: true,
  greeting: function(){
    return this.get("isFancy") ?"Salutation":"Hello";
  }.property('isFancy')
});