<script setup lang="ts" ></script>
<template>
    <div class="rank-list">
        <div v-for="i in 30" :key="i" class="list-tile">
            <div class="user-info">
                <div class="frame">
                    <img src="../assets/avat_placeholder.png" alt="profile image">
                </div>
                <h2>Mauro Montaño</h2>
            </div>
            <div class="stats">
                <i class="fa-solid fa-trophy"></i> 4
                <i class="fa-solid fa-weight-hanging"></i> 20
            </div>
        </div>

    </div>
</template>

<style scoped >
.rank-list {
    height: 100%;
    overflow: auto;
    display: grid;
    padding: 1rem;
    gap: 1rem;
    border-radius: 1rem;
    background-color: rgb(0, 18, 32);
}

.list-tile {
    border-radius: 0.5rem;
    height: 8rem;
    width: 100%;
    background-color: black;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
}


.list-tile .user-info {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.list-tile .frame {
    background-color: white;
    height: 6rem;
    width: 6rem;
    border-radius: 0.5rem;
}

.list-tile .frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.list-tile .stats {
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>
