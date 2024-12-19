import { Block } from '@/core/Block';
import signInTmpl from './signIn.hbs?raw';

type TProps = Record<string, unknown>;
export class SignIn extends Block<TProps> {
  constructor(props: TProps) {
    super({
      ...props,
      click: (e: Event) => {
        e.preventDefault();
        console.log('click');
      },
    });
  }

  public render(): DocumentFragment {
    return this.compile(signInTmpl, this.props);
  }
}
