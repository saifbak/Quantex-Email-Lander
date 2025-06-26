
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Split background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 from-50% to-white to-50%"></div>
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
};

export default Index;
