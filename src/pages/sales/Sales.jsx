import { Link } from "react-router-dom";
import "./sales.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Sales = () => {
  return (
    <div className="sale">
      <div className="featured1">
        <div className="salesItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <Link to="/revenuemetric">
              <span className="featuredMoney">$2,415</span>
            </Link>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="salesItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <Link to="/salesmetric">
              <span className="featuredMoney">$4,415</span>
            </Link>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
};

export default Sales;
