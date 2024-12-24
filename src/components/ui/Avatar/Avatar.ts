import { Block } from '@/core/Block';
import { TAvatarProps } from './avatar.types.ts';
import avatarTmpl from './avatar.hbs?raw';
import './avatar.scss';

export class Avatar extends Block<TAvatarProps> {
  constructor(props: TAvatarProps) {
    super({ ...props });
  }

  render() {
    return this.compile(avatarTmpl, this.props);
  }
}
