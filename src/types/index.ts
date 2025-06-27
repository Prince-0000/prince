export interface SocialLink {
  icon: string
  link: string
}

export interface DashboardData {
  introText: string
  mainName: string
  typewriterWords: string[]
  tagline: string
  socialLinks: SocialLink[]
}