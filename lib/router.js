Router.configure({
loadingTemplate: 'loading',
});


Router.route('/', {name: 'main'});
// Router.route('/posts/:_id', {
// name: 'postPage',
// data: function() { return Posts.findOne(this.params._id); }
// });