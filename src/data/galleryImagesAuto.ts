// Dynamic Gallery Image Loader
// Automatically loads images from public/images/gallery/ folders
// Supports .webp, .jpg, .jpeg, .png files
// For before/after pairs, name them: image-name.webp and image-name-before.webp

import type { GalleryImage } from './galleryData';

// Category folder mapping (folder name -> category id)
const categoryFolders = ['ppf', 'ceramic', 'graphene', 'detailing', 'interior', 'exterior', 'wash', 'polishing', 'rust-protection', 'alloy', 'underbody', 'engine-ac', 'headlight', 'restoration'] as const;
type Category = typeof categoryFolders[number];

// Get all gallery images by scanning the public folder at build time
const imageModules = import.meta.glob('/public/images/gallery/**/*.{webp,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default'
});

interface ImageFile {
  path: string;
  url: string;
  filename: string;
  category: Category;
}

function getGalleryImages(): GalleryImage[] {
  const images: GalleryImage[] = [];
  let id = 1;

  // Process each image file
  const files: ImageFile[] = [];

  Object.entries(imageModules).forEach(([path, url]) => {
    let urlString = url as string;
    // Remove /public prefix from URL - public assets are served at root
    urlString = urlString.replace('/public/', '/');
    // Also remove ?url query param if present
    urlString = urlString.replace('?url', '');
    // Extract category from path: /public/images/gallery/engine-ac/image.webp -> engine-ac
    const match = path.match(/\/gallery\/([\w-]+)\/([^/]+)$/);
    if (match) {
      const category = match[1] as Category;
      const filename = match[2];
      if (categoryFolders.includes(category)) {
        files.push({ path, url: urlString, filename, category });
      }
    }
  });

  // Group by category
  const categoryFiles: Record<string, ImageFile[]> = {};
  files.forEach(file => {
    if (!categoryFiles[file.category]) {
      categoryFiles[file.category] = [];
    }
    categoryFiles[file.category].push(file);
  });

  // Process each category and pair before/after images
  Object.entries(categoryFiles).forEach(([category, items]) => {
    const pairs = new Map<string, { before?: string; after?: string }>();

    items.forEach(({ url, filename }) => {
      // Remove extension
      const nameWithoutExt = filename.replace(/\.(webp|jpg|jpeg|png)$/i, '');
      // Check if it's a "before" image
      const isBefore = /-before$|-b4$/i.test(nameWithoutExt);
      // Get base name (remove -before suffix)
      const baseName = isBefore
        ? nameWithoutExt.replace(/-before$|-b4$/i, '')
        : nameWithoutExt;

      if (!pairs.has(baseName)) {
        pairs.set(baseName, {});
      }

      const pair = pairs.get(baseName)!;
      if (isBefore) {
        pair.before = url;
      } else {
        pair.after = url;
      }
    });

    // Create GalleryImage objects from pairs
    pairs.forEach((pair, name) => {
      const mainImage = pair.after || pair.before;
      if (!mainImage) return;

      images.push({
        id: id++,
        src: mainImage,
        before: pair.before && pair.after ? pair.before : undefined,
        alt: formatAltText(name),
        category: category as Category,
      });
    });
  });

  return images;
}

function formatAltText(filename: string): string {
  // Convert file-name to "File Name"
  return filename
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Export the dynamically loaded images
export const dynamicGalleryImages: GalleryImage[] = getGalleryImages();

// Debug: Log the generated images to console
if (typeof window !== 'undefined') {
  console.log('Gallery Images:', dynamicGalleryImages);
}

// Fallback images if no images found in folders
export const fallbackGalleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    before: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
    alt: 'PPF Installation',
    category: 'ppf',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&q=80',
    alt: 'Ceramic Coating',
    category: 'ceramic',
  },
];

// Use dynamic images if available, otherwise fallback
export const autoGalleryImages = dynamicGalleryImages.length > 0
  ? dynamicGalleryImages
  : fallbackGalleryImages;
