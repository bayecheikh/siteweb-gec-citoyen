<template>
    <div>
        <div class="video-area-1 custom-video-area-1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="video-gallery">
                            <div class="thumbnail custom-thumbnail">
                                <img src="/images/bg/custom-bg-image.png" alt="Vidéo démo">
                                <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                    <a @click="index = imageIndex" class="video-play-btn video-popup-activation">
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>


<script>
    export default {
      
        data () {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
                    }
                ],
                index: null
            }
        }
    }
</script>

<style>
    .video-area-1 .video-play-btn {
        cursor: pointer;
    }
    .custom-thumbnail {
     
  display: inline-block; /* pour que la div s'adapte à la largeur de l'image */
  width: auto; /* pour que la largeur de la div s'adapte à la largeur de l'image */
  
}
.custom-video-area-1::before {
background-image: none;
display: inline-block; /* pour que la div s'adapte à la largeur de l'image */
  width: auto; /* pour que la largeur de la div s'adapte à la largeur de l'image */
  height: auto;
}

</style>