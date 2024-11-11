import React from "react";
import { Badge } from "./ui/badge";

const Introduction = () => {
  return (
    <div className="flex gap-2">
      <div className="flex basis-4/6 flex-col gap-2">
        <h1 className="text-6xl">Lucas Jansen</h1>
        <h1 className="text-6xl">Software developer</h1>
      </div>
      <div className="flex flex-col basis-3/6 gap-2">
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
        </div>
        <div className="flex gap-1">
          <Badge>Github</Badge>
          <Badge>LinkedIn</Badge>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
