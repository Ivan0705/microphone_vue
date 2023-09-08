<template>
    <div class="wrapper">
        <Header/>
        <router-view>
        </router-view>
        <Footer/>
    </div>
</template>

<script>
    import HelloWorld from './components/ListEmployeers.vue'
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import Main from "./components/Main";

    export default {
        name: 'App',
        components: {
            Main,
            Footer,
            Header,
            HelloWorld
        }
    }
</script>

<style>
    *, ::before, ::after {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    a:active {
        color: #118DA8;
    }

    ul,
    ol,
    li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
        font-size: inherit;
    }

    html,
    body {
        color: #FFF;
        font-family: DM Sans, serif;
        background: #191919;
    }


    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    /*------------WRAPPER------------*/
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        max-width: 1440px;
        color: #ffffff;
    }


    @media (max-width: 765px) {
        ._container {

        }
    }
</style>
