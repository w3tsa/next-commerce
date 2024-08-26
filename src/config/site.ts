type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Coding Jitsu Store",
  description:
    "An Open source E-commerce platform with Next.js 14 and Shopify Headless CMS with Tailwind css and shadcn/ui.",
  url: "https://rush-store-cj.vercel.app/",
  ogImage: "https://rush-store-cj.vercel.app/og",
  links: {
    twitter: "https://twitter.com/codingjitsu",
    github: "https://github.com/codingjitsu",
  },
};
