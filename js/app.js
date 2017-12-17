// Config default
var defaultConfig = {

	'env': 'production',

	'apiURL': 'https://coworking.ldaniel.eu/',

	'location': {
		'name': 'berlin',
		'displayName': 'Berlin',
		'lat': 52.5172462,
		'lng': 13.4193396,
		'zoom': 11
	},

	'googleMapsAPIKey': 'AIzaSyBMFotJFUPtOhGds8oklETkMO9knxQvnB0',
	
};

config = (typeof customConfig !== 'undefined') ? customConfig : defaultConfig;
config = defaultConfig;

// Vue Use Plugins
Vue.use(VueGoogleMaps, {
	load: {
		key: config.googleMapsAPIKey
	}
});


const routes = [
	{ path: '/', component: SpacesIndex },
	{ path: '/space/:id', component: SpacesDetail, props: true },
]

const scrollBehavior = function (to, from, savedPosition) {
	if (to.hash) {
		return {
			selector: to.hash
			// , offset: { x: 0, y: 10 }
		}
	}
	if (savedPosition) {
		return savedPosition
	} else {
		return { x: 0, y: 0 }
	}
}

const router = new VueRouter({
	routes,
	scrollBehavior,
	linkActiveClass: 'isActive',
})

var app = new Vue({
	el: '#app',
	router: router,
	data: {
		googleMapsAPIKey: config.googleMapsAPIKey,
		apiURL: config.apiURL,
		location: config.location,
		visibleTypes: [
			{ id: 0, name: 'All' },
			{ id: 1, name: 'Business Center' },
			{ id: 2, name: 'Corporate Office' },
			{ id: 3, name: 'Coworking Space' },
			{ id: 5, name: 'Startup Office' },
		],
		visibleWorkspaces: [
			{ id: 0, name: 'All' },
			{ id: 1, name: 'Hot Desk' },
			{ id: 2, name: 'Dedicated Desk' },
			{ id: 5, name: 'Private Office' },
			// { id: 6, name: 'Conference Room' },
			// { id: 7, name: 'Meeting Room' },
		],
	},
});

