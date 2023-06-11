import getToken from "./getToken.ts";
import axios from "axios";
import store from './index.ts'

export default async (): Promise<any> => {
    // /api/http/team-directory/memberships?profiles=me
    const token = await getToken();
    const response = await axios.get(
        `${token.serverUrl}/api/http/team-directory/profiles/me`,
        {
            headers: {
                'Authorization': `Bearer ${token.token}`,
                'Accept': 'application/json',
            }
        }
    );
    if (response.status === 200) {
        store.actions.setUser(response.data);
        return 'ok';
    }
    return 'error'
}