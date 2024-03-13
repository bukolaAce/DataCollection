import { useState } from "react";
import Cards from "./Cards";
const Form = () => {
  const [open, setOpen] = useState(null);
  const handleOpen = () => {
    setOpen(!open);
  };

  const [profile, setProfile] = useState({
    FirstName: "",
    LastName: "",
    Position: "",
    Email: "",
    Number: "",
  });

  const [profileUpdate, setProfileUpdate] = useState([]);
  const [error, setError] = useState({
    FirstNameError: false,
    LastNameError: false,
    PositionError: false,
    EmailError: false,
    AgeError: false,
    AvatarError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle avatar
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    const { FirstName, LastName, Number, Position, Email } = profile;

    if (!FirstName) {
      return setError({
        FirstNameError: true,
        LastNameError: false,
        AgeError: false,
        PositionError: false,
        EmailError: false,
        AvatarError: false,
      });
    } else if (!LastName) {
      setError({
        NameError: false,
        LastNameError: true,
        AgeError: false,
        PositionError: false,
        EmailError: false,
        AvatarError: false,
      });
    } else if (!Number) {
      setError({
        NameError: false,
        AgeError: true,
        PositionError: false,
        EmailError: false,
        AvatarError: false,
      });
    } else if (!Position) {
      setError({
        NameError: false,
        AgeError: false,
        PositionError: true,
        EmailError: false,
        AvatarError: false,
      });
    } else if (!Email) {
      setError({
        NameError: false,
        AgeError: false,
        PositionError: false,
        EmailError: true,
        AvatarError: false,
      });
    } else if (!avatar) {
      setError({
        NameError: false,
        AgeError: false,
        PositionError: false,
        EmailError: false,
        AvatarError: true,
      });
    } else {
      setError({
        NameError: false,
        AgeError: false,
        PositionError: false,
        EmailError: false,
        AvatarError: false,
      });

      // Add logic to handleClick
      setProfileUpdate([
        ...profileUpdate,
        {
          firstname: FirstName,
          lastname: LastName,
          number: Number,
          position: Position,
          email: Email,
          avatar: avatar,
        },
      ]);
      setOpen(true);
    }
    setOpen(true);
    // setProfileUpdate([
    //   ...profileUpdate,
    //   {
    //     firstname: "",
    //     lastname: "",
    //     number: "",
    //     position: "",
    //     email: "",
    //     avatar: "",
    //   },
    // ]);
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        {/* DARK MODE FEATURE */}
        <div className="flex justify-end mx-5 mt-5">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <svg
              className="w-10 h-10 fill-current swap-off"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="w-10 h-10 fill-current swap-on"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {/* FORM */}
        <div className="flex flex-col justify-center gap-4 p-5 mx-auto mt-5 border rounded-md w-80 md:w-80">
          <label
            className={`flex items-center gap-2 input input-bordered ${
              error.FirstNameError ? "border-red-600" : null
            } `}
          >
            <input
              type="text"
              className={`grow`}
              placeholder="First Name"
              name="FirstName"
              value={profile.Name}
              onChange={handleChange}
            />
          </label>
          <label
            className={`flex items-center gap-2 input input-bordered ${
              error.LastNameError ? "border-red-600" : null
            } `}
          >
            <input
              type="text"
              className={`grow`}
              placeholder="Last Name"
              name="LastName"
              value={profile.LastName}
              onChange={handleChange}
            />
          </label>

          <label
            className={`flex items-center gap-2 input input-bordered  ${
              error.PositionError ? "border-red-500" : null
            }`}
          >
            <input
              type="text"
              className={`grow`}
              placeholder="Position"
              name="Position"
              value={profile.Position}
              onChange={handleChange}
            />
          </label>

          <label
            className={`flex items-center gap-2 input input-bordered ${
              error.EmailError ? "border-red-500" : null
            }`}
          >
            <input
              type="email"
              className={`${error.EmailError ? "border-red-700" : null}grow`}
              placeholder="Email"
              name="Email"
              value={profile.Email}
              onChange={handleChange}
            />
          </label>
          <label
            className={`flex items-center gap-2 input input-bordered ${
              error.AgeError ? "border-red-500" : null
            }`}
          >
            <input
              type="number"
              className={`grow`}
              placeholder="Phone Number"
              name="Number"
              value={profile.Number}
              onChange={handleChange}
            />
          </label>
          <label
            className={`flex items-center gap-2 input input-bordered ${
              error.AvatarError ? "border-red-500" : null
            }
            
            `}
          >
            <input
              className="w-full"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              placeholder="upload image"
            />
          </label>
          <button className="btn btn-success" onClick={handleClick}>
            Submit
          </button>
        </div>
        {/* {JSON.stringify(profileUpdate)} */}
        <Cards
          profileUpdate={profileUpdate}
          handleOpen={handleOpen}
          open={open}
        />
      </div>
    </>
  );
};

export default Form;
