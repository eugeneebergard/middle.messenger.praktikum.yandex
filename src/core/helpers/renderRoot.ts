import { Block } from '@/core/Block';
export const renderRoot = (page: Block<{}>) => {
  const root = document.querySelector('#app');

  root!.appendChild(page.getContent() as HTMLElement);
  page.dispatchComponentDidMount();
};
