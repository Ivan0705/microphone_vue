<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__body">
                <div class="footer__column">
                    <div class="footer__content">
                        <div class="footer__logo">
                            <img src="../footer_images/logo.svg" alt="logo"/>
                        </div>
                        <nav class="footer__menu">
                            <ul class="footer__social-items">
                                <li class="social-item">
                                    <a class="social-item__link" href="#">
                                        <img src="../footer_images/instagram.svg" alt="instagram"/>
                                    </a>
                                </li>
                                <li class="social-item">
                                    <a class="social-item__link" href="#">
                                        <img src="../footer_images/twitter.svg" alt="twitter"/>
                                    </a>
                                </li>
                                <li class="social-item">
                                    <a class="social-item__link" href="#">
                                        <img src="../footer_images/facebook.svg" alt="facebook"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="footer__column">
                    <nav class="footer__menu">
                        <ul class="footer__menu-items">
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Home
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    About
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Episodes
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__column">
                    <nav class="footer__menu">
                        <ul class="footer__menu-items">
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Style Guide
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Instructions
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Changelog
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Credit
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Powered by Webflow
                                </a>
                            </li>
                            <li class="footer__menu-item">
                                <a class="footer__menu-item__link" href="#">
                                    Licenses
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__column">
                    <nav class="footer__menu">
                        <ul class="footer__items-microphones item-microphones">
                            <li class="item-microphones">
                                <a class="item-microphones__link" href="#">
                                    <img src="../footer_images/micr1.svg" alt="micr1"/>
                                </a>
                            </li>
                            <li class="item-microphones">
                                <a class="item-microphones__link" href="#">
                                    <img src="../footer_images/micr2.svg" alt="micr2"/>
                                </a>
                            </li>
                            <li class="item-microphones">
                                <a class="item-microphones__link" href="#">
                                    <img src="../footer_images/micr3.svg" alt="micr3"/>
                                </a>
                            </li>
                            <li class="item-microphones">
                                <a class="item-microphones__link" href="#">
                                    <img src="../footer_images/micr4.svg" alt="micr4"/>
                                </a>
                            </li>
                            <li class="item-microphones">
                                <a class="item-microphones__link" href="#">
                                    <img src="../footer_images/micr5.svg" alt="micr5"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'Footer'
    }
</script>
<style scoped>
    /*------------FOOTER---------------*/
    .footer {
        margin-top: 100px;
        position: relative;
        right: 0;
        left: 0;
        width: 100%;
        min-width: 810px;
        background: #000;
    }

    .footer__container {
        padding: 100px 50px;
    }

    .footer__body {
        display: flex;
        flex-wrap: wrap;

    }

    .footer__column {
        display: grid;
        width: 178px;
        text-align: left;
    }

    .footer__column:first-child {
        width: 447px;
    }

    .footer__content {
        display: flex;
        flex-direction: column;
    }

    .footer__column:not(:last-child) {
        margin-right: 16px;
    }

    .footer__logo {
        margin-bottom: 20px;
        margin-right: auto;
    }

    .footer__logo img {
        width: 224px;
        height: 46px;
    }

    .footer__menu {
    }

    .footer__social-items {
        display: flex;
    }


    .social-item:not(:last-child) {
        padding: 0 10px 0 0;
    }

    .social-item__link {
    }

    .footer__menu-items {
    }


    .footer__menu-item {
        font-size: 17px;
        font-weight: 400;
        line-height: 158.824%;
    }

    .footer__menu-item:not(:last-child) {
        padding: 0 0 10px 0;
    }

    .footer__menu-item__link {
    }

    .footer__items-microphones {
        display: flex;
    }

    .item-microphones {
    }

    .item-microphones:not(:last-child) {
        padding: 0 17px 0 0;
    }

    .item-microphones__link {
    }

    /*------FOOTER_MOBILE---------*/
    @media (max-width: 963px) {
        .footer__column {
            flex: 0 1 100%;
        }

        .footer__social-items {
            margin-bottom: 15px;
        }
    }

    @media (max-width: 600px) {
        .footer__menu-item {
            font-size: 30px;
        }

        .footer__social-items img {
            width: 50px;
            height: 50px;
        }

        .footer__items-microphones img {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: 375px) {
        .footer__items-microphones img {
            width: 50px;
            height: 50px;
        }
    }

</style>
