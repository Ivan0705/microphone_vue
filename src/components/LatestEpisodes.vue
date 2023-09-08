<template>
    <div class="page__latestepisodes latestepisodes">
        <div class="latestepisodes__container ">
            <div class="latestepisodes__body">
                <div class="latestepisodes__column">
                    <div class="main-block_title">
                        Latest episodes
                    </div>
                </div>
                <div class="latestepisodes__column">
                    <button class="latestepisodes__btn btn">View all episodes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LatestEpisodes'
    }
</script>
<style>
    /*----------------------------------------*/
    .main-block_title {
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        line-height: 123.75%;
        letter-spacing: 2.88px;
    }

    @media (max-width: 1024px) {
        .main-block_title {
            font-size: 70px;
        }
    }

    @media (max-width: 620px) {
        .main-block_title {
            font-size: 80px;
        }
    }

    .btn {
        color: #ffffff;
        background: #118DA8;
        border-radius: 6px;
    }

    .btn:hover {
        text-decoration: underline;
        background: #1E1CA8;
        transition: 1s ease;
        cursor: pointer;
    }

    /*------------LATEST_EPISODES------------*/
    .page__latestepisodes {
    }

    .latestepisodes {
        min-width: 762px;
    }

    .latestepisodes__container {
        position: relative;
        left: 0;
        right: 0;
        margin-top: 93px;
    }

    .latestepisodes__body {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
    }

    .latestepisodes__column {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1 0 50%;
    }

    .latestepisodes__column:first-child {
        align-items: flex-start;

    }

    .latestepisodes__btn {
        align-items: flex-end;
        justify-content: flex-end;
        width: 178px;
        height: 51px;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 158.824%;
    }

    /*---LATEST_EPISODES_MOBILE---*/
    @media (max-width: 1024px) {
        .latestepisodes__body {

        }

        .latestepisodes__column {
            justify-content: center;
            flex: 0 0 100%;
        }

        .latestepisodes__column {
            align-items: flex-start;
        }

        .latestepisodes__btn {
            width: 550px;
            height: 60px;
        }
    }

    @media (max-width: 620px) {
        .latestepisodes__btn {
            width: 630px;
            height: 90px;
            border-radius: 25px;
            font-size: 50px;
        }
    }

    @media (max-width: 425px) {
        .latestepisodes__body {
            margin-top: -20px;
        }
    }

</style>
