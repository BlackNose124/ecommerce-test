
<template>
<!--<div v-for="product in products" :key="product">
    <h2>{{ product.name }}</h2>
    <div v-for="productData in product.model" :key="productData.id">
        <p>Color: {{ productData.color }}</p>
        <p>code color: {{ productData.color_hex }}</p>
            <div v-for="productDataAll in productData.data" :key="productDataAll.id">
             <p>ID: {{ productDataAll.id }}</p>
             <p>Image_url: {{ productDataAll.image_url }}</p> 
            <img :src="productDataAll.image_url" />
                <div v-for="productDataImages in productDataAll.images" :key="productDataImages.id">
                    <img :src="productDataImages" />
                    
                </div>
            <p>Size: {{ productDataAll.size }}</p>
            </div>
    
    </div>
</div>--!>


</template>