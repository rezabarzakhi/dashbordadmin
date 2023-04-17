import React from "react";
import "./WidgetLg.css";
import { transActions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest TransActions </h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Costomer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>

        {transActions.map((action) => (
          <tr key={action.id} className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={action.img} />
              <span className="widgetLgName">{action.customer}</span>
            </td>
            <td className="widgetLgDate">{action.date}</td>
            <td className="widgetLgAmount">{action.amount}</td>
            <td className="widgetLgStatus">
              <Button type={action.status} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
