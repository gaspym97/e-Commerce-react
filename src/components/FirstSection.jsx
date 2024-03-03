import React from "react";

function FirstSection() {
  return (
    <>
      <div className="flex justify-evenly h-12 items-center">
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
      </div>

      <div className="h-screen border border-solid border-red-600">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url(https://images8.alphacoders.com/117/1174099.jpg)",
          }}
        >
        </div>
      </div>

      <div className="h-96 flex items-end justify-center border-solid border border-blue-700">
        <h1 className="text-2xl">View All Categories</h1>
      </div>
    </>
  );
}

export default FirstSection;
