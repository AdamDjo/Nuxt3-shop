import { defineStore } from "pinia";

import axios from 'axios'
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const productsStore = defineStore(
  'ProductsApi',{
    state: () => ({
      posts: [],
    }),
    actions: {
      async getArticle() {
       // const result = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        const data = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
 
        this.posts = data.data;

      },

       addToCart(product)  {
        //check if already in array
        for (let j = 0; j < cart.value.length; j++) {
          if (cart.value[j].id === product.id) {
            return cart.value[j].quantity++;
          }
        }
        cart.value.push({
          id: product.id,
          img: product.api_featured_image,
          description: product.description,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      },
     
      
      
    },

   

});

