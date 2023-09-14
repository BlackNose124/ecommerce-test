<template>
    <section class="flex flex-row">
        <div class=" flex flex-col basis-1/2">
            <div v-for="product in products" :key="product">
            
                <div v-for="productData in product.model" :key="productData.id">
                
                    <div v-for="productDataAll in productData.data" :key="productDataAll.id">
                    <!-- <p>ID: {{ productDataAll.id }}</p> -->
                    <!-- <p>Image_url: {{ productDataAll.image_url }}</p> -->
                        <div class="flex flex-row">
                            <img :src="productDataAll.image_url" />
                            <!-- <img
                                v-show="productDataAll.image_url && showImage[productDataAll.id]"
                                :src="productDataAll.image_url"
                                
                            /> -->
                        </div>
                    
                    <!-- <p>{{ productDataAll.model_name }}</p> -->
                        <div v-for="productDataImages in productDataAll.images" :key="productDataImages.id">
                            <!-- <img :src="productDataImages" /> -->
                            
                        </div>
                    <!-- <p>Size: {{ productDataAll.size }}</p> -->
                    </div>
            <!-- Add more product details as needed -->
                </div> 
             </div>
    
        </div>
        <div class="flex flex-col basis-1/2 pt-20 text-[50px] font-semibold">
            <h2>ซื้อ IPhone 13</h2>
            <div v-for="product in products" :key="product">
            
                <div v-for="productData in product.model" :key="productData.id">
                    <p class="text-[28px] font-semibold">รุ่น</p>
                    <button class="text-[22px] font-medium border px-5 py-3 rounded-lg mr-10 focus:border-theme-primary" v-for="productDataAll in productData.data" :key="productDataAll.id">
                        <span class="mr-[150px]">{{ productDataAll.model_name }}</span>  ฿{{ productDataAll.price }}
                        
                    </button>
                    
                    <p class="text-[28px] font-semibold">สี</p>
                    <button class="text-[22px] font-medium border px-5 py-3 rounded-lg mr-10 focus:border-theme-primary" v-for="productDataAll in productData.data" :key="productDataAll.id">
                        <span class="mr-[100px]">{{ productDataAll.color }}</span> <span class="fa-solid fa-circle" :style="{ color: '#' + productDataAll.color_hex }"></span>
                        
                        
                    </button>
                    <p class="text-[28px] font-semibold">ขนาด</p>
                    <button class="text-[22px] font-medium border px-5 py-3 rounded-lg mr-4 mb-4 focus:border-theme-primary" v-for="productDataAll in productData.data" :key="productDataAll.id">
                        <div>{{ productDataAll.size }}</div>
                        
                    </button>
                </div>
            </div>    
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
name:'LeftSide',
  data() {
      return {
          title: "Product IPhone",
          products: [],
          showImage: {}
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
  methods: {
    toggleImage(imageId) {
      // เมื่อคลิกที่รูปภาพ สลับสถานะการแสดงรูปภาพ
      this.showImage[imageId] = !this.showImage[imageId];
    },

    
    
  },
  
}


</script>

<style scoped>
.left-side, .right-side {
  flex: 1;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>