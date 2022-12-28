import { defineStore } from "pinia";

const cart  = []
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCartStore  = defineStore({
  id:'cart',
  state: () => ({

    cart:[] = cart

  }),
  getters: {},
  actions: {
    loadCart(){
      const cs = localStorage.getItem('cart')
      if ( !cs)
      this.cart=[]
      else this.cart = json.parse(cs)
    },
    addToCart(product){
      const cs = localStorage.getItem('cart')
      if(!cs)
      this.cart={

        products:[
          product
        ]
      }
    }
   },
});

