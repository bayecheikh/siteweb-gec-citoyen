<template>
    <div>
        <div class="custom-suivi-courrier-template offset-xl-2 custom-col-lg-6 col-lg-6">
            <div class="contact-form custom-suivi-form-style-2 form-style-2">
                <button @click="onClickClose()" class="custom-close-btn">x</button>
                <div class="section-title">
                    <h4 class="title custom-suivi-title text-uppercase">VOTRE COURRIER A ÉTÉ ENVOYÉ AVEC SUCCÈS</h4>
                    <p class="custom-information-msg">Votre courrier a bien été envoyé. Votre code de suivi est : <span
                            class="custom-code-suivi">{{ ispopupload }}</span>. Vous pouvez suivre l'avancement de votre
                        courrier sur la plateforme à l'aide de ce code.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {

    computed: {
        ...mapGetters({
            ispopupload: 'courrierenvoye/ispopupload'
        })
    },
    methods: {

        async onClickClose() {
            this.showValidMessage1 = false;
            this.showValidMessage2 = false;
            this.validCode = true
            this.$store.dispatch('courrierenvoye/getDetail', false)
            this.$router.push('/');
        },

    },

    data() {
        return {
            validCode: true,
            showValidMessage1: false,
            showValidMessage2: false,
            code: ''
        }
    },
}

</script>

<style scoped>
.custom-suivi-courrier-template {
    border-radius: 5px !important;
    position: fixed !important;
    top: 50%;
    left: 34.8%;
    transform: translate(-50%, -50%);
    position: fixed;
    background-color: #f7f7f7 !important;
    background: #f7f7f7 !important;
    z-index: 9999 !important;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2) !important;

}


.custom-information-msg {
    margin-bottom: 25px !important;
    font-size: 12.5px !important;
    padding: 5px !important;
    padding-left: 2px !important;
}

.custom-suivi-title {
    margin-top: -10px !important;
    padding: 10px !important;
    padding-left: 0px !important;
    color: #0a3764 !important;
    font-weight: bold !important;
}

.custom-suivi-form-style-2 {
    padding: 50px !important;
    border-top-left-radius: 5px !important;
    background-color: #f7f7f7 !important;
    background: #f7f7f7 !important;
}


@media (max-width: 1200px) {
    .custom-col-lg-6 {
        width: 70% !important;
    }

    .custom-suivi-courrier-template {
        left: 50%;
    }
}


table {
    margin-top: 25px !important;

    color: black !important;

    font-size: 13px !important;
}

tr:first-child td {
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin-bottom: -5px;
}

tr:nth-child(2) td {
    font-weight: bold;
}

td {
    color: black !important;
    text-align: center !important;
    border: 1px solid #ccc !important;
    padding: 15px !important;
    width: 100px !important;
    height: 50px !important;
    background-color: white !important;
}

td>svg {
    width: 15px !important;
    margin-right: 10px !important;
}

.custom-code-suivi {
    font-weight: 800;
}

.custom-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    color: gray;
    padding-right: 15px;
    font-size: 20px;
}

.custom-information-msg {
    margin-bottom: 25px !important;
    font-size: 12.5px !important;
    padding: 5px !important;
    padding-left: 2px !important;
}

.custom-suivi-title {
    margin-top: -10px !important;
    padding: 10px !important;
    padding-left: 0px !important;
    color: #0a3764 !important;
    font-weight: bold !important;
}


p {
    margin: 0;
}

#code {
    color: #0a3764 !important;
}
</style>