<template>
    <div class="faq-accordion" id="faq-accordion">
        <div class="accordion">
            <div class="accordion-item">
                <h5 class="accordion-header ">
                    <button class="accordion-button " type="button" color="rgb(0, 128, 100)" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                        Comment se connecter à la plateforme ?
                    </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>Pour vous connecter à la plateforme, vous devez disposer d'un compte au Portail National des Services Publics du Bénin.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                        Quels sont les ministères concernés ?
                    </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>Les Ministères concernés sont : le Ministère des Affaires Étrangères, le Ministère du Numérique et de la Digitalisation, le Ministère du Développement et de la Coordination de l'Action Gouvernementale, le Ministère du Travail et de la Fonction Publique, le Ministère du Cadre de Vie et du Développement Durable, le Ministère de la Défense Nationale et le Ministère de l'Agriculture, de l'Élevage et de la Pêche. </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                        Comment saisir son courrier ?
                    </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>L'envoi du courrier se fait via un formulaire simple. Vous pouvez importer votre courrier et y joindre d'autres fichiers si besoin.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false">
                        Comment suivre son courrier ?
                    </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>Après soumission du courrier, un code de suivi est généré automatiquement. Vous recevrez ce code de suivi par mail et pourrez suivre le statut de votre courrier à tout moment sur la plateforme.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .custom-accordion-header{
        color: rgb(0, 128, 100) !important; 
    }

</style>