# packages/auth

Auth and identity helper package.

Responsibilities:

- Clerk identity normalization
- internal user lookup helpers
- user scope helper types
- server-only auth guards

Rule: all server entrypoints must resolve or receive a trustworthy `userId` before touching user data.

