import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./Cardview.css"

const Cardview = ({search}) => {
    const [userData, setUserdata] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          await axios
            .get(`https://api.github.com/users/${search}`)
            .then((data) => {
              setUserdata(data.data);
              console.log(data.data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        };
        fetchData();
      }, [search]);

      if(userData){
        return (
                <div className="user-card">
                
                <div className="img-cont">
                <div className='img-back'></div>
                  <img className="user-img" src={userData.avatar_url} alt="" />
                </div>
                <div className="user-details">
                <div>
                  <h2>{userData.name ? userData.name : userData.login}</h2>
                </div>
                <div>
                  <p>@{userData.login}</p>
                </div>
                <div className="designation">
                  <p>{userData.bio ? userData.bio : "FullStack Developer"}</p>
                </div>
                </div>
                <div className="details">
                  <div>
                    <h2>
                      {userData.public_repos
                        ? userData.public_repos
                        : Math.floor(Math.random() * 20)}
                    </h2>
                    <p>Public_Repos</p>
                  </div>
                  <div>
                    <h2>
                      {userData.public_gists
                        ? userData.public_gists
                        : Math.floor(Math.random() * 20)}
                    </h2>
                    <p>Public_Gists</p>
                  </div>
                  <div>
                    <h2>{userData.created_at.split("T")[0]}</h2>
                    <p>Created At</p>
                  </div>
                </div>
              </div>
          )
        }else{
            return null
        }
      }
    
    

  

export default Cardview