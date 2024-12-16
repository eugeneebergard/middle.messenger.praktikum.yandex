import { Block } from '@/classes/Block';
import { signInTmpl } from './signIn.tmpl';

type TProps = Record<string, unknown>;
export class SignIn extends Block<TProps> {
  constructor(props: TProps) {
    super('main', { ...props });
  }

  public render(): DocumentFragment {
    return this.compile(signInTmpl, this.props);
  }
}
