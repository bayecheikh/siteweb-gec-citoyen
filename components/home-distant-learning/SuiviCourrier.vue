<template>
<div class="offset-xl-2 col-lg-6">
    <div class="contact-form form-style-2">
        <button @click="isPageLoad = false" class="custom-close-btn">x</button>
        <div class="section-title">
            <h4 class="title">Veuillez entrer le code de suivi</h4>
            <p style="font-style: italic; background-color: #F2F2F2; padding: 5px;">Vous avez reçu un courrier comportant un code confidentiel vous permettant d'accéder à l'état de votre courrier. Pour suivre votre courrier, veuillez saisir ce code dans l'espace ci-dessous.</p>
        </div>

        <form class="rnt-contact-form rwt-dynamic-form" ref="form" @submit.prevent="">
            <div class="row row--10">
                <div class="form-group col-12">
                    <input type="text" name="code" placeholder="Votre code">
                </div>
               
                <div class="form-group col-12">
                    <button class="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Valider <i class="icon-4"></i></button>
                     <div v-if="showResult" class="col-12 success-msg">
                        <p>Votre code est invalide</p>
                    </div> 

                </div>
            </div>
        </form>

        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="1" imgSrc="/images/about/shape-13.png" />
            <MouseMove addClassName="shape-2" dataDepth="-1" imgSrc="/images/counterup/shape-02.png" />
        </ul>
    </div>
</div>

</template>



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
.custom-number-one{
    
    color: rgb(0, 128, 100) !important; 
}
.custom-icon-connect{
    fill: rgb(0, 128, 100);
}
.custom-icon-connect circle {
  fill: transparent !important;
  stroke: #fff !important;
  stroke-width: 2 !important;
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
  color: var(--color-white) !important;
}
.custom-background-color:hover{
    background-color:  #f47087 !important;
}
.custom-background-color2:hover{
    background-color:  #1BA2DB !important;
}
.custom-background-color3:hover{
    background-color:  #FFB46A !important;
}

.custom-track-btn:hover {
    background: linear-gradient(-90deg, rgb(30, 95, 116)  0%, rgb(30, 95, 116)  100%) !important;
}
.custom-track-btn:after{
    background: linear-gradient(-90deg, rgb(67, 123, 140) 0%, rgb(60, 135, 156) 100%) !important; 
}       
.custom-close-btn {
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  color: gray;
  padding-right: 15px ;
  font-size: 20px;
}
</style>