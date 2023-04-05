<template>
    <div class="hero-banner custom-hero-banner hero-style-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title custom-banner ">Plateforme GEC CITOYEN</h1>
                        <p class="title custom-banner"> La plateforme GEC CITOYEN est une plateforme digitale nationale,
                            destinée aux usagers des organismes publics pour leur permettre de déposer, d'une manière
                            électronique et sécurisée, des courriers auprès de ces organismes.
                            Les usagers peuvent être une entreprise ou un citoyen.

                        </p>
                        <div class="banner-btn">
                            <n-link to="/" class="custom-track-btn edu-btn">
                                Suivre son courrier <i class="icon-4"></i>
                            </n-link>
                            <n-link to="/" class="edu-btn">
                                Envoyer un courrier <i class="icon-4"></i>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }

</script>

<style scoped>
    .custom-banner {
        color: #F7F7F7 !important;
    }
    .hero-banner::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .edu-btn:hover {
        background-color: #1E5F74 !important;
        color: #FFFFFF !important;
    }
    .custom-hero-banner {
        background-image: url('/images/banner/main-banner.png') !important;
    }
    .custom-track-btn {
        background-color: #1F6680 !important;
    }

</style>