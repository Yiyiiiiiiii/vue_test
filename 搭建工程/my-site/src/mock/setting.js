import Mock from "mockjs";
import logo from "@/assets/logo.png";
import qq from "@/assets/qq.jpg";
import weixin from "@/assets/weixin.jpg";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img2.baidu.com/it/u=4172589341,3697363131&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1660237200&t=7519b59d3232648774c40f0ce6366b1c",
        siteTitle: "我的个人空间",
        github: "https://github.com/Yiyiiiiiiii",
        qq: "2996108859",
        qqQrCode:
            qq,
        weixin: "YZY-iii",
        weixinQrCode:
            weixin,
        mail: "2996108859@qq.com",
        icp: "黑ICP备17001719号",
        githubName: "Yiyiiiiiiii",
        favicon: "https://img2.baidu.com/it/u=4172589341,3697363131&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1660237200&t=7519b59d3232648774c40f0ce6366b1c",
    },
});
