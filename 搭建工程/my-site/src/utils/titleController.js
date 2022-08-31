// 设置网站标题

let routeTitle = "";
let siteTitle = "";

function setTitle() {
    if (!routeTitle && !siteTitle) {
        document.title = "loading...";
    } else if (!routeTitle && siteTitle) {
        document.title = siteTitle;
    } else if (routeTitle && !siteTitle) {
        document.title = routeTitle;
    } else {
        document.title = `${routeTitle}-${siteTitle}`;
    }
}


export default {
    setRouteTitle(title) {
        routeTitle = title;
        setTitle();
    },
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    }
}