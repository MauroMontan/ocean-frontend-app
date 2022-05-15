<script setup lang="ts" >

interface Emit {
    (event: "close-dialog"): void
}

const emit = defineEmits<Emit>();

</script>

<template>
    <div @click.self="emit('close-dialog')" class="overlay">
        <slot />
        <img src="../assets/pulpo.svg" alt="">
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

img {
    position: absolute;
    width: 20%;
    bottom: 0;
    left: 4rem;
}
</style>
