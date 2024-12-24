import { Block } from '@/core/Block';
import signUpTmpl from './signUp.hbs?raw';

type TSignUpProps = Record<string, unknown>;
export class SignUp extends Block<TSignUpProps> {
  constructor(props: TSignUpProps) {
    super({ ...props });
  }

  public render(): DocumentFragment {
    return this.compile(signUpTmpl, this.props);
  }
}
