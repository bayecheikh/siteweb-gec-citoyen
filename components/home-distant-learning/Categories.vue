<template>
    <div class="edu-categorie-area custom-categorie-area-1 categorie-area-1 edu-section-gap">
        <div class="container">
            
            
            <div>
                <div data-aos-delay="150" data-aos="fade-up" data-aos-duration="800" class="section-title section-left aos-init aos-animate">
                  
                    <h2 class="title">Comment <span class="color-primary">déposer</span> un courrier ?</h2>

                     <p>Pour envoyer un courrier, veuillez suivre ces quatre étapes.</p>
                    
                    <p class="custom-categories-send-btn-wrapper"> <a @click="deposerCourrier()" class="edu-btn custom-categories-send-button">
        Déposer un courrier
    </a></p>
                    

                </div>
  <!-- <div class="title-text-wrapper">
    <h3 class="title">Comment envoyer un courrier ?</h3>
    
    <p class="custom-subtitle">Pour envoyer un courrier, veuillez suivre ces quatre étapes.</p>
  </div>
  <div class="title-button-wrapper">
    <a class="edu-btn custom-categories-send-button" @click="deposerCourrier()">
      DÉPOSER UN COURRIER 
    </a>
  </div>
-->
</div>


            
            <div class="row g-5 custom-row">
                <div class="col-lg-3 col-sm-6" data-aos-delay="100" data-aos-duration="800">
                    <div class="categorie-grid custom-categorie-grid  categorie-style-3 custom-categorie-style-3 color-green-style color-primary-style">
                        <div class="icon">
                            <svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" width="38.16" height="40.834"
                                viewBox="0 0 38.16 40.834">
                                <g transform="translate(-5928 -10528.621)">
                                    <path
                                        d="M40.159,28.56V24.04A9.04,9.04,0,0,0,31.119,15H13.04A9.04,9.04,0,0,0,4,24.04v4.52"
                                        transform="translate(5925 10539.894)" fill="none" stroke="#008064"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <circle cx="8.771" cy="8.771" r="8.771" transform="translate(5939.57 10529.62)"
                                        fill="none" stroke="#008064" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" />
                                </g>
                            </svg>
                        </div>
                        <div class="content">
                            <h5 class="title custom-title custom-title-2">Connectez-vous à la plateforme</h5>
                            <div class="custom-number-container">
                                <div class="custom-line"></div>
                           
                            </div>
                            <div class=" custom-number-2">1</div>
                            
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6" data-aos-delay="100" data-aos-duration="800">
                    <div
                        class="categorie-grid custom-categorie-grid categorie-style-3 custom-categorie-style-3 color-green-style color-primary-style">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="46.588" height="46.529" viewBox="0 0 46.588 46.529">
                                <defs>
                                    <clipPath id="a">
                                        <rect width="46.588" height="46.529" fill="#008064" />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#a)">
                                    <path
                                        d="M43.351,19.708c0,.872.025,1.7-.012,2.528a1.948,1.948,0,0,1-.268,1.038,5.06,5.06,0,0,1-1.08.819V35.977a4.642,4.642,0,0,1,.679.285,1.447,1.447,0,0,1,.681,1.347c0,.861,0,1.722,0,2.637.828,0,1.593,0,2.358,0,.682,0,.877.2.878.895q0,2.26,0,4.52c0,.656-.209.867-.856.867q-22.438,0-44.876,0c-.63,0-.849-.21-.85-.823Q0,43.4,0,41.089c0-.627.208-.837.833-.841.992-.006,1.983,0,3.061,0V39.129q0-.6,0-1.2c0-1.2.207-1.5,1.357-1.957v-.454c0-3.687,0-7.374.007-11.061,0-.342-.051-.529-.429-.653A1.366,1.366,0,0,1,3.9,22.379c-.006-.864,0-1.727,0-2.646-.208-.01-.377-.024-.546-.024-.834,0-1.668.007-2.5-.006a.65.65,0,0,1-.728-.71c-.012-1.571,0-3.142-.006-4.713,0-.416.265-.618.581-.809q4.549-2.738,9.093-5.485Q16.229,4.1,22.663.21A1.049,1.049,0,0,1,23.9.193q10.873,6.58,21.766,13.126a1.445,1.445,0,0,1,.82,1.459c-.051,1.345-.012,2.693-.016,4.039,0,.671-.22.886-.894.891-.718,0-1.436,0-2.224,0m-41.9-1.363H45.134c0-1.137-.016-2.24.01-3.343a.677.677,0,0,0-.4-.675Q34.229,8,23.726,1.645a.7.7,0,0,0-.852-.012Q17.7,4.783,12.514,7.9,7.167,11.125,1.825,14.359c-.154.094-.35.285-.353.436-.029,1.167-.016,2.335-.016,3.55M45.229,41.6H1.366v3.563H45.229ZM26.9,35.974c1.169.425,1.384.737,1.384,1.991,0,.746,0,1.493,0,2.243H33.4c0-.917,0-1.8,0-2.678a1.359,1.359,0,0,1,.548-1.171,5.365,5.365,0,0,1,.8-.4v-12c-1.1-.371-1.346-.723-1.346-1.87,0-.779,0-1.558,0-2.347H28.281c0,.77,0,1.506,0,2.241,0,1.256-.213,1.565-1.384,1.992ZM19.69,23.982c-1.194-.454-1.383-.735-1.383-2.039v-2.2H13.9a.737.737,0,0,0-.031.13q0,1.082-.005,2.164c0,1.191-.216,1.505-1.324,1.925V36.006a1.543,1.543,0,0,1,1.324,1.8c0,.8,0,1.593,0,2.441h4.444c0-.83,0-1.6,0-2.363,0-1.162.266-1.53,1.383-1.9ZM6.62,35.992h4.526V23.94H6.62ZM21.07,36h4.449V23.933H21.07ZM40.6,23.96h-4.47V36.008H40.6ZM12.5,19.788H5.265v2.775H12.5ZM26.9,19.782H19.676v2.776H26.9ZM5.256,40.175H12.5V37.4H5.256Zm14.416.011h7.236V37.393H19.671ZM34.756,22.54h7.238V19.773H34.756Zm7.236,14.866H34.773V40.2h7.218Z"
                                        transform="translate(0 0)" fill="#008064" />
                                    <path
                                        d="M158.333,57.165a3.971,3.971,0,1,1-3.99-3.949,3.957,3.957,0,0,1,3.99,3.949m-3.989,2.666a2.638,2.638,0,0,0,2.666-2.593,2.644,2.644,0,1,0-5.288-.037,2.617,2.617,0,0,0,2.623,2.63"
                                        transform="translate(-131.068 -46.379)" fill="#008064" />
                                </g>
                            </svg>
                        </div>
                        <div class="content">
                            <h5 class="title custom-title custom-title-2">Trouvez l'organisme concerné</h5>
                            <div class="custom-number-container">
                                <div class="custom-line"></div>
                           
                            </div>
                            <div class=" custom-number-2">2</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="100" data-aos-duration="800">
                    <div class="categorie-grid custom-categorie-grid  categorie-style-3 custom-categorie-style-3 color-green-style color-primary-style">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40.834" height="40.832"
                                viewBox="0 0 40.834 40.832">
                                <g transform="translate(-847 -579)">
                                    <path
                                        d="M19.369,4H5.86A3.86,3.86,0,0,0,2,7.86V34.879a3.86,3.86,0,0,0,3.86,3.86H32.879a3.86,3.86,0,0,0,3.86-3.86V21.369"
                                        transform="translate(846 580.094)" fill="none" stroke="#008064"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path d="M28.264,3.078a4.094,4.094,0,1,1,5.79,5.79L15.72,27.2,8,29.132l1.93-7.72Z"
                                        transform="translate(851.579 578.121)" fill="none" stroke="#008064"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </svg>
                        </div>
                        <div class="content">
                            <h5 class="title custom-title custom-title-2">Remplissez le formulaire étape par étape</h5>

                            <div class="custom-number-container">
                                <div class="custom-line"></div>
                           
                            </div>
                            <div class=" custom-number-2">3</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="400" data-aos-duration="800">
                    <div class="col" data-aos-delay="100" data-aos-duration="800">
                        <div class="categorie-grid custom-categorie-grid  categorie-style-3 custom-categorie-style-3 color-green-style color-primary-style">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.563" height="43.951"
                                    viewBox="0 0 35.563 43.951">
                                    <g transform="translate(-1604 -553)">
                                        <path
                                            d="M24.976,2H8.2A4.2,4.2,0,0,0,4,6.2V39.757a4.2,4.2,0,0,0,4.2,4.2H33.366a4.2,4.2,0,0,0,4.2-4.2V14.586Z"
                                            transform="translate(1601 552)" fill="none" stroke="#008064"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        <path d="M14,2V14.586H26.586" transform="translate(1611.976 552)" fill="none"
                                            stroke="#008064" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" />
                                        <g transform="translate(1614.598 572.977)">
                                            <path d="M20,6,9,17,4,12" transform="translate(-4 -6)" fill="none"
                                                stroke="#008064" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="content">
                                <h5 class="title custom-title custom-title-2">Soumettez votre courrier et obtenez un code de
                                    suivi</h5>
                                    <div class="custom-number-container">
                                <div class="custom-line"></div>
                           
                            </div>
                            <div class=" custom-number-2">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            isloggedin: 'authentication/isloggedin',
        })
    },
    components: {
        SectionTitle: () => import('@/components/common/SectionTitle'),
        SuiviCourrier: () => import("@/components/home-distant-learning/SuiviCourrier.vue"),
    },

    methods: {
        
        async onClickSuivreCourrier() {
            await this.$store.dispatch('suivicourrier/getDetail', true)
        },
        deposerCourrier(){
            if(this.isloggedin){
                this.$router.push('/addcourrier')
            }
            else{
                this.$store.dispatch('authentication/getDetailIsAuthenticatingFromButton', true)
            
            }
        }
      
    },
    data() {
        return {
            isPageLoad: false,
            isLoading: false,
            validCode: true,
            showValidMessage1: false,
            showValidMessage2: false,
            code: '',
        }
    },
}

