import { Block } from '@/core/Block';
import { signUpTmpl } from './signUp.tmpl';

type TProps = Record<string, unknown>;
export class SignUp extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  public render(): DocumentFragment {
    return this.compile(signUpTmpl, this.props);
  }
}
