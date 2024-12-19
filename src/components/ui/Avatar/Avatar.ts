import { Block } from '@/core/Block';
import avatarTmpl from './avatar.hbs?raw';
import './avatar.scss';

type TProps = {
  avatar: string;
  size: string;
}

export class Avatar extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  render() {
    return this.compile(avatarTmpl, this.props);
  }
}
