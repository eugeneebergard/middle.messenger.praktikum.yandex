import { registerComponent } from '@/core/helpers';
import { Block } from '@/core/Block';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui'

export const registerAllComponents = () => {
  registerComponent('Button', Button as typeof Block);
  registerComponent('Input', Input as typeof Block);
};
