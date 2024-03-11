const components = import.meta.glob('@/components/base/*.vue')

export default {
  async register (app) {
    Object.keys(components)
      .forEach(async src => {
        const componentConfig = await components[src]()

        const splitSrc = src.split('/')
        const componentName = `Base${ splitSrc[splitSrc.length - 1] }`

        app.component(componentName, componentConfig.default || componentConfig)
      })
  }
}


const requireComponent = require.context(
    '@/components/base',
      true,
     /Base[A-Z]\w+\.(vue|js)$/
  )