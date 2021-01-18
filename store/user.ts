type UserType = {
    id?: string,
    name: string,
    email: string,
    thumbnail: string,
}

export const state = () => ({
    id:{} as UserType,
    name: "",
    token: "",
    pic: "",
    timestamp: 0,
})

import { GetterTree, ActionTree, MutationTree } from 'vuex'
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    store: (state, user: any) => {
        state.id = user.id;
        state.token = user.token;
        state.name = user.name;
        state.pic = user.pic;
        state.timestamp = new Date().getTime();
    },
}

// export const mutations = {
//     store(state, user) {

//     },
//     add(state, text) {
//       state.list.push({
//         text,
//         done: false
//       })
//     },
//     remove(state, { todo }) {
//       state.list.splice(state.list.indexOf(todo), 1)
//     },
//     toggle(state, todo) {
//       todo.done = !todo.done
//     }
//   }