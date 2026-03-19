import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-[5%] md:px-[8%]">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1300px] mx-auto">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-teal-dark text-[0.78rem] font-semibold tracking-[3px] uppercase mb-5 before:content-[''] before:w-[30px] before:h-[2px] before:bg-teal">
              About Wisdom Era
            </div>
            <h2 className="text-[clamp(2.2rem,3.5vw,3.2rem)] text-navy leading-[1.15] mb-6">
              Not just investors.<br />
              True <em className="font-serif text-teal">co-founders</em>.
            </h2>
            <p className="text-text-muted text-[1.02rem] leading-[1.8] mb-5">
              Wisdom Era is a tech holding company that invests in and backs early-stage startups
              applying AI to real-world industries — especially e-commerce and agriculture.
            </p>
            <p className="text-text-muted text-[1.02rem] leading-[1.8] mb-5">
              We partner with founders from day one and stay deeply involved long term — across
              product, technology, talent, and strategy. Our role goes beyond capital: we actively
              engage with companies, share infrastructure and insights, and compound experience
              across the group.
            </p>
            <p className="text-text-muted text-[1.02rem] leading-[1.8]">
              What sets us apart is focus: we back practical innovation where it compounds in the
              real economy.
            </p>
          </div>

          {/* Card */}
          <div className="relative">
            <div className="bg-navy rounded-[20px] p-12 text-white relative overflow-hidden">
              <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_70%_30%,rgba(104,197,178,0.12)_0%,transparent_60%)]" />
              <div className="grid grid-cols-2 gap-8 relative z-[1]">
                {[
                  { value: "4", label: "Portfolio Companies" },
                  { value: "2", label: "Core Sectors" },
                  { value: "AI", label: "First Approach" },
                  { value: "MENA", label: "Primary Market" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-[2.8rem] font-bold text-teal leading-none mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[0.82rem] text-white/60 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-[1] mt-10 pt-8 border-t border-white/10">
                <p className="font-serif italic text-[1.1rem] leading-relaxed text-white/85">
                  &ldquo;AI is not just another wave, it is the wave. We see AI not as a passing
                  trend but as a structural shift.&rdquo;
                </p>
                <cite className="block mt-4 not-italic text-[0.85rem] text-teal font-semibold">
                  — Vahid Shirazi, Co-founder &amp; CEO
                </cite>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
