import React, { useEffect, useState } from "react";
import { StoryImageProps } from "./types";
import Image from "@/components/atoms/image/Image";

function StoryImage(props: StoryImageProps) {
  const { data } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [data]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="h-full w-full absolute top-0 z-10 flex justify-center items-center">
          <Image
            className="animate-spin"
            src="/svg/loader.svg"
            height={50}
            width={50}
            alt="loading"
          />
        </div>
      )}
      <Image
        src={data}
        fill
        alt={data}
        loading="eager"
        onLoad={(img) => {
          setIsLoading(false);
          img.currentTarget.classList.remove("img--hidden");
        }}
        className="img img--hidden"
      />
    </div>
  );
}

export default StoryImage;
