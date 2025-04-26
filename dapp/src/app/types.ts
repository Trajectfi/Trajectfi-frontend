// src/app/my_assets/types.ts
import type { StaticImageData } from 'next/image';

export interface Collection {
  id: string;
  name: string;
  selected: boolean;
  icon: StaticImageData;
}

export interface NFT {
  id: string;
  name: string;
  collectionName: string;
  status: 'Listed' | 'Unlisted' | 'Escrow';
  image: StaticImageData;
  collectionTag: string;
}