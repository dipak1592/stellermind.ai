"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
import DynamicHeading from "@/components/DynamicHeading";
import BrandSlider from "@/components/BrandSlider";
import { MdContacts } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
import BlogWidget from "@/components/blogs/BlogWidget";
import BlogError from "@/components/blogs/BlogError";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

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


  


function InternshipPage() {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  const [showPopup, setShowPopup] = useState(false);
  const [showErrPopup, setShowErrPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at top
  }, []);


  const handlePhoneChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phoneNumber: value,
    }));
  };

  const [formerror, setFormError] = useState({});
  const validation = () => {
    let err = {};
    if (formData.name === "") {
      err.name = "Please Enter Your Name!";
    } else if (formData.name.length <= 1) {
      err.name = "Name should be at least 2 characters!";
    }
    if (formData.email === "") {
      err.email = "Please Enter Your Email!";
    } else {
      let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!regex.test(formData.email)) {
        err.email = "Email is not valid!";
      }
    }
    if (formData.phoneNumber) {
      let regex = /^\+?[1-9]\d{1,14}$/;
      if (!regex.test(formData.phoneNumber)) {
        err.phoneNumber = "Phone Number is not valid!";
      }
    }
    if (formData.message === "") {
      err.message = "Please Enter Your Message!";
    }
    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let isValid = validation();
    if (isValid) {
      setLoading(true);
      fetch(
        "https://sourcing-techs-backend-sjyq.vercel.app/betasource/contact-form-1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            message: formData.message,
          }),
        }
      )
        .then((res) => {
          setLoading(false);
          setShowPopup(true);
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        })
        .catch((error) => {
          setShowErrPopup(true);
        });
    }
  };

  // Sample Data for internships (You can fetch this from an API or CMS)
  const internshipData = {
    "ai-ml": {
      title: "Artificial Intelligence Internship",
      description:
        "Are you passionate about the future of technology and eager to dive into the world of Artificial Intelligence (AI)? Our Artificial Intelligence Internship is designed to immerse you in the latest advancements in AI and Machine Learning, providing you with hands-on experience and valuable skills that will set you apart in the tech industry.",

      image: "/ai-ml.jpg",
    },
    "fullstack-development": {
      title: "Fullstack Development Internship",
      description:
        "The Fullstack Development Internship offers a comprehensive learning experience, equipping you with skills in both front-end and back-end development. You'll work with modern frameworks like React, Node.js, and databases to build fully functional web applications. Under the guidance of industry experts, you'll tackle real-world projects, gaining hands-on experience in full-stack architecture.",
      image: "/fullstack.jpg",
    },
    "cyber-security": {
      title: "Cybersecurity Internship",
      description:
        "Secure your future with our Cybersecurity Internship. Learn how to protect systems and data from cyber threats through practical experience in security protocols and risk management. Work with cutting-edge tools to identify vulnerabilities and strengthen defenses, while gaining insights from experienced security professionals.",
      image: "/cyber-security.jpg",
    },
    "frontend-development": {
      title: "Frontend Development Internship",
      description:
        "Dive into the world of web development with our Frontend Development Internship. Gain hands-on experience in building interactive, responsive web interfaces using HTML, CSS, and JavaScript. Collaborate on real-world projects, learn from industry experts, and enhance your skills with the latest frontend technologies. Apply now to start crafting the future of the web!",
      image: "/frontend.jpg",
    },
    "backend-development": {
      title: "Backend Development Internship",
      description:
        "Join our Backend Development Internship to master server-side programming and database management. Work with technologies like Node.js and SQL to build robust APIs and handle data efficiently. Gain practical experience by tackling real-world projects and improve your coding skills with guidance from industry professionals.",
      image: "/backend.jpg",
    },
    devops: {
      title: "DevOps Internship",
      description:
        "Embark on a DevOps Internship to learn about continuous integration, deployment, and automation. Work with tools like Docker, Jenkins, and Kubernetes to streamline development workflows and improve system reliability. This internship provides hands-on experience in managing infrastructure and implementing DevOps best practices.",
      image: "/devops.jpg",
    },
    // Add more internships here...
  };

  const params = useParams();
  const { slug } = params;
  const internship = internshipData[slug];

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

  if (!internship) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-4xl font-bold">Internship Not Found</h1>
        <p className="text-lg mt-4">
          Sorry, we couldn't find the internship you're looking for.
        </p>
        <Link href="/internship">
          <span className="text-blue-500 underline mt-4 block">
            Go back to Internship Listings
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className=" text-white min-h-screen py-20">
      {/* Internship Details */}
      <div className="container mx-auto text-center mb-12">
        <h1
          className={`text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center text-white`}
        >
          <span
            className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text ${playfair.className}`}
          >
            {internship.title}
          </span>
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#3b83f631] to-[#00800038] border border-gray-500 rounded-lg shadow-lg p-6">
          <div className="w-full md:w-2/5">
            <Image
              src={internship.image}
              alt={internship.title}
              width={500}
              height={100}
              className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-3/5 md:ml-8 md:mt-0 p-6 rounded-lg">
            <p className="text-lg mb-4 text-white">{internship.description}</p>
            <Link href="mailto:hr@stellarmind.ai">
              <button className="flex  items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded">
                Apply Now <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>

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
            <h3 className="md:text-xl text-[18px] font-bold mb-2">
              Hands-On Experience
            </h3>
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

      <section className="pb-[60px] pt-[20px] font-semibold text-white">
        <div className="relative z-[5] pt-[60px]">
          <h1
            className={`text-[35px] xl:text-[50px] lg:text-[44px] md:text-[40px] sm:text-[40px] text-center text-white`}
          >
            <span className="heading">
              {"Our"}{" "}
              <span
                className={`bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text ${playfair.className}`}
              >
                {"Trusted Partners"}
              </span>
            </span>
          </h1>
        </div>
      </section>

      <div id="services">
        <BrandSlider />
      </div>

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

      {/* Contact Form */}
      <section className="pt-12  text-white  flex flex-col items-center justify-center">
        <div className="container w-full md:w-[60%] mx-auto text-center mb-12">
          <DynamicHeading
            FirstContent={"Get in Touch"}
            FirstsubContent={"Contact Us"}
            className="text-4xl font-bold text-white"
          />
        </div>
        <div className="container w-full md:w-[60%] mx-auto px-6 lg:px-12">
          <form
            onSubmit={handlesubmit}
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-300"
                  placeholder="Your Name"
                />
                {formerror.name && (
                  <p className="text-red-400 text-xs mt-1">{formerror.name}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-300"
                  placeholder="Your Email"
                />
                {formerror.email && (
                  <p className="text-red-400 text-xs mt-1">{formerror.email}</p>
                )}
              </div>
            </div>
            <div className="relative mb-6">
              <PhoneInput
                country={"us"}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                  className:
                    "w-full px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-300",
                }}
              />
              {formerror.phoneNumber && (
                <p className="text-red-400 text-xs mt-1">
                  {formerror.phoneNumber}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-300"
                placeholder="Your Message"
              />
              {formerror.message && (
                <p className="text-red-400 text-xs mt-1">{formerror.message}</p>
              )}
            </div>
            <button
              type="submit"
              className={`flex justify-center w-full items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white  font-bold rounded ${
                loading && "opacity-50 cursor-not-allowed"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        {showPopup && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Message Sent!</h2>
            <p className="text-sm mb-4">
              Thank you for reaching out. We will get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}
        {showErrPopup && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Error</h2>
            <p className="text-sm mb-4">
              Something went wrong. Please try again.
            </p>
            <button
              onClick={() => setShowErrPopup(false)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default InternshipPage;
