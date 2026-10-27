// ES Module Imports for bundling by Vite
import heroWireMeshImg from '../assets/images/hero_stainless_wire_mesh_1790693822229.jpg';
import manufacturingPressImg from '../assets/images/manufacturing_press_cutting_1790693837351.jpg';

// Dedicated individual product photography
import stainlessWireMeshRollsImg from '../assets/images/stainless_wire_mesh_rolls_1790709329146.jpg';
import weldedMeshFilterScreenImg from '../assets/images/welded_wire_mesh_screen.jpeg';
import spinPackFilterImg from '../assets/images/spin_pack_filter.jpeg';

import {
  BUSINESS_CONFIG,
  DISPLAY_PHONE,
  GOOGLE_MAPS_URL,
  TEL_URL,
} from '../config/businessConfig';

export const SITE_IMAGES = {
  hero: heroWireMeshImg,
  manufacturing: manufacturingPressImg,
  // 3 dedicated product images
  stainlessSteelWireMesh: stainlessWireMeshRollsImg,
  wireMeshFilterWeldedScreen: weldedMeshFilterScreenImg,
  spinPackFilter: spinPackFilterImg,
};

export const COMPANY_INFO = {
  name: BUSINESS_CONFIG.companyName,
  businessType: 'Woven industrial wire mesh manufacturer and supplier',
  tagline: 'Precision Wire Mesh Solutions for Industrial Applications',
  kicker: 'Woven Industrial Wire Mesh Manufacturer & Supplier',
  subheadline:
    'Manufacturer and supplier of stainless steel wire mesh, wire mesh filter welded screens, and spin pack filters.',
  address: {
    name: BUSINESS_CONFIG.companyName,
    line1: 'PR 504, Vishwajeet Meadows',
    line2: 'Bacbin Road, Ambernath (E)',
    line3: 'Thane - 421 501',
    line4: 'Maharashtra, India',
    fullFormatted: BUSINESS_CONFIG.address,
    googleMapsUrl: GOOGLE_MAPS_URL,
  },
  email: BUSINESS_CONFIG.email,
  phone: BUSINESS_CONFIG.phone,
  displayPhone: DISPLAY_PHONE,
  telUrl: TEL_URL,
  whatsapp: BUSINESS_CONFIG.whatsapp,
  aboutText:
    'Makovi Tech is a specialized wire mesh products manufacturer and supplier focusing on stainless steel wire mesh, wire mesh filter welded screens, and spin pack filters.',
  manufacturingText:
    'The company operates its own manufacturing facility equipped with wire mesh press cutting machines and different sizes of cutting dies to produce exact-size diameter mesh components, circular filters, welded screens, and related wire mesh products.',
};

export type ProductCategory =
  | 'All Products'
  | 'Woven Mesh & Screens'
  | 'Filtration Components';

export interface ProductDetail {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  description: string;
  applications: string[];
  image: string;
  schematicType: 'mesh-roll' | 'screen-grid' | 'welded-filter' | 'gasket-ring' | 'spin-pack';
}

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'stainless-steel-wire-mesh',
    code: '01',
    name: 'Stainless Steel Wire Mesh',
    category: 'Woven Mesh & Screens',
    description:
      'High-grade woven stainless steel wire mesh manufactured for industrial screening, filtering, and demanding chemical and pharmaceutical environments.',
    applications: ['Plastics & Chemical', 'Filtering', 'Pharmaceutical'],
    image: SITE_IMAGES.stainlessSteelWireMesh,
    schematicType: 'mesh-roll',
  },
  {
    id: 'wire-mesh-filter-welded-screen',
    code: '02',
    name: 'Wire Mesh Filter Welded Screen',
    category: 'Filtration Components',
    description:
      'Welded wire mesh filter elements and screen cylinders designed for structural rigidity and solid-liquid separation in fluid and gas processing.',
    applications: ['Plastics & Chemical', 'Filtering', 'Food Processing'],
    image: SITE_IMAGES.wireMeshFilterWeldedScreen,
    schematicType: 'welded-filter',
  },
  {
    id: 'spin-pack-filter',
    code: '03',
    name: 'Spin Pack Filter',
    category: 'Filtration Components',
    description:
      'Precision wire mesh spin pack filters with rimmed circular construction configured for polymer extrusion and synthetic fiber filtration applications.',
    applications: ['Plastics & Chemical', 'Filtering'],
    image: SITE_IMAGES.spinPackFilter,
    schematicType: 'spin-pack',
  },
];

export interface IndustryApplicationItem {
  id: string;
  code: string;
  name: string;
  description: string;
  appliedProducts: string;
  iconName: string;
}

