<template>
    
        <Transition name="modal-outer">
            <div v-show="modalActive" class="absolute rounded-xl w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-0">
                <Transition name="modal-inner">
                    <div v-if="modalActive"  class="p-4 bg-white rounded-xl self-start mt-32 max-w-screen-md">
                        <slot />

                        <div>
                            <button class="text-white text-[25px] rounded-xl mt-8 bg-theme-primary py-2 px-56 " @click="$emit('close-modal')">

                                ยืนยัน
                            </button>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    
</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
    modalActive: {
        type: Boolean,
        default: false,
    },
});
</script>

<style  scoped>
.modal-outer-enter-active, .modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from, .modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active  {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from  {
    opacity: 0;
    transform: scale(0.8);
}

.modal-inner-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>