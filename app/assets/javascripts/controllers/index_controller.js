Betting.IndexController = Ember.ObjectController.extend({
  isFancy: true,
  greeting: function(){
    return this.get("isFancy") ? "Some Salutation":"Hello";
  }.property('isFancy')
});