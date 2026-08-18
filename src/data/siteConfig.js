// Central organization details, sourced from MKO's website proposal.
// TODO(content): confirm the exact street address once the office location is finalized.
export const siteConfig = {
  name: "Targeted Women's Organization",
  shortName: 'MKO',
  tagline: 'Empowering Women. Inspiring Youth. Building Stronger Communities.',
  motto: 'Together we build stronger women, empower youth, and create stronger communities.',
  url: 'https://www.mko.se',
  email: 'info@mko.se',
  phone: '+46 70 123 45 67',
  address: {
    line1: '[Street Address]',
    line2: 'Kristinehamn, Värmland County, Sweden',
  },
  officeHours: [
    { days: 'Monday – Friday', hours: '09:00 – 17:00' },
    { days: 'Saturday', hours: '10:00 – 14:00' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  social: {
    facebook: 'https://facebook.com/mko',
    instagram: 'https://instagram.com/mko',
    linkedin: 'https://linkedin.com/company/mko',
    twitter: 'https://twitter.com/mko',
  },
  // TODO(backend): replace with an embed centered on the confirmed office address
  mapEmbedUrl: 'https://www.google.com/maps?q=Kristinehamn,Sweden&output=embed',
}

export const director = {
  name: 'Connie Erlandsson',
  title: 'Founder & Chairperson, MKO',
  photo: '/images/placeholders/director.svg',
  message:
    'When I think about why MKO exists, I think about the women and young people who walk through our doors unsure of what comes next — and who leave knowing their community stands behind them. Every program we run, every volunteer who gives their time, and every partner who joins us is part of a simple belief: that everyone deserves the chance to be seen, supported, and empowered to lead. Thank you for being part of that story with us.',
}

export const founders = [
  {
    name: 'Connie Erlandsson',
    role: 'Founder & Chairperson',
    photo: '/images/placeholders/founer.jpeg',
    bio: 'Our organisation was founded in 2014 in Stockholm, Sweden, by Connie Erlandsson, who identified a growing need for a supportive meeting place for women with foreign backgrounds who were building new lives in Sweden. Having moved from Uganda to Sweden in 2012, Connie experienced many of the challenges that come with settling into a new country, including language barriers, understanding society, accessing information, and finding meaningful connections. Through her own journey, she recognised the importance of creating a safe and welcoming space where women could meet, share experiences, receive guidance, and support one another as they adapted to life in a new environment. With this vision and commitment, Connie began the process of creating an organisation that could serve as a bridge between women from different backgrounds and the wider Swedish community.',
  },
  {
    name: 'Justine Kindbloom',
    role: 'Co-Founder',
    photo: '/images/placeholders/co-founder.jpeg',
    bio: 'As Connie shared her vision and concerns with her close friend Justine Kindbloom, who had already lived in Sweden earlier, Justine saw the importance of the initiative and joined her in bringing the idea to life. Together, they worked towards establishing the organisation and creating opportunities for women to gather, connect, and access support.',
  },
]

export const organisationHistory = [
  'The organisation started with meetings held in different locations, receiving a positive response and growing participation from women who valued the opportunity to come together, learn, and support each other.',
  'Over the years, the organisation has developed step by step, continuing to promote inclusion, empowerment, integration, and community connection. Although the COVID-19 pandemic created challenges and affected activities for a period of time, the commitment to the organisation\'s purpose remained strong.',
  'In 2025, the organisation renewed its mobilisation efforts and expanded its activities to Kristinehamn. This new chapter has brought encouraging results, with many women showing interest and actively participating in regular meetings and activities.',
  'Today, guided by the founding vision of Connie Erlandsson and Justine Kindbloom, the organisation continues to provide a supportive platform where women from diverse backgrounds can connect, grow, and find their place in Swedish society.',
]

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
]

export const vision =
  'To create an inclusive society where women, girls, and young people have equal opportunities to grow, lead, and contribute to sustainable community development.'

export const mission = {
  intro: "Targeted Women's Organization works to:",
  points: [
    'Empower women through education, mentorship, and leadership development.',
    "Support the integration of immigrant women and their families into Swedish society.",
    'Promote gender equality, diversity, and inclusion.',
    'Develop leadership skills and inspire hope among young women and youth.',
    "Improve people's social, emotional, educational, and economic well-being.",
    'Promote active citizenship, volunteerism, and community participation.',
  ],
}

export const coreValues = [
  { title: 'Respect', description: 'We honor the dignity and voice of every individual we serve.' },
  { title: 'Equality', description: 'We champion equal opportunity regardless of background or circumstance.' },
  { title: 'Inclusion', description: 'We build spaces where everyone belongs and can participate fully.' },
  { title: 'Diversity', description: 'We celebrate different cultures, perspectives, and lived experiences.' },
  { title: 'Integrity', description: 'We act with honesty and accountability in everything we do.' },
  { title: 'Empowerment', description: 'We equip people with the tools and confidence to shape their own futures.' },
  { title: 'Collaboration', description: 'We work hand in hand with partners, volunteers, and communities.' },
  { title: 'Compassion', description: 'We listen and respond to every story with empathy and care.' },
  { title: 'Community', description: 'We believe stronger communities are built together, not alone.' },
]

export const strategicGoals = [
  "Strengthen women's confidence, independence, and leadership.",
  'Promote youth development and leadership skills.',
  'Encourage education and lifelong learning.',
  'Support entrepreneurship and economic empowerment.',
  'Promote physical and mental well-being.',
  'Build stronger families and local communities.',
  'Foster intercultural understanding and social cohesion.',
  'Create opportunities for volunteering and active civic engagement.',
]

export const targetGroups = {
  groups: [
    'Women',
    'Young women',
    'Girls',
    'Youth',
    'Mothers',
    'Immigrant and refugee families',
    'Students',
    'Job seekers',
    'Volunteers',
    'Community leaders',
  ],
  inclusionStatement:
    'Anyone who wants to grow and contribute to society is welcome — regardless of nationality, ethnicity, religion, or cultural background.',
}

export const sdgs = [
  'Gender Equality',
  'Quality Education',
  'Good Health and Well-being',
  'Reduced Inequalities',
  'Decent Work and Economic Growth',
  'Sustainable and Inclusive Communities',
  'Youth Participation in Community Development',
  'Social Cohesion and Peaceful Societies',
]

export const conclusion = [
  'At Targeted Women\'s Organization (MKO), we believe that when women are empowered and young people are equipped with the right tools, knowledge, and opportunities, they help create stronger families, resilient communities, and a more inclusive society.',
  'Through education, mentorship, integration, leadership development, and collaboration, we strive to create lasting positive change where every individual has the opportunity to grow, contribute, and reach their full potential.',
]

export const statistics = [
  { label: 'Women Empowered', value: 1240, suffix: '+' },
  { label: 'Youth Supported', value: 680, suffix: '+' },
  { label: 'Community Events', value: 175, suffix: '+' },
  { label: 'Volunteers', value: 320, suffix: '+' },
]

export const whyChooseUs = [
  {
    title: 'Safe Environment',
    description: 'A welcoming, respectful space where every participant feels secure and valued.',
  },
  {
    title: 'Experienced Mentors',
    description: 'Guidance from dedicated mentors with real experience supporting our communities.',
  },
  {
    title: 'Inclusive Community',
    description: 'A diverse network that celebrates every background, culture, and story.',
  },
  {
    title: 'Leadership Opportunities',
    description: 'Real pathways for women and youth to grow into confident, capable leaders.',
  },
]
