import {getCurrentUser} from "@/router";

export async function fetchUserDetails() {
    try {
        const user = await getCurrentUser();
        if (user) {
            return {
                uid: user.uid,
                email: user.email,
                providers: user.providerData.map(provider => provider.providerId),
                created: user.metadata.creationTime,
                lastSignIn: user.metadata.lastSignInTime,
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error while retrieving the user's UID:", error);
        return null;
    }
}