import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MessageForm = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,

        form,
        {
          publicKey,
        },
      );
      toast.update(toastId, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setForm({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("EmailJS Error:", error);
      toast.update(toastId, {
        render: "Failed to send message. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="bg-bg-card border border-card-border rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500">
        <div className="border-b border-card-border p-4">
          <h3 className="text-2xl font-bold mb-2">
            Send a <span className="text-accent">Message</span>
          </h3>
          <p className="text-text-body">I'll get back to you within 24 hours</p>
        </div>

        <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                name="user_name"
                type="text"
                id="name"
                autoComplete="name"
                value={form.user_name}
                className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md  placeholder:text-text-muted focus:border-accent focus:outline-none "
                placeholder="Enter Your Name"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                autoComplete="email"
                value={form.user_email}
                className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md placeholder:text-text-muted focus:border-accent focus:outline-none"
                placeholder="Enter Your Email"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              autoComplete="off"
              value={form.subject}
              className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md placeholder:text-text-muted focus:border-accent focus:outline-none"
              placeholder="Enter Subject"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              autoComplete="off"
              value={form.message}
              className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md placeholder:text-text-muted focus:border-accent focus:outline-none"
              placeholder="Enter Your Message"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`bg-accent w-full px-4 py-2 rounded-md flex items-center justify-center gap-2 text-button-text-primary font-bold hover:shadow-button hover:text-text-main transition duration-500 ${
              isSending ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <FaPaperPlane />
            {isSending ? "Sending..." : "Send a Message"}
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="responsive-toast"
      />
    </>
  );
};

export default MessageForm;
