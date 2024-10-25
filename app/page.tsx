import { Hero } from "@/components/sections/hero";
import { Mockups } from "@/components/sections/mockups";
import { Calendar, BarChart3, Users, Clock, Shield, Smartphone, ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-black">
      <Hero />
      <Mockups />

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <GradientText>Everything You Need to Succeed</GradientText>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calendar className="w-12 h-12" />}
              title="Smart Scheduling"
              description="Intelligent booking system that prevents double bookings and optimizes your calendar automatically."
            />
            <FeatureCard 
              icon={<Smartphone className="w-12 h-12" />}
              title="Mobile App"
              description="Give your customers the freedom to book appointments anytime, anywhere with our intuitive mobile app."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-12 h-12" />}
              title="Advanced Analytics"
              description="Gain valuable insights into your business performance with detailed reports and analytics."
            />
            <FeatureCard 
              icon={<Users className="w-12 h-12" />}
              title="Customer Management"
              description="Build stronger relationships with integrated CRM features and customer profiles."
            />
            <FeatureCard 
              icon={<Clock className="w-12 h-12" />}
              title="24/7 Booking"
              description="Never miss an opportunity with round-the-clock automated booking capabilities."
            />
            <FeatureCard 
              icon={<Shield className="w-12 h-12" />}
              title="Secure & Reliable"
              description="Enterprise-grade security ensuring your data and customer information stays protected."
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-32 relative">
        <div className="container relative mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <GradientText>Perfect for Every Business</GradientText>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <IndustryCard icon={<Store />} title="Barbershops" />
            <IndustryCard icon={<Store />} title="Beauty Salons" />
            <IndustryCard icon={<Store />} title="Fitness Studios" />
            <IndustryCard icon={<Store />} title="Medical Clinics" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="container relative mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <GradientText>Simple, Transparent Pricing</GradientText>
          </h2>
          <p className="text-xl text-white/60 text-center mb-20 max-w-2xl mx-auto">
            Boost your revenue by up to 5% with our intelligent booking system
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="group bg-primary/90 hover:bg-primary/80 backdrop-blur-sm text-lg h-14 px-8">
              Book a Live Demo
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <GlassCard className="max-w-4xl mx-auto py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText>Ready to Transform Your Business?</GradientText>
            </h2>
            <p className="text-xl mb-12 text-white/60 max-w-2xl mx-auto">
              Join thousands of businesses that trust RESVLY to manage their bookings and grow their revenue.
            </p>
            <Button size="lg" className="group bg-primary/90 hover:bg-primary/80 backdrop-blur-sm text-lg h-14 px-8">
              Book a Live Demo
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <GlassCard glowEffect className="group">
      <div className="mb-6 relative">
        <div className="absolute -inset-2 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative text-primary">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold mb-4">
        <GradientText>{title}</GradientText>
      </h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </GlassCard>
  );
}

function IndustryCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <GlassCard glowEffect className="group text-center py-8">
      <div className="mb-4 flex justify-center relative">
        <div className="absolute -inset-2 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative text-primary w-12 h-12">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold">
        <GradientText>{title}</GradientText>
      </h3>
    </GlassCard>
  );
}