export const INDUSTRIES: IndustryApplicationItem[] = [
  {
    id: 'plastics-chemical',
    code: '01',
    name: 'Plastics & Chemical',
    description:
      'Spin pack filters, wire mesh filter welded screens, and stainless steel wire mesh applied in polymer processing and chemical filtration.',
    appliedProducts: 'Spin Pack Filters · Welded Screens · Woven Mesh',
    iconName: 'Layers',
  },
  {
    id: 'pharmaceutical',
    code: '02',
    name: 'Pharmaceutical',
    description:
      'Sanitary grade stainless steel wire mesh and precision filters utilized in pharmaceutical separation and active ingredient filtration.',
    appliedProducts: 'Stainless Steel Wire Mesh · Wire Mesh Filters',
    iconName: 'ShieldCheck',
  },
  {
    id: 'food-processing',
    code: '03',
    name: 'Food Processing',
    description:
      'Stainless steel wire mesh and wire mesh filter screens applied across food screening, liquid separation, and grading systems.',
    appliedProducts: 'Stainless Steel Wire Mesh · Wire Mesh Filter Welded Screens',
    iconName: 'UtensilsCrossed',
  },
];

export const MANUFACTURING_STEPS = [
  {
    step: 'STEP 01',
    title: 'Woven Wire Mesh Selection',
    description: 'Precision stainless steel woven wire mesh prepared for cutting, forming, and welding.',
  },
  {
    step: 'STEP 02',
    title: 'Press Tooling & Cutting',
    description: 'Specialized press cutting machinery utilizing multi-size circular cutting dies for exact dimensions.',
  },
  {
    step: 'STEP 03',
    title: 'Finished Components',
    description: 'Precision stainless steel wire mesh, welded filter screens, and spin pack filters.',
  },
];

export const MANUFACTURING_CAPABILITIES = [
  {
    code: '01',
    title: 'Press Cutting Capability',
    description:
      'In-house wire mesh press cutting machines engineered for clean, burr-free cuts across single and multi-layer woven mesh.',
  },
  {
    code: '02',
    title: 'Different Cutting Die Sizes',
    description:
      'Comprehensive inventory of circular cutting dies enabling quick setup and fabrication of varied diameter specifications.',
  },
  {
    code: '03',
    title: 'Exact-Size Diameter Components',
    description:
      'Precision dimensional consistency ensuring exact fitment into filter housings, assemblies, and process equipment.',
  },
  {
    code: '04',
    title: 'Wire Mesh Filter Fabrication',
    description:
      'Welded wire mesh screen assemblies and spin pack filters produced for continuous industrial fluid and polymer filtration.',
  },
  {
    code: '05',
    title: 'Spin Pack Assembly',
    description:
      'Precision rimming and multi-layer disc assembly for spin pack filters tailored for polymer extrusion and synthetic fiber filtration.',
  },
];

export const BENTO_VALUE_PROPOSITIONS = [
  {
    code: '01',
    span: 'col-span-1 md:col-span-3',
    title: 'Specialized Wire Mesh Products',
    description:
      'Focused manufacturing of stainless steel wire mesh, wire mesh filter welded screens, and spin pack filters.',
    metricLabel: 'Product Specialization',
    metricValue: '3 Core Product Lines',
  },
  {
    code: '02',
    span: 'col-span-1 md:col-span-3',
    title: 'Precision Cut Components',
    description:
      'Equipped with wire mesh press cutting machines and modular circular dies to produce exact-size diameter screen components and filters.',
    metricLabel: 'In-House Tooling',
    metricValue: 'Multi-Size Dies',
  },
  {
    code: '03',
    span: 'col-span-1 md:col-span-2',
    title: 'Multiple Industrial Applications',
    description:
      'Products engineered and applied across plastics & chemical, pharmaceutical, food processing, and filtration sectors.',
    metricLabel: 'Sectors Served',
    metricValue: 'Industrial Sectors',
  },
  {
    code: '04',
    span: 'col-span-1 md:col-span-2',
    title: 'Dedicated Manufacturing Facility',
    description:
      'Own facility in Ambernath (E), Thane, Maharashtra equipped with machinery for direct manufacturing and reliable B2B supply.',
    metricLabel: 'Plant Location',
    metricValue: 'Ambernath (E), Thane',
  },
  {
    code: '05',
    span: 'col-span-1 md:col-span-2',
    title: 'Industrial Filtration Solutions',
    description:
      'Practical, rugged welded screen filters, spin pack filters, and stainless steel wire mesh built for demanding plant operations.',
    metricLabel: 'Application Focus',
    metricValue: 'Filtration & Separation',
  },
];
