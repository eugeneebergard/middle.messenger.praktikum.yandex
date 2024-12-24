import { Block } from '@/core/Block';
import { TButtonProps } from './button.types.ts';
import buttonTmpl from './button.hbs?raw';
import './button.scss';

export class Button extends Block<TButtonProps> {
  constructor(props: TButtonProps) {
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
