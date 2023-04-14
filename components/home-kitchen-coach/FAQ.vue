<template>
    <section id="custom-faq-section">
        <div class="edu-faq-area custom-faq-style-3 faq-style-3 gap-bottom-equal">
            <div class="container">
                <div class="row g-5 row--45">
                    <div class="col-lg-6" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                        <div class="edu-faq-content">
                         
                            <p class="custom-faq-subtitle">FAQ</p>
                                <h2 class="title">Questions fréquentes</h2>
                           
                            <AccordionOne />

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="edu-faq-gallery">
                            <div class="faq-thumbnail custom-faq-thumbnail" data-aos-delay="50" data-aos="fade-left" data-aos-duration="800">
                                <img src="/images/faq/faq-edit.png" class="main-img-1 custom-faq-img" alt="Faq Images">
                            </div>
                        </div>
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

  
    .custom-faq-subtitle{
        padding-bottom: 20px !important;
    }
    .custom-title {
        color: #333333 !important;

    }

    .custom-subtitle {
        margin-top: -10px !important;

    }
    .custom-faq-style-3{
        padding-top: 120px !important;
        background-color: #f3f7f8 !important;
    }
    .custom-faq-thumbnail{
        margin-top: 130px !important;
    }

</style>