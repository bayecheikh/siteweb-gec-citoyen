<template>
    <section id="custom-faq-section">
        <div class="edu-faq-area custom-faq-style-3 faq-style-3 gap-bottom-equal">
            <div class="container custom-faq-container">
                <div class="row g-5 row--45">
                    <div class="col-lg-6" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                        <div class="edu-faq-content ">
                            <div class="section-title section-left">
                                <span class="pre-title">FAQ</span>
                                <h2 class="title">Questions fréquentes</h2>
                              
                            </div>
                           
                            <AccordionOne />

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="edu-faq-gallery custom-edu-faq-gallery">
                            <div class="faq-thumbnail thumbnail-2 aos-init aos-animate" data-aos-delay="50" data-aos="fade-left" data-aos-duration="800">
                                <img src="/images/faq/faq-edit-2.png" alt="Faq Images">
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="1.85" imgSrc="/images/faq/shape-12.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-1.85" imgSrc="/images/faq/shape-04.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-3" dataDepth="1.5" imgSrc="/images/faq/shape-10.png" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            AccordionOne: () => import('@/components/AccordionOne'),
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>

<style scoped>



@media (max-width: 768px) { /* Remplacer la valeur 768px par la largeur d'écran souhaitée */
    .custom-edu-faq-gallery {
        justify-content: center; /* Centre les éléments horizontalement */
        flex-wrap: wrap; /* Permet aux éléments de s'enrouler sur plusieurs lignes si nécessaire */
        padding-top: 60px;
        
    }
}

.custom-edu-faq-gallery{
    padding-top: 60px;
}
.custom-faq-container{
        padding-top: 100px !important;
    }
    .custom-title {
        color: #333333 !important;

    }

    .custom-subtitle {
        margin-top: -10px !important;

    }
    .custom-faq-style-3{
        
        background-color: #f3f7f8 !important;
    }


</style>