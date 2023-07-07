<template>
    <div v-if="!isauthenticating" id="offcanvas-menu" class="edublink-vue-mobile-popup-menu">
        <div class="mobile-menu-overlay" @click="mobileMenuClose('removeClass', 'active')"></div>
        <div class="inner">
            <div class="header-top">
                <div class="logo">
                    <a href="/">
                        <h3>GEC CITOYEN</h3>
                    </a>
                </div>
                <div class="close-menu">
                    <button class="close-button" @click="mobileMenuClose('removeClass', 'active')">
                        <i class="icon-73"></i>
                    </button>
                </div>
            </div>
            <MobileMenu />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            isauthenticating: 'authentication/isauthenticating',

        })
    },
    components: {
        MobileMenu: () => import('@/components/header/MobileMenu'),
    },

    methods: {
        // Off-canvas Mobile Menu Close
        mobileMenuClose(triggerRemoveClass, className) {
            const el = document.querySelector('#offcanvas-menu');
            if (triggerRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        }
    },
}
</script>

