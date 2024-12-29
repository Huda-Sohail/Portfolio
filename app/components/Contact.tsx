import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Get in touch</h2>
          <p className='text-gray-600 text-[18px] pt-2'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          
          {/* Email Section */}
          <div className='flex gap-3 items-center'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <HiOutlineMail size={30} />
            <a href="mailto:hudamirza.2008@gmail.com" className="text-blue-500 hover:underline">
              hudamirza.2008@gmail.com
            </a>
          </div>
          
          {/* Phone Number Section */}
          <div className='flex gap-3 items-center'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <BsTelephoneInbound size={30} />
            <a href="tel:+923012423637" className="text-blue-500 hover:underline">
              (+92) 301-2423637
            </a>
          </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40=px] bg-purple border border-accent'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40=px] bg-purple border border-accent'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-purple border border-accent'
                id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-purple-500 p-2 px-6'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact;



