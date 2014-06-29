// For more information see: http://emberjs.com/guides/routing/

Betting.Router.map(function() {
  this.resource('posts',{ path: '/posts' },function(){
  	 this.route('old');
  	 this.route('new');
  });
});
