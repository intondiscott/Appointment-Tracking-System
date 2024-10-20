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
docker network create .
docker build -t bespoke-app .
docker compose up
```
