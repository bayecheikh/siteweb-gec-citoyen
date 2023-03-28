import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\store\\active_step\\actions.js'), 'active_step/actions.js')
  resolveStoreModules(require('..\\store\\active_step\\getters.js'), 'active_step/getters.js')
  resolveStoreModules(require('..\\store\\active_step\\mutations.js'), 'active_step/mutations.js')
  resolveStoreModules(require('..\\store\\active_step\\state.js'), 'active_step/state.js')
  resolveStoreModules(require('..\\store\\connexion\\actions.js'), 'connexion/actions.js')
  resolveStoreModules(require('..\\store\\connexion\\getters.js'), 'connexion/getters.js')
  resolveStoreModules(require('..\\store\\connexion\\mutations.js'), 'connexion/mutations.js')
  resolveStoreModules(require('..\\store\\connexion\\state.js'), 'connexion/state.js')
  resolveStoreModules(require('..\\store\\contenus\\actions.js'), 'contenus/actions.js')
  resolveStoreModules(require('..\\store\\contenus\\getters.js'), 'contenus/getters.js')
  resolveStoreModules(require('..\\store\\contenus\\mutations.js'), 'contenus/mutations.js')
  resolveStoreModules(require('..\\store\\contenus\\state.js'), 'contenus/state.js')
  resolveStoreModules(require('..\\store\\coordonnees\\actions.js'), 'coordonnees/actions.js')
  resolveStoreModules(require('..\\store\\coordonnees\\getters.js'), 'coordonnees/getters.js')
  resolveStoreModules(require('..\\store\\coordonnees\\mutations.js'), 'coordonnees/mutations.js')
  resolveStoreModules(require('..\\store\\coordonnees\\state.js'), 'coordonnees/state.js')
  resolveStoreModules(require('..\\store\\ministeres\\actions.js'), 'ministeres/actions.js')
  resolveStoreModules(require('..\\store\\ministeres\\getters.js'), 'ministeres/getters.js')
  resolveStoreModules(require('..\\store\\ministeres\\mutations.js'), 'ministeres/mutations.js')
  resolveStoreModules(require('..\\store\\ministeres\\state.js'), 'ministeres/state.js')
  resolveStoreModules(require('..\\store\\toast\\actions.js'), 'toast/actions.js')
  resolveStoreModules(require('..\\store\\toast\\getters.js'), 'toast/getters.js')
  resolveStoreModules(require('..\\store\\toast\\mutations.js'), 'toast/mutations.js')
  resolveStoreModules(require('..\\store\\toast\\state.js'), 'toast/state.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '..\\store\\active_step\\actions.js',
      '..\\store\\active_step\\getters.js',
      '..\\store\\active_step\\mutations.js',
      '..\\store\\active_step\\state.js',
      '..\\store\\connexion\\actions.js',
      '..\\store\\connexion\\getters.js',
      '..\\store\\connexion\\mutations.js',
      '..\\store\\connexion\\state.js',
      '..\\store\\contenus\\actions.js',
      '..\\store\\contenus\\getters.js',
      '..\\store\\contenus\\mutations.js',
      '..\\store\\contenus\\state.js',
      '..\\store\\coordonnees\\actions.js',
      '..\\store\\coordonnees\\getters.js',
      '..\\store\\coordonnees\\mutations.js',
      '..\\store\\coordonnees\\state.js',
      '..\\store\\ministeres\\actions.js',
      '..\\store\\ministeres\\getters.js',
      '..\\store\\ministeres\\mutations.js',
      '..\\store\\ministeres\\state.js',
      '..\\store\\toast\\actions.js',
      '..\\store\\toast\\getters.js',
      '..\\store\\toast\\mutations.js',
      '..\\store\\toast\\state.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
