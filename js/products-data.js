/**
 * Catálogo real de inventario Preventy Healthy (Enero 2025).
 * `price` queda vacío a propósito: edítalo aquí (en Lempiras, solo el número)
 * y el sitio lo mostrará automáticamente. Si lo dejas vacío, el botón dice
 * "Consultar precio por WhatsApp".
 * `image` apunta a una tarjeta ilustrada por categoría; reemplázala por una
 * foto real del producto colocando el archivo en img/productos/ y cambiando la ruta.
 * `available`: pon en `false` cuando se agote un producto. Sigue apareciendo
 * en el catálogo (marcado "Agotado" y al final de los resultados) en vez de
 * desaparecer, para no perder el hallazgo por búsqueda/categoría.
 */

const BRANDS = {
  mercola: { name: "Mercola", tagline: "Ciencia y pureza para tu bienestar" },
  bloom: { name: "Bloom Nutrition", tagline: "Greens y energía natural" },
  hum: { name: "HUM Nutrition", tagline: "Belleza desde adentro" },
  "4life": { name: "4Life", tagline: "Ciencia inmunológica de vanguardia" },
};

// Categorías por objetivo de salud (no por tipo de nutriente): un mismo
// ingrediente puede aparecer en varias, así que cada producto abajo lleva
// un arreglo `categories`, no una sola categoría. El primer valor del
// arreglo es el que se muestra como etiqueta en la tarjeta.
const CATEGORIES = {
  piel: "Belleza y Salud de la Piel",
  deportiva: "Nutrición Deportiva",
  huesos: "Huesos y Articulaciones",
  cerebro: "Cerebro y Memoria",
  celular: "Salud Celular y Mitocondrial",
  desintoxicacion: "Desintoxicación",
  digestiva: "Salud Digestiva",
  energia: "Producción de Energía",
  cardiaca: "Salud Cardíaca",
  inmunologico: "Apoyo Inmunológico",
  metabolica: "Salud Metabólica",
  animo: "Ánimo y Estrés",
  sexual: "Bienestar Sexual",
  sueno: "Salud del Sueño",
  vision: "Salud de la Visión",
};

