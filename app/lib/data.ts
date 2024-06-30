import duplicateFinderImg from '@/public/duplicate_finder.png';
import catFoodTrackerImg from '@/public/cat_food_tracker.png';
import wordGameImg from '@/public/word_game.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: '2021 - 2021',
    cardTitle: 'Amazon - Software Engineer Intern',
    cardSubtitle: 'Sunnyvale, CA',
    cardDetailedText:
      'I conducted functional, regression, performance, and stability testing for products, developed automated software test cases and scripts for feature releases, and executed test plans for object detection.',
  },
  {
    title: '2021 - 2022',
    cardTitle: 'Dolby - Software Engineer Intern',
    cardSubtitle: 'Sunnyvale, CA',
    cardDetailedText:
      'I upgraded the TensorFlow C library to version 2.x, enhancing application performance. Additionally, I conducted code repairs, deployed applications, and addressed internal and external tickets.',
  },
  {
    title: '2022 - 2022',
    cardTitle: 'Tesla - Software Engineer Intern',
    cardSubtitle: 'Palo Alto, CA',
    cardDetailedText:
      'I developed cross-platform applications with Flutter for iOS, Android, and web. Created secure APIs using gRPC, Protocol Buffers, and Golang. Managed full lifecycle from design to release. Established CI/CD pipelines on GitHub and automated build and deployment with GitHub Actions. Implemented Bloc architecture for efficient state management and data connectivity.',
  },
  {
    title: '2023 - Present',
    cardTitle: 'Tesla - Software Engineer',
    cardSubtitle: 'Palo Alto, CA',
    cardDetailedText:
      'I developed microservices in Go for RESTful and gRPC APIs, using Kafka for event handling and Redis for caching. Deployed containerized services on Kubernetes with Helm charts. Created ETL pipelines for data extraction, transformation, and loading into SQL databases, and implemented secure file storage in AWS S3.',
  },
] as const;

export const projectsData = [
  {
    title: 'Cat Food Tracker',
    description:
      "A user-friendly app enabling cat owners to track their cats' food preferences, logging food trials and providing analytics.",
    tags: ['Java', 'Flutter', 'MongoDB', 'Bloc', 'gRPC', 'Springboot'],
    imageUrl: catFoodTrackerImg,
  },
  {
    title: 'Word Game',
    description:
      'An interactive word game on iOS where users fill in the blanks to complete sentences or phrases.',
    tags: ['iOS', 'Swift'],
    imageUrl: wordGameImg,
  },
  {
    title: 'Duplicate Finder',
    description:
      'A recursive file duplicate finder for efficient management and analysis of duplicate files within specified or current directories.',
    tags: ['Python', 'OOP'],
    imageUrl: duplicateFinderImg,
  },
] as const;

export const skillsData = [
  'AWS',
  'Android',
  'C',
  'CSS',
  'CMake',
  'Dart',
  'Docker',
  'Flutter',
  'Git',
  'Golang',
  'HTML',
  'Helm',
  'iOS',
  'Java',
  'Javascript',
  'Jira',
  'Kafka',
  'Kubernetes',
  'Linux',
  'Next.js',
  'Node.js',
  'PHP',
  'Prometheus',
  'Python',
  'React.js',
  'Redis',
  'REST',
  'Shell',
  'SQL',
  'Terraform',
] as const;
