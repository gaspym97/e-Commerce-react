function SecondSection() {
  return (
    <>
      <div className="flex justify-evenly">
        <div
          className="bg-red-400 w-full h-96 pt-6 pl-8 flex flex-col text-black"
          style={{
            background:
              "url(https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800)",
          }}
        >
          <span>Shop for</span>
          <span className="text-3xl">Electronics</span>
        </div>
        <div
          className="bg-blue-400 w-full h-96 pt-6 pl-8 flex flex-col bg-cover"
          style={{
            background:
              "url(https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg?cs=srgb&dl=pexels-lisa-fotios-1271940.jpg&fm=jpg)",
          }}
        >
          <span>Shop for</span>
          <span className="text-3xl">Others</span>
        </div>
      </div>
      <div className="border-solid border-red-400 h-90">jhjhh</div>
    </>
  );
}

export default SecondSection;
