import { Food3D } from "@/components/food-3d";
import { Hero } from "@/components/hero";
import { BurgerIntro } from "@/components/burger-intro";
import { LuxuryCursor } from "@/components/luxury-cursor";
import { SiteNav } from "@/components/site-nav";
import { ExperienceLayer } from "@/components/experience-layer";
import { SignatureDish } from "@/components/signature-dish";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <main className="noise min-h-screen bg-black text-white selection:bg-[#d6b26a] selection:text-black">
      <SmoothScroll />
      <BurgerIntro />
      <LuxuryCursor />
      <SiteNav />
      <Hero />
      <Food3D />
      <section className="relative overflow-hidden border-y border-white/10 bg-[#030303] px-6 py-32 md:px-12 md:py-52">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96a]/[.035] blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-[.7fr_1.3fr] md:items-end">
          <p className="text-[9px] uppercase tracking-[.45em] text-[#c9a96a]">03 / The philosophy</p>
          <div><h2 className="font-display text-6xl leading-[.88] md:text-9xl">Old recipes.<br /><em className="text-[#c9a96a]">New memories.</em></h2><p className="mt-10 max-w-xl text-sm leading-8 text-white/45">Handmade pasta, seasonal produce, slow sauces and a cellar chosen with intention. Borcelle is an intimate celebration of Italian craft—quietly dramatic, deeply personal, and always at the table.</p></div>
        </div>
      </section>
      <SignatureDish />
      <section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-28 md:px-12 md:py-44">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div><p className="text-[9px] uppercase tracking-[.45em] text-[#c9a96a]">05 / The cellar</p><h2 className="mt-5 font-display text-5xl leading-none md:text-6xl">Wine with<br /><em className="text-[#c9a96a]">intention.</em></h2></div>
          <div className="md:col-span-2 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-3">
            {[['01','Barolo','2019'],['02','Brunello','2018'],['03','Etna Rosso','2021']].map(([n,name,year]) => <article key={n} className="group bg-[#070707] p-7 transition duration-500 hover:bg-[#0d0d0d]"><span className="text-[8px] text-[#c9a96a]">{n}</span><h3 className="mt-16 font-display text-3xl">{name}</h3><p className="mt-2 text-[9px] uppercase tracking-[.3em] text-white/25">{year} · Piemonte / Italia</p><div className="mt-16 h-px origin-left bg-[#c9a96a]/40 transition-transform duration-700 group-hover:scale-x-150" /></article>)}
          </div>
        </div>
      </section>
      <section className="border-b border-white/10 bg-black px-6 py-28 text-center md:py-44"><p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">The kitchen is waiting</p><h2 className="mx-auto mt-7 max-w-5xl font-display text-6xl leading-[.85] md:text-[8rem]">Come hungry.<br /><span className="text-white/30">Leave inspired.</span></h2><a href="/reservations" className="mt-12 inline-flex rounded-full border border-[#d6b26a]/50 px-8 py-4 text-[9px] uppercase tracking-[.35em] text-[#ead19a] transition hover:bg-[#ead19a] hover:text-black">Reserve your table</a></section>
      <ExperienceLayer />
      <footer className="bg-black px-6 py-20 md:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><p className="font-display text-4xl">Osteria <span className="text-[#c9a96a]">Borcelle</span></p><p className="mt-3 text-[9px] uppercase tracking-[.4em] text-white/25">A Taste of Genuine Tradition.</p></div><div className="flex gap-8 text-[9px] uppercase tracking-[.3em] text-white/35"><a className="hover:text-[#ead19a]" href="#">Instagram</a><a className="hover:text-[#ead19a]" href="#">TikTok</a><a className="hover:text-[#ead19a]" href="/contact">Contact</a></div></div></footer>
    </main>
  );
}
