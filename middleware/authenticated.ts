import { Context } from '@nuxt/types'

export default ({ redirect, app: { $accessor } }: Context) => {
    console.log("check:"+$accessor.user.token);
    if ($accessor.user.token) {
        console.log("pass: midlware3");
    } else {
        console.log("redirect: login");
        return redirect('/login');
    }
}