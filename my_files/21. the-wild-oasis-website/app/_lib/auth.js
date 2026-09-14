import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { createGuest, getGuest } from './data-service';

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });
        return true;
      } catch (err) {
        console.error('Chyba při přihlášení v signIn callbacku:', err);

        return false;
      }
    },
    async session({ session, user }) {
      // const guest = await getGuest(session.user.email);
      // session.user.guestId = guest.id;
      // return session;
      try {
        const guest = await getGuest(session.user.email);
        if (guest) {
          session.user.guestId = guest.id;
        }
        return session;
      } catch (err) {
        console.error('Chyba v session callbacku:', err);
        return session; // Vrátíme session i v případě chyby, aby přihlášení nespadlo
      }
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
