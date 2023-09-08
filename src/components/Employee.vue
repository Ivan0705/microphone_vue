<template>
    <article class="episodes-item  card-employee__container ">
        <div class="card-employee card">
            <div class="card__body">
                <div class="card__column">
                    <div class="card__content">
                        <div class="card__id">
                            {{user.id}}
                        </div>
                        <div class="card__name">
                            {{user.name}}
                        </div>
                        <h3 class="card__email">
                            {{user.email}}
                        </h3>
                        <div class="card__phone">
                            {{user.phone}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
    export default {
        name: 'Employee',
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>
<style scoped>
    .card-employee {
    }

    .card-employee__container {
        position: relative;
        left: 0;
        right: 0;
        margin-top: 66px;
        min-width: 758px;
    }

    .card {
        border-radius: 32px;
        background: #000;
        padding: 40px;
    }

    .card__body {
        display: flex;
    }

    .card__column {
        flex: 0 1 100%;
        justify-content: center;
        align-items: center;
    }

    .card__column:first-child {
        flex: 0 1 calc(389 / 1220 * 100%);
    }

    .card__image {
    }

    .card__image img {
        width: 389px;
    }

    .card__content {
        margin: 0 0 0 53px;
        padding: 8px 0 0 0;
        text-align: left;
    }

    .card__id {
        display: inline;
        text-align: center;
        flex-shrink: 0;
        border-radius: 6px;
        background: #191919;
        padding: 5px 16px;
    }

    .card__link {
    }


    .card__name {
        margin: 48px 0 18px;
        color: #118DA8;
        font-size: 17px;
        font-weight: 400;
        line-height: 158.824%;
    }

    .card__email {
        max-width: 690px;
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;
        letter-spacing: 2.56px;
        margin-bottom: 28px;
    }

    .card__phone {
        color: rgba(255, 255, 255, 0.70);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
    }


    /*------EPISODES_MOBILE------*/
    @media (max-width: 992px) {
        .card__body {
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
        }

        .card__column {
            flex: 1 0 100%;
        }
    }

    @media (max-width: 768px) {
        .card__column:first-child {
            margin-right: auto;
        }

        .card__content {
            margin: 0;
        }
    }

    @media (max-width: 425px) {
        .card__body {
            justify-content: left;

        }

        .card__column {
            padding: 0;
            max-width: 630px
        }

        .card__image {
            width: 630px
        }

        .card__image img {
            width: 630px;
            border-radius: 25px;
        }

        .card__phone {
            font-size: 45px;
        }

    }
</style>
