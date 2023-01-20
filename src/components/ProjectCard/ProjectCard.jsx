import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { mediaItemUrl, altText, mediaDetails, blurDataURL } =
    project.featuredImage;

  const projectTags = project.projectTags;

  const tags = projectTags.edges.map((edge) => {
    return edge.node.name;
  });

  return (
    <div>
      <Link
        href={`/work/${encodeURIComponent(project.slug)}`}
        className="no-underline"
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
        <h3 className="hover:bg-amber-400 inline leading-3 font-sans font-bold">
          {project.title}
        </h3>
      </Link>
      <p className="text-neutral-600 text-xs italic mt-3">{tags.join(", ")}</p>
    </div>
  );
}
