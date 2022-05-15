<script setup lang="ts" >
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useUser } from "../store"


const userStore = useUser();

const users = computed(() => {
    return userStore.rankedUsers;
});

onMounted(() => {
    userStore.getUsersRank();
    console.log(users.value);
});

</script>
<template>
    <div class="rank-list">
        <div v-for="user in users" :key="user.email" class="list-tile">
            <div class="user-info">
                <div class="frame">
                    <img src="../assets/avat_placeholder.png" alt="profile image">
                </div>
                <h2>{{ user.username }}</h2>
            </div>
            <div class="stats">
                <i class="fa-solid fa-trophy"></i> {{user.prizes}}
                <i class="fa-solid fa-weight-hanging"></i> {{user.amount}}
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

    background-image: linear-gradient(to right, #606c88 0%, #3f4c6b 51%, #606c88 100%);
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
    justify-content: end;
}


.rank-list::-webkit-scrollbar {
    width: 0.5rem;
}

.rank-list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
}

.rank-list::-webkit-scrollbar-thumb {
    background-color:#CD93B7;
    border-radius: 0.5rem;
    outline: none;
}

.rank-list::-webkit-scrollbar-corner {
    outline: none;
    border: none;
    background-color: transparent;
}
</style>
