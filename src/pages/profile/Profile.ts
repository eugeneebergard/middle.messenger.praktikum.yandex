import { Block } from '@/core/Block';
import profileTmpl from './profile.hbs?raw';
import { userData } from '@/constants/mock';

type TProfileProps = Record<string, unknown>;
export class Profile extends Block<TProfileProps> {
  constructor(props: TProfileProps) {
    super({ ...props, userData });
  }

  public render(): DocumentFragment {
    return this.compile(profileTmpl, this.props);
  }
}
