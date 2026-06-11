export const SITE_URL = "https://kevin-li-jgrc.github.io/filestest";

export const CONTACT_EMAIL = "dianqi662@gmail.com";

export function mailto(subject: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
