import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/vercel-logotype-dark.png";
import { VscOpenPreview } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";
import { IoHardwareChipOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTurborepo } from "react-icons/si";
import { IoSparklesSharp } from "react-icons/io5";
import { FaStore } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineWeb } from "react-icons/md";
import { TiSpanner } from "react-icons/ti";
import { IoTriangleOutline } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";
import { LuDiamondPercent } from "react-icons/lu";
import { MdEmojiEmotions } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { RiSuitcaseFill } from "react-icons/ri";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [sectionLength, setSectionLength] = useState(0);

  const logoRef = useRef(null);
  const dropdownRef = useRef(null);
  const productRefs = useRef([]);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    productRefs.current = productRefs.current.slice(0, 3);
  }, []);

  const productDropdowns = [
    {
      sections: [
        {
          title: "DX Platform",
          items: [
            {
              icon: <VscOpenPreview className="text-white icon" />,
              title: "Previews",
              description: "Helping teams ship 6x faster",
            },
            {
              icon: <IoSparklesSharp className="text-white icon" />,
              title: "AI",
              description: "Powering breakthroughs",
            },
          ],
        },
        {
          title: "Managed Infrastructure",
          items: [
            {
              icon: <IoHardwareChipOutline className="text-white icon" />,
              title: "Fluid Compute",
              description: "Servers, in serverless form",
            },
            {
              icon: <TbWorld className="text-white icon" />,
              title: "Rendering",
              description: "Fast, scalable, and reliable",
            },
            {
              icon: <IoStatsChart className="text-white icon" />,
              title: "Observability",
              description: "Trace every step",
            },
            {
              icon: <MdOutlineSecurity className="text-white icon" />,
              title: "Security",
              description: "Scale without compromising",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              icon: <TbBrandNextjs className="text-white icon" />,
              title: "Next.js",
              description: "The native Next.js platform",
            },
            {
              icon: <SiTurborepo className="text-white icon" />,
              title: "Turborepo",
              description: "Speed with Enterprise scale",
            },
            {
              icon: <BsBox className="text-white icon" />,
              title: "AI SDK",
              description: "The AI Toolkit for TypeScript",
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Use cases",
          items: [
            {
              icon: <IoSparklesSharp className="text-white icon" />,
              title: "AI Apps",
              description: "Deploy at speed of AI",
            },
            {
              icon: <FaStore className="text-white icon" />,
              title: "Composable Commerce",
              description: "Power storefronts that convert",
            },
            {
              icon: <FaChartLine className="text-white icon" />,
              title: "Marketing Sites",
              description: "Launch campaigns fast",
            },
            {
              icon: <RxDashboard className="text-white icon" />,
              title: "Multi-tenant Platforms",
              description: "Scale apps with one codebase",
            },
            {
              icon: <MdOutlineWeb  className="text-white icon" />,
              title: "Web Apps",
              description: "Ship faster not infrastructure",
            },
          ],
        },
        {
          title: "Users",
          items: [
            {
              icon: <TiSpanner  className="text-white icon" />,
              title: "Platform Engineers",
              description: "Automate away repitition",
            },
            {
              icon: <IoTriangleOutline  className="text-white icon" />,
              title: "Design Engineers",
              description: "Deploy for every idea",
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Tools",
          items: [
            {
              icon: <BsBox className="text-white icon" />,
              title: "Resource Center",
              description: "Today's best practices",
            },
            {
              icon: <FaStore className="text-white icon" />,
              title: "Market Place",
              description: "Extend an automate workflows",
            },
            {
              icon: <GrTemplate className="text-white icon" />,
              title: "Templates",
              description: "Jumpstart app development",
            },
            {
              icon: <IoBookOutline className="text-white icon" />,
              title: "Guid",
              description: "Find help quickly",
            },
            {
              icon: <LuDiamondPercent className="text-white icon" />,
              title: "Partner Finder",
              description: "Get help from solution partners",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              icon: <MdEmojiEmotions className="text-white icon" />,
              title: "Customers",
              description: "Trusted by the best teams",
            },
            {
              icon: <FaPenNib className="text-white icon" />,
              title: "Blog",
              description: "The latest post and changes",
            },
            {
              icon: <BiBookContent className="text-white icon" />,
              title: "Changelog",
              description: "See what shipped",
            },
            {
              icon: <RiSuitcaseFill className="text-white icon" />,
              title: "Press",
              description: "Read the latest news",
            },
          ],
        },
      ],
    },
  ];

  const handleProductMouseEnter = (index, e) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setActiveDropdownIndex(index);
    setSectionLength(productDropdowns[index].sections.length);
    console.log("sectionLength", sectionLength);

    console.log("index", index);
    setIsDropdownOpen(true);
    const rect = e.currentTarget.getBoundingClientRect();
    updateDropdownPosition(rect);
  };

  const handleMouseLeave = (e) => {
    const isValidNode = e.relatedTarget instanceof Node;
    const relatedTarget = isValidNode ? e.relatedTarget : null;

    const isOutsideLinks = !productRefs.current.some((ref) =>
      ref?.contains(relatedTarget)
    );
    const isOutsideDropdown = !dropdownRef.current?.contains(relatedTarget);

    if (isOutsideLinks && isOutsideDropdown) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
    }
  };

  const updateDropdownPosition = (rect) => {
    if (logoRef.current) {
      const logoRect = logoRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const dropdownWidth = 960;
      const maxLeft = windowWidth - dropdownWidth;

      const leftPosition = Math.min(logoRect.left + window.scrollX, maxLeft);
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: leftPosition,
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black backdrop-blur-md z-50">
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .dropdown-enter {
          animation: fadeIn 0.2s ease-out forwards;
        }

        .dropdown-exit {
          animation: fadeOut 0.2s ease-out forwards;
        }
      `}</style>

      <nav className="max-w-7xl mx-auto  py-4 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <a href="/" ref={logoRef} className="flex items-center">
            <img src={Logo} alt="Vercel" className="w-24" />
          </a>

          <div
            className="hidden md:flex items-center "
            onMouseLeave={handleMouseLeave}
          >
            {["Products", "Solutions", "Resources"].map((label, index) => (
              <a
                key={index}
                href="#"
                ref={(el) => (productRefs.current[index] = el)}
                className="main-link text-gray-400 flex items-center text-sm gap-1 hover:bg-[#333] hover:text-white py-1 px-3 rounded-full relative transition duration-300 group"
                onMouseEnter={(e) => handleProductMouseEnter(index, e)}
              >
                {label}
                <IoIosArrowDown className="text-white text-xs transition-transform duration-300 group-hover:rotate-180" />
              </a>
            ))}
            <a
              href="#"
              className="main-link text-gray-400 text-sm hover:bg-[#333] hover:text-white py-1 px-3 rounded-full transition duration-300"
            >
              Enterprise
            </a>
            <a
              href="#"
              className="main-link text-gray-400 text-sm hover:bg-[#333] hover:text-white py-1 px-3 rounded-full transition duration-300"
            >
              Docs
            </a>
            <a
              href="#"
              className="main-link text-gray-400 text-sm hover:bg-[#333] hover:text-white py-1 px-3 rounded-full transition duration-300"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-white text-sm py-1.5 px-3 border border-gray-400 rounded-md font-bold hover:text-white hover:bg-[#222] bg-[hsl(0,0%,4%)]"
              >
                log In
              </a>
              <a
                href="#"
                className="text-white text-sm py-1.5 px-3 border border-gray-400 rounded-md font-bold hover:text-white hover:bg-[#222]  bg-[hsl(0,0%,4%)]"
              >
                Contact
              </a>
          <button className="bg-white text-black text-sm px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>

      {isDropdownOpen && activeDropdownIndex !== null && (
        <div
          className={`absolute ${
            isDropdownOpen ? "dropdown-enter" : "dropdown-exit"
          }`}
          style={{
            top: `4.5rem`,
            left: `${dropdownPosition.left}px`,
            zIndex: 50,
          }}
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute w-[1.5rem] h-[1.5rem] border border-gray-300 bg-black -z-10 transition-all ease-in-out duration-300 rotate-45"
            style={{
              top: `-10px`,
              left: `${
                productRefs.current[activeDropdownIndex].getBoundingClientRect()
                  .left -
                dropdownPosition.left +
                35
              }px`,
            }}
          ></div>

          <div
            ref={dropdownRef}
            className={`w-fit bg-black p-6 rounded-xl border border-gray-700 shadow-lg`}
          >
            <div
              className={`grid gap-8 w-full transition-all ease-in-out duration-300`}
              style={{
                gridTemplateColumns: `repeat(${productDropdowns[activeDropdownIndex].sections.length}, minmax(0, 1fr))`,
                opacity: isDropdownOpen ? 1 : 0, // Fade in/out
                transform: isDropdownOpen ? "scale(1)" : "scale(0.95)", // Scale animation
                transitionProperty: "opacity, transform, grid-template-columns", // Animate grid columns
              }}
            >
              {productDropdowns[activeDropdownIndex].sections.map(
                (section, index) => (
                  <div key={index} className="space-y-6">
                    <p className="text-gray-400 text-sm">{section.title}</p>
                    <div className="flex flex-col gap-6">
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="dropdown-item flex items-start gap-2 p-2 rounded transition-colors duration-200"
                        >
                          <div className="border border-gray-600 rounded p-2 flex-shrink-0 icon-container">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-white">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
