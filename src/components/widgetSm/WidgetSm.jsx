import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const getusers = async () => {
      try {
        const res = await userRequest.get("users");
        setUsers(res.data);
      } catch {}
    };
    getusers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>

      <ul className="widgetSmList">
        <li className="widgetSmListItemm">
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Profile</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Username</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">E-Mail</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Phone Contact</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              Users Unique Identification
            </span>
          </div>
        </li>
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">xyz@gmail.com</span>
            </div>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">+234 9000000000</span>
            </div>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user._id}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
