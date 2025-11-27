import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface SpinnerProps extends React.HTMLAttributes<SVGElement> {}

export function Spinner({ className, ...props }: SpinnerProps) {
  return <Loader2 className={cn('animate-spin', className)} {...props} />;
}
