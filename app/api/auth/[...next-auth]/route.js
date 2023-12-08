import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import {connectToDB} from 'utils/database';
import user from '@models/user';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){
        const sessionUser = await user.findOne({
            email: session.email
        })
        session.user.id = sessionUser._id.toString();
        return session;

    },
    async signIn({profile}){
        try {
            // serveless
            await connectToDB();
            // checking if user exist
            const userExists = await user.findOne({
                email: profile.email
            });
            // if not, create one
            if(!userExists){
                await user.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }
            return true;
        } catch (error) {
           console.log(error);
           return false; 
        }

    }
})
// console.log(handler)

export {handler as GET, handler as POST};