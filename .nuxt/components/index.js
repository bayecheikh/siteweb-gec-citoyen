export { default as AccordionOne } from '../..\\components\\AccordionOne.vue'
export { default as FunFact } from '../..\\components\\FunFact.vue'
export { default as AnimationMouseMove } from '../..\\components\\animation\\MouseMove.vue'
export { default as CommonBreadCrumbTwo } from '../..\\components\\common\\BreadCrumbTwo.vue'
export { default as CommonSectionTitle } from '../..\\components\\common\\SectionTitle.vue'
export { default as CourriersConnexion } from '../..\\components\\courriers\\Connexion.vue'
export { default as CourriersContenu } from '../..\\components\\courriers\\Contenu.vue'
export { default as CourriersCoordonnees } from '../..\\components\\courriers\\Coordonnees.vue'
export { default as CourriersForm } from '../..\\components\\courriers\\Form.vue'
export { default as CourriersMinisteres } from '../..\\components\\courriers\\Ministeres.vue'
export { default as CourriersPrevisualisation } from '../..\\components\\courriers\\Previsualisation.vue'
export { default as CourriersValidation } from '../..\\components\\courriers\\Validation.vue'
export { default as AboutUsOneFunFact } from '../..\\components\\about-us-one\\FunFact.vue'
export { default as AboutUsOneInstructor } from '../..\\components\\about-us-one\\Instructor.vue'
export { default as AboutUsOneWhyChoose } from '../..\\components\\about-us-one\\WhyChoose.vue'
export { default as CourseTypeEight } from '../..\\components\\course\\CourseTypeEight.vue'
export { default as CourseTypeFive } from '../..\\components\\course\\CourseTypeFive.vue'
export { default as CourseTypeFour } from '../..\\components\\course\\CourseTypeFour.vue'
export { default as CourseTypeOne } from '../..\\components\\course\\CourseTypeOne.vue'
export { default as CourseTypeSeven } from '../..\\components\\course\\CourseTypeSeven.vue'
export { default as CourseTypeSix } from '../..\\components\\course\\CourseTypeSix.vue'
export { default as CourseTypeThree } from '../..\\components\\course\\CourseTypeThree.vue'
export { default as CourseTypeTwo } from '../..\\components\\course\\CourseTypeTwo.vue'
export { default as CtaCTAOne } from '../..\\components\\cta\\CTAOne.vue'
export { default as CtaCTAOneAlter } from '../..\\components\\cta\\CTAOneAlter.vue'
export { default as EventList } from '../..\\components\\event\\EventList.vue'
export { default as EventOne } from '../..\\components\\event\\EventOne.vue'
export { default as EventSectionOne } from '../..\\components\\event\\EventSectionOne.vue'
export { default as EventTwo } from '../..\\components\\event\\EventTwo.vue'
export { default as FooterKindergarten } from '../..\\components\\footer\\FooterKindergarten.vue'
export { default as FooterKitchen } from '../..\\components\\footer\\FooterKitchen.vue'
export { default as FooterLanding } from '../..\\components\\footer\\FooterLanding.vue'
export { default as FooterOne } from '../..\\components\\footer\\FooterOne.vue'
export { default as FooterThree } from '../..\\components\\footer\\FooterThree.vue'
export { default as FooterTwo } from '../..\\components\\footer\\FooterTwo.vue'
export { default as FooterYoga } from '../..\\components\\footer\\FooterYoga.vue'
export { default as FooterGoogleMapWithAPI } from '../..\\components\\footer\\GoogleMapWithAPI.vue'
export { default as FooterScrollToTop } from '../..\\components\\footer\\ScrollToTop.vue'
export { default as HomeDistantLearningCourrierEnvoye } from '../..\\components\\home-distant-learning\\CourrierEnvoye.vue'
export { default as HomeMainAccordionOne } from '../..\\components\\home-main\\AccordionOne.vue'
export { default as HomeMainBanner } from '../..\\components\\home-main\\Banner.vue'
export { default as HomeMainBlog } from '../..\\components\\home-main\\Blog.vue'
export { default as HomeMainCategories } from '../..\\components\\home-main\\Categories.vue'
export { default as HomeMainContactInfo } from '../..\\components\\home-main\\ContactInfo.vue'
export { default as HomeMainCourse } from '../..\\components\\home-main\\Course.vue'
export { default as HomeMainFeatures } from '../..\\components\\home-main\\Features.vue'
export { default as HomeMainFunFact } from '../..\\components\\home-main\\FunFact.vue'
export { default as HomeMainSuiviCourrier } from '../..\\components\\home-main\\SuiviCourrier.vue'
export { default as HomeMainVideo } from '../..\\components\\home-main\\Video.vue'
export { default as HeaderAuthentication } from '../..\\components\\header\\Authentication.vue'
export { default as HeaderOne } from '../..\\components\\header\\HeaderOne.vue'
export { default as HeaderTwo } from '../..\\components\\header\\HeaderTwo.vue'
export { default as HeaderMobileMenu } from '../..\\components\\header\\MobileMenu.vue'
export { default as HeaderNavigation } from '../..\\components\\header\\Navigation.vue'
export { default as HeaderOffCanvasMobileMenuTwo } from '../..\\components\\header\\OffCanvasMobileMenuTwo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
