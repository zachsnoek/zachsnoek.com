// Page components
import {
    Home,
    Portfolio,
    Blog,
    PostPage,
    Contact,
    NotFound,
} from "components/pages";

// Auth components
import { Login } from "components/auth";

// Admin components
import {
    Dashboard,
    NewPost,
    EditPost,
    PortfolioManager,
    NewProject,
    EditProject,
} from "components/admin";

const protectedRoute = true;

export const routes = [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/blog", component: Blog },
    { path: "/blog/:slug", component: PostPage },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard, protectedRoute },
    { path: "/new-post", component: NewPost, protectedRoute },
    { path: "/edit-post/:slug/:id", component: EditPost, protectedRoute },
    { path: "/portfolio-manager", component: PortfolioManager, protectedRoute },
    { path: "/new-project", component: NewProject, protectedRoute },
    { path: "/edit-project/:id", component: EditProject, protectedRoute },
    { path: "*", component: NotFound },
];
