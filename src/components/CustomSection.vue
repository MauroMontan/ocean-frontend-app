<script setup lang="ts"></script>
<template>
    <div class="custom-section">
    <slot/>
    </div>
</template>

<style scoped>

.custom-section {
    height:100%;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

</style>
