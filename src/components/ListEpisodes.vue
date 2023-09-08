<template>
    <section class="page__episodes-items episodes-items">
        <CardEpisode imageUrl="episode1.png" category="Gear" numberEpisode="Episode 3"
                     title="Should you get outboard audio gear?"
                     text="Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up."/>

        <CardEpisode imageUrl="episode2.png" category="Tips & Tricks" numberEpisode="Episode 2"
                     title="Mic tricks to take you to the next level"
                     text="Stop rolling with those default settings on your mic. These small tweaks will take
                                you from sounding good to great."/>

        <CardEpisode imageUrl="episode3.png" category="Gear" numberEpisode="Episode 1"
                     title="The best microphone under $200"
                     text="With so many microphones on the market, how are you supposed to know what’s the
                                best? Take a look at our top picks."/>

    </section>
</template>
<script>
    import CardEpisode from "./CardEpisode";

    export default {
        name: 'ListEpisodes',
        components: {CardEpisode}
    }
</script>
<style>
    /*------------LIST_EPISODES------------*/
    .page__episodes-items {
        position: relative;
        min-width: 762px;
    }

</style>
