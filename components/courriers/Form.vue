<template>
   <div class="edu-course-area course-area-3 bg-lighten04 pb-5 pt-5">
      <div class="container mb-6">
         <SectionTitle preTitle="" title='' alignment='section-center' />
         <div class="isotope-wrapper">
            <div class="isotop-button isotop-filter nav">
               <button @click="$goToTab('connexion')" :class="'nav-link '+(detailactive_step.id=='connexion'?'active':'')">Connexion</button>
               <button @click="$goToTab('coordonnees')" :class="'nav-link '+(detailactive_step.id=='coordonnees'?'active':'')">Vos coordonnées</button>
               <button @click="$goToTab('ministeres')" :class="'nav-link '+(detailactive_step.id=='ministeres'?'active':'')" >Trouvez le ministère</button>
               <button @click="$goToTab('contenu')" :class="'nav-link '+(detailactive_step.id=='contenu'?'active':'')" >Contenu du courrier</button>
               <button @click="$goToTab('validation')" :class="'nav-link '+(detailactive_step.id=='validation'?'active':'')">Validation</button>               
            </div>
            <div class="tab-content">
              <div :class="'tab-pane fade '+(detailactive_step.id=='connexion'?'show active':'')" id="online" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-6">
                          <Connexion />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>
              <div :class="'tab-pane fade '+(detailactive_step.id=='coordonnees'?'show active':'')" id="coordonnees" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-8">
                          <Coordonnees />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>
              <div :class="'tab-pane fade '+(detailactive_step.id=='ministeres'?'show active':'')" id="undergraduate" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-12 pt-4">
                          <Ministeres />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>
              <div :class="'tab-pane fade '+(detailactive_step.id=='contenu'?'show active':'')" id="graduate" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-8 pt-4">
                          <Contenu />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>
              <div :class="'tab-pane fade '+(detailactive_step.id=='validation'?'show active':'')" id="validation" role="tabpanel">
                 <div class="container position-relative">
                    <div class="row g-5 justify-content-center">
                       <div class="col-lg-8 pt-4">
                          <Validation />
                       </div>
                    </div>
                    <ul class="shape-group">
                       <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                       <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                       <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                    </ul>
                 </div>
              </div>              
            </div>
         </div>
      </div>
      <ul class="shape-group">
         <li class="shape-1">
            <img src="/images/others/map-shape-3.png" alt="Shape">
         </li>
         <li class="shape-2">
            <img src="/images/others/map-shape-3.png" alt="Shape">
         </li>
      </ul>
   </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
   export default {
       components: {
           Connexion: () => import("@/components/courriers/Connexion"),
           Coordonnees: () => import("@/components/courriers/Coordonnees"),
           Ministeres: () => import("@/components/courriers/Ministeres"),
           Contenu: () => import("@/components/courriers/Contenu"),
           Validation: () => import("@/components/courriers/Validation"),
       },
       mounted: function() { 
        this.$store.dispatch('active_step/getDetail',{id:'connexion'})        
       },
       computed: mapGetters({
           detailactive_step: 'active_step/detailactive_step',
       }),
       data () {
           return {
               
           }
       },
       methods: {
       },
   }
</script>
<style lang="scss">
   .course-area-3 {
   .isotop-button {
   button {
   &:hover,
   &.active {
   background-color: var(--color-secondary);
   color: var(--color-white);
   }
   &.active:after {
   bottom: -10px;
   visibility: visible;
   opacity: 1;
   }
   }
   }
   }
   .dark-mode {
   .course-area-3 { 
   .isotop-button {
   button {
   &:hover,
   &.active {
   background-color: var(--color-secondary);
   color: var(--color-white);
   }
   }
   }
   }
   }
   .login-form-box {
 box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.08);
 padding: 40px 50px !important;
 border-radius: 5px;
 background-color: #ffffff;
 background-color: var(--color-white);
}
</style>
