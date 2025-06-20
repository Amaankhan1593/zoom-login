import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  const fontFamily = {
    fontFamily: "'Internacional', 'Helvetica', 'Arial'",
  };

  return (
    <>
      <Header />
      <div className="flex h-screen">
        {/* Image on the left */}
        <div className="bg-[#f7f9fa] w-[500px] flex justify-center items-center">
          <img
            src="/zoom.png"
            alt="Zoom Logo"
            className="w-[430px] h-[300px] mb-18 ml-62 "
          />
        </div>

        {/* Email form on the right */}
        <div className="ml-60 mt-10 w-full max-w-sm">
          <h1
            className="text-3xl font-semibold text-[32px] mb-8 mt-5 text-center text-[#080808]"
            style={fontFamily}
          >
            Sign in
          </h1>

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {/* You can insert label text if needed */}
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email or phone number"
            className="w-[380px] h-[50px] px-2 py-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0956b5]"
            style={{ borderColor: '#6e7680' }}

          />

          <button
            type="submit"
            className="ml-2 mt-3 mx-auto w-[370px] bg-[#327edb] text-white py-2 rounded-lg hover:bg-[#074a9c] transition-colors duration-200"
          >
            Next
          </button>

          {/* Divider with "or sign in with" */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <p className="mx-4 text-sm text-gray-500">or sign in with</p>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social sign-in buttons */}
          <div className="flex justify-between ml-2 mr-2 mt-4">
            {[
              { src: "/key.png", alt: "SSO", label: "SSO" },
              { src: "/apple.png", alt: "Apple", label: "Apple" },
              { src: "/google.svg", alt: "Google", label: "Google" },
              { src: "/facerbook.png", alt: "Facebook", label: "Facebook" },
              { src: "/microsoft.png", alt: "Microsoft", label: "Microsoft" },
            ].map(({ src, alt, label }, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <button className="w-12 h-12 border border-gray-200 rounded-xl flex justify-center items-center hover:bg-gray-100">
                  <img src={src} alt={alt} className="h-6" />
                </button>
                <span className="text-xs mt-1 text-gray-600">{label}</span>
              </div>
            ))}
          </div>

          <p
            className="mt-22 text-center pb-2 space-x-6 text-sm text-blue-700"
            style={fontFamily}
          >
            <Link href="/" className="hover:underline">
              Help
            </Link>
            <Link href="/" className="hover:underline">
              Terms
            </Link>
            <Link href="/" className="hover:underline">
              Privacy
            </Link>
          </p>

          <p className="mt-3 text-[15px] text-center text-gray-500 px-4">
            Zoom is protected by reCAPTCHA and the{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </div>
      </div>
    </>
  );
}
