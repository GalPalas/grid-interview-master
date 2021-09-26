import React from "react";

function TableBody({ data }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr>
          <td>{item.imdbID}</td>
          <td>{item.Title}</td>
          <td>{item.Rated}</td>
          <td>{item.Trailer.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
