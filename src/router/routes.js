const routes = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{ path: "", name: "Work", component: () => import("pages/WorkPage.vue"), meta: { slug: "work", showInNav: true, navOrder: 1 } },
			{
				path: "/perso",
				name: "Personal",
				component: () => import("pages/PersonalPage.vue"),
				meta: { slug: "personal", showInNav: true, navOrder: 2, lang: "en" },
			},
			{ path: "/projects", name: "Projects", component: () => import("pages/ProjectsPage.vue"), meta: { slug: "projects", showInNav: false } },
			{
				path: "/projects/:project",
				name: "SingleProject",
				component: () => import("pages/ProjectsPage.vue"),
				meta: { slug: "projects", showInNav: false },
			},
			{ path: "/blog", name: "Blog", component: () => import("pages/BlogPage.vue"), meta: { slug: "blog", showInNav: true, navOrder: 3 } },
			{ path: "/blog/:slug", name: "Blog Post", component: () => import("pages/PostPage.vue"), meta: { slug: "post", showInNav: false } },
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: "/:catchAll(.*)*",
		component: () => import("pages/ErrorNotFound.vue"),
	},
];

export default routes;
