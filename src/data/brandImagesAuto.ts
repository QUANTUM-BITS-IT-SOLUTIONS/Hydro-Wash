// Dynamic Brand Image Loader
// Automatically loads images from public/brands/ folder
// Supports .webp, .jpg, .jpeg, .png files

// Get all brand images by scanning the public folder at build time
const imageModules = import.meta.glob('/public/brands/**/*.{webp,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default'
});

interface BrandImage {
  name: string;
  file: string;
  url: string;
}

function getBrandImages(): BrandImage[] {
  const brands: BrandImage[] = [];

  Object.entries(imageModules).forEach(([path, url]) => {
    let urlString = url as string;
    // Remove /public prefix from URL - public assets are served at root
    urlString = urlString.replace('/public/', '/');
    // Also remove ?url query param if present
    urlString = urlString.replace('?url', '');
    
    // Extract filename from path: /public/brands/3m.jpeg -> 3m.jpeg
    const match = path.match(/\/brands\/([^/]+)$/);
    if (match) {
      const filename = match[1];
      // Generate brand name from filename (remove extension and format)
      const name = filename
        .replace(/\.(webp|jpg|jpeg|png)$/i, '')
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      
      brands.push({
        name,
        file: filename,
        url: urlString
      });
    }
  });

  // Sort brands alphabetically by name
  brands.sort((a, b) => a.name.localeCompare(b.name));

  return brands;
}

// Export the dynamically loaded brand images
export const dynamicBrandImages: BrandImage[] = getBrandImages();

// Debug: Log the generated brands to console
if (typeof window !== 'undefined') {
  console.log('Brand Images:', dynamicBrandImages);
}
