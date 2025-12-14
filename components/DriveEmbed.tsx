interface DriveEmbedProps {
  src: string;
  title: string;
  height?: string;
  className?: string;
}

export default function DriveEmbed({
  src,
  title,
  height = '600px',
  className = '',
}: DriveEmbedProps) {
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg border border-slate-200 ${className}`}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        allow="autoplay"
        className="border-0"
      />
    </div>
  );
}
