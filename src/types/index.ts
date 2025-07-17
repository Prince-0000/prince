//Social Links
export interface SocialLink {
  icon: string
  link: string
}

//Dashboard section
export interface DashboardData {
  introText: string
  mainName: string
  typewriterWords: string[]
  tagline: string
  socialLinks: SocialLink[]
}

//About section
export interface AboutData {
  sectionTitle: string;
  heading: string;
  introParagraphs: string[];
  image: any;
}