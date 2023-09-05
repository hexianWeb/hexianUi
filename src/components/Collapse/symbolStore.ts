import type { InjectionKey } from "vue/dist/vue.js";
import type { CollapseContext } from "./type";

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol("collapseContextKey");
