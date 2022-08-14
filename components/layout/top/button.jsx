import Link from "next/link";

export function Button(props) {
  return (
    <div className="text-center">
      <Link href="/blog">
        <a className="bg-dark text-white font-bold py-4 px-9 rounded-full">
          {props.text}
        </a>
      </Link>
    </div>
  );
}
