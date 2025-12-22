
export interface Package {
  id: string;
  title: string;
  price: string;
  category: 'Rafting' | 'Offroad' | 'Camping' | 'Team Building';
  image: string;
  description: string;
  features: string[];
}

export interface TripPlanRequest {
  groupSize: number;
  duration: '1 Day' | '2 Days' | '3 Days';
  interests: string[];
  budget: string;
}
