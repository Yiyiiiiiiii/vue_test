import Home from "@/view/Home";
import About from "@/view/About";
import Blog from "@/view/Blog";
import Message from "@/view/Message";
import Project from "@/view/Project";

export default [
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "Blog", path: "/blog", component: Blog },
    { name: "Message", path: "/message", component: Message },
    { name: "Project", path: "/project", component: Project },
]