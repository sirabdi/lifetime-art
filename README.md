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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mobile Animation Approach

- Uses the AOS (Animate On Scroll) library to animate elements as they enter the viewport, including on mobile devices.
- Animations are triggered by adding `data-aos` attributes (e.g., `data-aos="fade-up"`, `data-aos="zoom-in-up"`) to elements, with `data-aos-delay` and `data-aos-duration` for timing and sequencing.
- For mobile responsiveness, JavaScript (`window.innerWidth`) or Tailwind’s responsive classes are used to adjust animation types or show/hide elements based on screen size.
- Navigation and menu interactions (like the mobile menu) use React state to control visibility and add/remove `overflow-hidden` on the body to prevent background scrolling when the menu is open.
- Smooth scrolling to sections is handled with `scrollIntoView({ behavior: "smooth" })` on mobile and desktop for a seamless user experience.
