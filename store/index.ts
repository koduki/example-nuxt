import { getAccessorType } from 'typed-vuex'

// Import all your submodules
import * as auth from '~/store/auth'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// export const state = () => { }
export const state = () => ({})
export type RootState = ReturnType<typeof state>
export const getters = {}
export const mutations = {}
export const actions = {}

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
    modules: {
        auth,
    },
})