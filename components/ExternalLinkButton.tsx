import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExternalLinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export default function ExternalLinkButton({
  href,
  children,
  variant = 'default',
  className = '',
}: ExternalLinkButtonProps) {
  return (
    <Button
      variant={variant}
      asChild
      className={className}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        {children}
        <ExternalLink size={16} />
      </a>
    </Button>
  );
}
