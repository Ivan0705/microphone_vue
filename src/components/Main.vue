<template>
    <main class="page _container">
        <TakeYourPodcast/>
        <LatestEpisodes/>
        <ListEpisodes/>
    </main>
</template>
<script>
    import TakeYourPodcast from "./TakeYourPogcast";
    import LatestEpisodes from "./LatestEpisodes";
    import ListEpisodes from "./ListEpisodes";

    export default {
        name: 'Main',
        components: {ListEpisodes, LatestEpisodes, TakeYourPodcast}
    }
</script>
<style scoped>
    /*---------CONTAINER--------*/
    ._container {
        box-sizing: content-box;
        max-width: 1300px;
        padding: 0 30px;
    }
</style>
