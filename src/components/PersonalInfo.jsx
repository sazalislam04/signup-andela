import { useForm } from "react-hook-form";

const PersonalInfo = ({ setPage, setFormData, formData }) => {
  const { register, handleSubmit } = useForm();
  const { country, email, fname, lname, value } = formData;

  const formSubmit = (data) => {
    const { skills, experience } = data;
    const newFormData = {
      country,
      email,
      fname,
      lname,
      skills,
      experience,
      value,
    };
    setFormData(newFormData);

    if (data.skills === "Select") {
      alert("Please select at least one skill.");
    } else if (!data.experience) {
      alert("Please select at least one Experience.");
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <section className="bg-white mt-24">
        <div className="w-full lg:w-11/12 mx-auto">
          <div className="lg:px-24 text-2xl text-center">
            <h2 className="text-xl font-normal">
              Select your <span className="text-[#58c972] italic">primary</span>{" "}
              skill
            </h2>
          </div>
          <form onSubmit={handleSubmit(formSubmit)} className="w-full">
            <div className="mt-4">
              <select
                {...register("skills")}
                className="block w-full py-4 text-gray-700 bg-white border rounded-lg px-5 outline-none"
              >
                <option value="Select">Select ...</option>
                <option value="[Javascript] React">[Javascript] React</option>
                <option value="[Javascript] Angular">
                  [Javascript] Angular
                </option>
                <option value="[Javascript] Vue">[Javascript] Vue</option>
                <option value="[Javascript] Node.js">
                  [Javascript] Node.js
                </option>
                <option value="[Cross-Platform] React Native">
                  [Cross-Platform] React Native
                </option>
                <option value="Python">Python</option>
                <option value="Ruby">Ruby</option>
                <option value="Golang">Golang</option>
                <option value="DevOps">DevOps</option>
                <option value="DevOps (AWS)">DevOps (AWS)</option>
                <option value="DevSecOps">DevSecOps</option>
                <option value="Cloud Engineering">Cloud Engineering</option>
                <option value="Cloud Engineering (AWS)">
                  Cloud Engineering (AWS)
                </option>
                <option value="SRE">SRE</option>
                <option value="Java">Java</option>
                <option value="C/Embedded">C/Embedded</option>
                <option value="QA">QA</option>
                <option value="Elixir">Elixir</option>
                <option value="Scala">Scala</option>
                <option value="PHP">PHP</option>
                <option value=".NET">.NET</option>
                <option value="iOS">iOs</option>
                <option value="Android">Android</option>
                <option value="Flutter">Flutter</option>
                <option value="Unity">Unity</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Data Engineering">Data Engineering</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Data Science">Data Science</option>
                <option value="Salesforce - Admin">Salesforce - Admin</option>
                <option value="Salesforce - Architect">
                  Salesforce - Architect
                </option>
                <option value="Salesforce - BA/PM/PO">
                  Salesforce - BA/PM/PO
                </option>
                <option value="Salesforce - Commerce Cloud">
                  Salesforce - Commerce Cloud
                </option>
                <option value="Salesforce - Developer">
                  Salesforce - Developer
                </option>
                <option value="Salesforce - Marketer">
                  Salesforce - Marketer
                </option>
                <option value="Mulesoft">Mulesoft</option>
                <option value="UX Writer">UX Writer</option>
                <option value="UX Researcher">UX Researcher</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="UI(Visual) Designer">UI(Visual) Designer</option>
                <option value="Interaction Designer">
                  Interaction Designer
                </option>
                <option value="Digital Project Manager">
                  Digital Project Manager
                </option>
                <option value="Technical Product Manager">
                  Technical Product Manager
                </option>
                <option value="Product Manager">Product Manager</option>
                <option value="Product Owner">Product Owner</option>
                <option value="Scrum Master">Scrum Master</option>
              </select>
            </div>

            <div className="mt">
              <h2 className="text-center text-xl py-12">
                Years of experience with this skill
              </h2>
              <fieldset>
                <div className="">
                  <div className="flex justify-evenly flex-wrap">
                    <label
                      htmlFor="experience_tt"
                      className="cursor-pointer p-0.5"
                    >
                      <input
                        type="radio"
                        {...register("experience")}
                        id="experience_tt"
                        className="peer sr-only"
                        value="<1 year"
                      />

                      <span className="group inline-block rounded border px-5 py-[9px] text-sm peer-checked:border-black peer-checked:text-black">
                        {"<"}1 year
                      </span>
                    </label>
                    <label
                      htmlFor="experience_tf"
                      className="cursor-pointer p-0.5"
                    >
                      <input
                        type="radio"
                        {...register("experience")}
                        id="experience_tf"
                        className="peer sr-only"
                        value="1-2 Years"
                      />

                      <span className="group inline-block rounded border px-5 py-[9px] text-sm peer-checked:border-black peer-checked:text-black">
                        1-2 Years
                      </span>
                    </label>
                    <label
                      htmlFor="experience_tr"
                      className="cursor-pointer p-0.5"
                    >
                      <input
                        type="radio"
                        {...register("experience")}
                        id="experience_tr"
                        className="peer sr-only"
                        value="3-5 Years"
                      />

                      <span className="group inline-block rounded border px-5 py-[9px] text-sm peer-checked:border-black peer-checked:text-black">
                        3-5 Years
                      </span>
                    </label>

                    <label
                      htmlFor="experience_fr"
                      className="cursor-pointer p-0.5"
                    >
                      <input
                        type="radio"
                        {...register("experience")}
                        id="experience_fr"
                        className="peer sr-only"
                        value="6-10 Years"
                      />

                      <span className="group inline-block rounded border px-5 py-[9px] text-sm peer-checked:border-black peer-checked:text-black">
                        6-10 Years
                      </span>
                    </label>

                    <label
                      htmlFor="experience_cb"
                      className="cursor-pointer p-0.5"
                    >
                      <input
                        type="radio"
                        {...register("experience")}
                        id="experience_cb"
                        className="peer sr-only"
                        value=">10 Years"
                      />

                      <span className="group inline-block rounded border px-5 py-[9px] text-sm peer-checked:border-black peer-checked:text-black">
                        {">"}10 Years
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="mt-8 flex gap-4 justify-center items-center text-center">
              <button
                onClick={() => setPage((prevPage) => prevPage - 1)}
                className="px-8 py-[10px] text-gray-900 rounded-full border border-black"
              >
                Back
              </button>
              <button className="px-8 py-[10px] text-gray-100 rounded-full bg-[#58c671]">
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
