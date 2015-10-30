var postsData = [
	{
		title: 'Introducing Floatingscope',
		url: 'http://sachagreif.com/Introducing-telescope'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The meteor Book',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});