const PRODUCTS = [
  { id: "mer-01", brand: "mercola", name: "Coral Calcium", categories: ["huesos", "piel"], price: null, available: false, image: "img/productos/coral-calcium.png" },
  { id: "mer-02", brand: "mercola", name: "Vitamin K2", categories: ["huesos"], price: null, available: false, image: "img/productos/vitamin-k2.png" },
  { id: "mer-03", brand: "mercola", name: "Complete Spore Restore", categories: ["digestiva", "metabolica"], price: null, available: false, image: "img/productos/complete-spore-restore.png" },
  { id: "mer-04", brand: "mercola", name: "Niacin Vitamin B3", categories: ["celular"], price: null, available: false, image: "img/productos/niacin-vitamin-b3.png" },
  { id: "mer-05", brand: "mercola", name: "Antarctic Krill Oil", categories: ["cardiaca", "deportiva", "cerebro", "inmunologico", "vision"], price: 1100, available: true, image: "img/productos/antarctic-krill-oil.png" },
  { id: "mer-06", brand: "mercola", name: "Ubiquinol", categories: ["celular", "energia", "cardiaca"], price: 950, available: true, image: "img/productos/ubiquinol.png" },
  { id: "mer-07", brand: "mercola", name: "Liposomal Hyaluronic Acid", categories: ["piel"], price: null, available: false, image: "img/productos/liposomal-hyaluronic-acid.png" },
  { id: "mer-08", brand: "mercola", name: "Astaxanthin", categories: [], price: 1300, available: true, image: "img/productos/astaxanthin.png" },
  { id: "mer-09", brand: "mercola", name: "Vitamin E", categories: ["piel"], price: 990, available: true, image: "img/productos/vitamin-e.png" },
  { id: "mer-10", brand: "mercola", name: "Vitamin D3 & K2", categories: ["huesos", "inmunologico", "piel", "animo", "sexual"], price: 1100, available: true, image: "img/productos/vitamin-d3-k2.png" },
  { id: "mer-11", brand: "mercola", name: "Organic Fermented Turmeric (Cúrcuma)", categories: ["vision"], price: null, available: false, image: "img/productos/organic-turmeric.png" },
  { id: "mer-12", brand: "mercola", name: "Vitamin B Complex con Benfotiamina", categories: ["energia", "animo"], price: 1050, available: true, image: "img/productos/vitamin-b-complex.png" },
  { id: "mer-13", brand: "mercola", name: "Complete Probiotics (Mujer)", categories: ["digestiva", "metabolica"], price: null, available: false, image: "img/productos/complete-probiotics-mujer.png" },
  { id: "mer-14", brand: "mercola", name: "Krill Oil (Mujer)", categories: ["cardiaca", "deportiva", "cerebro", "inmunologico", "vision"], price: null, available: false, image: "img/productos/krill-oil-mujer.png" },
  { id: "mer-15", brand: "mercola", name: "Organic Bone Broth Collagen", categories: ["piel", "huesos", "deportiva"], price: null, available: false, image: "img/productos/organic-bone-broth-collagen.png" },
  { id: "mer-16", brand: "mercola", name: "Magnesium", categories: ["cerebro", "sueno", "sexual", "desintoxicacion"], price: 1150, available: true, image: "img/productos/magnesium.png" },
  { id: "mer-17", brand: "mercola", name: "Liposomal Vitamin C (180)", categories: ["piel", "inmunologico", "deportiva"], price: null, available: false, image: "img/productos/liposomal-vitamin-c-180.png" },
  { id: "mer-18", brand: "mercola", name: "Whole Food Complex (Mujer)", categories: [], price: 1600, available: true, image: "img/productos/whole-food-complex-mujer.png" },
  { id: "mer-19", brand: "mercola", name: "Creatine Monohidrate", categories: ["deportiva"], price: 1300, available: true, image: "img/productos/creatine-monohidrate.png" },
  { id: "mer-20", brand: "mercola", name: "Complete Probiotics (Normal)", categories: ["digestiva", "metabolica"], price: null, available: false, image: "img/productos/complete-probiotics-normal.png" },
  { id: "mer-21", brand: "mercola", name: "Calcium con Vitaminas D3 & K2", categories: ["huesos", "piel", "inmunologico"], price: null, available: false, image: "img/productos/calcium-d3-k2.png" },
  { id: "mer-22", brand: "mercola", name: "Methyl Folate", categories: ["desintoxicacion"], price: 850, available: true, image: "img/productos/methyl-folate.png" },
  { id: "mer-23", brand: "mercola", name: "Silica", categories: ["piel"], price: 900, available: true, image: "img/productos/silica.png" },
  { id: "mer-24", brand: "mercola", name: "Zinc + Selenium", categories: ["sexual"], price: null, available: false, image: "img/productos/zinc-selenium.png" },
  { id: "mer-25", brand: "mercola", name: "Resveratrol", categories: ["piel"], price: null, available: false, image: "img/productos/resveratrol.png" },
  { id: "mer-26", brand: "mercola", name: "Liposomal Vitamin C (60)", categories: ["piel", "inmunologico", "deportiva"], price: 800, available: true, image: "img/productos/liposomal-vitamin-c-60.png" },
  { id: "mer-27", brand: "mercola", name: "Biothin MCT Oil", categories: [], price: null, available: false, image: "img/productos/biothin-mct-oil.png" },
  { id: "mer-28", brand: "mercola", name: "Bone Broth Collagen from Beef", categories: ["piel", "huesos", "deportiva"], price: 1250, available: true, image: "img/productos/bone-broth-collagen-beef.png" },
  { id: "mer-29", brand: "mercola", name: "Collagen Complex", categories: ["piel", "huesos", "deportiva"], price: 1500, available: false, image: "img/productos/collagen-complex.png" },
  { id: "mer-30", brand: "mercola", name: "Whey Protein", categories: ["deportiva"], price: null, available: false, image: "img/productos/whey-protein.png" },
  { id: "mer-31", brand: "mercola", name: "Liposomal Vitamin C Liquid", categories: ["piel", "inmunologico", "deportiva"], price: null, available: false, image: "img/productos/liposomal-vitamin-c-liquid.png" },
  { id: "mer-32", brand: "mercola", name: "Collagen Vainilla", categories: ["piel", "huesos", "deportiva"], price: null, available: true, image: "img/productos/collagen-vainilla.png" },
  { id: "mer-33", brand: "mercola", name: "Testosterone Support", categories: ["sexual"], price: 1150, available: true, image: "img/productos/testosterona.png" },
  { id: "mer-34", brand: "mercola", name: "Organic Apple Cider Vinegar", categories: ["metabolica"], price: 600, available: true, image: "img/productos/apple-cider-vinegar.png" },
  { id: "mer-35", brand: "mercola", name: "L-Carnitine 1000mg", categories: ["deportiva"], price: 900, available: true, image: "img/productos/carnitine-1000mg.png" },

  { id: "blo-01", brand: "bloom", name: "Greens Strawberry Kiwi (60 servicios)", categories: ["digestiva", "metabolica", "energia"], price: null, available: false, image: "img/productos/bloom-greens-strawberry-kiwi-60.png" },
  { id: "blo-02", brand: "bloom", name: "Greens Mango", categories: ["digestiva", "metabolica", "energia"], price: null, available: false, image: "img/productos/bloom-greens-mango.png" },
  { id: "blo-03", brand: "bloom", name: "Greens Strawberry Kiwi (30 servicios)", categories: ["digestiva", "metabolica", "energia"], price: null, available: false, image: "img/productos/bloom-greens-strawberry-kiwi-30.png" },
  { id: "blo-04", brand: "bloom", name: "Matcha (30g)", categories: ["energia"], price: 600, available: true, image: "img/productos/bloom-matcha.png" },

  { id: "hum-01", brand: "hum", name: "B12 Turbo", categories: ["energia"], price: null, available: false, image: "img/productos/hum-b12-turbo.png" },
  { id: "hum-02", brand: "hum", name: "Gomitas De Fibra", categories: ["desintoxicacion", "metabolica"], price: 990, available: true, image: "img/productos/hum-gomitas-de-fibra.png" },
  { id: "hum-03", brand: "hum", name: "Red Carpet Skin & Shiny Hair", categories: ["piel"], price: 1100, available: true, image: "img/productos/hum-red-carpet.png" },
  { id: "hum-04", brand: "hum", name: "SOS PMS + Vitamin B6", categories: ["animo"], price: null, available: false, image: "img/productos/hum-sos-pms.png" },
  { id: "hum-05", brand: "hum", name: "Ashwagandha", categories: ["animo", "sueno", "energia", "sexual"], price: 1200, available: true, image: "img/productos/hum-ashwagandha.png" },
  { id: "hum-06", brand: "hum", name: "Balance Hormonal", categories: ["sexual"], price: 1200, available: true, image: "img/productos/hum-balance-hormonal.png" },
  { id: "hum-07", brand: "hum", name: "Vitamina D3", categories: ["piel", "animo", "sexual"], price: 850, available: true, image: "img/productos/hum-vitamina-d3.png" },
  { id: "hum-08", brand: "hum", name: "Private Party", categories: ["sexual"], price: null, available: false, image: "img/productos/hum-private-party.png" },
  { id: "hum-09", brand: "hum", name: "GLP-1 Booster", categories: ["metabolica"], price: 1300, available: true, image: "img/productos/hum-glp1-booster.png" },

  { id: "life-01", brand: "4life", name: "Transfer Factor Cardio", categories: ["cardiaca"], price: 1500, available: true, image: "img/productos/4life-transfer-factor-cardio.png" },
];

// Ícono por categoría, usado en las tarjetas cuando no hay foto real del producto.
const CATEGORY_ICONS = {
  piel: "sparkle",
  deportiva: "shaker",
  huesos: "cross",
  cerebro: "brain",
  celular: "cell",
  desintoxicacion: "droplet",
  digestiva: "flask",
  energia: "bolt",
  cardiaca: "heart",
  inmunologico: "shield",
  metabolica: "leaf",
  animo: "mood",
  sexual: "flame",
  sueno: "moon",
  vision: "eye",
};
