<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li v-for='(link, i) in menus' :key='i'>
            <n-link :to="link.url">
                {{ link.title }}
            </n-link>
            <span class="submenu-toggle" v-if="link.submenu">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' class="title">
                    <n-link :to="link.url"> {{ link.title }} </n-link>
                    <span class="submenu-toggle" v-if="link.submenu">
                        <i class="ri-arrow-down-s-line"></i>
                    </span> 
                    <ul class="submenu-wrapper" v-if="link.submenu">
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <n-link :to="link.url"> {{ link.title }} </n-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    import mobileMenuResponsive from '../../common/mobileMenuResponsive';
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '/accueil',
                        title: 'Accueil',
                    },

                    {
                        url: '/accueil#faq',
                        title: 'Comment envoyer un courrier ?',
                    },
                    {
                        url: '',
                        title: 'Se connecter',
                    }
                ]
            }
        },
        mounted() {
            mobileMenuResponsive();
        }
    }
</script>