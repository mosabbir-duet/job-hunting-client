import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "C++", label: "C++" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "React", label: "React" },
  { value: "Node", label: "Node" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "Redux", label: "Redux" },
];
const PostJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data);

    fetch("http://localhost:3000/postjobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // data.skills.map((skill) => console.log(skill.value));
  };
  return (
    <div className="my-12">
      <div className="w-2/3 mx-auto border border-orange-500 p-12 rounded-xl">
        <h1 className="text-3xl font-medium text-orange-500 mb-8 p-4 text-center border-b-2 border-warning ">
          Added your job
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-xl">Job Title</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Job title"
                type="text"
                {...register("jobTitle", { required: "Field value required." })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                {...register("email", { required: "Field value required." })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Vacancy</span>
              </label>
              <input
                type="number"
                placeholder="Vacancy"
                className="input input-bordered"
                {...register("vacancy", { required: "Field value required." })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Salary</span>
              </label>
              <input
                type="text"
                placeholder="Your salary"
                className="input input-bordered"
                {...register("salary", { required: "Field value required." })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Photo Url</span>
              </label>
              <input
                type="url"
                placeholder="Your photo url"
                className="input input-bordered"
                {...register("photoUrl", { required: "Field value required." })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Deadline</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                {...register("deadline", { required: "Field value required." })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Category</span>
              </label>
              <select
                {...register("category", { required: "Field value required." })}
                className="input input-bordered"
              >
                <option value="Engineering">Engineering</option>
                <option value="Editor">Editor</option>
                <option value="Writer">Writer</option>
                <option value="Developer">Developer</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Job type</span>
              </label>
              <select
                {...register("jobType", { required: "Field value required." })}
                className="input input-bordered"
              >
                <option value="Remote">Remote</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-xl">Skills</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning text-white px-8">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
