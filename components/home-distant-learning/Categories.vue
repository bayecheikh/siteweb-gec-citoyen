<template>
    <div class="edu-categorie-area custom-categorie-area-1 categorie-area-1 edu-section-gap">
        <div class="container">
            <SectionTitle alignment="section-center"  title='Plateforme <span class="color-primary custom-section-title">GEC CITOYEN</span>' subTitle="Plateforme digitale nationale destinée aux citoyens pour le dépôt électronique et sécurisé de courriers." />

            <div class="row g-5 custom-row">
                <div class="col-lg-3 col-sm-6" data-aos-delay="100"  data-aos-duration="800">
                    <div class="categorie-grid custom-categorie-grid categorie-style-1 color-primary-style edublink-svg-animate">
                        <div class="icon custom-icon-connect">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-check-outline</title><path d="M21.1,12.5L22.5,13.91L15.97,20.5L12.5,17L13.9,15.59L15.97,17.67L21.1,12.5M11,4A4,4 0 0,1 15,8A4,4 0 0,1 11,12A4,4 0 0,1 7,8A4,4 0 0,1 11,4M11,6A2,2 0 0,0 9,8A2,2 0 0,0 11,10A2,2 0 0,0 13,8A2,2 0 0,0 11,6M11,13C11.68,13 12.5,13.09 13.41,13.26L11.74,14.93L11,14.9C8.03,14.9 4.9,16.36 4.9,17V18.1H11.1L13,20H3V17C3,14.34 8.33,13 11,13Z" /></svg>
                        </div>
                        <div class="content">
                            <h5 class="title custom-title">Se connecter à la plateforme</h5>
                            <p></p>
                            <div class="course-remain custom-number">1</div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6" data-aos-delay="200" data-aos-duration="800">
                    <div class="categorie-grid custom-categorie-grid categorie-style-1 color-secondary-style edublink-svg-animate">
                        <div class="icon custom-icon custom-icon-find">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                        </div>
                        <div class="content">
                            <h5 class="title custom-title">Trouvez l'organisme concerné</h5>
                            <p></p>
                            <div class="course-remain custom-number">2</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="300"  data-aos-duration="800">
                    <div class="categorie-grid custom-categorie-grid categorie-style-1 color-extra08-style edublink-svg-animate">
                        <div class="icon custom-icon-form">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note-text-outline</title><path d="M15 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V9L15 3M19 19H5V5H14V10H19M17 14H7V12H17M14 17H7V15H14" /></svg>
                        </div>
                        <div class="content">
                            <h5 class="custom-title title">Renseignez le formulaire étape par étape</h5>
                            <p></p>
                            <div class="course-remain custom-number">3</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="400" data-aos-duration="800">
                    <div class="categorie-grid custom-categorie-grid categorie-style-1 color-extra05-style edublink-svg-animate">
                        <div class="icon custom-icon-submit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>send-circle-outline</title><path d="M8,7.71L18,12L8,16.29V12.95L15.14,12L8,11.05V7.71M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>
                        </div>
                        <div class="content">
                            <h5 class="title custom-title">Soumettez votre courrier et obtenez un code de suivi</h5>
                            <p></p>
                            <div class="course-remain custom-number">4</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row g-5">
            <div class="banner-btn custom-banner-btn">
                            <!--<n-link to="/" class="edu-btn" style = "background-color: #1F6680" >
                                Suivre son courrier <i class="icon-4"></i>
                          </n-link>  !-->
                            <n-link to="/addcourrier" class=" custom-custom edu-btn text-uppercase" >
                                Déposer un courrier <i class="icon-4"></i>
                            </n-link>
                            
                        </div>
                        </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        }
    }
</script>

<style>

.custom-categorie-grid{
    height: 337.25px !important;
}
.custom-categorie-area-1{
    padding-top: 30px !important;
}
.custom-banner-btn{
    padding-top: 25px !important;
    display: flex !important;
  justify-content: center !important;
  gap: 20px !important;
}
.custom-row{
    margin-top: -35px !important;
    padding-top: 0px !important;
}
.custom-custom{
    font-weight: bold !important;

    background-color: rgb(0, 128, 100) !important; 

   
}
.custom-title{
    height: 78.3px !important; 
}
.custom-number{
    
    font-size: 25px !important; 
}
.custom-icon-connect{
    fill: rgb(0, 128, 100);
}
.custom-icon-find{
    fill: #ee4a62;
}
.custom-icon-form{
    fill: #007aff;
}
.custom-icon-submit{
    fill: #f8b81f;
}
.custom-section-title{
    color: rgb(0, 128, 100) !important; 
}
.custom-categorie-grid:hover .custom-title {
  color: white !important;
}
</style>