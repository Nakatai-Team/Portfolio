import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue";

export default [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: AboutView,
	}
]
