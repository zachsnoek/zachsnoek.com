// Main components
import Home from "../Home";
import Portfolio from "../portfolio/Portfolio";
import Blog from "../blog/Blog";
import Post from "../blog/Post";
import Contact from "../contact/Contact";
import NotFound from "../NotFound";

// Auth components
import Login from "../auth/Login";

// Admin components
import Dashboard from "../admin/Dashboard";
import NewPost from "../admin/NewPost";
import EditPost from "../admin/EditPost";
import PortfolioManager from "../admin/PortfolioManager";
import NewProject from "../admin/NewProject";

const protectedRoute = true;
const hidden = true;

export default [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/blog", component: Blog },
    { path: "/blog/:id", component: Post },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard, protectedRoute },
    { path: "/new-post", component: NewPost, protectedRoute },
    { path: "/edit-post/:id", component: EditPost, protectedRoute },
    { path: "/portfolio-manager", component: PortfolioManager, protectedRoute },
    { path: "/new-project", component: NewProject, protectedRoute },
    { path: "*", component: NotFound },
];
