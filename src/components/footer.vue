<script setup lang="ts" ></script>

<template>
    <div class="custom-footer">
        <div class="legal">
            <p>All rights reserved © 2022</p>
        </div>
        <div class="social">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-tiktok"></i>
        </div>
    </div>
</template>


<style scoped >
.custom-footer {
    height: 100%;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    justify-content: space-between;
}

.custom-footer .social {
    display: flex;
    gap: 2rem;
}
</style>
