import { photos, type PhotoId } from "@/lib/photos";
import { asset } from "@/lib/urls";
import { cn } from "@/lib/utils";

/** Rewrites every URL in a `srcset` so the deploy base is applied. */
const rebase = (srcSet: string) =>
  srcSet
    .split(", ")
    .map((entry) => {
      const [url, descriptor] = entry.split(" ");
      return `${asset(url)} ${descriptor}`;
    })
    .join(", ");

type PhotoProps = {
  id: PhotoId;
  /** Overrides the manifest alt. Pass "" for decorative images. */
  alt?: string;
  /** Overrides the manifest's face-safe object-position. */
  position?: string;
  /** Above-the-fold images should be eager + high priority. */
  priority?: boolean;
  /** Matches the CSS box so the browser picks the right rung of the ladder. */
  sizes?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Renders a portrait from the generated manifest: AVIF with WebP and JPEG
 * fallbacks, intrinsic dimensions to reserve layout space, and a blurred
 * base64 stand-in behind the image so a slow connection never shows an empty
 * gray box.
 */
export function Photo({
  id,
  alt,
  position,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  imgClassName,
}: PhotoProps) {
  const photo = photos[id];

  return (
    <picture className={cn("block h-full w-full", className)}>
      <source type="image/avif" srcSet={rebase(photo.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={rebase(photo.webp)} sizes={sizes} />
      <img
        src={asset(photo.src)}
        srcSet={rebase(photo.jpg)}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={alt ?? photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={{
          objectPosition: position ?? photo.position,
          backgroundImage: `url(${photo.placeholder})`,
          backgroundSize: "cover",
          backgroundPosition: position ?? photo.position,
        }}
      />
    </picture>
  );
}
