import React from "react";
import TableBody from "./tableBody";

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((field) => (
          <th>{field.field}</th>
        ))}
      </tr>
    </thead>
    <TableBody data={data} />
  </table>
);

export default Grid;
