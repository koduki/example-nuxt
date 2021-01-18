import { mutationTree } from 'typed-vuex'

export type RootState = ReturnType<typeof state>
export type UserState = {
    id: string,
    name: string,
    token: string,
    pic: string,
    timestamp?: number,
}

export const state = () => ({
    id: "",
    name: "",
    token: "",
    pic: "",
    timestamp: 0,
})

export const mutations = mutationTree(state, {
    store(state, user: UserState) {
        state.id = user.id;
        state.name = user.name;
        state.token = user.token;
        state.pic = user.pic;
        state.timestamp = (user.timestamp) ? (user.timestamp) : 0;
    },
    drop(state) {
        state.id = state.token = state.name = state.pic = "";
    },
    reflesh(state, token: string) {
        state.token = token;
        state.timestamp = new Date().getTime();
    },
    initialiseStore() {
        console.log('initialised user')
    },
})