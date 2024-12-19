import { Block } from '@/core/Block';
import { TProps } from './button.types.ts';
import buttonTmpl from './button.hbs?raw';
import './button.scss';

export class Button extends Block<TProps> {
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        click: props?.onClick,
      },
    });
  }

  render() {
    return this.compile(buttonTmpl, this.props);
  }
}
