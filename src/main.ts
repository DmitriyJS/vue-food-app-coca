import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ButtonItem from "@/components/UI/ButtonItem.vue";
import ModalItem from "@/components/UI/ModalItem.vue";
import InputItem from "@/components/UI/InputItem.vue";
import SvgIcon from "@/components/Sprites/SvgIcon.vue"

createApp(App)
    .use(store)
    .use(router)
    .component("s-icon", SvgIcon)
    .component("button-item", ButtonItem)
    .component("modal-item", ModalItem)
    .component("input-item", InputItem)
    .mount("#app");
