<script setup lang="ts" >
import RankList from "../components/RankList.vue";
import RankUserCard from "../components/RankUserCard.vue"; 

</script>

<template>
    <div class="rank-view">
        <div class="about">
            <div class="season-mvp">
            <h2>Last Season rank 1</h2>
            <RankUserCard/>
            </div>
            <div class="year-mvp">
            <h2>Last year rank 1</h2>
            <RankUserCard/>
            </div>
        </div>
        <div class="rank">
            <h2>LeaderBoard</h2>
            <RankList />
        </div>
    </div>
</template>


<style scoped>
.rank-view {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.rank {
    margin-top: 6vh;
    overflow: hidden;
    border-radius: 1rem;
}

.about {
    display: grid;
    grid-template-columns: repeat(1,1fr);
}

.season-mvp, .year-mvp {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
}
</style>
