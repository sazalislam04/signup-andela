const SubmitForm = ({ setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const country = form.country.value;
    if (!fname) {
      alert("Please enter a valid first name.");
    } else if (!lname) {
      alert("Please enter a valid last name.");
    } else if (!email) {
      alert("Please enter a valid email address.");
    } else if (country === "Select") {
      alert("Please select a valid country from the list.");
    } else {
    }
  };

  return (
    <>
      <section className="bg-white mt-16">
        <div className="w-full lg:w-11/12 mx-auto">
          <div className="mb-14 lg:px-24 text-2xl text-center">
            <h2 className="text-xl font-normal">More about you</h2>
          </div>
          <form onSubmit={handleSubmit} className="w-full mx-auto">
            <div>
              <label className="px-3 text-gray-400" htmlFor="fname">
                English proficiency
              </label>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <small className="mx-3 text-xl text-gray-300">{"<>"}</small>
                </span>
                <select
                  name="english"
                  className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-9 outline-none"
                >
                  <option value="Select...">Select...</option>
                  <option value="Native">Native</option>
                  <option value="Advanced C1/C2">Advanced C1/C2</option>
                  <option value="Intermediate B1/B2">Intermediate B1/B2</option>
                  <option value="Beginner A1/A2">Beginner A1/A2</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="px-3 text-gray-400" htmlFor="lname">
                Total years of work experience
              </label>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    class="mx-3"
                    data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNjcgOS4wMkM4LjQ1IDkuMDEgOC4yMyA5IDggOUM1LjU4IDkgMy4zMiA5LjY3IDEuMzkgMTAuODJDMC41MSAxMS4zNCAwIDEyLjMyIDAgMTMuMzVWMTVDMCAxNS41NSAwLjQ1IDE2IDEgMTZIOS4yNkM4LjQ3IDE0Ljg3IDggMTMuNDkgOCAxMkM4IDEwLjkzIDguMjUgOS45MyA4LjY3IDkuMDJaIiBmaWxsPSIjRENFMkY5Ii8+CjxwYXRoIGQ9Ik04IDhDMTAuMjA5MSA4IDEyIDYuMjA5MTQgMTIgNEMxMiAxLjc5MDg2IDEwLjIwOTEgMCA4IDBDNS43OTA4NiAwIDQgMS43OTA4NiA0IDRDNCA2LjIwOTE0IDUuNzkwODYgOCA4IDhaIiBmaWxsPSIjRENFMkY5Ii8+CjxwYXRoIGQ9Ik0xOC43NDk5IDExLjk5OThDMTguNzQ5OSAxMS43Nzk4IDE4LjcxOTkgMTEuNTc5OCAxOC42ODk5IDExLjM2OThMMTkuNTI5OSAxMC42Mzk4QzE5LjcwOTkgMTAuNDc5OCAxOS43NDk5IDEwLjIxOTggMTkuNjI5OSAxMC4wMDk4TDE5LjAzOTkgOC45ODk3N0MxOC45MTk5IDguNzc5NzcgMTguNjY5OSA4LjY4OTc3IDE4LjQ0OTkgOC43Njk3N0wxNy4zODk5IDkuMTI5NzdDMTcuMDY5OSA4Ljg1OTc3IDE2LjcwOTkgOC42NDk3NyAxNi4zMDk5IDguNDk5NzdMMTYuMDg5OSA3LjQwOTc3QzE2LjAzOTkgNy4xNzk3NyAxNS44Mzk5IDcuMDA5NzcgMTUuNTk5OSA3LjAwOTc3SDE0LjQxOTlDMTQuMTc5OSA3LjAwOTc3IDEzLjk3OTkgNy4xNzk3NyAxMy45Mjk5IDcuNDA5NzdMMTMuNzA5OSA4LjQ5OTc3QzEzLjMwOTkgOC42NDk3NyAxMi45NDk5IDguODU5NzcgMTIuNjI5OSA5LjEyOTc3TDExLjU2OTkgOC43Njk3N0MxMS4zMzk5IDguNjg5NzcgMTEuMDk5OSA4Ljc4OTc3IDEwLjk3OTkgOC45ODk3N0wxMC4zODk5IDEwLjAwOThDMTAuMjY5OSAxMC4yMTk4IDEwLjMwOTkgMTAuNDc5OCAxMC40ODk5IDEwLjYzOThMMTEuMzI5OSAxMS4zNjk4QzExLjI5OTkgMTEuNTc5OCAxMS4yNjk5IDExLjc3OTggMTEuMjY5OSAxMS45OTk4QzExLjI2OTkgMTIuMjE5OCAxMS4yOTk5IDEyLjQxOTggMTEuMzI5OSAxMi42Mjk4TDEwLjQ4OTkgMTMuMzU5OEMxMC4zMDk5IDEzLjUxOTggMTAuMjY5OSAxMy43Nzk4IDEwLjM4OTkgMTMuOTg5OEwxMC45Nzk5IDE1LjAwOThDMTEuMDk5OSAxNS4yMTk4IDExLjM0OTkgMTUuMzA5OCAxMS41Njk5IDE1LjIyOThMMTIuNjI5OSAxNC44Njk4QzEyLjk0OTkgMTUuMTM5OCAxMy4zMDk5IDE1LjM0OTggMTMuNzA5OSAxNS40OTk4TDEzLjkyOTkgMTYuNTg5OEMxMy45Nzk5IDE2LjgxOTggMTQuMTc5OSAxNi45ODk4IDE0LjQxOTkgMTYuOTg5OEgxNS41OTk5QzE1LjgzOTkgMTYuOTg5OCAxNi4wMzk5IDE2LjgxOTggMTYuMDg5OSAxNi41ODk4TDE2LjMwOTkgMTUuNDk5OEMxNi43MDk5IDE1LjM0OTggMTcuMDY5OSAxNS4xMzk4IDE3LjM4OTkgMTQuODY5OEwxOC40NDk5IDE1LjIyOThDMTguNjc5OSAxNS4zMDk4IDE4LjkxOTkgMTUuMjA5OCAxOS4wMzk5IDE1LjAwOThMMTkuNjI5OSAxMy45ODk4QzE5Ljc0OTkgMTMuNzc5OCAxOS43MDk5IDEzLjUxOTggMTkuNTI5OSAxMy4zNTk4TDE4LjY4OTkgMTIuNjI5OEMxOC43MTk5IDEyLjQxOTggMTguNzQ5OSAxMi4yMTk4IDE4Ljc0OTkgMTEuOTk5OFpNMTQuOTk5OSAxMy45OTk4QzEzLjg5OTkgMTMuOTk5OCAxMi45OTk5IDEzLjA5OTggMTIuOTk5OSAxMS45OTk4QzEyLjk5OTkgMTAuODk5OCAxMy44OTk5IDkuOTk5NzcgMTQuOTk5OSA5Ljk5OTc3QzE2LjA5OTkgOS45OTk3NyAxNi45OTk5IDEwLjg5OTggMTYuOTk5OSAxMS45OTk4QzE2Ljk5OTkgMTMuMDk5OCAxNi4wOTk5IDEzLjk5OTggMTQuOTk5OSAxMy45OTk4WiIgZmlsbD0iI0RDRTJGOSIvPgo8L3N2Zz4K"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M8.67 9.02C8.45 9.01 8.23 9 8 9C5.58 9 3.32 9.67 1.39 10.82C0.51 11.34 0 12.32 0 13.35V15C0 15.55 0.45 16 1 16H9.26C8.47 14.87 8 13.49 8 12C8 10.93 8.25 9.93 8.67 9.02Z"
                      fill="#DCE2F9"
                    ></path>
                    <path
                      d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                      fill="#DCE2F9"
                    ></path>
                    <path
                      d="M18.7499 11.9998C18.7499 11.7798 18.7199 11.5798 18.6899 11.3698L19.5299 10.6398C19.7099 10.4798 19.7499 10.2198 19.6299 10.0098L19.0399 8.98977C18.9199 8.77977 18.6699 8.68977 18.4499 8.76977L17.3899 9.12977C17.0699 8.85977 16.7099 8.64977 16.3099 8.49977L16.0899 7.40977C16.0399 7.17977 15.8399 7.00977 15.5999 7.00977H14.4199C14.1799 7.00977 13.9799 7.17977 13.9299 7.40977L13.7099 8.49977C13.3099 8.64977 12.9499 8.85977 12.6299 9.12977L11.5699 8.76977C11.3399 8.68977 11.0999 8.78977 10.9799 8.98977L10.3899 10.0098C10.2699 10.2198 10.3099 10.4798 10.4899 10.6398L11.3299 11.3698C11.2999 11.5798 11.2699 11.7798 11.2699 11.9998C11.2699 12.2198 11.2999 12.4198 11.3299 12.6298L10.4899 13.3598C10.3099 13.5198 10.2699 13.7798 10.3899 13.9898L10.9799 15.0098C11.0999 15.2198 11.3499 15.3098 11.5699 15.2298L12.6299 14.8698C12.9499 15.1398 13.3099 15.3498 13.7099 15.4998L13.9299 16.5898C13.9799 16.8198 14.1799 16.9898 14.4199 16.9898H15.5999C15.8399 16.9898 16.0399 16.8198 16.0899 16.5898L16.3099 15.4998C16.7099 15.3498 17.0699 15.1398 17.3899 14.8698L18.4499 15.2298C18.6799 15.3098 18.9199 15.2098 19.0399 15.0098L19.6299 13.9898C19.7499 13.7798 19.7099 13.5198 19.5299 13.3598L18.6899 12.6298C18.7199 12.4198 18.7499 12.2198 18.7499 11.9998ZM14.9999 13.9998C13.8999 13.9998 12.9999 13.0998 12.9999 11.9998C12.9999 10.8998 13.8999 9.99977 14.9999 9.99977C16.0999 9.99977 16.9999 10.8998 16.9999 11.9998C16.9999 13.0998 16.0999 13.9998 14.9999 13.9998Z"
                      fill="#DCE2F9"
                    ></path>
                  </svg>
                </span>

                <select
                  name="totalExperience"
                  className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-9 outline-none"
                >
                  <option value="Select...">Select...</option>
                  <option value="Associate (0-3 yrs professional experience)">
                    0-3 yrs professional experience
                  </option>
                  <option value="Mid Level (3-8 yrs professional experience)">
                    3-8 yrs professional experience
                  </option>
                  <option value="Senior (8-12 yrs professional experience)">
                    8-12 yrs professional experience
                  </option>
                  <option value="Principal (12+ yrs professional experience)">
                    12+ yrs professional experience
                  </option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="px-3 text-gray-400" htmlFor="email">
                Email
              </label>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="16"
                    viewBox="0 0 31 16"
                    fill="none"
                    class="mx-3"
                    data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAzMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgOC43MTg3NUMxNy42MDU0IDguNzE4NzUgMTkuNDY1NCA5LjIyMjUgMjAuOTc2NyA5Ljg4MTI1QzIyLjM3MTcgMTAuNTAxMiAyMy4yNSAxMS44OTYyIDIzLjI1IDEzLjQwNzVWMTQuMjA4M0MyMy4yNSAxNC45MTg3IDIyLjY2ODcgMTUuNSAyMS45NTgzIDE1LjVIOS4wNDE2N0M4LjMzMTI1IDE1LjUgNy43NSAxNC45MTg3IDcuNzUgMTQuMjA4M1YxMy40MjA0QzcuNzUgMTEuODk2MiA4LjYyODMzIDEwLjUwMTIgMTAuMDIzMyA5Ljg5NDE3QzExLjUzNDYgOS4yMjI1IDEzLjM5NDYgOC43MTg3NSAxNS41IDguNzE4NzVaTTUuMTY2NjcgOS4wNDE2N0M2LjU4NzUgOS4wNDE2NyA3Ljc1IDcuODc5MTcgNy43NSA2LjQ1ODMzQzcuNzUgNS4wMzc1IDYuNTg3NSAzLjg3NSA1LjE2NjY3IDMuODc1QzMuNzQ1ODMgMy44NzUgMi41ODMzMyA1LjAzNzUgMi41ODMzMyA2LjQ1ODMzQzIuNTgzMzMgNy44NzkxNyAzLjc0NTgzIDkuMDQxNjcgNS4xNjY2NyA5LjA0MTY3Wk02LjYyNjI1IDEwLjQ2MjVDNi4xNDgzMyAxMC4zODUgNS42NzA0MiAxMC4zMzMzIDUuMTY2NjcgMTAuMzMzM0MzLjg4NzkyIDEwLjMzMzMgMi42NzM3NSAxMC42MDQ2IDEuNTc1ODMgMTEuMDgyNUMwLjYyIDExLjQ5NTggMCAxMi40MjU4IDAgMTMuNDcyMVYxNC4yMDgzQzAgMTQuOTE4NyAwLjU4MTI1IDE1LjUgMS4yOTE2NyAxNS41SDUuODEyNVYxMy40MjA0QzUuODEyNSAxMi4zNDgzIDYuMTA5NTggMTEuMzQwOCA2LjYyNjI1IDEwLjQ2MjVaTTI1LjgzMzMgOS4wNDE2N0MyNy4yNTQyIDkuMDQxNjcgMjguNDE2NyA3Ljg3OTE3IDI4LjQxNjcgNi40NTgzM0MyOC40MTY3IDUuMDM3NSAyNy4yNTQyIDMuODc1IDI1LjgzMzMgMy44NzVDMjQuNDEyNSAzLjg3NSAyMy4yNSA1LjAzNzUgMjMuMjUgNi40NTgzM0MyMy4yNSA3Ljg3OTE3IDI0LjQxMjUgOS4wNDE2NyAyNS44MzMzIDkuMDQxNjdaTTMxIDEzLjQ3MjFDMzEgMTIuNDI1OCAzMC4zOCAxMS40OTU4IDI5LjQyNDIgMTEuMDgyNUMyOC4zMjYzIDEwLjYwNDYgMjcuMTEyMSAxMC4zMzMzIDI1LjgzMzMgMTAuMzMzM0MyNS4zMjk2IDEwLjMzMzMgMjQuODUxNyAxMC4zODUgMjQuMzczOCAxMC40NjI1QzI0Ljg5MDQgMTEuMzQwOCAyNS4xODc1IDEyLjM0ODMgMjUuMTg3NSAxMy40MjA0VjE1LjVIMjkuNzA4M0MzMC40MTg3IDE1LjUgMzEgMTQuOTE4NyAzMSAxNC4yMDgzVjEzLjQ3MjFaTTE1LjUgMEMxNy42NDQyIDAgMTkuMzc1IDEuNzMwODMgMTkuMzc1IDMuODc1QzE5LjM3NSA2LjAxOTE3IDE3LjY0NDIgNy43NSAxNS41IDcuNzVDMTMuMzU1OCA3Ljc1IDExLjYyNSA2LjAxOTE3IDExLjYyNSAzLjg3NUMxMS42MjUgMS43MzA4MyAxMy4zNTU4IDAgMTUuNSAwWiIgZmlsbD0iI0RDRTJGOSIvPgo8L3N2Zz4K"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M15.5 8.71875C17.6054 8.71875 19.4654 9.2225 20.9767 9.88125C22.3717 10.5012 23.25 11.8962 23.25 13.4075V14.2083C23.25 14.9187 22.6687 15.5 21.9583 15.5H9.04167C8.33125 15.5 7.75 14.9187 7.75 14.2083V13.4204C7.75 11.8962 8.62833 10.5012 10.0233 9.89417C11.5346 9.2225 13.3946 8.71875 15.5 8.71875ZM5.16667 9.04167C6.5875 9.04167 7.75 7.87917 7.75 6.45833C7.75 5.0375 6.5875 3.875 5.16667 3.875C3.74583 3.875 2.58333 5.0375 2.58333 6.45833C2.58333 7.87917 3.74583 9.04167 5.16667 9.04167ZM6.62625 10.4625C6.14833 10.385 5.67042 10.3333 5.16667 10.3333C3.88792 10.3333 2.67375 10.6046 1.57583 11.0825C0.62 11.4958 0 12.4258 0 13.4721V14.2083C0 14.9187 0.58125 15.5 1.29167 15.5H5.8125V13.4204C5.8125 12.3483 6.10958 11.3408 6.62625 10.4625ZM25.8333 9.04167C27.2542 9.04167 28.4167 7.87917 28.4167 6.45833C28.4167 5.0375 27.2542 3.875 25.8333 3.875C24.4125 3.875 23.25 5.0375 23.25 6.45833C23.25 7.87917 24.4125 9.04167 25.8333 9.04167ZM31 13.4721C31 12.4258 30.38 11.4958 29.4242 11.0825C28.3263 10.6046 27.1121 10.3333 25.8333 10.3333C25.3296 10.3333 24.8517 10.385 24.3738 10.4625C24.8904 11.3408 25.1875 12.3483 25.1875 13.4204V15.5H29.7083C30.4187 15.5 31 14.9187 31 14.2083V13.4721ZM15.5 0C17.6442 0 19.375 1.73083 19.375 3.875C19.375 6.01917 17.6442 7.75 15.5 7.75C13.3558 7.75 11.625 6.01917 11.625 3.875C11.625 1.73083 13.3558 0 15.5 0Z"
                      fill="#DCE2F9"
                    ></path>
                  </svg>
                </span>

                <select
                  name="referralBy"
                  className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-11 outline-none"
                >
                  <option value="Select...">Select...</option>
                  <option value="Job Posts">Job Posts</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Advertising">Advertising</option>
                  <option value="News">News</option>
                  <option value="Email">Email</option>
                  <option value="In-Person Event">In-Person Event</option>
                  <option value="Word of mouth">Word of mouth</option>
                  <option value="Referral by Andelan">
                    Referral by Andelan
                  </option>
                  <option value="Referral by Others">Referral by Others</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="px-3 flex flex-col text-gray-400" htmlFor="pdf">
                Upload your resume
                <small className="text-xs text-yellow-500">
                  Only PDF files are accepted
                </small>
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex items-center px-3 py-4 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <h2 className="mx-3 text-gray-400 text-center">
                  {" "}
                  Click to add file
                </h2>

                <input
                  id="dropzone-file"
                  type="file"
                  accept="application/pdf,application/vnd.ms-excel"
                  className=" hidden w-full py-4 text-gray-700 bg-white border rounded-lg px-9 outline-none"
                />
              </label>
            </div>
            <div className="mt-8 flex items-center gap-4 justify-center">
              <button
                onClick={() => setPage((prevPage) => prevPage - 1)}
                className="px-8 py-[10px] text-gray-900 rounded-full border border-black"
              >
                Back
              </button>
              <button className="px-6 py-[10px] text-gray-100 rounded-full bg-[#58c671]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SubmitForm;
