import Link from "next/link";

export function Button(props) {
  return (
    <div className="text-center mt-4">
      <Link href={props.href}>
        <a
          className="bg-dark text-white font-bold py-4 px-9 rounded-full"
          target="_blank"
        >
          {props.text}
        </a>
      </Link>
    </div>
  );
}
