"use client";

// import { useState } from "react";
import Section from "../ui/section";
import { SiGithub, SiGmail } from "react-icons/si";

const Contact = () => {
  // const [loading, setLoading] = useState(false);

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData);

  //   const res = await fetch("/api/contact", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });

  //   setLoading(false);

  //   if (res.ok) {
  //     alert("Message sent successfully!");
  //     e.currentTarget.reset();
  //   } else {
  //     alert("Failed to send message");
  //   }
  // }

  return (
    <Section id="contact" classname="flex justify-center z-2 bg-white">
      <div className="w-[min(1100px,90vw)] text-white my-30">
        {/* <h2 className="text-2xl uppercase font-bold text-center my-10">
          Contact
        </h2> */}
        {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-50">
          <input className="border-b border-gray-400 outline-none py-2" name="name" placeholder="Your Name" required />
          <input className="border-b border-gray-400 outline-none py-2"  name="email" type="email" placeholder="Your Email" required />
          <textarea className="border-b border-gray-400 outline-none py-2" name="message" placeholder="Your Message" required />
          <Button
            title={loading ? "Sending..." : "Send Message"}
            type="submit"
            disabled={loading}
            icon={<BiSend/>}
            className="text-black w-45"
          ></Button>
        </form> */}
        <div className="flex gap-5 items-center justify-center">
          <a href="https://github.com/HuyDinhUI">
            <SiGithub size="30" color="black"/>
          </a>
          <a href="mailto:huydinh28032004@gmail.com">
            <SiGmail size="30" color="black"/>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
