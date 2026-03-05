import 'server-only';
import { headers as nextHeaders } from 'next/headers';
import { auth } from './auth';

export async function getSession(request?: Request) {
    const headers = request ? request.headers : await nextHeaders();
    return auth.api.getSession({ headers });
}
