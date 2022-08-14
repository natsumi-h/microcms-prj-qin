import Image from "next/image";
import Link from "next/link";

export function MainVisual() {
  return (
    <section className="bg-pink pb-20 pt-20 px-5 md:px-40 ">
      <p className="text-white font-avenir font-bold text-3xl ">
        Shimabu IT University
      </p>
      <p className="text-white">しまぶーのポートフォリオのためのページです</p>

      <div className="flex gap-x-2 mt-3">
        <Link href="https://twitter.com/">
          <a>
            <Image src="/twitter.png" alt="twitter" width={20} height={20} />
          </a>
        </Link>

        <Link href="https://twitter.com/">
          <a>
            <Image src="/facebook.png" alt="facebook" width={20} height={20} />
          </a>
        </Link>
        <Link href="https://twitter.com/">
          <a>
            <Image src="/RSS.png" alt="rss" width={20} height={20} />
          </a>
        </Link>
      </div>
    </section>
  );
}
