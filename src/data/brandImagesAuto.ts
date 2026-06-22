// Static Brand Image List with all brands from public/brands
// Map of brand filenames to their website links
const brandLinks: Record<string, string> = {
  '3m.jpeg': 'https://www.3mindia.in/3M/en_IN/company-in/',
  'Menzerna.jpeg': 'https://www.menzerna.com/',
  'carpro.jpeg': 'https://carpro.global/',
  'gtechiqe.jpeg': 'https://www.gtechniq.com/',
  'karcher.jpeg': 'https://www.kaercher.com/in/',
  'llumar.jpeg': 'https://www.llumar.com/',
  'ma fra.jpeg': 'https://www.mafraindia.com/',
  'norton.jpeg': 'https://www.nortonabrasives.com/',
  'rupes.jpeg': 'https://www.rupes.com/',
  'wurth.jpeg': 'https://www.wuerth.com/',
  'Tint-Orange-Logo.png': 'https://tintandorange.com/',
  'annovi-reverberi.png': 'https://www.annovireverberi.it/en/' ,
  'bigfoot.jpeg': 'https://www.bigfootdetailing.co.za/',
  'chemical-guys.png': 'https://www.chemicalguys.com/',
  'narppf.png': 'https://www.narppf.com/',
  'megquires.jpeg': 'https://www.meguiars.com/#/',
  'GSWF.webp': '#',
  'Malco.jpeg': 'https://www.malcoproducts.com/',
  'Puris.webp': '#',
  'Quanta.webp': '#',
  'Sehool.webp': '#',
  'maxshine.png': 'https://www.maxshineus.com/',
  'rodim.png': '#',
  'stek.webp': 'https://stekautomotive.com/',
  'xpel.png': 'https://www.xpel.com/'
};

interface BrandImage {
  name: string;
  file: string;
  url: string;
  link?: string;
}

// All brands from public/brands folder
const allBrands: BrandImage[] = [
  { name: '3M', file: '3m.jpeg', url: '/brands/3m.jpeg', link: brandLinks['3m.jpeg'] },
  { name: 'Annovi Reverberi', file: 'annovi-reverberi.png', url: '/brands/annovi-reverberi.png', link: brandLinks['annovi-reverberi.png'] },
  { name: 'Bigfoot', file: 'bigfoot.jpeg', url: '/brands/bigfoot.jpeg', link: brandLinks['bigfoot.jpeg'] },
  { name: 'CarPro', file: 'carpro.jpeg', url: '/brands/carpro.jpeg', link: brandLinks['carpro.jpeg'] },
  { name: 'Chemical Guys', file: 'chemical-guys.png', url: '/brands/chemical-guys.png', link: brandLinks['chemical-guys.png'] },
  { name: 'Gtechniq', file: 'gtechiqe.jpeg', url: '/brands/gtechiqe.jpeg', link: brandLinks['gtechiqe.jpeg'] },
  { name: 'GSWF', file: 'GSWF.webp', url: '/brands/GSWF.webp', link: brandLinks['GSWF.webp'] },
  { name: 'Kärcher', file: 'karcher.jpeg', url: '/brands/karcher.jpeg', link: brandLinks['karcher.jpeg'] },
  { name: 'LLumar', file: 'llumar.jpeg', url: '/brands/llumar.jpeg', link: brandLinks['llumar.jpeg'] },
  { name: 'Ma Fra', file: 'ma fra.jpeg', url: '/brands/ma fra.jpeg', link: brandLinks['ma fra.jpeg'] },
  { name: 'Malco', file: 'Malco.jpeg', url: '/brands/Malco.jpeg', link: brandLinks['Malco.jpeg'] },
  { name: 'Maxshine', file: 'maxshine.png', url: '/brands/maxshine.png', link: brandLinks['maxshine.png'] },
  { name: 'Menzerna', file: 'Menzerna.jpeg', url: '/brands/Menzerna.jpeg', link: brandLinks['Menzerna.jpeg'] },
  { name: 'NAR PPF', file: 'narppf.png', url: '/brands/narppf.png', link: brandLinks['narppf.png'] },
  { name: 'Norton', file: 'norton.jpeg', url: '/brands/norton.jpeg', link: brandLinks['norton.jpeg'] },
  { name: 'Puris', file: 'Puris.webp', url: '/brands/Puris.webp', link: brandLinks['Puris.webp'] },
  { name: 'Quanta', file: 'Quanta.webp', url: '/brands/Quanta.webp', link: brandLinks['Quanta.webp'] },
  { name: 'Rodim', file: 'rodim.png', url: '/brands/rodim.png', link: brandLinks['rodim.png'] },
  { name: 'Rupes', file: 'rupes.jpeg', url: '/brands/rupes.jpeg', link: brandLinks['rupes.jpeg'] },
  { name: 'Sehool', file: 'Sehool.webp', url: '/brands/Sehool.webp', link: brandLinks['Sehool.webp'] },
  { name: 'Stek', file: 'stek.webp', url: '/brands/stek.webp', link: brandLinks['stek.webp'] },
  { name: 'Tint Orange', file: 'Tint-Orange-Logo.png', url: '/brands/Tint-Orange-Logo.png', link: brandLinks['Tint-Orange-Logo.png'] },
  { name: 'Würth', file: 'wurth.jpeg', url: '/brands/wurth.jpeg', link: brandLinks['wurth.jpeg'] },
  { name: 'XPEL', file: 'xpel.png', url: '/brands/xpel.png', link: brandLinks['xpel.png'] },
  { name: 'Megquires', file: 'megquires.jpeg', url: '/brands/megquires.jpeg', link: brandLinks['megquires.jpeg'] },
];

// Sort brands alphabetically by name
allBrands.sort((a, b) => a.name.localeCompare(b.name));

export const brandImages = allBrands;

// Keep dynamic and fallback for compatibility but use static list
export const dynamicBrandImages: BrandImage[] = allBrands;
export const fallbackBrandImages: BrandImage[] = allBrands;
