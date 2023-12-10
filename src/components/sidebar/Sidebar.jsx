import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Account
              </li>
            </Link>

            <Link to="/leads" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Manage Leads
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Create Leads
              </li>
            </Link>
            <Link to="/activities" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Activities
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Create Product
              </li>
            </Link>
            <Link to="/analysis" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Predictive Analysis
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/mail" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Feedback
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
