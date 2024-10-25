import Image from "next/image";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";

export function Mockups() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText>Powerful Tools for Every Platform</GradientText>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Experience seamless booking management across all devices with our beautifully designed mobile app and admin dashboard.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-r from-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <GlassCard className="relative overflow-hidden p-2">
              <Image
                src="https://images.unsplash.com/photo-1616469829581-73993eb86b02"
                alt="Mobile App Interface"
                width={500}
                height={900}
                className="rounded-xl w-full transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Mobile App</h3>
                  <p className="text-white/80">Book appointments on the go with our intuitive mobile interface</p>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-r from-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <GlassCard className="relative overflow-hidden p-2">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Admin Dashboard"
                width={600}
                height={400}
                className="rounded-xl w-full transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Admin Dashboard</h3>
                  <p className="text-white/80">Powerful tools to manage your business efficiently</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}