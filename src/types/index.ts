export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
}