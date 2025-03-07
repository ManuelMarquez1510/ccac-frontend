"use client";

import { Card } from "@/components/ui/card";

const Contactus = () => {
  return (
    <div className="flex justify-evenly">
      <img
        src={"/contactus.jpg"}
        alt="Image"
        className="rounded-xl"
        width={900}
        height={400}
      />
      <div className="bg-#202020 flex justify-center items-center ">
        <Card></Card>
      </div>
    </div>
  );
};

export default Contactus;
