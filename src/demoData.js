const columnButtons = [
	{
		label: 'Name',
		value: 'label'
	},
	{
		label: 'Drink',
		value: 'drink'
	},
	{
		label: 'Number',
		value: 'phone'
	},
	{
		label: 'Email',
		value: 'email'
	}
];

const columnActionClasses = {
	buttonCN: 'selector-button selector-button--adaptive',
	iconCN: 'selector-indicator',
	containerCN: 'selector-container',
	labelCN: 'selector-label'
};

const users = [
	{
		label: 'Rick James',
		drink: 'Cold Brew',
		phone: '750-4565',
		email: 'rickjames@superfreak.com',
		image:
			'https://dev61238.service-now.com/e55d357edb831300666c85184b96194f.iix?t=small',
		mapImage:
			'http://chinaad.us/wp-content/uploads/2018/03/google-maps-san-diego-buy-nothing-groups-in-san-diego-county-this-google-map-shows-the-512-x-512-with-pixels.jpg',
		drinkImage:
			'https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_coffee-to-go-512.png',
		notes: 'How does he like his coffee? Hot as can be!'
	},
	{
		label: 'Charlie Murphy',
		drink: 'White Chocolate Mocha',
		phone: '(619)750-4565',
		email: 'fakeemailthatisreallylongm@gmail.com',
		image:
			'https://dev61238.service-now.com/e55d357edb831300666c85184b96194f.iix?t=small',
		mapImage:
			'http://chinaad.us/wp-content/uploads/2018/03/google-maps-san-diego-buy-nothing-groups-in-san-diego-county-this-google-map-shows-the-512-x-512-with-pixels.jpg',
		drinkImage:
			'https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_coffee-to-go-512.png',
		notes: 'How does he like his coffee? Hot as can be!'
	},
	{
		label: 'Joe Rogan',
		drink: 'Salted Carmel',
		phone: '1(619)750-4565',
		email: 'newWow@heyy.com',
		image:
			'https://dev61238.service-now.com/e55d357edb831300666c85184b96194f.iix?t=small',
		mapImage:
			'http://chinaad.us/wp-content/uploads/2018/03/google-maps-san-diego-buy-nothing-groups-in-san-diego-county-this-google-map-shows-the-512-x-512-with-pixels.jpg',
		drinkImage:
			'https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_coffee-to-go-512.png',
		notes: 'How does he like his coffee? Hot as can be!'
	},
	{
		label: 'Brintany Spears',
		drink: 'Coffee Black',
		phone: '1(619)750-4565',
		email: 'daniel@cuitiepie.com',
		image:
			'https://dev61238.service-now.com/e55d357edb831300666c85184b96194f.iix?t=small',
		mapImage:
			'http://chinaad.us/wp-content/uploads/2018/03/google-maps-san-diego-buy-nothing-groups-in-san-diego-county-this-google-map-shows-the-512-x-512-with-pixels.jpg',
		drinkImage:
			'https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_coffee-to-go-512.png',
		notes: 'How does he like his coffee? Hot as can be!'
	},
	{
		label: 'Luke Wilson',
		drink: 'Vanilla Bean Milk Latte',
		phone: '1(619)750-4565',
		email: 'ledzep101@hotstoneyoga.com',
		image:
			'https://dev61238.service-now.com/e55d357edb831300666c85184b96194f.iix?t=small',
		mapImage:
			'http://chinaad.us/wp-content/uploads/2018/03/google-maps-san-diego-buy-nothing-groups-in-san-diego-county-this-google-map-shows-the-512-x-512-with-pixels.jpg',
		drinkImage:
			'https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_coffee-to-go-512.png',
		notes: 'How does he like his coffee? Hot as can be!'
	}
];

const userListClasses = {
	listGroupCN: '',
	anchorCN: 'list-group-item--adaptive',
	mediaGroupCN: 'name-column',
	imageCN: 'small circle',
	columnOneCN: 'bold',
	columnTwoCN: '',
	columnThreeCN: '',
	columnFourCN: ''
};

const tabSet = [
	{
		label: 'Location'
	},
	{
		label: 'Drink'
	},
	{
		label: 'Notes'
	}
];

export { columnButtons, users, tabSet, columnActionClasses, userListClasses };
