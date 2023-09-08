<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo">
                <img src="../header_images/logo.svg" alt="logo"/>
            </div>
            <nav class="header__menu menu">
                <ul class="menu__list item">
                    <li class="menu-item">
                        <router-link to="/" class="menu__link active">
                            Home
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <a class="menu__link" href="#">Episodes</a>
                    </li>
                    <li class="menu-item">
                        <a class="menu__link" href="#">About</a>
                    </li>
                    <li class="menu-item">
                        <router-link to="/employees">
                            Employees
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="header__burger burger">
                <button class="burger__items">
                    <span class="burger__item"></span>
                    <span class="burger__item"></span>
                    <span class="burger__item"></span>
                </button>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    /*--------------HEADER----------*/
    .header {
        position: fixed;
        min-width: 810px;
        background: #000;
        z-index: 2;
        left: 0;
        right: 0;
        margin-top: -60px;
    }

    .header__container {
        display: flex;
        align-items: center;
        padding: 43px 50px;
        flex: 0 1 100%;
        flex-wrap: wrap;
        justify-content: space-between;

    }

    .header__logo {
        width: 160px;
        height: 33px;
    }

    .header__menu {
        display: flex;
        width: 403px;
        min-height: 67px;
        align-items: center;
    }

    .header__burger {
        display: none;
    }

    .burger button {
        width: 55px;
        height: 35px;
        background: #191919;
        display: grid;
    }

    .burger__items {
    }

    .burger__item {
        border: #FFFFFF solid 2px;
        margin-top: 4px;
        height: calc(35px / 30);
        border-radius: 2px;
    }


    .menu__list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 20px;
    }

    .item {

    }

    .menu-item {
        display: block;
        letter-spacing: 0.3px;
        flex: 0 1 25%;
    }

    .menu-item:not(:last-child) {
        margin: 0 40px 0 0;
    }

    .menu__link {
        font-size: 17px;
        font-weight: 400;
        line-height: 158.824%;
        transition: 1s ease 0s;
    }

    .active {
        color: #118DA8;
    }

    .menu__link:not(:last-child ) {
        margin: 0 40px 0 0;
    }

    /*---HEADER_MOBILE---*/


    @media (max-width: 762px) {
        .header {
            max-width: 762px;
        }

        .header__menu {
            display: none;
            letter-spacing: 0.3px;
            flex: 0 1 25%;
        }

        .header__burger {
            display: block;
            float: right;
        }
    }

    @media (max-width: 768px) {
        .header__logo {
            transform: scale(1.4);
        }

        .header__menu {
            transform: scale(1.2);
        }
    }

    @media (max-width: 375px) {
        .header__logo {
            transform: scale(1.6);
        }

        .header__menu {
            transform: scale(1.2);
        }
    }
</style>
