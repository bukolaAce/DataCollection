/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

const Cards = ({ profileUpdate,open,handleOpen }) => {
  
  return (
    <>
      {profileUpdate.map((profile) => {
        return (
          <>
         {open ?  <div className=" fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
              {/* CARD */}

              <div className="max-w-md gap-0 px-3 rounded-md shadow-lg bg-blue-950 w-90 card text-primary-content bottom-20">
                {/* CLOSE BUTTON */}

                <div className="relative flex justify-end px-2 cursor-pointer shrink-0 top-3">
                  <button className="text-white" onClick={handleOpen}>
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </div>
                {/* CARD CONTENT */}
                <div className="flex flex-row items-center justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ">
                        <img src={profile.avatar} />
                      </div>
                    </div>
                  </div>
                  {/* CARD TEXT */}

                  <div className="card-body ">
                    <ul className="flex-col space-y-1 text-white">
                      <li className="text-lg font-semibold">{`${profile.firstname} ${profile.lastname}`}</li>

                      <li className="text-sm font-bold">{profile.position}</li>
                      <li className="">{profile.email}</li>
                      <li className="">{profile.number}</li>
                    </ul>
                  </div>
                </div>

              
              </div>
            </div> : null}  
          </>
        );
      })}
    </>
  );
};

export default Cards;
