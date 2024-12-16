import { registerComponent } from '@/core/helpers';
import { Block } from '@/core/Block';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { Label } from '@/components/ui';

export const registerAllComponents = () => {
  registerComponent('Button', Button as typeof Block);
  registerComponent('Input', Input as typeof Block);
  registerComponent('Label', Label as typeof Block);
};
