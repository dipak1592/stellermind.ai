"use client";
import { useParams } from 'next/navigation'; // Import from next/navigation
import Image from 'next/image';
import Link from 'next/link';

// Sample Data for internships (You can fetch this from an API or CMS)
const internshipData = {
  'ai-ml': {
    title: 'AI-ML Internship',
    description: 'Gain experience in Artificial Intelligence and Machine Learning with hands-on projects.',
    image: '/ai-ml.jpg',
    details: 'In this internship, you will work on AI/ML models, data processing, and real-time applications.',
  },
  'fullstack-development': {
    title: 'Fullstack Development Internship',
    description: 'Learn to build both front-end and back-end web applications from scratch.',
    image: '/fullstack.jpg',
    details: 'Master HTML, CSS, JavaScript, Node.js, and more while working on complete projects.',
  },
  'cyber-security': {
    title: 'Cybersecurity Internship',
    description: 'Enhance your skills in protecting systems from cyber threats.',
    image: '/cyber-security.jpg',
    details: 'You will work with tools like firewalls, encryption, and network security protocols.',
  },
  'frontend-development': {
    title: 'Frontend Development Internship',
    description: 'Focus on building beautiful and functional user interfaces with modern web technologies.',
    image: '/frontend.jpg',
    details: 'Work with HTML, CSS, JavaScript, and frameworks like React or Vue.js to create interactive web pages.',
  },
  'backend-development': {
    title: 'Backend Development Internship',
    description: 'Gain experience in server-side programming and database management.',
    image: '/backend.jpg',
    details: 'Work with server-side languages like Node.js, Python, Ruby, or Java, and databases like MongoDB or SQL.',
  },
  'devops': {
    title: 'DevOps Internship',
    description: 'Learn about continuous integration, continuous deployment, and automation processes.',
    image: '/devops.jpg',
    details: 'Work with tools like Docker, Kubernetes, Jenkins, and cloud platforms to streamline development and deployment workflows.',
  },
  // Add more internships here...
};


const InternshipPage = () => {
  const params = useParams(); // Replaces useRouter()
  const { slug } = params; // Get slug from URL

  // Fetching internship details based on slug
  const internship = internshipData[slug];

  if (!internship) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-4xl font-bold">{`Internship Not Found`}</h1>
        <p className="text-lg mt-4">{"Sorry, we couldn't find the internship you're looking for."}</p>
        <Link href="/internship">
          <span className="text-blue-500 underline mt-4 block">{"Go back to Internship Listings"}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className=" text-white min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src={internship.image}
              alt={internship.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-6">{internship.title}</h1>
            <p className="text-lg mb-4">{internship.description}</p>
            <p className="text-gray-300">{internship.details.replace(/'/g, '&apos;')}
            </p>

            <Link href="/apply">
              <button className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
