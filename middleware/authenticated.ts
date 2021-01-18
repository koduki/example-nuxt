
// export default function ({ store, redirect }) {
//     // If the user is not authenticated
//     console.log("pass: midlware");
//     if (!store.state.auth.authenticated) {
//         return redirect('/login')
//     }
// }

import { Middleware } from '@nuxt/types'
// export const state = () => ({

const myMiddleware: Middleware = (context) => {
    console.log("pass: midlware1");
    if (!context.store.state.auth.authenticated) {
        return context.redirect('/login');
    }
}
export default myMiddleware

