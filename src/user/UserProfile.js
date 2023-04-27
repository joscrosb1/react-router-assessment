import React from "react";

export const UserProfile = ({ user }) => {
  return (
    <div className="tab-pane active pt-2" role="tabpanel" aria-labelledby="profle-tab">
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>User Name</label>
        </div>
        <div className="col-md-8 col-6">{user.username}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>Email</label>
        </div>
        <div className="col-md-8 col-6">{user.email}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>Phone</label>
        </div>
        <div className="col-md-8 col-6">{user.phone}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>Company</label>
        </div>
        <div className="col-md-8 col-6">{(user.company || {}).name}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-md-2 col-5">
          <label>Website</label>
        </div>
        <div className="col-md-8 col-6">
          <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default UserProfile;

