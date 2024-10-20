This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## What the Project Looks Like So Far

![alt text](public/assets/example1.png)
![alt text](public/assets/example2.png)
![alt text](public/assets/example3.png)
![alt text](public/assets/example4.png)
![alt text](public/assets/example5.png)
![alt text](public/assets/example6.png)

## Set up Environment Variables

```text
1.) put .env.local file in the root of project
2.) populate .env.local file with secret keys
AUTH_SECRET=your secret
MONGO_URI=your secret
AUTH_GITHUB_ID=your secret
AUTH_GITHUB_SECRET=your secret
AUTH_GOOGLE_ID=your secret
AUTH_GOOGLE_SECRET=your secret
3.) That's it!
```

## Easiest Start with Docker

Install dockercli, and docker desktop https://www.docker.com/products/docker-desktop/

- Terminal command:

```bash
sudo docker network create .
sudo docker build -t bespoke-app .
docker compose up
```

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
