// Testimonials removed per regulatory and compliance guidelines.
export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  earningsText?: string;
  comment: Record<string, string>;
}

export const REVIEWS: Review[] = [];
