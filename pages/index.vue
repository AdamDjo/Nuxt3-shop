<template>
  <div id="app">
    <Header></Header>
    <div class="home-container">
      <h1>Articles</h1>
      <!--Search display-->
      <input
        v-model="searchKey"
        id="search"
        placeholder="Rechercher"
        type="search"
        autocomplete="off"
      />

      <div class="card-cart-container">
        <div class="card-container">
          <div v-for="product in filteredItem" :key="product.id" class="card">
            <div class="img-container">
              <img v-bind:src="product.api_featured_image" alt="" />
            </div>
            <div class="card-text">
              <h3>{{ product.name }}</h3>
              <span>{{ product.price }}</span>
            </div>
            <div class="card-icons">
              <div class="like-container">
                <input
                  type="checkbox"
                  name="checkbox"
                  v-model="liked"
                  v-bind:id="product.id"
                />
                <label :for="product.id">
                  <i class="fas fa-heart"></i></label
                >
              </div>
              <div class="add-to-cart">
                <button @click="addToCart(product)">
                  <i class="fas fa-shopping-cart"> </i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--Card display-->
        <Transition name="cart-anim">
        <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
          <h2>Panier</h2>
          <TransitionGroup name="item-anim" tag="div" class="item-group">
       
            <div v-for="product,id in cart" :key='product.id' class="item">
              <div class="img-container">
                <img :src="product.img" alt="" />
              </div>
              <div class="item-description">
                <h4>{{ product.name }}</h4>
                <p>{{ product.price }}$</p>
              </div>
              <div class="item-quantity">
                <h6>quantity: {{ product.quantity }}</h6>
                <div class="cart-icons">
                <button @click="Cardplus(product)">
                  <i class="fa fa-plus">  </i>
                
                </button>
                <button @click="Cardminus(product, id)">     <i class="fa fa-minus"></i></button>
                <button @click="removeItem(id)"> <i class ="fa fa-trash"></i></button>
           
              </div>
              </div>
          
            </div>
         
        </TransitionGroup>

        <!--total-->
        <div class="grand-total">
            <div class="total">
              <h2>total</h2>
              <h2>{{cartTotalAmount}}$</h2>
            </div>
            <h6>Total articles:{{ itemTotalAmount }}</h6>
          </div>
       
        </div>
      </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { productsStore } from "../stores/ProductsApi";

//search method
const searchKey = ref("");
const filteredItem = computed(()=>{
  return APIstore.posts.filter((article)=>{
    return article.name.toLowerCase().includes(searchKey.value.toLocaleLowerCase())
  })

})



let liked = ref([]);

// const store = articlesStore();
const APIstore = productsStore();

onMounted(() => {
  APIstore.getArticle();
});

const cart = ref([]);

const addToCart = (product) => {
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
};
const Cardplus = (product)=>{
product.quantity = product.quantity +1
}
const Cardminus = (product,id)=>{
if (product.quantity>1){
  product.quantity = product.quantity - 1
}
else{

  removeItem(id)
}
}
const removeItem = (id)=>{
cart.value.splice(id,1)
}
//cart function

/*total amount*/
const cartTotalAmount = computed(()=>{
  const finaltotal=cart.value.reduce((a , b)=>{
    return a+(parseFloat(b.price)*parseInt(b.quantity));
  },0
  )
 return finaltotal.toFixed(2)
})

/*total articles*/

const itemTotalAmount = computed(()=>{
  const itemTotal=cart.value.reduce((a , b)=>{
    return a+(parseInt(b.quantity));
  },0
  )

return itemTotal
})
</script>
