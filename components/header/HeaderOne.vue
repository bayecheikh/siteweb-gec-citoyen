<template>
    <header class="edu-header  header-style-1 header-fullwidth no-topbar">
        <div class="header-mainmenu custom-header-one" :class="{ 'edu-sticky': isSticky }">
            <div class="container-fluid">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <n-link to="/">
                                <img class="logo-light" src="/images/logo/logo-dark.png" alt="Dark Logo"
                                    v-if="$colorMode.value === 'light'">
                                <img class="logo-dark" src="/images/logo/logo-white.png" alt="Light Logo"
                                    v-if="$colorMode.value === 'dark'">
                            </n-link>
                        </div>
                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />
                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">
                            <div class="banner-btn custom-banner-btn">
                                <li class="custom-header-btn">
                                    <n-link to="" class="edu-btn custom-edu-btn custom-btn-sign-in text-uppercase">
                                        Se connecter
                                    </n-link>
                                </li>
                                <li class="custom-header-btn">
                                    <n-link to="" class="edu-btn custom-btn-sign-up btn-orange text-uppercase">
                                        Créer un compte
                                    </n-link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    components: {
        HeaderTopOne: () => import("@/components/header/HeaderTopOne"),
        Category: () => import("@/components/header/Category"),
        Navigation: () => import("@/components/header/Navigation")
    }
}

</script>

<style>

    .custom-header-btn {
        padding: 0 2px 0 0 !important;
        color: var(--color-white) !important;
        font-weight: bold !important;
        border-radius: 0 !important;
        overflow: visible !important;
        margin-right: 2px !important;
        margin-left: 2px !important;
        padding-right: 0 !important;
        font-size: 3px !important;
        top: 0 !important;
        text-align: center !important;
    }

    .custom-edu-btn {
        border-radius: 5px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        color: var(--edu-btn-color);
        background: var(--color-primary);
        padding: 5px;
        font-size: 6px;
        font-weight: bold !important;
        transition: 0.4s;
        font-family: var(--font-secondary);
        border: 0 none;
        overflow: hidden;
        text-align: center !important;
        position: relative;
        z-index: 1;
    }

    .custom-btn-small {
        font-weight: bold !important;
        height: 30px !important;
        line-height: 30px !important;
        padding: 0 15px !important;
        font-size: 8px !important;
        text-align: center !important;
        background-color: #2985BC !important;
    }

    .custom-banner-btn {
        padding-bottom: 20px !important;
        display: flex !important;
        justify-content: center !important;
        gap: 5px !important;
    }

    .custom-btn-sign-in {
        font-weight: 700 !important;
        height: 40px !important;
    display: flex !important;
        
       justify-content: center !important;
       align-items: center !important;
        font-size: 13px !important;
        text-align: center !important;
        background-color: #2985BC !important;
        background: #2985BC !important;
    }

    .custom-btn-sign-up {
       
        font-weight: 700 !important;
        height: 40px !important;
        display: flex !important;
     
       justify-content: center !important;
       align-items: center !important;
        font-size: 13px !important;
        text-align: center !important;
        background-color: orange !important;
        background: orange !important;
    }

    .custom-btn-send-courrier {
        font-weight: bold !important;

        margin-left: 10px !important;

        padding-bottom: 5px !important;

        font-size: 11px !important;
        text-align: center !important;
    }

    .custom-header-one {
        background-color: #0a3764 !important;
    }

    .custom-btn-sign-in:hover {
        background: linear-gradient(-90deg, #2985BC 0%, #2985BC 100%) !important;
    }

    .custom-btn-sign-in:after {
        background: linear-gradient(-90deg, #4CA4E4 0%, #1da1f2 100%) !important;
    }

    .custom-btn-sign-up:hover {
        background: linear-gradient(-90deg, orange 0%, orange 100%) !important;
    }

    .custom-btn-sign-up:after {
        background: linear-gradient(-90deg, #FFC04D 0%, #ffc752 100%) !important;
    }

</style>