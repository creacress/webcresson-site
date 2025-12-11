// lib/gtag.ts

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function sendGtagEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, params);
}

// 👉 Click sur un CTA (si tu veux l'utiliser ailleurs)
export function trackCtaClick(label: string) {
  sendGtagEvent("cta_click", { label });
}

// 👉 Conversion formulaire (GA4 + Google Ads)
export function trackLeadFormSubmit(formType: "audit" | "contact") {
  // Event GA4 custom
  sendGtagEvent("conversion_event_submit_lead_form", {
    form_type: formType,
  });

  // Event custom pour ton tag Ads
  sendGtagEvent("ads_conversion_Envoi_de_formulaire_pou_1", {
    form_type: formType,
  });

  // Conversion Google Ads (snippet officiel)
  sendGtagEvent("conversion", {
    send_to: "AW-11024728642/ZK7HCLbl4IobEMKEgIkp",
    form_type: formType,
  });
}
