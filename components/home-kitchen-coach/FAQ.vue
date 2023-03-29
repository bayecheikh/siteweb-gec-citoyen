
<template>
  <section id="custom-faq-section">
    <div class="edu-faq-area faq-style-3 gap-bottom-equal">
        <div class="container">
            
            <div class="row g-5 row--45">
                <div class="col-lg-6" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                   
                    <div class="edu-faq-content">
                       
                        <div class="section-title section-left">
                            <span class="pre-title ">FAQ</span>
                            <h2 class="title custom-title">Questions fréquentes</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                        </div>
                     
                        <AccordionOne />
                   
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="edu-faq-gallery">
                        <div class="faq-thumbnail" data-aos-delay="50" data-aos="fade-left" data-aos-duration="800">
                            <img src="/images/faq/faq.jpg" class="main-img-1" alt="Faq Images">
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

<style>
.custom-title{
    margin-bottom: 10px !important;
}




</style>