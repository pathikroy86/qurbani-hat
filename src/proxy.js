import { NextResponse } from "next/server";

export async function proxy(request) {
    const { pathname, search } = request.nextUrl;
    const isAnimalDetailsRoute = /^\/animals\/[^/]+/.test(pathname);
    const isProfileRoute = pathname === "/profile";

    if (!isAnimalDetailsRoute && !isProfileRoute) {
        return NextResponse.next();
    }

    const sessionUrl = new URL("/api/auth/get-session", request.url);
    const sessionResponse = await fetch(sessionUrl, {
        headers: request.headers,
    });
    const session = await sessionResponse.json();

    if (session) {
        return NextResponse.next();
    }

    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackURL", `${pathname}${search}`);

    return NextResponse.redirect(signInUrl);
}

export const config = {
    matcher: ["/animals/:path*", "/profile"],
};
