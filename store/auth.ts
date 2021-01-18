// export const state = () => ({
//     authenticated: true
// })

import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'

export const state = () => ({
    authenticated: true as boolean,
})

// If needed, you can define state for use in vanilla Vuex types
export type RootState = ReturnType<typeof state>