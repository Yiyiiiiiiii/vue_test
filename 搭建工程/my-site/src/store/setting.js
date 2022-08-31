import { getSetting } from "@/api/setting"
import { titleController } from "@/utils";

export default {
    namespaced: true,
    state: {
        loaing: false,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchSetting(ctx) {
            if (ctx.state.data) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);

            if (resp.favicon) {
                // <link rel="shortcut icon" href="1.png" type="image/x-icon"/>
                let link = document.querySelector("link[ref='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.href = resp.favicon;
                link.type = "image/x-icon";
                document.querySelector("head").appendChild(link);
            };
            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle);
            }
        },
    }

}