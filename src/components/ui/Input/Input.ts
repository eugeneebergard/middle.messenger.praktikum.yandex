import { Block } from '@/core/Block';
import { TProps } from './input.types.ts';
import { inputTmpl } from './input.tmpl.ts';
import './input.scss';

export class Input extends Block<TProps> {
  constructor(props: TProps) {
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
