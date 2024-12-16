import { Block } from '@/core/Block';
import { profileTmpl } from './profile.tmpl';
import { userData } from '@/constants/mock';

type TProps = Record<string, unknown>;
export class Profile extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props, userData });
  }

  public render(): DocumentFragment {
    return this.compile(profileTmpl, this.props);
  }
}
