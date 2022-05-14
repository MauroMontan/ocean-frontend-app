<script setup lang="ts" >

interface Prop {
    icon:string;
};
interface Emit {
    (event: "click"): void
};
const emit = defineEmits<Emit>();
const props = defineProps<Prop>();
</script>
<template>
    <button class=" icon-button material-symbols-outlined" @click="emit('click')">
        {{props.icon}}
    </button>
</template>

<style scoped >

.icon-button{
    border: none;
    outline: none;
    font-size:2rem;
}
.icon-button:hover {
    color: yellow;
}
</style>
