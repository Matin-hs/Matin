




function Contact() {


    return (


        <div id="contact" className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black/75 dark:text-white">Call With Me! <span></span></h2>
        <h2 className="mb-4 text-lg tracking-tight font-extrabold text-center text-black/75 dark:text-white">You Dont Like form ? <br /> You Can send Message In WhatsApp To <span className="text-[#C5001B]">+971 56 613 7817</span> <span></span></h2>
        <form action="#" className="space-y-8">
        <div>
                <label for="Email" className="block mb-2 text-sm font-bold text-black/75 ">Your Email</label>
                <input type="gmail" id="EMAIL" className="block p-3 w-full outline-none text-sm text-black/75 bg-[#F8F6EE]  rounded-xl border border-black border-b-4   " placeholder="matin@gmail.com" required/>
            </div>
            <div>
                <label for="PhoneNum" className="block mb-2 text-sm font-bold text-black/75 ">Your PhoneNumber (whatsApp) </label>
                <input type="number" id="number" className="block p-3 w-full outline-none text-sm text-black/75 bg-[#F8F6EE]  rounded-xl border border-black border-b-4   " placeholder="+971 000000000" required/>
            </div>
            <div>
                <label for="subject" className="block mb-2 text-sm font-bold text-black/75 ">SubEject</label>
                <input type="text" id="subject" className="block p-3 w-full outline-none text-sm text-black/75 bg-[#F8F6EE]  rounded-xl border border-black  border-b-4  " placeholder="Let us know how we can help you" required/>
            </div>
           
            <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-bold text-black/75">Your message</label>
                <textarea id="message" rows="6" className="block p-3 w-full outline-none text-sm text-black/75 bg-[#F8F6EE] rounded-xl border border-black border-b-4  " placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="block p-3 w-full outline-none text-sm text-black/75 hover:text-white  hover:bg-[#C5001B] transition-colors bg-[#F8F6EE] rounded-xl border border-black border-b-4 ">Send message</button>
        </form>
    </div>

    )
  }
  
  export default Contact
  