</script>

<style>
.custom-categorie-grid {
    height: 337.25px !important;
}
.custom-categorie-grid-bgcolor1 {
    background-color: #eeeffd !important;
}
.custom-categorie-grid-bgcolor2 {
    background-color: #e7f8f5 !important;
}
.custom-categorie-grid-bgcolor3 {
    background-color: #feecef !important;
}
.custom-categorie-grid-bgcolor4 {
    background-color: #fff8e8 !important;
}

.custom-categorie-area-1 {
    padding-top: 30px !important;
}

.custom-actions-btn {
    padding-top: 20px !important;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    gap: 20px !important;

}

.custom-row {
    margin-top: -15px !important;
    padding-top: 0px !important;
}

.custom-send-btn {
    cursor: pointer;
    font-weight: bold !important;
    margin-top: 20px !important;
    background-color: rgb(0, 128, 100) !important;

}

.custom-track-btn {
    margin-top: 20px !important;
    cursor: pointer !important;
    font-weight: bold !important;
}

.custom-title {
    height: 78.3px !important;
}


.custom-number-1 {
    color: #007aff !important;
}

.custom-section-title {
    color: rgb(0, 128, 100) !important;
}

.custom-categorie-grid:hover {
    color: var(--color-white) !important;
}

.custom-track-btn:hover {
    background: linear-gradient(-90deg, #2985BC 0%, #2985BC 100%) !important;
}

.custom-track-btn:after {
    background: linear-gradient(-90deg, #4CA4E4 0%, #1da1f2 100%) !important;
}



.categorie-style-3:hover .icon svg path,
.categorie-style-3:hover .icon svg circle {
    stroke: #fff !important;
}

.categorie-style-3:hover .content .custom-title-1 {
    color: var(--color-extra08) !important;
}

.categorie-style-3:hover .content .custom-number-1 {

    color: var(--color-white) !important;
    background-color: var(--color-extra08) !important;
}

.categorie-style-3:hover .content .custom-title-2 {
    color: #008064 !important;
}

.custom-number-2 {
    font-size: 25px !important;
    color: #008064 !important;
}



.categorie-grid.color-green-style:hover.color-primary-style .icon {
    background-color: #008064 !important;

}

.categorie-style-3:hover .content .custom-title-3 {
    color: var(--color-secondary) !important;
}

.categorie-style-3:hover .content .custom-number-3 {
    color: var(--color-white) !important;
    background-color: var(--color-secondary) !important;
}

.categorie-style-3:hover .content .custom-title-4 {
    color: var(--color-tertiary) !important;
}

.categorie-style-3:hover .content .custom-number-4 {
    color: var(--color-white) !important;
    background-color: var(--color-tertiary) !important;
}

.custom-edu-btn-2 {
    text-align: center !important;
    border-radius: 5px !important;
    display: inline-block !important;
    height: 60px !important;
    line-height: 62px !important;
    color: var(--edu-btn-color) !important;
    padding: 0 30px !important;
    font-size: 15px !important;
    transition: 0.4s !important;
    font-family: var(--font-secondary) !important;
    border: 0 none !important;
    overflow: hidden !important;
    position: relative !important;
    z-index: 1 !important;
    font-weight: bold !important;
    margin-top: 20px !important;
    background-color: #2985BC !important;
    background: #2985BC !important;
}
.custom-edu-btn-3 {
    text-align: center !important;
    border-radius: 5px !important;
    display: inline-block !important;
    height: 60px !important;
    line-height: 62px !important;
    padding: 0 30px !important;
    font-size: 15px !important;
    transition: 0.4s !important;
    font-family: var(--font-secondary) !important;
    border: 0 none !important;
    overflow: hidden !important;
    position: relative !important;
    z-index: 1 !important;
    font-weight: bold !important;
    margin-top: 20px !important;
  
}
.custom-template {
    position: fixed !important;
    top: 50%;
    left: 34.8%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 9999 !important;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2) !important;
 

}

.custom-error-msg {
    margin-top: 25px !important;
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

.custom-title-resultat {
    margin-top: 25px !important;
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

.search-box {
    display: flex;
    margin: 0 !important;
    height: 100% !important;
    align-items: center;
    background-color: #fff;
    color: #0a3764 !important;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0px;

    justify-content: center;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1) !important;

}

.search-box input[type="text"] {
    flex: 1;

    border: none !important;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0px !important;
    outline: none !important;
}


.icon-2 {
    font-size: 1.3em !important;
    margin-left: 25px !important;
    color: #0a3764 !important;

}

.search-box .icon-4 {
    width: 80px !important;
    height: 2px !important;
}

.result-box {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;

}

.result-textarea {
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    font-size: 14px;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 10px;
    border-radius: 2px;
    box-sizing: border-box;
}

.result-item {

    align-items: center;

    margin-right: 20px;
    margin-left: 20px;
    margin: 20px;
}

.result-label {
    color: #181818 !important;
    width: 80px;
    margin-right: 30px;
    font-size: 13px !important;
}

.result-line {
    flex-grow: 1;
    border-bottom: 1px solid #ccc;
}

.box-resultat {
    margin: 0 !important;
    height: 100% !important;

    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center !important;
    flex-direction: column;
}

.resultat-section {
    height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;

    align-items: center;
}

.resultat-section-etat {
    height: 70px;
    border-bottom: 1px solid #ccc;
    display: flex;
    border-bottom: none;
    align-items: center;
}

.resultat-section:first-child {
    border-top: none;
}

.resultat-section:last-child {
    border-bottom: none;
}

p {
    margin: 0;
}

.row-label-resultat {
    flex-grow: 1;
    color: #181818 !important;
}

.row-label-value {
    color: #181818 !important;
    font-weight: 500;
    justify-content: right !important;
    margin-left: auto;
}

.row-etat-value-pending {
    color: #f8b924 !important;
    background-color: #fff8e8;
    font-weight: 500;
    padding: 7px !important;
    font-style: italic;
    justify-content: right !important;
    margin-left: auto;
}

.row-etat-value-close {
    color: #168b71 !important;
    background-color: #e7f8f5;
    font-weight: 500;
    padding: 7px !important;
    font-style: italic;
    justify-content: right !important;
    margin-left: auto;
}

#code {
    color: #0a3764 !important;
}

.row-etat-value-pending svg {

    padding: 3px;
    fill: #ffa500;
    width: 20px;
    height: 20px;
}

.row-etat-value-close svg {

    padding: 2.5px;
    fill: #008064;
    width: 20px;
    height: 20px;
}
.custom-line {
  width: 75px; /* Largeur du trait */
  height: 4px; /* Hauteur du trait */
  background-color: #008064; /* Couleur du trait */
  display: flex;
  justify-content: center; /* Centrer horizontalement */
  align-items: center;
}
.custom-number-container{
    display: flex;
  justify-content: center; /* Centrer horizontalement */
  align-items: center; /* Centrer verticalement */
  padding: 20px;
}
.categorie-grid.color-primary-style .icon, .categorie-grid.color-primary-style .course-remain {
  background-color: rgba(26, 182, 157, 0.1) !important;
  color: #0a3764 !important;
}

.custom-categorie-style-3{
    box-shadow: 0px 10px 45px 0px rgba(0,0,0,0.1) !important;
}



.title-text-wrapper {
  flex: 1;
}

.title-button-wrapper {
    white-space: nowrap !important;
  display: flex;
  align-items: center;
 
}



.custom-categories-send-button {
    cursor: pointer;
   
}

.custom-categories-send-btn-wrapper {
    text-align: right;
   
}


</style>
