import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SignUpInfo = ({ setPage, setFormData }) => {
  const [checkTerms, setCheckTerms] = useState("");
  const [checkPrivacy, setCheckPrivacy] = useState("");
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const country = form.country.value;

    if (!fname) {
      return alert("Please enter a valid first name.");
    } else if (!lname) {
      return alert("Please enter a valid last name.");
    } else if (!email) {
      return alert("Please enter a valid email address.");
    } else if (country === "Select") {
      return alert("Please select a valid country from the list.");
    } else if (!checkTerms || !checkPrivacy) {
      return alert("Please check the policy and terms checkboxes.");
    } else if (!value) {
      return alert("Please enter a valid Number.");
    } else {
      setPage((prevPage) => prevPage + 1);
    }
    setFormData({ fname, lname, email, country, value });
  };

  return (
    <>
      <section className="bg-white mt-16">
        <div className="w-full lg:w-11/12 mx-auto">
          <div className="mb-14 lg:px-20 text-2xl text-center">
            <h2 className="text-xl font-normal">
              Becoming a{" "}
              <span className="text-[#58c972] italic">
                part of our global community{" "}
              </span>
              has never been easier
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="w-full mx-auto">
            <div>
              <label className="px-3 text-gray-400" htmlFor="fname">
                First Name
              </label>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    className="mx-3"
                    data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjIwODMgMTYuNzVDMTkuNjI5MiAxNi43NSAyMS41Njg3IDE0Ljc5NTggMjEuNTY4NyAxMi4zNzVDMjEuNTY4NyA5Ljk1NDE3IDE5LjYyOTIgOCAxNy4yMDgzIDhDMTQuNzg3NSA4IDEyLjgzMzMgOS45NTQxNyAxMi44MzMzIDEyLjM3NUMxMi44MzMzIDE0Ljc5NTggMTQuNzg3NSAxNi43NSAxNy4yMDgzIDE2Ljc1Wk0xNy4yMDgzIDE5LjY2NjdDMTMuODEwNCAxOS42NjY3IDcgMjEuMzcyOSA3IDI0Ljc3MDhWMjYuOTU4M0M3IDI3Ljc2MDQgNy42NTYyNSAyOC40MTY3IDguNDU4MzMgMjguNDE2N0gyNS45NTgzQzI2Ljc2MDQgMjguNDE2NyAyNy40MTY3IDI3Ljc2MDQgMjcuNDE2NyAyNi45NTgzVjI0Ljc3MDhDMjcuNDE2NyAyMS4zNzI5IDIwLjYwNjIgMTkuNjY2NyAxNy4yMDgzIDE5LjY2NjdaIiBmaWxsPSIjRENFMkY5Ii8+Cjwvc3ZnPgo="
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M17.2083 16.75C19.6292 16.75 21.5687 14.7958 21.5687 12.375C21.5687 9.95417 19.6292 8 17.2083 8C14.7875 8 12.8333 9.95417 12.8333 12.375C12.8333 14.7958 14.7875 16.75 17.2083 16.75ZM17.2083 19.6667C13.8104 19.6667 7 21.3729 7 24.7708V26.9583C7 27.7604 7.65625 28.4167 8.45833 28.4167H25.9583C26.7604 28.4167 27.4167 27.7604 27.4167 26.9583V24.7708C27.4167 21.3729 20.6062 19.6667 17.2083 19.6667Z"
                      fill="#DCE2F9"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  name="fname"
                  className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-11 outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="px-3 text-gray-400" htmlFor="lname">
                Last Name
              </label>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    className="mx-3"
                    data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjIwODMgMTYuNzVDMTkuNjI5MiAxNi43NSAyMS41Njg3IDE0Ljc5NTggMjEuNTY4NyAxMi4zNzVDMjEuNTY4NyA5Ljk1NDE3IDE5LjYyOTIgOCAxNy4yMDgzIDhDMTQuNzg3NSA4IDEyLjgzMzMgOS45NTQxNyAxMi44MzMzIDEyLjM3NUMxMi44MzMzIDE0Ljc5NTggMTQuNzg3NSAxNi43NSAxNy4yMDgzIDE2Ljc1Wk0xNy4yMDgzIDE5LjY2NjdDMTMuODEwNCAxOS42NjY3IDcgMjEuMzcyOSA3IDI0Ljc3MDhWMjYuOTU4M0M3IDI3Ljc2MDQgNy42NTYyNSAyOC40MTY3IDguNDU4MzMgMjguNDE2N0gyNS45NTgzQzI2Ljc2MDQgMjguNDE2NyAyNy40MTY3IDI3Ljc2MDQgMjcuNDE2NyAyNi45NTgzVjI0Ljc3MDhDMjcuNDE2NyAyMS4zNzI5IDIwLjYwNjIgMTkuNjY2NyAxNy4yMDgzIDE5LjY2NjdaIiBmaWxsPSIjRENFMkY5Ii8+Cjwvc3ZnPgo="
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M17.2083 16.75C19.6292 16.75 21.5687 14.7958 21.5687 12.375C21.5687 9.95417 19.6292 8 17.2083 8C14.7875 8 12.8333 9.95417 12.8333 12.375C12.8333 14.7958 14.7875 16.75 17.2083 16.75ZM17.2083 19.6667C13.8104 19.6667 7 21.3729 7 24.7708V26.9583C7 27.7604 7.65625 28.4167 8.45833 28.4167H25.9583C26.7604 28.4167 27.4167 27.7604 27.4167 26.9583V24.7708C27.4167 21.3729 20.6062 19.6667 17.2083 19.6667Z"
                      fill="#DCE2F9"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  name="lname"
                  className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-11 outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="px-3 text-gray-400" htmlFor="lname">
                Phone Number
              </label>
              <div className="relative flex items-center mt-4">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  value={value}
                  onChange={setValue}
                  className="w-full py-4 flex text-gray-700 bg-white border rounded-lg px-4 outline-none"
                />
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
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    className="mx-4"
                    data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDBIMkMwLjkgMCAwLjAwOTk5OTk5IDAuOSAwLjAwOTk5OTk5IDJMMCAxNEMwIDE1LjEgMC45IDE2IDIgMTZIMThDMTkuMSAxNiAyMCAxNS4xIDIwIDE0VjJDMjAgMC45IDE5LjEgMCAxOCAwWk0xNy42IDQuMjVMMTAuNTMgOC42N0MxMC4yMSA4Ljg3IDkuNzkgOC44NyA5LjQ3IDguNjdMMi40IDQuMjVDMi4xNSA0LjA5IDIgMy44MiAyIDMuNTNDMiAyLjg2IDIuNzMgMi40NiAzLjMgMi44MUwxMCA3TDE2LjcgMi44MUMxNy4yNyAyLjQ2IDE4IDIuODYgMTggMy41M0MxOCAzLjgyIDE3Ljg1IDQuMDkgMTcuNiA0LjI1WiIgZmlsbD0iI0RDRTJGOSIvPgo8L3N2Zz4K"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z"
                      fill="#DCE2F9"
                    ></path>
                  </svg>
                </span>

                <input
                  type="email"
                  name="email"
                  className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-11 outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="px-3 text-gray-400" htmlFor="address">
                Country
              </label>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    className="mx-3"
                    data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxNiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMzLjggMCAwIDMuMjIgMCA4LjJDMCAxMS4zOCAyLjQ1IDE1LjEyIDcuMzQgMTkuNDNDNy43MiAxOS43NiA4LjI5IDE5Ljc2IDguNjcgMTkuNDNDMTMuNTUgMTUuMTIgMTYgMTEuMzggMTYgOC4yQzE2IDMuMjIgMTIuMiAwIDggMFpNOCAxMEM2LjkgMTAgNiA5LjEgNiA4QzYgNi45IDYuOSA2IDggNkM5LjEgNiAxMCA2LjkgMTAgOEMxMCA5LjEgOS4xIDEwIDggMTBaIiBmaWxsPSIjRENFMkY5Ii8+Cjwvc3ZnPgo="
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M8 0C3.8 0 0 3.22 0 8.2C0 11.38 2.45 15.12 7.34 19.43C7.72 19.76 8.29 19.76 8.67 19.43C13.55 15.12 16 11.38 16 8.2C16 3.22 12.2 0 8 0ZM8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10Z"
                      fill="#DCE2F9"
                    ></path>
                  </svg>
                </span>

                <select
                  name="country"
                  className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-9 outline-none"
                >
                  <option value="Select">Select country ...</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="??land Islands">??land Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia, Plurinational State of">
                    Bolivia, Plurinational State of
                  </option>
                  <option value="Bonaire, Sint Eustatius and Saba">
                    Bonaire, Sint Eustatius and Saba
                  </option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, the Democratic Republic of the">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="C??te d'Ivoire">C??te d'Ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cura??ao">Cura??ao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and McDonald Islands">
                    Heard Island and McDonald Islands
                  </option>
                  <option value="Holy See (Vatican City State)">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">
                    Iran, Islamic Republic of
                  </option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea, Republic of">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">
                    Lao People's Democratic Republic
                  </option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, the Former Yugoslav Republic of">
                    Macedonia, the Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia, Federated States of">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova, Republic of">
                    Moldova, Republic of
                  </option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine, State of">
                    Palestine, State of
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="R??union">R??union</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Barth??lemy">Saint Barth??lemy</option>
                  <option value="Saint Helena, Ascension and Tristan da Cunha">
                    Saint Helena, Ascension and Tristan da Cunha
                  </option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Martin (French part)">
                    Saint Martin (French part)
                  </option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and the Grenadines">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Sint Maarten (Dutch part)">
                    Sint Maarten (Dutch part)
                  </option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and the South Sandwich Islands">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">
                    Syrian Arab Republic
                  </option>
                  <option value="Taiwan, Province of China">
                    Taiwan, Province of China
                  </option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania, United Republic of">
                    Tanzania, United Republic of
                  </option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela, Bolivarian Republic of">
                    Venezuela, Bolivarian Republic of
                  </option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">
                    Virgin Islands, British
                  </option>
                  <option value="Virgin Islands, U.S.">
                    Virgin Islands, U.S.
                  </option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
            </div>
            <div className="px-3 mt-4 flex items-center gap-1">
              <input
                onChange={(e) => setCheckTerms(e.target.value)}
                type="checkbox"
                name="checkbox1"
              />
              <small className="text-gray-400">
                I agree to Andela's{" "}
                <strong className="text-xs text-gray-900">
                  Terms & Conditions
                </strong>
              </small>
            </div>
            <div className="px-3 mt-2">
              <input
                onChange={(e) => setCheckPrivacy(e.target.value)}
                className="mr-1"
                type="checkbox"
                name="checkbox2"
              />
              <small className="text-gray-400">
                I understand that Andela will process my information in
                accordance with their{" "}
                <strong className="text-xs text-gray-900">
                  Privacy Policy.
                </strong>{" "}
                I may withdraw my consent through unsubscribe links at any time.
              </small>
            </div>
            <div className="mt-6 text-center">
              <button className="px-4 py-[10px] text-gray-100 rounded-full bg-[#58c671]">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpInfo;
