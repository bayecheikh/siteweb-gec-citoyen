<template>
    <div>
        <div v-if="isPopUpVisible" class="custom-template offset-xl-2 col-lg-6">
            <div class="contact-form form-style-2">
                <button @click="onClickClose()" class="custom-close-btn">x</button>
                <div class="section-title">
                    <h4 class="title">Veuillez entrer le code de suivi</h4>
                    <p class="custom-information-msg">Vous avez reçu un email
                        contenant un code confidentiel vous permettant d'accéder à l'état de votre courrier. Pour suivre
                        l'avancement de votre courrier, veuillez entrer le code dans l'espace ci-dessous.</p>
                </div>

                <form class="rnt-contact-form rwt-dynamic-form" ref="form" @submit.prevent="isCodeValid()">
                    <div class="row row--10">
                        <div class="form-group col-12">
                            <input type="text" name="code" placeholder="Votre code">
                        </div>
                        <div v-if="!validCode" class="col-12 success-msg">
                            <p class="custom-error-msg">Ce code est invalide.</p>
                        </div>
                        <div class="form-group col-12">
                            <button class="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Valider
                            </button>
                        </div>
                    </div>
                </form>

                <ul class="shape-group">
                    <MouseMove addClassName="shape-1" dataDepth="1" imgSrc="/images/about/shape-13.png" />
                    <MouseMove addClassName="shape-2" dataDepth="-1" imgSrc="/images/counterup/shape-02.png" />
                </ul>
            </div>
        </div>

        <div v-if="showValidMessage1" class="custom-template offset-xl-2 col-lg-6">
            <div class="contact-form form-style-2">
                <button @click="onClickClose2()" class="custom-close-btn">x</button>
                <h2 class="message-title">État de votre courrier</h2>
                <p class="message-text">Votre courrier a été déposé et est en attente de traitement.</p>
            </div>
        </div>
        <div v-if="showValidMessage2" class="custom-template offset-xl-2 col-lg-6">
            <div class="contact-form form-style-2">
                <button @click="onClickClose3()" class="custom-close-btn">x</button>
                <h2 class="message-title">État de votre courrier</h2>
                <p class="message-text">Votre courrier a été traité avec succès ! Vous pouvez consulter la réponse en
                    vérifiant votre boîte de réception à l'adresse email ya******@outlook.com.</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        methods: {
            onClickClose() {
                this.isPopUpVisible = false;
            },
            onClickClose2() {
                this.showValidMessage1 = false;
            },
            onClickClose3() {
                this.showValidMessage2 = false;
            },
            isCodeValid() {
                const codeInput = this.$refs.form.querySelector('input[name="code"]');
                const codeValue = codeInput.value;

                if (codeValue == 2) {
                    this.isPopUpVisible = false
                    this.showValidMessage1 = true
                    this.validCode = true
                }
                else if (codeValue == 3) {
                    this.isPopUpVisible = false
                    this.showValidMessage2 = true
                    this.validCode = true
                }
                else {
                    this.validCode = false
                }
            }
        },

        data() {
            return {
                isPopUpVisible: true,
                validCode: true,
                showValidMessage1: false,
                showValidMessage2: false

            }
        },
    }

</script>

<style scoped>

    .custom-categorie-grid {
        height: 337.25px !important;
    }

    .custom-categorie-area-1 {
        padding-top: 30px !important;
    }

    .custom-banner-btn {
        padding-top: 25px !important;
        display: flex !important;
        justify-content: center !important;
        gap: 20px !important;
    }

    .custom-row {
        margin-top: -35px !important;
        padding-top: 0px !important;
    }

    .custom-custom {
        font-weight: bold !important;

        background-color: rgb(0, 128, 100) !important;


    }

    .custom-title {
        height: 78.3px !important;
    }

    .custom-number {

        font-size: 25px !important;

    }

    .custom-number-one {

        color: rgb(0, 128, 100) !important;
    }

    .custom-icon-connect {
        fill: rgb(0, 128, 100);
    }

    .custom-icon-connect circle {
        fill: transparent !important;
        stroke: #fff !important;
        stroke-width: 2 !important;
    }


    .custom-icon-find {
        fill: #ee4a62;
    }

    .custom-icon-form {
        fill: #007aff;
    }

    .custom-icon-submit {
        fill: #f8b81f;
    }

    .custom-section-title {

        color: rgb(0, 128, 100) !important;
    }

    .custom-categorie-grid:hover .custom-title {
        color: var(--color-white) !important;
    }

    .custom-background-color:hover {
        background-color: #f47087 !important;
    }

    .custom-background-color2:hover {
        background-color: #1BA2DB !important;
    }

    .custom-background-color3:hover {
        background-color: #FFB46A !important;
    }

    .custom-track-btn:hover {
        background: linear-gradient(-90deg, rgb(30, 95, 116) 0%, rgb(30, 95, 116) 100%) !important;
    }

    .custom-track-btn:after {
        background: linear-gradient(-90deg, rgb(67, 123, 140) 0%, rgb(60, 135, 156) 100%) !important;
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

    .custom-template {
        position: fixed !important;
        top: 50%;
        left: 34.8%;
        transform: translate(-50%, -50%);
        position: fixed;
        z-index: 9999 !important;
        box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2) !important;
        backdrop-filter: blur(5px) !important;

    }

    .custom-error-msg {
        color: #FF5733 !important;
    }

    .message-title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
    }

    .message-text {
        font-size: 16px;
        color: #666;
    }
    .custom-information-msg {
        font-style: italic !important;
        background-color: #F2F2F2 !important;
        padding: 5px !important;
    }

</style>