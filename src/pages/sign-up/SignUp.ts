import { Block } from '@/classes/Block';
import { signUpTmpl } from './signUp.tmpl';

type TProps = Record<string, unknown>;
export class SignUp extends Block<TProps> {
  constructor(props: TProps) {
    super('main', { ...props });
  }

  public render(): DocumentFragment {
    return this.compile(signUpTmpl, this.props);
  }
}
