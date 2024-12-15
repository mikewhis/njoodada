// src/types.ts

// Define the structure of a StatType
export interface StatType {
    _id: string; // Unique identifier for the stat
    value: number; // The numerical value of the stat
    label: string; // A label describing the stat
  }
  
  // Define the structure of a PartnerType
  export interface PartnerType {
    _id: string; // Unique identifier for the partner
    name: string; // Name of the partner organization
    website: string; // URL of the partner's website
    logo: string; // URL of the partner's logo image
  }