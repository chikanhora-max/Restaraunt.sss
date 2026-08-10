import { Food3D } from "@/components/food-3d";
import { Hero } from "@/components/hero";
import { BurgerIntro } from "@/components/burger-intro";
import { LuxuryCursor } from "@/components/luxury-cursor";
import { SiteNav } from "@/components/site-nav";

const dishes = [
  ["01", "Tagliatelle al Ragù", "Hand-cut pasta · 36h ragù · Parmigiano", "€24"],
  ["02", "Branzino alla Brace", "Wild sea bass · lemon · olive oil", "€32"],
  ["03", "Tiramisù Borcelle", "Mascarpone · espresso · cacao", "€14"],
];

export default function Home() {
  return (
    <main className="noise min-h-screen bg-black">
      <BurgerIntro />
      <LuxuryCursor />
      <SiteNav />
      <Hero />
      <Food3D />

      <section className="relative overflow-hidden border-y border-white/10 bg-[#030303] px-6 py-32 md:px-12 md:py-52">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96a]/[.035] blur-[100px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-20 flex items-end justify-between border-b border-white/10 pb-8">
            <div><p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">03 / The menu</p><h2 className="mt-5 font-display text-6xl md:text-9xl">A little <em className="text-[#c9a96a]">obsession.</em></h2></div>
            <span className="hidden text-[9px] uppercase tracking-[.4em] text-white/30 md:block">Seasonal · Handmade · Italian</span>
          </div>
          <div className="divide-y divide-white/10">
            {dishes.map(([num,name,desc,price])=><article key={num} className="luxury-card group grid gap-5 py-10 transition-transform duration-700 hover:translate-x-2 md:grid-cols-[70px_1fr_auto] md:items-center" onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--my',`${e.clientY-r.top}px`)}}>
              <span className="text-[9px] tracking-[.35em] text-white/25">{num}</span><div><h3 className="font-display text-3xl text-white transition-colors duration-500 group-hover:text-[#ead19a] md:text-5xl">{name}</h3><p className="mt-3 text-xs uppercase tracking-[.18em] text-white/35">{desc}</p></div><span className="font-display text-xl text-[#c9a96a]">{price}</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] overflow-hidden border-b border-white/10 bg-black px-6 py-32 md:px-12 md:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,169,106,.08),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div><p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">04 / The philosophy</p><p className="mt-8 max-w-sm text-xs uppercase leading-7 tracking-[.18em] text-white/35">Ingredient first. Fire second. Everything else is theatre.</p></div>
          <div><h2 className="font-display text-6xl leading-[.88] tracking-tight md:text-[8rem]">Old recipes.<br /><em className="text-[#c9a96a]">New memories.</em></h2><p className="mt-10 max-w-xl text-sm leading-8 text-white/45">Handmade pasta, seasonal produce, slow sauces and a cellar chosen with intention. Borcelle is an intimate celebration of Italian craft—quietly dramatic, deeply personal, and always at the table.</p></div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050505] px-6 py-28 md:px-12 md:py-44"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3"><div><p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">05 / Tonight</p><h2 className="mt-6 font-display text-5xl md:text-7xl">Your table<br /><em className="text-white/35">is waiting.</em></h2></div><div className="md:col-span-2 grid gap-4 md:grid-cols-2"><button className="magnetic shine glass rounded-full px-8 py-5 text-[10px] uppercase tracking-[.35em] text-[#ead19a]">Reserve a table</button><button className="magnetic rounded-full border border-white/15 px-8 py-5 text-[10px] uppercase tracking-[.35em] text-white/55 hover:border-[#c9a96a]/60 hover:text-white">Explore the cellar</button></div></div></section>

      <footer className="bg-black px-6 py-20 md:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><p className="font-display text-4xl">Osteria Borcelle</p><p className="mt-3 text-[9px] uppercase tracking-[.4em] text-white/25">A Taste of Genuine Tradition.</p></div><div className="flex gap-8 text-[9px] uppercase tracking-[.3em] text-white/35"><a className="hover:text-[#ead19a]" href="#">Instagram</a><a className="hover:text-[#ead19a]" href="#">TikTok</a><a className="hover:text-[#ead19a]" href="#">Contact</a></div></div></footer>
    </main>
  );
}
