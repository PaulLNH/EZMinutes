// src/types/next-auth.d.ts
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      role: Role;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
    firstName: string;
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    firstName: string;
    role: Role;
  }
}
