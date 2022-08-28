import { PageTitle } from "../components/layout/page/title";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    // watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(true);
  const onSubmit = async (data) => {
    document.getElementById("thanksMessage").style.display = "block";
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      // document.getElementById("thanksMessage").style.display = "block";
      reset();
      setLoading(false);
    }
  };

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
            placeholder="Taro Yamada"
            required
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
          {loading ? (
            <p
              id="thanksMessage"
              className="mt-4 text-pink-600 text-sm text-pink hidden"
            >
              Sending message...
            </p>
          ) : (
            <p
              id="thanksMessage"
              className="mt-4 text-pink-600 text-sm text-pink hidden"
            >
              Thanks for the message!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
