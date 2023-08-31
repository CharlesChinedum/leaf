"use client";

import { useState } from "react";

import { Clipboard, LinkIcon } from "lucide-react";

import Heading from "@/components/Heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const WhatsappLinkPage = () => {
  const { toast } = useToast();

  const [link, setLink] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const getWhatsappLink = async () => {
    setIsLoading(true);
    setIsError(false);

    setTimeout(() => {
      try {
        const replacedMessage = message.replace(/\s/g, "%20");
        let url = `https://wa.me/${phone}?text=${replacedMessage}`;
        if (phone === "" || phone.length < 11) {
          setIsError(true);
          errorToast();
          url = "";
        }
        setLink(url);
        console.log(url);
      } catch (error) {
        if (phone === "") {
          setIsError(true);
          errorToast();
        }
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  //Toast
  const displayToast = () => {
    toast({
      title: "Copied to clipboard",
      description: "The short url has been copied to your clipboard.",
      variant: "success",
    });
  };

  const errorToast = () => {
    if (isError === true || link === "") {
      toast({
        title: "An error occured",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const copyToClip = () => {
    if (link) {
      navigator.clipboard
        .writeText(link)
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

  let shortLink = link.slice(0, 35) + "...";

  return (
    <div className="w-full">
      <Heading
        title="Get Whatsapp Link"
        description="Generate a whatsapp link to send to your friends and customers."
        icon={LinkIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-1/2 md:w-[70%]">
          <Card className="w-full">
            <CardHeader className={cn("", isLoading && "pb-0")}>
              <CardTitle className="text-lg">Phone Number</CardTitle>
              {/* <CardDescription>Input url</CardDescription> */}
              <input
                type="text"
                placeholder="input phone number"
                value={phone}
                className="border-[1px] border-gray-200 rounded-md outline-none py-2 px-5"
                onChange={(e) => setPhone(e.target.value)}
              />
              <CardTitle className="text-lg">Message</CardTitle>
              {/* <CardDescription>Input url</CardDescription> */}
              <input
                type="text"
                placeholder="input optional message"
                value={message}
                className="border-[1px] border-gray-200 rounded-md outline-none py-2 px-5"
                onChange={(e) => setMessage(e.target.value)}
              />
            </CardHeader>
            {isLoading && <Loader />}
            {!isError && (
              <CardContent>
                <div className="relative flex justify-between items-center">
                  {link && (
                    <>
                      <p className="w-full break-words">{shortLink}</p>
                      <button
                        className="border-0 outline-0 rounded-md bg-gray-200 p-2"
                        onClick={copyToClip}
                      >
                        <Clipboard size={20} />
                      </button>
                    </>
                  )}
                </div>
              </CardContent>
            )}
            <CardFooter>
              <Button
                variant="base"
                className="w-full text-white"
                onClick={getWhatsappLink}
              >
                Get Link
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatsappLinkPage;
