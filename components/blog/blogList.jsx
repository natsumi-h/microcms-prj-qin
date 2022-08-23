import Link from "next/link";
import dayjs from "dayjs";
import { BlogBody } from "./blogBody";
import { useRouter } from "next/router";

export function BlogList(props) {
  const router = useRouter();

  const blogProps = props.apiprops;
  const filteredBlogProps = blogProps.filter((blogProps, index) => index <= 2);

  return (
    <div>
      {router.pathname == "/"
        ? filteredBlogProps.map((blog) => (
            <li className="my-10" key={blog.id}>
              <Link href={`/blog/${blog.slug}`}>
                <a>
                  <p className="font-bold text-3xl"> {blog.title}</p>
                  <BlogBody blogBody={blog.body} />
                  <time>{dayjs(blog.publishedAt).format("MMM DD YYYY")}</time>
                </a>
              </Link>
            </li>
          ))
        : blogProps.map((blog) => (
            <li className="my-10" key={blog.id}>
              <Link href={`/blog/${blog.slug}`}>
                <a>
                  <p className="font-bold text-3xl"> {blog.title}</p>
                  <BlogBody blogBody={blog.body} />
                  <time>{dayjs(blog.publishedAt).format("MMM DD YYYY")}</time>
                </a>
              </Link>
            </li>
          ))}
    </div>
  );
}
