This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### SSR - Server Side Rendering 
This is default behaviour

### SSG - Static Site Generation
Any content which does not have network calls is a static page by default

### ISG - Incremental Static Regeneration
fetch in nextjs caches the response.

However, there are exceptions, fetch requests are not cached when:

- Used inside a Server Action.
- Used inside a Route Handler that uses the POST method.

for dynamic rendering (everytime shows updated data when occurs loading)

```
export const dynamic = 'force-dynamic'
```

