"use client";
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import DynamicHeading from "@/components/DynamicHeading";
import BlogWidget from "@/components/blogs/BlogWidget";
import BlogError from "@/components/blogs/BlogError";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Head from "next/head";

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

async function getHomeBlogs() {
  try {
    const res = await fetch(
      `https://ni9c33jq49.execute-api.ap-south-1.amazonaws.com/dev/api/blog/getposts`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

const InternshipPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchBlogs() {
      const blogs = await getHomeBlogs();
      if (isMounted) {
        setBlogData(blogs);
        setIsLoading(false);
      }
    }

    fetchBlogs();

    return () => {
      isMounted = false; // Cleanup if the component unmounts
    };
  }, []);

  // Internship data for topics
  const internshipTopics = [
    {
      slug:"ai-ml",
      title: "AI/ML Internship at Stellarmind AI - Learn with Industry Leaders",
      description:
        "Kickstart your career in AI and ML with Stellarmind AI's internship, designed to offer real-world experience and industry insights.",
      image: "/ai-ml.jpg",
      duration: "3-6 months",
      location: "Remote or On-site",
      skills: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Python", "TensorFlow"],
      requirements: "Basic knowledge of Python and machine learning concepts.",
      benefits: [
        "Hands-on experience with industry-standard tools and techniques.",
        "Networking opportunities with professionals in the field.",
        "Access to exclusive workshops and seminars."
      ],
    },
    {
      slug: "fullstack-development",
      title:"Fullstack Development Internship at Stellarmind AI - Become a Versatile Developer",
      description:
        "Develop your skills in both frontend and backend technologies with Stellarmind AI’s fullstack development internship, designed for versatility.",
      image: "/fullstack.jpg",
    },
    {
      slug:'frontend-development',
      title: "Frontend Development Internship at Stellarmind AI - Master Web Technologies",
      description:
        "Master frontend development with Stellarmind AI’s internship, where you will work on real-world projects and learn modern web technologies.",
      image: "/frontend.jpg",
    },
    {
      slug: "backend-development",
      title:"Backend Development Internship at Stellarmind AI - Enhance Your Coding Skills",
      description: "Join the Stellarmind AI backend development internship to sharpen your coding skills and contribute to cutting-edge backend technologies.",
      image: "/backend.jpg",
    },
    {
      slug: "devops",
      title:"DevOps Internship at Stellarmind AI - Build the Future of Continuous Delivery",
      description:
        "Stellarmind AI offers a DevOps internship to help you master continuous integration and deployment strategies in the real world.",
      image: "/devops.jpg",
    },
    {
      slug: "cyber-security",
      title:"Cybersecurity Internship at Stellarmind AI - Secure the Future",
      description:
        "Stellarmind AI’s cybersecurity internship offers a chance to learn the essentials of securing digital infrastructures and protecting data.",
      image: "/cyber-security.jpg",
    },
  ];
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stellarmind AI",
    url: "https://stellarmind.ai/internship",
    logo: "/stellarmind-logo.png",
    description: "Kickstart your career in AI/ML and IoT with StellarMind’s internships. Gain hands-on experience in developing advanced AI and machine learning services integrated with IoT.",
    sameAs: ["https://twitter.com/stellarmind", "https://www.linkedin.com/company/stellarmind"],
    potentialAction: {
      "@type": "ApplyAction",
      target: "https://stellarmind.ai/apply",
    },
  };

  return (
<>

      <Head>
        <title>AI/ML & IoT Internships | Join StellarMind’s Innovative Team</title>
        <meta name="description" content="Kickstart your career in AI/ML and IoT with StellarMind’s internships. Gain hands-on experience in developing advanced AI and machine learning services integrated with IoT." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

    <div className="text-white font-sans">
      {/* Existing sections */}
      <section className="relative h-full flex flex-col md:flex-row overflow-hidden justify-center items-center">
        {/* Left side: Image */}
        <div className="w-full lg:w-[40%] h-[50%] lg:h-full relative flex justify-center items-center">
          <Image
            src="/internship-bg.png"
            alt="Internship Background"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: Content */}
        <div className="w-full lg:w-[60%] flex items-center justify-center p-5 lg:p-16 relative z-20">
          <div className="text-left text-white p-[10px]">
            {/* Heading */}
            <h1 className="pb-3 text-[30px] xl:text-[50px] lg:text-[44px] md:text-[40px] font-semibold">
              Without active projects, <br />
              <span
                className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
              >
               Your growth takes a halt
              </span>
              <br />
              <span>You&apos;re not evolving</span>
              <br />
              <span
                className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
              >
                You&apos;re stuck in default!
              </span>
            </h1>
            {/* Buttons */}
            <div className="mt-[30px] flex flex-row gap-5">
              <Link href={"#internships"}>
                <button className="flex border border-gray-500 items-center text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white font-bold rounded">
                  Explore more
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 hover:border hover:border-white text-white font-medium rounded">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Topics Section */}
      <section id="internships" className="pb-5 mx-4 lg:mx-8">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <DynamicHeading
              FirstContent={"Featured "}
              FirstsubContent={"Internship Programs"}
              className="text-4xl font-bold text-white"
            />
          </div>

          {/* Grid of Internship Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <a
                   href={`/internship/${topic.slug}`}
                  className="block"
                >
                  <div className="relative">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      width={600}
                      height={400}
                      className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                </a>
                <div className="p-4 sm:p-6 text-left group">
                  <a
                     href={`/internship/${topic.title.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{
                      color: "transparent",
                      background: "linear-gradient(to right, #3b83f6, #008000)",
                      backgroundClip: "text",
                    }}
                    className="block mb-2 sm:mb-4 text-lg sm:text-xl font-bold hover:text-white transition-colors duration-300"
                  >
                    {topic.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 text-gray-900">
  <div className="container mx-auto text-center mb-12">
    <DynamicHeading
      FirstContent={"Why Choose "}
      FirstsubContent={"Our Internships?"}
      className="text-4xl font-bold text-white"
    />
    <p className="text-lg text-white max-w-3xl mx-auto">
      We offer unique opportunities to work on real-world projects, guided
      by industry experts, and pave the way for a successful career.
    </p>
  </div>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md">
      <div className="text-5xl mb-4">🚀</div>
      <h3 className="md:text-xl text-[18px] font-bold mb-2">Hands-On Experience</h3>
      <p className="text-white text-center">
        Work on real-world projects and gain industry-relevant skills.
      </p>
    </div>
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md">
      <div className="text-5xl mb-4">🎓</div>
      <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
      <p className="text-white text-center">
        Learn from industry professionals with years of experience.
      </p>
    </div>
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md">
      <div className="text-5xl mb-4">📜</div>
      <h3 className="text-xl font-bold mb-2">Certification</h3>
      <p className="text-white text-center">
        Get certified upon successful completion of the internship
        program.
      </p>
    </div>
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md">
      <div className="text-5xl mb-4">💼</div>
      <h3 className="text-xl font-bold mb-2">Career Opportunities</h3>
      <p className="text-white text-center">
        Boost your career with internship experience from top companies.
      </p>
    </div>
    
  </div>
</section>

      {/* Success Stories Carousel */}
      {/* <section className="py- text-white">
        <div className="container mx-auto text-center mb-12">
          <DynamicHeading
            FirstContent={"Success "}
            FirstsubContent={"Stories"}
            className="text-4xl font-bold text-white"
          />
        </div>

        <div className="container mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
          >
            {successStories.map((story, index) => (
              <SwiperSlide
                key={index}
                className="bg-gradient-to-r from-[#3b83f631] to-[#00800038] border border-gray-500 rounded-lg shadow-lg p-6"
              >
                {/* Image Section */}
                {/* <div className="mb-4 text-center">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={150}
                    height={150}
                    className="rounded-full shadow-lg mx-auto object-cover"
                  />
                </div>

                {/* Story Content */}
                {/* <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {story.name}
                  </h3>

                  <p className="text-lg text-white mb-4 italic">
                    &quot;{story.testimonial}&quot;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */} 
      
      {/* Blog Section */}
      <section className="container lg:w-[90%] w-full px-4 py-10">
        <DynamicHeading FirstContent={"Our"} FirstsubContent={"Blogs"} />
        {isLoading ? (
          <p>Loading...</p>
        ) : blogData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.slice(0, 3).map((blog, index) => (
              <BlogWidget
                key={index}
                featureImage={blog.featureImage}
                updatedAt={blog.updatedAt}
                category={blog.category}
                title={blog.title}
                content={blog.content}
                id={blog._id}
                slug={blog.slug}
              />
            ))}
          </div>
        ) : (
          <BlogError />
        )}
        <div className="flex justify-center mt-5">
          <Link href={"blog"}>
            <button className="flex items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white font-bold rounded">
              View All Blogs <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-gradient-to-r from-green-600 to-blue-800 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Internship?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join our internship programs today and start your journey towards a
          successful tech career.
        </p>
        <Link href="/apply">
          <button className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
            Apply Now
          </button>
        </Link>
      </section> */}
    </div>
    </>
  );
};

export default InternshipPage;
