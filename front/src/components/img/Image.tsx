interface IImageProps {
  className?: string;
  src: string;
  alt: string;
}

export function Image({ src, alt, className }: IImageProps) {
  return <img className={className} src={src} alt={alt} />;
}
