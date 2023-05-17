export { default as FunFact } from '../..\\components\\FunFact.vue'
export { default as CommonBreadCrumbTwo } from '../..\\components\\common\\BreadCrumbTwo.vue'
export { default as CommonSectionTitle } from '../..\\components\\common\\SectionTitle.vue'
export { default as CompteCourrierEnattente } from '../..\\components\\compte\\CourrierEnattente.vue'
export { default as CompteCourrierEnvoye } from '../..\\components\\compte\\CourrierEnvoye.vue'
export { default as CompteCourrierRecu } from '../..\\components\\compte\\CourrierRecu.vue'
export { default as CompteDetailCourrier } from '../..\\components\\compte\\DetailCourrier.vue'
export { default as CompteMesCourrier } from '../..\\components\\compte\\MesCourrier.vue'
export { default as CourriersConnexion } from '../..\\components\\courriers\\Connexion.vue'
export { default as CourriersContenu } from '../..\\components\\courriers\\Contenu.vue'
export { default as CourriersCoordonnees } from '../..\\components\\courriers\\Coordonnees.vue'
export { default as CourriersForm } from '../..\\components\\courriers\\Form.vue'
export { default as CourriersMinisteres } from '../..\\components\\courriers\\Ministeres.vue'
export { default as CourriersPrevisualisation } from '../..\\components\\courriers\\Previsualisation.vue'
export { default as CourriersValidation } from '../..\\components\\courriers\\Validation.vue'
export { default as AnimationMouseMove } from '../..\\components\\animation\\MouseMove.vue'
export { default as FooterKitchen } from '../..\\components\\footer\\FooterKitchen.vue'
export { default as FooterScrollToTop } from '../..\\components\\footer\\ScrollToTop.vue'
export { default as HeaderAuthentication } from '../..\\components\\header\\Authentication.vue'
export { default as HeaderOne } from '../..\\components\\header\\HeaderOne.vue'
export { default as HeaderTwo } from '../..\\components\\header\\HeaderTwo.vue'
export { default as HeaderMobileMenu } from '../..\\components\\header\\MobileMenu.vue'
export { default as HeaderNavigation } from '../..\\components\\header\\Navigation.vue'
export { default as HeaderOffCanvasMobileMenuTwo } from '../..\\components\\header\\OffCanvasMobileMenuTwo.vue'
export { default as HomeDistantLearningCourrierEnvoye } from '../..\\components\\home-distant-learning\\CourrierEnvoye.vue'
export { default as HomeMainAccordionOne } from '../..\\components\\home-main\\AccordionOne.vue'
export { default as HomeMainBanner } from '../..\\components\\home-main\\Banner.vue'
export { default as HomeMainCategories } from '../..\\components\\home-main\\Categories.vue'
export { default as HomeMainFAQ } from '../..\\components\\home-main\\FAQ.vue'
export { default as HomeMainFunFact } from '../..\\components\\home-main\\FunFact.vue'
export { default as HomeMainSuiviCourrier } from '../..\\components\\home-main\\SuiviCourrier.vue'
export { default as HomeMainVideo } from '../..\\components\\home-main\\Video.vue'

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
