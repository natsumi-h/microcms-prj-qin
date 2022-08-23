import { PageTitle } from "../components/layout/page/title";
// import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    // alert(
    //   `メール：${data.email}\n名前：${data.name} \nメッセージ：${data.message}`
    // );
    // alert(data);
    // console.log(data);

    const API_SUBDOMAIN = process.env.NEXT_PUBLIC_MICROCMS_SERVICEDOMAIN;
    const APIKEY = process.env.NEXT_PUBLIC_MICROCMS_APIKEY;

    try {
      const res = await fetch(
        `https://${API_SUBDOMAIN}.microcms.io/api/v1/contact/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-MICROCMS-API-KEY": APIKEY,
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          console.log("anthorization failed");
          return;
        }
        console.log("something went wrong");
        return;
      } else {
        console.log("success");
      }
    } catch (error) {
      //サーバーにまったくアクセスできない場合
      console.log(error);
    }
  };

  // console.log(watch);

  // console.log(errors);

  // const [values, setValues] = useState({
  //   email: "",
  //   name: "",
  //   message: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //メールアドレスバリデーション
  //   const emailPattern =
  //     /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  //   const isValidEmail = emailPattern.test(values.email);
  //   if (!isValidEmail) {
  //     console.log("please provide a valid email address");
  //     document.getElementById("invalidEmail").style.display = "block";
  //     return;
  //   }

  //   //空欄バリデーション
  //   const hasEmptyFields = Object.values(values).some(
  //     (element) => element === ""
  //   );

  //   if (hasEmptyFields) {
  //     console.log("please fill in all fields");
  //     return;
  //   }

  //   console.log(values);
  //   alert(
  //     `メール：${values.email}\n名前：${values.name} \nメッセージ：${values.message}`
  //   );
  // };

  return (
    <div className="pb-20 pt-20 px-5 md:px-40">
      <PageTitle title="Contact" />

      <form
        className="pb-10 pt-10"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>

          <input
            {...register("email", {
              required: "Please provide a email address",
              pattern:
                /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
            })}
            type="text"
            name="email"
            required
            placeholder="your@email.com"
            // value={values.email}
            // onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer
    "
          />
          {errors.email?.type === "required" && (
            <p className="mt-2 text-pink-600 text-sm text-pink">
              Please provide a email.
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="mt-2  text-pink-600 text-sm text-pink ">
              Please provide a valid email address.
            </p>
          )}
        </label>
        <label className="block mt-6">
          <span className="block text-sm font-medium text-slate-700">Name</span>

          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            // value={values.name}
            // disabled
            placeholder="Taro Yamada"
            required
            // onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer
    "
          />
          {errors.name?.type === "required" && (
            <p className="mt-2 text-pink-600 text-sm text-pink">
              Please provide a name.
            </p>
          )}
        </label>
        <label className="block mt-6">
          <span className="block text-sm font-medium text-slate-700">
            Your message
          </span>
          <textarea
            {...register("message", { required: true })}
            type="textarea"
            name="message"
            required
            // value={values.message}
            // onChange={handleInputChange}
            // disabled
            placeholder="I want to order your goods"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer"
          />
          {errors.message?.type === "required" && (
            <p className="mt-2 text-pink-600 text-sm text-pink">
              Please provide a message.
            </p>
          )}
        </label>

        <div className="text-center">
          <input
            className="bg-dark text-white font-bold py-4 px-9 rounded-full mt-12 cursor-pointer"
            type="submit"
            value="Send message"
          />
        </div>
      </form>
    </div>
  );
}
