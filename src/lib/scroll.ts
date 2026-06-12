/** Mjuk scroll till ett ankar-id, t.ex. scrollToId('#boka'). */
export function scrollToId(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}