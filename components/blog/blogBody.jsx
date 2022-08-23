export function BlogBody(props) {
  const blogBody = props.blogBody;
  const bodyText = blogBody.replace(/(<([^>]+)>)/gi, "");
  const bodyTextLength = bodyText.length;

  const getExcerpt = () => {
    if (bodyTextLength > 100) {
      return bodyText.substr(0, 100) + "...";
    } else return bodyText;
  };

  const excerpt = getExcerpt();

  return <div id="body" dangerouslySetInnerHTML={{ __html: excerpt }}></div>;
}
