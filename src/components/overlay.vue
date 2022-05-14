<script setup lang="ts" >

interface Emit {
    (event:"close-dialog"):void
}

const emit = defineEmits<Emit>();

</script>

<template>
    <div @click.self="emit('close-dialog')" class="overlay">
        <slot />
    </div>
</template>

<style scoped>
.overlay {
    height: 100vh;
    width: 100%;
    z-index: 5;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(149, 153, 226, 0.3);
    backdrop-filter: blur(0.6rem);

}
</style>
