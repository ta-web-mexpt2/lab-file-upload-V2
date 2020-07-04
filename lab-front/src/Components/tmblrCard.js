import React from "react";
import "./tmblrCard.css";

const TumblrCard = (props) => {
  return (
    <div className="tumblrCard">
      <section className="header">
        <div>
          <img className="avatar" src={props.avatar} alt="avatar" />
        </div>
        <div className="userName">{props.username}</div>
        <div className="followUserLink">Follow</div>
      </section>
      <section className="body">
        {props.picPath && <img className="pic" src={props.picPath} alt="pic" />}
        <p className="content">{props.content}</p>
      </section>
      <section className="footer">
          <div className="leftFooter">{props.notes} notes</div>
          <div className="rightFooter">
              <img className="reblog" src="https://res.cloudinary.com/josasolis/image/upload/v1592174210/lab-uploader/Selection_007_p65y5r.png"/>
              <img className="like" src="https://res.cloudinary.com/josasolis/image/upload/v1592174217/lab-uploader/Selection_008_umn0zk.png" />
          </div>
      </section>
    </div>
  );
};

export default TumblrCard;
