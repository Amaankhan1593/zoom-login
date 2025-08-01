'use client'
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {  
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});;

  const fontFamily = {
    fontFamily: "'Internacional', 'Helvetica', 'Arial'",
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

   if (Object.keys(newErrors).length === 0) {
    // ✅ Save to localStorage
    localStorage.setItem("userData", JSON.stringify({ email, password }));

     //Optional: Redirect after saving
    router.push('https://userportaldev.cybernut-k12.com/report');

    console.log("Form submitted:", { email, password });
  }
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
            className="w-[430px] h-[300px] mb-18 ml-62"
          />
        </div>

        {/* Email form on the right */}
        <form
          onSubmit={handleSubmit}
          className="ml-60 mt-10 w-full max-w-sm"
          noValidate
        >
          <h1
            className="text-3xl font-semibold text-[32px] mb-8 mt-5 text-center text-[#080808]"
            style={fontFamily}
          >
            Sign in
          </h1>

          <input
            id="email"
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[380px] h-[50px] px-2 py-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0956b5]"
            style={{ borderColor: '#6e7680' }}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[380px] mt-3 h-[50px] px-2 py-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0956b5]"
            style={{ borderColor: '#6e7680' }}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

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
        </form>
      </div>
    </>
  );
}
