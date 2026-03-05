import { auth } from '@/lib/auth'; // path to your auth file
import { toNextJsHandler } from 'better-auth/next-js';

const authHandlers = toNextJsHandler(auth);

export const { GET } = authHandlers;

export async function POST(request: Request) {
    const clonedRequest = request.clone();

    // use ArcJet to do different protections here
    // It will use "request" so clone it so authHandlers
    // can use a copy of "request" while arcJet uses
    // "request"

    return authHandlers.POST(clonedRequest);
}
