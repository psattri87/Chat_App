import React from 'react'
import avtarIcon from "../../assets/avtar.svg";

const LeftDiv = ({users}) => {
  return (
    <div>
        <div className="flex items-center py-4 mx-12">
          <img src={avtarIcon} width={75} alt="avtar" />
          <div className="ml-4">
            <h3 className="text-2xl font-medium">Pushpendra Attri</h3>
            <p className="text-md font-light">Full Stack Developer</p>
          </div>
        </div>
        <hr />
        <div className="ml-12 mt-6 ">
          <div className="text-lg font-medium ">Messages</div>
          <div>
            {users.map((user, index) => {
              return (
                <div key={index} className="flex items-center py-4 border-b border-b-gray-300 cursor-pointer hover:bg-gray-200 hover:shadow-inherit">
                  <div className="flex ">
                    <img src={user.img} width={50} alt="avtar" />
                    <div className="ml-4 ">
                      <h3 className="text-xl font-semibold">{user.name}</h3>
                      <p className="text-md font-light text-gray-600">
                        {user.status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default LeftDiv