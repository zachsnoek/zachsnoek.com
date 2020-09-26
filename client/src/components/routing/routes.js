// Page components
import { Home } from "../pages/";
import { Portfolio } from "../pages/";
import { Blog } from "../pages/";
import { PostPage } from "../pages/";
import { Contact } from "../pages/";
import { NotFound } from "../pages/";

// Auth components
import { Login } from "../auth/";

// Admin components
import { Dashboard } from "../admin/";
import { NewPost } from "../admin/";
import { EditPost } from "../admin/";
import { PortfolioManager } from "../admin/";
import { NewProject } from "../admin/";
import { EditProject } from "../admin/";

const protectedRoute = true;

export const routes = [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/blog", component: Blog },
    { path: "/blog/:id", component: PostPage },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard, protectedRoute },
    { path: "/new-post", component: NewPost, protectedRoute },
    { path: "/edit-post/:id", component: EditPost, protectedRoute },
    { path: "/portfolio-manager", component: PortfolioManager, protectedRoute },
    { path: "/new-project", component: NewProject, protectedRoute },
    { path: "/edit-project/:id", component: EditProject, protectedRoute },
    { path: "*", component: NotFound },
];
