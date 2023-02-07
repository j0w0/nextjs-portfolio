import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { mediaItemUrl, altText, mediaDetails, blurDataURL } =
    project.featuredImage;

  return (
    <div>
      <Link
        href={`/work/${encodeURIComponent(project.slug)}`}
        className={`
          no-underline
          hover:underline
          hover:text-amber-400
          hover:bg-transparent
        `}
      >
        <Image
          src={mediaItemUrl}
          alt={altText}
          width={mediaDetails.width}
          height={mediaDetails.height}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="mb-6"
        />
        <h3 className="inline leading-3 font-sans font-bold">
          {project.title}
        </h3>
      </Link>
      <p className="mt-3 text-sm text-neutral-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
        dui non metus auctor sodales at nec quam.
      </p>
    </div>
  );
}
