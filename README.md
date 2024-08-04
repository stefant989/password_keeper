### Password Keeper

Password Keeper is a user-friendly application designed to help users manage their passwords efficiently. With authentication features, users can store, edit, and manage their information in one place.

## Tech stack
- Nextjs 14
- Typescript
- Tailwind
- Shadcn
- prisma (sqlite)

## Start the project

- Clone the project
- Run `npm install`
- In the root folder, create an `.env` file and add `DATABASE_URL="file:./dev.db"` and `JWT_SECRET="your secret string"`
- Run `npx prisma migrate dev --name init`
- Run `npx prisma generate`
- Start the project with `npm run dev`