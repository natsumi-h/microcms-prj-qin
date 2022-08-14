import Link from "next/link";

export function BlogList(props) {
  return (
    <li className="my-10">
      <Link href={`/blog/${props.id}`}>
        <a>
          <p className="font-bold text-3xl"> {props.title}</p>
          <p>{props.excerpt}</p>
          <p>{props.date}</p>
        </a>
      </Link>
    </li>
  );
}
