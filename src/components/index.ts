import { registerComponent } from '@/core/helpers';
import { Block } from '@/core/Block';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { Label } from '@/components/ui';
import { Avatar } from '@/components/ui';
import { ErrorMessage } from '@/components/ui';
import { ChatItem } from '@/components/ChatItem';
import { ChatMessage } from '@/components/ChatMessage';

export const registerAllComponents = () => {
  registerComponent('Button', Button as typeof Block);
  registerComponent('Input', Input as typeof Block);
  registerComponent('Label', Label as typeof Block);
  registerComponent('Avatar', Avatar as typeof Block);
  registerComponent('ErrorMessage', ErrorMessage as typeof Block);
  registerComponent('ChatItem', ChatItem as typeof Block);
  registerComponent('ChatMessage', ChatMessage as typeof Block);
};
