import { useState, useEffect } from "react";
import axios from "axios";

let NewsComponent = () => {
  const [newsData, setNewsData] = useState(null);
  const [newsQuery, setNewsQuery] = useState({
    country: "ng",
    category: "technology",
  });

  const updateNewsQuery = (queryName) => (event) => {
    setNewsQuery((prevNewsQuery) => ({
      ...prevNewsQuery,
      [queryName]: event.target.value,
    }));
    // newsQuery.queryName = event.target.value;
    // setNewsQuery(newsQuery);
    console.log(queryName, event.target.value);
  };

  const apiKey = "35a82d0b2f714cfaaf266cdaa6fb9733";
  // const apiKey = "d81aef42b089430086591c581114d8bf";
  const fetchNewsData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${newsQuery.country}&category=${newsQuery.category}&apiKey=${apiKey}`
      )
      .then(function (response) {
        setNewsData(response.data);
        console.log(newsData);
      })
      .catch(function (error) {
        console.log(error);
        setNewsData(null);
      });
  };
  useEffect(() => {
    fetchNewsData();
  }, [newsQuery]);

  return (
    <>
      <div className="">
        <div className="max-w-screen-lg mx-auto py-12">
          <div className="w-full border rounded h-16 p-4 ">
<div>
  <h1 className=" text-3xl">
    A simple news app
  </h1>
</div>

<div className="border">
  <select name="category"  id="catergory">
    <option value="sport">sport</option>
    <option value="technology">technology</option>
    <option value="business">business</option>
  </select>



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
</div>



          </div>
        </div>
      </div>

      {/* <pre>{JSON.stringify(newsData, null, 2)}</pre> */}
    </>
  );
};

export default NewsComponent;
