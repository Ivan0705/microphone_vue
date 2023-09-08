<template>
    <section class="page__takeyourpodcast takeyourpodcast">
        <div>
            <div class="takeyourpodcast__container">
                <div class="takeyourpodcast__body">
                    <div class="takeyourpodcast__column">
                        <div class="takeyourpodcast__image ">
                            <img src="../takeyourpodcast_images/takeyourpodcast.png"
                                 alt="Take your podcast to the next level"/>
                        </div>
                    </div>
                    <div class="takeyourpodcast__column">
                        <div class="takeyourpodcast__content">
                            <h3 class="takeyourpodcast__title">Take your podcast to the <span
                                    class="takeyourpodcast__word-underline">next<img
                                    src="../takeyourpodcast_images/underline.svg"
                                    alt=""/></span>
                            </h3>
                            <div class="takeyourpodcast__text">
                                Listen on
                                <div class="takeyourpodcast__microphones microphones">
                                    <div class="microphones__items">
                                        <div class="microphones__item">
                                            <a href="#" class="microphones__link">
                                                <img src="../takeyourpodcast_images/microphone1.svg"
                                                     alt="microphone1"/>
                                            </a>
                                        </div>
                                        <div class="microphones__item">
                                            <a href="#" class="microphones__link">
                                                <img src="../takeyourpodcast_images/microphone2.svg"
                                                     alt="microphone2"/>
                                            </a>
                                        </div>
                                        <div class="microphones__item">
                                            <a href="#" class="microphones__link">
                                                <img src="../takeyourpodcast_images/microphone3.svg"
                                                     alt="microphone3"/>
                                            </a>
                                        </div>
                                        <div class="microphones__item">
                                            <a href="#" class="microphones__link">
                                                <img src="../takeyourpodcast_images/microphone4.svg"
                                                     alt="microphone4"/>
                                            </a>
                                        </div>
                                        <div class="microphones__item">
                                            <a href="#" class="microphones__link">
                                                <img src="../takeyourpodcast_images/microphone5.svg"
                                                     alt="microphone5"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'TakeYourPodcast'
    }
</script>
<style>
    /*------------TAKE-YOUR-PODCAST------------*/
    .page__takeyourpodcast {
        position: relative;
        z-index: 1;
        margin-top: 170px;
        min-width: 762px;
    }

    .takeyourpodcast {

    }

    .takeyourpodcast__container {
        margin: 26px 0;
        display: flex;
    }

    .takeyourpodcast__body {
        display: flex;
        max-width: 100%;
    }

    .takeyourpodcast__column {
        display: grid;
        align-items: end;
        flex: 0 1 50%;
        justify-content: flex-end;
    }

    .takeyourpodcast__image {
        border-radius: 12px;
    }

    .takeyourpodcast__image img {
        width: 650px;
        height: 873px;
    }

    .takeyourpodcast__content {
        justify-content: center;
        display: flex;
        flex-direction: column;
        height: 873px;
        margin-left: 60px;
        text-align: left;
    }

    .takeyourpodcast__title {
        font-size: 70px;
        font-weight: 400;
        line-height: 125.714%;
        letter-spacing: 3px;
        margin-top: 120px;
    }

    .takeyourpodcast__title:after {
        content: 'level';
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%;
        letter-spacing: 3.2px;
    }

    .takeyourpodcast__text {
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        margin-top: 70px;
    }

    .takeyourpodcast__microphones {
        display: flex;
        height: 33px;
        margin-top: 16px;
    }

    .microphones {
    }

    .microphones__items {
        display: flex;
    }

    .microphones__item {
    }

    .microphones__item:not(:first-child) {
        margin: 0 0 0 17px;
    }

    .microphones__item img {
        width: 32px;
        height: 32px;
    }

    .microphones__link {
    }

    .takeyourpodcast__word-underline {
        display: inline-grid;
        font-size: 75px;
        font-style: normal;
        font-weight: 400;
        line-height: 117.333%;
        letter-spacing: 3px;
    }

    .takeyourpodcast__word-underline img {
        margin-top: -90px;
    }

    /*---TAKE-YOUR-PODCAST_MOBILE---*/
    @media (max-width: 1166px) {
        .takeyourpodcast__image img {
            width: 500px;
        }

    }

    @media (max-width: 1000px) {
        .takeyourpodcast__body {
            flex-wrap: wrap;
        }

        .takeyourpodcast__column {
            flex: 0 1 100%;
            max-width: 900px;
            justify-content: flex-start;
        }

        .takeyourpodcast__image img {
            min-width: 700px;
            height: 100%;
        }

        .takeyourpodcast__content {
            width: 718px;
            margin: auto;
            height: 100%;
        }


        .takeyourpodcast__title {
            margin-top: 0;
        }

        .takeyourpodcast__text {
            margin-top: 0;
        }
    }

    @media (max-width: 768px) {
        .takeyourpodcast__text {
            font-size: 37px;
        }

        .microphones__item img {
            width: 50px;
            height: 50px;
        }
    }

</style>
