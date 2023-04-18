<template>
    <div>
        <div class="video-area-2 custom-video-area-2 custom-bg-image bg-image">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="video-banner-content custom-video-banner-content">
                            <div class="video-btn">
                                <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                    <a @click="index = imageIndex" class="video-play-btn video-popup-activation">
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            <h2 class="title">Vidéo démo</h2>
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
 .custom-video-area-2::before {

display: inline-block; /* pour que la div s'adapte à la largeur de l'image */
  width: auto; /* pour que la largeur de la div s'adapte à la largeur de l'image */
  height: auto;
}
</style>