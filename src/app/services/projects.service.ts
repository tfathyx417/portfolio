import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  getProjects(): Project[] {
    return [
      {
        id: 1,
        image: 'assets/images/gym.webp',
        title: 'Fithub Gym',
        titleAr: 'فيت هاب جيم',
        description:
          'A fitness club platform presenting workout advice, dedicated services, qualified trainers, and reward programs for a healthier lifestyle.',
        descriptionAr:
          'موقع لنادي رياضي يقدم لك نصائح لحياة صحية وجسم أفضل، يشمل خدمات مخصصة، مدربين مؤهلين، وبرامج تحفيزية.',
        link: 'https://fithub-gym.vercel.app/',
        github: 'https://github.com/taha-mahmoud37/Fithub-Gym',
        technologies: ['Angular', 'TypeScript', 'Bootstrap', 'SCSS'],
        featured: true,
      },
      {
        id: 2,
        image: 'assets/images/learnnig.webp',
        title: 'Online Learning Platform',
        titleAr: 'منصة تعليمية إلكترونية',
        description:
          'A world-class e-learning portal providing a gateway to extensive educational content and interactive online courses.',
        descriptionAr:
          'منصة تعليمية إلكترونية تحتوي على مجموعة من الدورات العالمية التي تتيح للطلاب الوصول إلى محتوى تعليمي شامل.',
        link: 'https://online-learning-rho.vercel.app/',
        github: 'https://github.com/taha-mahmoud37/Online-Learning',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      },
      {
        id: 3,
        image: 'assets/images/furniture.webp',
        title: 'Furniture Store',
        titleAr: 'متجر أثاث',
        description:
          'A product catalog for a furniture store featuring responsive design, modern UI, and a smooth browsing experience.',
        descriptionAr:
          'موقع كتالوج أثاث يُظهر منتجات بتصميم عصري واستجابة ممتازة على جميع الأجهزة، تم تطويره باستخدام Angular.',
        link: 'https://furniture-psi.vercel.app/',
        github: 'https://github.com/taha-mahmoud37/Furniture',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      },
      {
        id: 4,
        image: 'assets/images/pharma.webp',
        title: 'Pharmacy App',
        titleAr: 'تطبيق صيدلية',
        description:
          'A pharmacy website displaying available medicines, working doctors, and appointment scheduling with a clean interface.',
        descriptionAr:
          'تصميم موقع صيدلية يعرض الأدوية المتوفرة، الأطباء العاملين، ومواعيد العمل المتاحة.',
        link: 'https://medical-lap.vercel.app/',
        github: 'https://github.com/taha-mahmoud37/Medical-Lap',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      },
      {
        id: 5,
        image: 'assets/images/movies.webp',
        title: 'Movie App',
        titleAr: 'تطبيق أفلام',
        description:
          'Showcases trending movies and series with live API data, popular cast listings, and a clean browsing experience.',
        descriptionAr:
          'يعرض الأفلام والمسلسلات الأكثر رواجًا خلال الأسبوع، ويستعرض صور أبرز الشخصيات السينمائية.',
        link: 'https://movies-lemon.vercel.app/',
        github: 'https://github.com/taha-mahmoud37/Movies',
        technologies: ['JavaScript', 'HTML', 'CSS', 'REST API'],
      },
      {
        id: 6,
        image: 'assets/images/tomato.webp',
        title: 'Tomato Restaurant',
        titleAr: 'مطعم توماتو',
        description:
          'A restaurant website with online ordering, full menu display, and an interactive map for location discovery.',
        descriptionAr:
          'موقع مطعم يتيح لك طلب الطعام عبر الإنترنت، مشاهدة قائمة الطعام، ومعرفة موقع المطعم على الخريطة.',
        link: 'https://tomato-restaurant.vercel.app/',
        github: 'https://github.com/taha-mahmoud37/Tomato-Restaurant',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      },
    ];
  }
}
