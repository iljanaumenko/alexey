type ImageProps = {
  src: string;
  caption?: string;
  captionclass?: string;
  className?: string;
  /** When true, no scroll-in animation (e.g. for side panel content) */
  noEnter?: boolean;
};

export default function Image({
  src,
  caption,
  captionclass = "",
  className = "",
  noEnter = false,
}: ImageProps) {
  return (
    <figure className={`${className} relative ${noEnter ? "" : "enter"}`}>
      <img
        className="object-cover relative w-full h-full"
        src={src}
        alt={caption || ""}
      />
      {caption ? (
        <div
          className={`mt-2xs mb-s l:absolute l:top-full ${captionclass}`}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      ) : null}
    </figure>
  );
}
