"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Feed {
  id: String;
  title: String;
  content: String;
  published: Boolean;
  authorId: String;
  author: Object;
  createdAt: String;
}

interface Props {
  feeds: Feed[];
}

const Feeds = (props: Props) => {
  const { feeds } = props;
  const maxChars = 900;
  console.log(feeds);
  return (
    <div className="mt-20">
      {feeds.map((feed: Feed, index: Number) => {
        return (
          <div
            key={String(feed.id)}
            className="w-100 md:w-100 h-80 bg-white p-10 rounded-sm flex flex-col content-between mb-3"
          >
            <div className="w-100 h-72">
              <h1 className="text-3xl font-semibold">{feed.title}</h1>
              <p className="mt-4">
                {feed.content.length > maxChars
                  ? feed.content.substring(0, maxChars - 1) + "..."
                  : feed.content}
              </p>
            </div>
            <div className="flex  w-100 justify-end border-gray-300 border-t-2 pt-2">
              <div className="mr-2 text-gray-500">
                {Date(feed.createdAt).toString().substring(0, 15)}
              </div>
              <div className="text-orange-600 flex items-center justify-between">
                <i className={"fa-solid fa-user"} />
                {feed.author.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
