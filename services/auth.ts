import firebase from "firebase";
import { accessorType } from '@/store'

// enum altanative
export const Provider = {
    Google: 'GOOGLE',
    Twitter: 'TWITTER'
} as const;
type Provider = typeof Provider[keyof typeof Provider];

type Config = {
    apiKey: string;
    authDomain: string;
}

export class Auth {
    private $accessor: typeof accessorType;

    constructor($accessor: typeof accessorType, $config: Config) {
        this.$accessor = $accessor;
        if (firebase.apps.length == 0) {
            const config = {
                apiKey: $config.apiKey,
                authDomain: $config.authDomain,
            }

            firebase.initializeApp(config);
        }
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