import { FaPaperPlane } from "react-icons/fa";

const MessageForm = () => {
  return (
    <div className="bg-bg-card border border-card-border rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500">
      <div className="border-b border-card-border p-4">
        <h3 className="text-2xl font-bold mb-2">
          Send a <span className="text-accent">Message</span>
        </h3>
        <p className="text-text-body">I'll get back to you within 24 hours</p>
      </div>

      <form className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md  placeholder:text-text-muted focus:border-accent focus:outline-none "
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Email
            </label>
            <input
              name="email"
              type="text"
              className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md placeholder:text-text-muted focus:border-accent focus:outline-none"
              placeholder="Enter Your Name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md placeholder:text-text-muted focus:border-accent focus:outline-none"
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full px-3 py-2 border border-card-border bg-bg-secondary rounded-md placeholder:text-text-muted focus:border-accent focus:outline-none"
            placeholder="Enter Your Name"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-accent w-full px-4 py-2 rounded-md flex items-center justify-center gap-2  text-button-text-primary font-bold  hover:shadow-button hover:text-text-main transition duration-500 cursor-pointer"
        >
          {" "}
          <FaPaperPlane />
          Send a Message{" "}
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
