import { Stack, Typography } from "@mui/material";
import React from "react";
import './profile.css'
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  
  const navigate = useNavigate();
  const navigatetohome = () => navigate("/")
  const navigatetogroup = () => navigate("/group")

  return (
    <div className="container-all-user">
      <div className="content-user">
        <div className="banner-user">
          <img
            src="https://images.pexels.com/photos/159825/color-pencil-drawing-coloring-colored-pencils-159825.jpeg"
            alt=""
          />
        </div>
        <div className="image-user">
          <img src={user?.avatar?.url} alt="" />
        </div>
        <div className="content-info-user">
          <h2>
            {user?.name}, <span>{user?.username}</span>
          </h2>
          <div className="info-user">
            <p>
              <i className="fa fa-info-circle"></i>
              {user?.bio}
            </p>
          </div>
          <div className="btn-group">
            <a
              className="deleted"
              onClick={navigatetohome}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-trash-alt"></i> Let Chat
            </a>
            <a
              className="edit"
              onClick={navigatetogroup}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-user-edit"></i> Go make Group
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
