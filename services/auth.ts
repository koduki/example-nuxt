import firebase from "firebase";
import { accessorType } from '@/store'

export const Provider = {
    Google: 'GOOGLE',
    Twitter: 'TWITTER'
} as const;
type Provider = typeof Provider[keyof typeof Provider];

export class Auth {
    private $accessor: typeof accessorType;
    constructor($accessor: typeof accessorType) {
        this.$accessor = $accessor;
        if (firebase.apps.length == 0) {
            const config = {
                apiKey: process.env.NUXT_ENV_AUTH_API_KEY,
                authDomain: process.env.NUXT_ENV_AUTH_API_DOMAIN,
            };
            firebase.initializeApp(config);
        }
        console.log(firebase.apps);
    }

    async login(provider: Provider) {
        const response = await ((provider: Provider) => {
            switch (provider) {
                case "GOOGLE": return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
                case "TWITTER": return firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider());
            }
        })(provider);
        const user = await response.user;
        const token = await user?.getIdToken();

        this.$accessor.user.store({
            id: user!.uid,
            name: (user?.displayName) ? user?.displayName : "",
            pic: (user?.photoURL) ? user?.photoURL : "",
            token: token!
        })
    }

    async logout() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.$accessor.user.drop();
            })
    }
}