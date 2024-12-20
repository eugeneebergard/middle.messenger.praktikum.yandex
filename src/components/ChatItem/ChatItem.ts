import { Block } from '@/core/Block';
import chatTmpl from './chatItem.hbs?raw';
import './chatItem.scss';

type TProps = {
  chatItem: Record<string, unknown>;
}

export class ChatItem extends Block<TProps> {
  constructor(props: TProps) {
    super({ ...props });
  }

  render() {
    return this.compile(chatTmpl, this.props);
  }
}
