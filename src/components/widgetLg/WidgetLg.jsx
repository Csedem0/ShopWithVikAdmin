import { Link } from "react-router-dom";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Nav Bar</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <Link to="/products">
            <td className="widgetLgUser">
              <span className="widgetLgName">Products</span>
            </td>
          </Link>
        </tr>
        <tr className="widgetLgTr">
          <Link to="/newproduct">
            <td className="widgetLgUser">
              <span className="widgetLgName">New Product</span>
            </td>
          </Link>
        </tr>
      </table>
    </div>
  );
}
