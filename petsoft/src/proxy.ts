import { getSession } from './lib/auth-session';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
    const session = await getSession(request);

    if (!session)
        return NextResponse.redirect(
            new URL(
                `/login?callbackUrl=${request.nextUrl.pathname}`,
                request.url,
            ),
        );
}

export const config = {
    matcher: ['/app/:path*'],
};
