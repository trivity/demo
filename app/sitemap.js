const SITE = "https://demo-phi-one-44.vercel.app";

export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: `${SITE}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE}/#services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/#process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/#area`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/#about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/#faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
