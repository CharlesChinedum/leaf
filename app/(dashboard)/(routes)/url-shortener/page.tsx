"use client";

import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { LinkIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

const UrlShortenerPage = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const apiUrl: any = process.env.NEXT_PUBLIC_URL_SHORTENER_API_BASE_URL;
  const key = process.env.NEXT_PUBLIC_URL_SHORTENER_API_KEY;
  const host = process.env.NEXT_PUBLIC_URL_SHORTENER_API_HOST;

  const getShortUrl = () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = axios
        .post(
          apiUrl,
          {
            url: url,
          },
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "x-Rapidapi-key": key,
              "x-Rapidapi-host": host,
            },
          }
        )
        .then((res) => {
          res.data;
          setShortUrl(res.data.result_url);
          console.log(res.data);
        });
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Heading
        title="Url Shortener"
        description="Shorten your long url to a short one."
        icon={LinkIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="w-full flex justify-center">
        <div className="w-1/2">
          <Card className="w-full">
            {/* TODO: 1. change the below dynamic class and use cn
                      2. add a copy to clipboard button
                      3. handle error message
                      4. add a loader (set time interval of a few seconds)
            */}
            <CardHeader className={`${isLoading && "pb-0"}`}>
              <CardTitle>Input url</CardTitle>
              {/* <CardDescription>Input url</CardDescription> */}
              <input
                type="text"
                value={url}
                className="border-[1px] border-gray-200 rounded-md outline-none py-2 px-5"
                onChange={(e) => setUrl(e.target.value)}
              />
            </CardHeader>
            {isLoading && <Loader />}
            {/* {isError && <p>Something went wrong...</p>} */}
            {shortUrl && (
              <CardContent>
                <p>{shortUrl}</p>
              </CardContent>
            )}
            <CardFooter>
              <Button
                variant="base"
                className="w-full text-white"
                onClick={getShortUrl}
              >
                Shorten
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UrlShortenerPage;
