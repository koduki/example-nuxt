import { Context } from '@nuxt/types'

export default ({ redirect, app: { $accessor } }: Context) => {
    console.log("pass: midlware1");
    console.log($accessor.auth.authenticated);
    if (!$accessor.auth.authenticated) {
        return redirect('/login');
    }
}