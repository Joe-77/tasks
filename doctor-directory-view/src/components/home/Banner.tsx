export default function Banner() {
  return (
    <div className="w-full min-h-[80vh] bg-fixed bg-cover bg-no-repeat bg-center bg-[url('/doctors.jpg')] relative flex items-center">
      <div className="text-white container mx-auto px-4 md:px-0 lg:w-[85%] relative z-20 text-xl select-none">
        <span>Healthcare for a better life for you</span>
      </div>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/80"></div>
    </div>
  );
}
