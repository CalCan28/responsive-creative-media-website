export type ProjectPhase =
  | 'discovery'
  | 'design'
  | 'development'
  | 'review'
  | 'launch';

export interface Milestone {
  title: string;
  date: string;
  completed: boolean;
  description: string;
}

export interface Update {
  date: string;
  title: string;
  content: string;
}

export interface PreviewImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ClientProject {
  id: string;
  clientName: string;
  projectName: string;
  description: string;
  currentPhase: ProjectPhase;
  startDate: string;
  estimatedLaunch: string;
  previews: PreviewImage[];
  milestones: Milestone[];
  updates: Update[];
  contactEmail: string;
  contactPhone: string;
}

export const clientProjects: ClientProject[] = [
  {
    id: 'nembc-2026-preview-d8e2f',
    clientName: 'New Ebenezer Missionary Baptist Church',
    projectName: 'New Ebenezer MBC Website',
    description:
      'A modern, welcoming website for New Ebenezer Missionary Baptist Church in Merrillville, Indiana. Featuring service times, ministry information, sermon access, online giving through PayPal and Givelify, prayer request submissions, and full contact integration. Designed to reflect the warmth and community spirit of the congregation.',
    currentPhase: 'development',
    startDate: '2026-01-15',
    estimatedLaunch: '2026-04-15',
    previews: [
      {
        src: '/client-previews/new-ebenezer-church/sanctuary-interior.jpg',
        alt: 'Sanctuary interior used in hero slider',
        caption: 'Homepage hero section featuring the sanctuary interior with image slider',
      },
      {
        src: '/client-previews/new-ebenezer-church/church-exterior.jpg',
        alt: 'Church exterior building',
        caption: 'Church exterior photo used across the about section and giving page',
      },
      {
        src: '/client-previews/new-ebenezer-church/pastor-welcome.jpg',
        alt: 'Pastor T. Brian and Lady Juanita Hill',
        caption: 'Welcome section featuring Pastor T. Brian & Lady Juanita Hill',
      },
      {
        src: '/client-previews/new-ebenezer-church/fellowship-hall.jpg',
        alt: 'Fellowship hall interior',
        caption: 'Fellowship hall featured in the media gallery section',
      },
      {
        src: '/client-previews/new-ebenezer-church/recognition-tree.jpg',
        alt: 'NEMBC Recognition Tree',
        caption: 'Recognition tree displayed in the about section of the site',
      },
    ],
    milestones: [
      {
        title: 'Discovery & Content Gathering',
        date: '2026-01-15',
        completed: true,
        description:
          'Met with Pastor Hill and church leadership. Gathered all church history, ministry details, service times, and contact information. Received photos of sanctuary, exterior, fellowship hall, and pastor.',
      },
      {
        title: 'Site Architecture & Design',
        date: '2026-01-28',
        completed: true,
        description:
          'Finalized sitemap with 8 sections: Home, About, Ministries, Calendar, Media, Give Online, Prayer Request, and Contact. Designed with warm gold and navy color scheme reflecting the church identity.',
      },
      {
        title: 'Website Development',
        date: '2026-03-15',
        completed: false,
        description:
          'Building all pages including hero image slider, pastor welcome section, 8 ministry cards, service time cards, media gallery, PayPal/Givelify giving integration, prayer request form, contact form with Google Maps, and responsive mobile navigation.',
      },
      {
        title: 'Client Review & Revisions',
        date: '2026-03-28',
        completed: false,
        description:
          'Pastor Hill and church board review the complete website. Two rounds of revisions included for content, images, and design adjustments.',
      },
      {
        title: 'Launch & Go Live',
        date: '2026-04-15',
        completed: false,
        description:
          'Final QA testing, DNS transfer, domain setup, and go-live. Includes post-launch support and training on how to request content updates.',
      },
    ],
    updates: [
      {
        date: '2026-02-22',
        title: 'Development in progress',
        content:
          'All major sections are being built out: homepage with hero image slider, pastor welcome section, service times cards, 8 ministry cards, media gallery, online giving section with PayPal and Givelify options, prayer request form, and full contact page with Google Maps integration.',
      },
      {
        date: '2026-02-01',
        title: 'Design approved',
        content:
          'The warm gold and navy color scheme has been approved. The design features elegant Playfair Display headings, cross dividers, scripture quotes, and a welcoming tone throughout. All church photos have been incorporated into the layout.',
      },
      {
        date: '2026-01-20',
        title: 'Content and photos received',
        content:
          'Received all content from the church including: church history (founded 1948 by Rev. W.H. Robinson), mission statement, all 8 ministry descriptions, service times, contact details, and high-quality photos of the sanctuary, exterior, fellowship hall, pastor, and recognition tree.',
      },
    ],
    contactEmail: 'calvin@run-horse-run.com',
    contactPhone: '+1 (219) 718-6705',
  },
];

export function getClientProjectById(id: string): ClientProject | undefined {
  return clientProjects.find((project) => project.id === id);
}
