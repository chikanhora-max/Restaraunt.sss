import { Hero } from "@/components/hero";
import { LuxuryCursor } from "@/components/luxury-cursor";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="noise min-h-screen bg-[#090807]">
      <LuxuryCursor />
      <SiteNav />
      <Hero />
      <section className="relative border-t border-white/10 px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.4fr] md:items-end">
          <p className="text-[9px] uppercase tracking-[.45em] text-[#c9a96a]">01 / The philosophy</p>
          <div>
            <h2 className="font-display text-5xl leading-[.95] tracking-tight text-white md:text-8xl">Old recipes.<br /><em className="text-[#c9a96a]">New memories.</em></h2>
            <p className="mt-10 max-w-xl text-sm leading-7 text-white/45">Handmade pasta, seasonal produce, slow sauces and a cellar chosen with intention. Borcelle is an intimate celebration of Italian craft—quietly dramatic, deeply personal, and always at the table.</p>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 px-6 py-28 text-center md:py-40">
        <p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">The kitchen is waiting</p>
        <h2 className="mx-auto mt-7 max-w-4xl font-display text-5xl leading-none md:text-8xl">Come hungry.<br /><span className="text-white/35">Leave inspired.</span></h2>
      </section>
      <footer className="px-6 py-12 text-center text-[9px] uppercase tracking-[.35em] text-white/30">Osteria Borcelle · A Taste of Genuine Tradition</footer>
    </main>
  );
}
