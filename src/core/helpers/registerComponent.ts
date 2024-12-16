import Handlebars from 'handlebars';
import { Block } from '@/core/Block';

const componentRegistry: Record<string, typeof Block> = {};

export function registerComponent<P extends Record<string, unknown>>(name: string, componentClass: typeof Block) {
  componentRegistry[name] = componentClass;

  Handlebars.registerHelper(name, function (this: any, { hash }: { hash: Record<string, unknown> }) {
    const instance = new componentClass(hash as P);

    if (!this.children) {
      this.children = {};
    }

    const id = instance.id;
    this.children[id] = instance;

    return `<div data-id="${id}"></div>`;
  });
}




