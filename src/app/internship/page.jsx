"use client";
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import DynamicHeading from "@/components/DynamicHeading";
import BlogWidget from "@/components/blogs/BlogWidget";
import BlogError from "@/components/blogs/BlogError";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';

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
      title: "ai-ml",
      description:
        "Dive deep into the world of Artificial Intelligence and Machine Learning.",
      image: "/ai-ml.jpg",
    },
    {
      title: "Fullstack Development",
      description:
        "Master both frontend and backend to build full-fledged web applications.",
      image: "/fullstack.jpg",
    },
    {
      title: "Frontend Development",
      description: "Create stunning user interfaces with modern frontend tools.",
      image: "/frontend.jpg",
    },
    {
      title: "Backend Development",
      description: "Build secure and scalable server-side applications.",
      image: "/backend.jpg",
    },
    {
      title: "DevOps",
      description:
        "Automate workflows and streamline software delivery with DevOps practices.",
      image: "/devops.jpg",
    },
    {
      title: "Cyber Security",
      description:
        "Enhance your skills in safeguarding applications and networks from threats.",
      image: "/cyber-security.jpg",
    },
  ];

  // Success stories data
  const successStories = [
    {
      name: "John Doe",
      testimonial: "This internship changed my career path for the better!",
      image: "/team/default.svg",
    },
    {
      name: "Jane Smith",
      testimonial:
        "I gained real-world experience that helped me land my dream job.",
      image: "/team/default.svg",
    },
    {
      name: "Mike Johnson",
      testimonial: "The mentors and projects were fantastic. Highly recommend!",
      image: "/team/default.svg",
    },
    {
      name: "John Doe",
      testimonial: "This internship changed my career path for the better!",
      image: "/team/default.svg",
    },
    {
      name: "Jane Smith",
      testimonial:
        "I gained real-world experience that helped me land my dream job.",
      image: "/team/default.svg",
    },
    {
      name: "Mike Johnson",
      testimonial: "The mentors and projects were fantastic. Highly recommend!",
      image: "/team/default.svg",
    },
  ];

  return (
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
  {"Without active projects,"} <br />
  <span
    className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
  >
    'Your growth takes a halt'
  </span>
  <br />
  <span>{"You're not evolving"}
  </span>
  <br />
  <span
    className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text`}
  >
    'You're stuck in default!'
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
          <a href={`/internship/${topic.title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
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
                color: 'transparent', 
                background: 'linear-gradient(to right, #3b83f6, #008000)', 
                backgroundClip: 'text' 
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
            <h3 className="text-xl font-bold mb-2">Hands-On Experience</h3>
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
              Get certified upon successful completion of the internship program.
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
      <section className="py- text-white">
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
          <div className="mb-4 text-center">
            <Image
              src={story.image}
              alt={story.name}
              width={150}
              height={150}
              className="rounded-full shadow-lg mx-auto object-cover"
            />
          </div>

          {/* Story Content */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
            <p className="text-lg text-white mb-4 italic">
              "{story.testimonial}"
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>



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
  );
};

export default InternshipPage;
