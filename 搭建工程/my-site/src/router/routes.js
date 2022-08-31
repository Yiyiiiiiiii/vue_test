import Home from "@/view/Home";
import About from "@/view/About";
import Blog from "@/view/Blog";
import Message from "@/view/Message";
import Project from "@/view/Project";
import BlogDetail from "@/view/Blog/Detail";
import NotFound from "@/view/NotFound";

export default [
    {
        name: "Home", path: "/", component: Home,
        meta: {
            title: "首页",
        },
    },
    {
        name: "About", path: "/about", component: About, meta: {
            title: "关于我",
        }
    },
    {
        name: "Blog", path: "/blog", component: Blog, meta: {
            title: "文章",
        }
    },
    {
        name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog, meta: {
            title: "文章",
        }
    },
    {
        name: "BlogDetail", path: "/blog/:id", component: BlogDetail, meta: {
            title: "文章详情",
        }
    },
    {
        name: "Message", path: "/message", component: Message, meta: {
            title: "留言板",
        }
    },
    {
        name: "Project", path: "/project", component: Project, meta: {
            title: "项目&&效果",
        }
    },
    {
        name: "NotFound",
        path: "*",
        component: NotFound,
    },
]