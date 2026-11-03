const brand = {
  BRAND: process.env.NEXT_PUBLIC_BRAND ?? "CCPMS",
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN ?? "ccpms.com",
  PRICE_STARTER: "{{PRICE_STARTER}}",
  PRICE_GROWTH: "{{PRICE_GROWTH}}",
  PRICE_ENTERPRISE: "{{PRICE_ENTERPRISE}}",
  CONTACT_EMAIL: "hello@ccpms.com",
  WHATSAPP_NUMBER: "+234{{WHATSAPP}}",
  DEMO_FORM_ENDPOINT: process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT ?? "",
  CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ccpms.com",
} as const;

export default brand;
