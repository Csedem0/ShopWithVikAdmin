import "../../components/widgetSm/widgetSm.css";

import "./message.css";

export default function WidgetSm() {
  return (
    <div className="widgetSms">
      <span className="widgetSmTitle">Messages</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John</span>
          </div>

          <div className="widgetSmUser">
            <span className="widgetSmUsername">I love shopping here</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Emmanuel</span>
          </div>

          <div className="widgetSmUser">
            <span className="widgetSmUsername">You sell quality products</span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mr KC</span>
          </div>

          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              Better than ebay and walmart
            </span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mr Michael</span>
          </div>

          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              This is te best store i've visited
            </span>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mr Nitin</span>
          </div>

          <div className="widgetSmUser">
            <span className="widgetSmUsername">I have a pending order</span>
          </div>
        </li>

        <li className="widgetSmListItem">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Alexis</span>
          </div>

          <div className="widgetSmUser">
            <span className="widgetSmUsername">I want to buy more</span>
          </div>
        </li>

        <li className="widgetSmListItem">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6mlFZEW5jbLDgEZnzaHwjEfSSsXpj2jn1lBwdetk4g&s"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mr Christopher</span>
          </div>

          <div className="widgetSmUser">
            <span className="widgetSmUsername">I love your store</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
