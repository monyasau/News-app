import { useState, useEffect } from "react";
import axios from "axios";

let NewsComponent = () => {
 
  return (
    <>
      <input
        type="text"
        placeholder="category"
        onChange={updateNewsQuery("category")}
      />
      <input
        type="text"
        placeholder="country"
        onChange={updateNewsQuery("country")}
      />
      <pre>{JSON.stringify(newsData, null, 2)}</pre>
    </>
  );
};

export default NewsComponent;
