if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Floatingscope',
		url: 'http://sachagreif.com/Introducing-telescope',
		author: 'Sacha Greif'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com',
		author: 'Tom Coleman'
	});

	Posts.insert({
		title: 'The meteor Book',
		url: 'http://themeteorbook.com',
		author: 'Tom Coleman'
	});
};