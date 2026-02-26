import { MetadataRoute } from "next";

const HOST = process.env.NEXT_PUBLIC_HOST ?? "https://bonsai-www.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: HOST,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${HOST}/see-it-in-action`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
