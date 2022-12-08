const Form = () => {
  return (
    <>
      <section class="bg-white">
        <div class="container flex items-center justify-center min-h-screen mx-auto">
          <form class="w-full max-w-xl">
            <div>
              <label className="px-3 text-gray-400" htmlFor="fname">
                First Name
              </label>
              <div class="relative flex items-center mt-4">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  class="block w-full py-4 text-gray-700 bg-white border rounded-lg px-11 outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="px-3 text-gray-400" htmlFor="lname">
                Last Name
              </label>
              <div class="relative flex items-center mt-4">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  class="block w-full py-4 text-gray-700 bg-white border rounded-lg px-11 outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="px-3 text-gray-400" htmlFor="email">
                Email
              </label>
              <div class="relative flex items-center mt-4">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  class="block w-full py-4 text-gray-700 bg-white border rounded-lg px-11 outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div class="mt-6">
              <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>

              <div class="mt-6 text-center ">
                <a
                  href="#"
                  class="text-sm text-blue-500 hover:underline text-blue-400"
                >
                  Already have an account?
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
