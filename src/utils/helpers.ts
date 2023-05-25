import { scroll } from 'quasar';
const { setVerticalScrollPosition } = scroll;

export function scrollToElement(el: HTMLElement, target: Element | Window) {
  const offset = el.offsetTop - 100;
  const duration = 500;
  setVerticalScrollPosition(target, offset, duration);
}

export function scrollTo(section: string, target: HTMLElement | null) {
  if (!target) return;

  const sectionRef: HTMLElement | null = document.getElementById(section);
  if (!sectionRef) return;

  scrollToElement(sectionRef, target);
}
