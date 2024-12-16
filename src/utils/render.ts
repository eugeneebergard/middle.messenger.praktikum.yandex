import { Block } from '@/classes/Block'
export const render = (component: Block<{}>, parentSelector = '#app') => {
  const parent = document.querySelector(parentSelector);

  parent!.appendChild(component.getContent() as HTMLElement);
  component.dispatchComponentDidMount();
}
