import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filternews = data.filter((news) => news.others.is_today_pick == id);
      setCategoryNews(filternews);
    } else {
      const filternews = data.filter((news) => news.category_id == id);
      setCategoryNews(filternews);
    }
  }, [data, id]);

  return (
    <div>
     <h2 className="font-bold mb-1.5">  
     Total News <span className="text-secondary"> {categoryNews.length} </span>found
     </h2>
     <div className="grid grid-cols-1 gap-5">
        {
            categoryNews.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
        }
     </div>
    </div>
  );
};

export default CategoryNews;
