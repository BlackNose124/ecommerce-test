<template>
  <div>
    <div class="pb-20 flex flex-col bg-slate-50">
      <SiteNav />
    </div>
    <div>
      
      
    </div>

    <div class="flex flex-col bg-slate-50">
      <LeftSide />
      <ProductDetail />
    </div>
    <div>
        
        
    </div>
    
    
  </div>

</template>


<script>

import LeftSide from "./components/LeftSide.vue";
import SiteNav from "./components/SiteNav.vue"
import ProductDetail from "./components/product-detail.vue";



// export default {
//   name: 'App',
//   components: {
//     ProductList
//   }
// }

import axios from 'axios'

  export default {
    data() {
        return {
            title: "Product IPhone",
            products: [],
        };
    },
    mounted() {
        // let data_product = this
        axios
            .get('https://interview.com7.in/api/pre-order')
            // .then(respone => console.log(respone.data.data));
            // .then(response => this.products = response.data.data)
            .then((resp) => {
            // console.log(resp.data.data)
            this.products = resp.data.data.main_product;
            // console.log(this.products)
        })
            .catch((err) => {
            console.error('Error fetching product data:', err);
        });
    },
    components: { SiteNav, ProductDetail, LeftSide }
}

</script>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
</style>
