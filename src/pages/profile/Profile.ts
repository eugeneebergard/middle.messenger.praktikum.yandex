import { Block } from '@/classes/Block';
import { profileTmpl } from './profile.tmpl';
import { userData } from '@/constants/mock'

type TProps = Record<string, unknown>;
export class Profile extends Block<TProps> {
  constructor(props: TProps) {
    super('main', { ...props, userData });
  }

  public render(): DocumentFragment {
    return this.compile(profileTmpl, this.props);
  }
}
