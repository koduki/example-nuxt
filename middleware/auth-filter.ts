import { Context } from '@nuxt/types'

export default ({ redirect, app: { $accessor } }: Context) => {
    console.log("check token");
    if (!$accessor.user.token) {
        console.log("redirect to login");
        return redirect('/login');
    }
}