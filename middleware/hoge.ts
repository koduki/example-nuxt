import { Middleware } from '@nuxt/types'
// export const state = () => ({

const myMiddleware: Middleware = (context) => {
    console.log("pass: midlware2");

}
export default myMiddleware
