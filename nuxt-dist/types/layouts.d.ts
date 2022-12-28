import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/adam.benmessoud/Documents/Ecom-nuxt/Vue3/nuxt-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}