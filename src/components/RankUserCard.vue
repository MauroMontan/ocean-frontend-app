<script setup lang="ts" ></script>
<template>
    <div class="user-card">

        <div class="user-info">
            <div class="frame">
                <img src="../assets/avat_placeholder.png" alt="profile image">
            </div>
            <h1>we have no winners yet !</h1>
        </div>
        <div class="stats">
            <i class="fa-solid fa-trophy"></i>
            <h2>3</h2>
            <i class="fa-solid fa-weight-hanging"></i>
            <h2>30</h2>
        </div>
    </div>
</template>

<style scoped >
.user-card {
    width: 90%;
    height: 12rem;
    border-radius: 1rem;
background-color: #74EBD5;
background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
}

i {
    font-size: 2rem;
}

.user-card .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.user-card .user-info .frame {
    height: 10rem;
    widows: 10rem;
}

.user-card .stats {
    display: flex;
    gap: 1rem;
}

.user-card .user-info .frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>

