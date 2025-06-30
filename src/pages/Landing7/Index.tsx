
import Hero from "@/components/Hero7";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Split background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A335A] from-50% to-white to-50%"></div>
      <div className="relative z-10">
        <div className="hidden md:flex absolute w-full h-2.5 top-1/2 mt-7 -translate-y-1/2 bg-gradient-to-r from-purple-500 via-blue-400 to-yellow-400  items-center justify-center"></div>
        <Hero />
      </div>
    </div>
  );
};

export default Index;
