const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const APIKEY = process.env.MICROCMS_APIKEY;
    try {
      const microcmsRes = await fetch(
        `https://natsumih-blog.microcms.io/api/v1/contact/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-MICROCMS-API-KEY": APIKEY,
          },
          body: JSON.stringify(data),
        }
      );
      if (!microcmsRes.ok) {
        if (microcmsRes.status === 403 || microcmsRes.status === 401) {
          console.log("anthorization failed");
          return;
        } else {
          console.log("something went wrong");
          return;
        }
      } else {
        console.log("success");
        res.status(200).json({ message: "Success" });
      }
    } catch (error) {
      //サーバーにまったくアクセスできない場合
      console.log(error);
    }
  }
};

export default handler;
