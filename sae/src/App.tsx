import Lottie from "lottie-react";
import downArrow from "./images/downArrow.json";
function App() {
  return (
    <>
      {/* <div className="bg-[url('https://teamkart.org/images/landing-page.jpeg')] bg-auto h-auto w-auto 2xl:bg-cover 2xl:h-screen 2xl:w-screen">
        hi
      </div> */}
      <div className=" flex items-end justify-center bg-[url('https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/308016068_477692691065106_6445689207764223712_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=783fdb&_nc_ohc=SjVtCLugCkcAX8GAdW6&_nc_ht=scontent.fbho1-4.fna&oh=00_AfAZ7vDix0AZRr0WioH4JkI3YhqBW41qiuPcMjRdYEi9iA&oe=65DBE6F7')] object-contain h-screen w-screen md:bg-cover   md:h-screen md:w-screen">
        <Lottie className="w-16" animationData={downArrow}></Lottie>
      </div>

      <div className="about m-16 ">
        <div className="m-2 text-4xl font-bold">ABOUT US</div>
        <div className=" md:flex md:justify-between">
          <div className="my-4 md:w-7/12">
            <p>
              AE-MANIT is an affiliate society of SAE International which is an
              International nonprofit engineering and scientific society
              dedicated to the advancement of mobility industry. This club was
              established in 2009, with efforts of the then 3rd Year Mechanical
              Engineering undergraduates. It has its goals perfectly aligned
              with SAE International and SAE India. It aims in imparting
              exposure to its students members to all kinds of Engineering
              aspects, be it Core Mechanical , Automotive or Human Resource.
              Baja International , Baja India and Supra India are some of the
              major events where our colleges has showcased its caliber in
              fabricating and racing the mean machines.
            </p>
            <button className=" text-red-600  w-28 h-10 mt-2 border-2 border-red-600 rounded-md">
              Know More
            </button>
          </div>

          <img
            className="md:w-5/12"
            src="https://teamkart.org/images/teamk6.JPG"
          />
        </div>
      </div>
      <div className="footer    md:flex md:justify-center gap-9 bg-black py-4">
        <div className="find mb-2">
          <h2 className="text-white">FIND US</h2>
          <iframe src="https://www.google.com/maps/search/manit+bhopal/@23.2435951,77.4048733,13z/dacta=!3m1!4b1?entry=ttu"></iframe>
        </div>
        <div className="text-white contacts">
          <h2>CONTACTS</h2>
          <div className="mb-2">
            <p>Prakhar Runwal</p>
            <a href="tel: +91 99999999">+91 9999999999</a>
          </div>
          <div>
            <p>Naveen Patidar</p>
            <a href="tel: +91 99999999">+91 9999999999</a>
          </div>
          <div className="email   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              data-name="Layer 1"
              viewBox="0 0 32 32"
              id="gmail"
              className="inline-flex mr-2"
            >
              <path
                fill="#ea4435"
                d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
              ></path>
              <path
                fill="#00ac47"
                d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                transform="rotate(180 26.5 16)"
              ></path>
              <path
                fill="#ffba00"
                d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
              ></path>
              <path
                fill="#4285f4"
                d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
              ></path>
              <path
                fill="#c52528"
                d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
              ></path>
            </svg>
            <a href="saeManit@gmail.com" className="">
              saeManit@gmail.com
            </a>
          </div>
          <div className="location flex  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="location"
              className="w-8 inline- mr-2 "
            >
              <path
                fill="#e3e2e1"
                d="M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z"
              ></path>
              <path
                fill="#e82327"
                d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z"
              ></path>
            </svg>
            <div className="adress inline-block">
              <p>Maulana Azad National Institute of Technology,</p>
              <p>Bhopal, Madhya Pradesh 462007</p>
            </div>
          </div>
        </div>
        {/* footer */}
      </div>

      {/* <div>hscsc</div> */}
    </>
  );
}

export default App;
