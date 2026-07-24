import { dj } from '@/lib/constants'

type BrandMarkProps = {
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export function BrandMark({ tone = 'dark', size = 'md' }: BrandMarkProps) {
  const isLight = tone === 'light'
  const markSize = size === 'lg' ? 'h-14 w-14 text-2xl' : size === 'sm' ? 'h-10 w-10 text-lg' : 'h-12 w-12 text-xl'
  const nameSize = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-xl' : 'text-2xl'

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${markSize} flex shrink-0 items-center justify-center border-2 border-[#c8a24a] bg-[#c8a24a] font-display font-black leading-none text-[#090909]`}
      >
        DJ
      </div>
      <div className="leading-none">
        <p className={`${nameSize} font-display font-black uppercase tracking-normal ${isLight ? 'text-white' : 'text-[#090909]'}`}>
          Keshafrica
        </p>
        <p className={`mt-1 text-[10px] font-black uppercase tracking-[0.24em] ${isLight ? 'text-[#c8a24a]' : 'text-[#8f6f22]'}`}>
          {dj.brandName}
        </p>
      </div>
    </div>
  )
}
