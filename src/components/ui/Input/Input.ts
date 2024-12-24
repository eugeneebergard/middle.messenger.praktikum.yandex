import { Block } from '@/core/Block';
import { TInputProps } from './input.types.ts';
import inputTmpl from './input.hbs?raw';
import './input.scss';

export class Input extends Block<TInputProps> {
  constructor(props: TInputProps) {
    super({
      ...props,
      events: {
        change: props?.onChange,
        focus: props?.onFocus,
        blur: props?.onBlur,
        input: props?.onInput,
      },
    });
  }

  render() {
    return this.compile(inputTmpl, this.props);
  }
}
