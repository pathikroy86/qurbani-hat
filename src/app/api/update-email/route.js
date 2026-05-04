import { auth } from "@/lib/auth";
import { client } from "@/lib/auth";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
        query: {
            disableCookieCache: true,
        },
    });

    if (!session?.user) {
        return NextResponse.json({ message: "Please login first" }, { status: 401 });
    }

    const { email } = await request.json();
    const newEmail = email?.toLowerCase();

    if (!newEmail) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
        return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const users = client.db("qurbani-hat").collection("user");
    const oldUserId = new ObjectId(session.user.id);
    const emailAlreadyUsed = await users.findOne({
        email: newEmail,
        _id: { $ne: oldUserId },
    });

    if (emailAlreadyUsed) {
        return NextResponse.json({ message: "Email already used" }, { status: 400 });
    }

    await users.updateOne(
        { _id: oldUserId },
        {
            $set: {
                email: newEmail,
                emailVerified: false,
                updatedAt: new Date(),
            },
        }
    );

    return NextResponse.json({ message: "Email updated" });
}
