<script setup lang="ts" >

interface Emit {
    (event: "click"): void;
}

const emit = defineEmits<Emit>();

</script>

<template>
    <button @click="emit('click')" class="text-button">
        <slot />
    </button>
</template>

<style scoped >
.text-button {
    background-image: linear-gradient(to right, #614385 0%, #516395 51%, #614385 100%);
    padding: 0.5rem ;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius:0.5rem;
    display: block;
    outline: none;
    border: none;
}

.text-button:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
</style>
