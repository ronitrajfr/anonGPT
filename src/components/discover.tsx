"use client";
import React from "react";
import axios from "axios";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Link from "next/link";

const Discover = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=top-headlines&apiKey=${process.env.NEXT_PUBLIC_NEWS_API!}`,
      )
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="md:pl-[200px]">
      <div>
        <div className="mb-10 mt-7 flex items-center justify-center text-4xl font-bold">
          Latest News
        </div>

        <BentoGrid className="m-6 mx-auto max-w-4xl md:auto-rows-[20rem]">
          {data.map((item: any, i) => (
            <Link href={item.url} key={i}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.urlToImage}
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Discover;
