import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/ZoomNewLogo.b2fd5c95.png"
              alt=""
              className="h-[25px]"
            />
          </a>
          <nav className="ml-189 flex flex-wrap items-center justify-center text-sm">
            <span className="header-login-link mr-1">New to Zoom?</span>

            <a
              className="mr-5 hover:underline"
              style={{
                color: "#0956b5",
                fontFamily: "'Almaden Sans', 'Helvetica', 'Arial'",
                fontSize: "0.9rem", // Increased font size (was text-sm)
              }}
            >
              Sign Up Free
            </a>

            <a
              className="mr-5 hover:underline"
              style={{
                color: "#0956b5",
                fontSize: "0.9rem", // Increased font size
              }}
            >
              Support
            </a>
          </nav>

          <p className="inline-flex items-center text-base text-[#0956b5] cursor-pointer hover:underline"
          style={{
            fontSize: "0.9rem"
          }}
          >
            English
            <span className="text-xl ml-2 -mt-3.5">&#x2304;</span>{" "}
            {/* ⌄ arrow */}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
