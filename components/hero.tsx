import { dj } from '@/lib/constants'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#f7f4ed] text-[#111111]"
    >
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#090909] sm:h-[38%] lg:h-[40%]" />
      <div className="absolute left-0 top-0 h-full w-[18px] bg-[#c8a24a] sm:w-[28px]" />
      <div className="absolute right-0 top-0 h-2/3 w-[1px] bg-[#c8a24a]/50" />
      <div className="absolute right-8 top-28 hidden h-40 w-40 rounded-full border border-[#c8a24a]/40 lg:block" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-10 pt-24 sm:px-8 lg:px-12">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl text-left lg:-translate-y-8">
            <div className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.32em] text-[#8f6f22]">
              <span className="h-px w-12 bg-[#c8a24a]" />
              Accra's nightlife sound
            </div>

            <h1 className="font-display text-[clamp(3.8rem,12vw,9rem)] font-black uppercase leading-[0.84] text-[#090909]">
              DJ
              <span className="block whitespace-nowrap text-[#c8a24a]">KESH AFRICA</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-[#333333] sm:text-lg">
              {dj.subline} - commercial DJ, party architect, and the sound behind premium
              nightlife moments across Ghana.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-fit sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center border-2 border-[#c8a24a] bg-[#090909] px-7 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_14px_35px_rgba(9,9,9,0.22)] transition-colors hover:bg-[#c8a24a] hover:text-[#090909]"
              >
                Book DJ KESH AFRICA
              </a>
              <a
                href="https://audiomack.com/djkeshafrica/song/we-outside?share-user-id=23213730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border-2 border-[#090909] bg-[#f7f4ed] px-7 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-[#090909] transition-colors hover:border-[#c8a24a] hover:bg-[#c8a24a] hover:text-[#090909]"
              >
                Listen To Mixes
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -left-4 top-8 h-full w-full border-2 border-[#c8a24a]" />
            <div className="relative overflow-hidden bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#c8a24a]/20" />
              <Image
                src={dj.profileImage}
                alt={dj.name}
                width={900}
                height={1100}
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="relative z-10 h-[420px] w-full object-cover object-center grayscale contrast-110 sm:h-[520px] lg:h-[650px]"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#090909] via-[#090909]/72 to-transparent px-5 pb-5 pt-24">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c8a24a]">
                      {dj.fullTagline}
                    </p>
                    <p className="mt-2 text-2xl font-black uppercase tracking-[0.12em] text-white">
                      Premium DJ Sets
                    </p>
                  </div>
                  <Image
                    src="/stupid-muzik-logo.svg"
                    alt="STUPID MUZIK TO THE WIASE"
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 grid gap-3 border-t border-[#c8a24a]/35 pt-5 text-white sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#c8a24a]">
              Based In
            </p>
            <p className="mt-1 text-sm font-bold">{dj.location}</p>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#c8a24a]">
              Sound
            </p>
            <p className="mt-1 text-sm font-bold">Afrobeats, Amapiano, Hip-Hop, Club</p>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#c8a24a]">
              Brand
            </p>
            <p className="mt-1 text-sm font-bold">{dj.brandName}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
