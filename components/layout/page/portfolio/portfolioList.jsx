import Image from "next/image";
import Link from "next/link";

export function PortfolioList(props) {
  return (
    <li className="my-10">
      <Link href={props.url}>
        <a>
          <p>{props.img}</p>
          <Image src={props.imgsrc} alt="thumbnail" width={500} height={250} />
          <p className="font-bold text-3xl"> {props.title}</p>
          <p>{props.excerpt}</p>
          <p>{props.date}</p>
        </a>
      </Link>
    </li>
  );
}
