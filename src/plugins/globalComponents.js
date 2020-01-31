import { DropDown } from "../components";
import { Parallax } from "../components";
import { FilterSection } from "../components";
import { Slider } from "../components";
import { VPopover } from "v-tooltip";
import { Tabs } from "../components";
import GoogleLogin from "vue-google-login";
import { Pagination } from "@/components";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component(Parallax.name, Parallax);
    Vue.component("v-popover", VPopover);
    Vue.component("filter-section", FilterSection);
    Vue.component("slider", Slider);
    Vue.component("tabs", Tabs);
    Vue.component("GoogleLogin", GoogleLogin);
    Vue.component("pagination", Pagination);
  }
};

export default GlobalComponents;
