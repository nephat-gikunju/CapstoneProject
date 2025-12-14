interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h1 className="text-4xl font-bold text-slate-900 mb-3">{title}</h1>
      {description && (
        <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
