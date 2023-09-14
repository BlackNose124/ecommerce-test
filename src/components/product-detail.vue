<template>


    <div class="flex gap-3 flex-1 justify-end">
        <!-- <i class="fa-solid fa-circle-info text-xl hover:bg-theme-secondary duration-150 
        cursor-pointer" @click="toggleModal">

        </i> -->
        <button class="text-white text-[25px] rounded-xl bg-theme-primary hover:bg-theme-primary py-2 px-6 duration-150 
        cursor-pointer" @click="toggleModal" >
            ยืนยันการสั่งซื้อล่วงหน้า
        </button>
    </div>

        
        <BaseModal class="text-center" :modalActive="modalActive" @close-modal="toggleModal">

            <i class="fa-solid fa-cart-shopping text-[150px] pt-5"></i>
                <h1 class="text-black text-3xl font-semibold pt-5">การสั่งซื้อล่วงหน้าสำเร็จ</h1>
                <p class="pt-5">การชำระเงินของคุณสำเร็จแล้ว!</p>
                   <p class="pt-2">ตอนนี้เราจะส่งอีเมลยืนยันคำสั่งซื้อสำเร็จให้คุณ</p>
                
            
        </BaseModal>
    

</template>

<script setup>

import { ref } from 'vue';
import BaseModal from './BaseModal.vue';

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
    };


</script>





<style  scoped>

</style>