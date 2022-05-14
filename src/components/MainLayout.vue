<script setup lang="ts"></script>

<template>
    <div class="main-layout">
        <header>
            <slot name="appbar" />
        </header>
        <main>
            <slot />
        </main>

        <footer>
            <slot name="footer" />
        </footer>

    </div>
</template>

<style scoped>
.main-layout {
    height: 100vh;
    width: 95%;
    margin: auto;
    overflow: hidden;
}

header {
    height: 5vw;
    width: 95%;
    position: fixed;
    top: 0;
}

main {
    height: 95vh;
    overflow: auto;
}

footer {
    height: 5vh;
}
</style>
