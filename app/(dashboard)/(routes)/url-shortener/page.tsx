"use client";

import { useState } from "react";
import axios from "axios";

import { LinkIcon, Clipboard } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { cn } from "@/lib/utils";

const UrlShortenerPage = () => {
  const { toast } = useToast();

  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const apiUrl: any = process.env.NEXT_PUBLIC_URL_SHORTENER_API_BASE_URL;
  const key = process.env.NEXT_PUBLIC_URL_SHORTENER_API_KEY;
  const host = process.env.NEXT_PUBLIC_URL_SHORTENER_API_HOST;

  const displayToast = () => {
    toast({
      title: "Copied to clipboard",
      description: "The short url has been copied to your clipboard.",
      variant: "success",
    });
  };

  const errorToast = () => {
    toast({
      title: "An error occured",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  };

  const getShortUrl = () => {
    try {
      setIsLoading(true);
      setIsError(false);

      // setTimeout(() => {
      axios
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
        })
        .catch((err) => {
          setIsError(true);
          errorToast();
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
      // }, 1000);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  const copyToClip = () => {
    if (shortUrl) {
      navigator.clipboard
        .writeText(shortUrl)
        .then(() => {
          setIsCopied(true);
          displayToast();
          console.log("copied");
        })
        .catch((err) => {
          errorToast();
          console.log(err);
        });
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
        <div className="w-full lg:w-1/2 md:w-[70%]">
          <Card className="w-full">
            <CardHeader className={cn("", isLoading && "pb-0")}>
              <CardTitle>Input url</CardTitle>
              {/* <CardDescription>Input url</CardDescription> */}
              <input
                type="text"
                placeholder="url"
                value={url}
                className="border-[1px] border-gray-200 rounded-md outline-none py-2 px-5"
                onChange={(e) => setUrl(e.target.value)}
              />
            </CardHeader>
            {isLoading && <Loader />}
            {/* {isError && <p>Something went wrong...</p>} */}
            {shortUrl && (
              <CardContent>
                <div className="flex justify-between items-center">
                  <p>{shortUrl}</p>
                  <button
                    className="border-0 outline-0 rounded-md bg-gray-200 p-2"
                    onClick={copyToClip}
                  >
                    <Clipboard size={20} />
                  </button>
                </div>
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
