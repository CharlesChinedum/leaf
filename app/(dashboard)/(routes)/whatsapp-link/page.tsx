"use client";

import { useState } from "react";

import { LinkIcon } from "lucide-react";

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

const WhatsappLinkPage = () => {
  const [link, setLink] = useState("");
  const [phone, setPhone] = useState("09060423952");
  const [message, setMessage] = useState("Hello World I'm a message");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const generateWhatsappLink = () => {
    const replacedMessage = message.replace(/\s/g, "%20");

    const url = `https://wa.me/${phone}?text=${replacedMessage}`;
    setLink(url);
    console.log(url);
  };

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
            <CardHeader>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatsappLinkPage;
