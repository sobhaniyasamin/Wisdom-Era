export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wisdom Era",
    url: "https://wisdomera.net",
    logo: "https://wisdomera.net/logo.svg",
    description:
      "AI-focused tech holding company investing in and co-building the future of e-commerce and agriculture across emerging markets.",
    sameAs: ["https://www.linkedin.com/company/wisdom-era/"],
    founder: {
      "@type": "Person",
      name: "Vahid Shirazi",
      url: "https://www.linkedin.com/in/vahid-shirazi-55493536",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@wisdomera.net",
      contactType: "General",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
