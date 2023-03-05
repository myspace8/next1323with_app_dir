Using the appDirectory in nextjs 13. Trying the layout implementations with a simple web page with a blog.

The app has two layouts. One in the app directory and the other in the blog directory. Layout in the app directory renders the Navbar and Footer in every page of the app. However, Layout in the blog directory renders a title for every page which shows the individual blog posts.

Inside the page in the blog directory, I am rendering two posts at a time and therefore I have next and previous buttons to help go back and forth while always keeping the title of the blog page, thanks to the layout in the blog directory.

This app mimics the openai website [OpenAi](http://openai.com/).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Get server running [ json-server --port 7000 --watch data.json ]
