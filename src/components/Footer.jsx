import { BiArrowToBottom, BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import Logo from "../assets/vercel-logotype-dark.png"
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-12">
        <div className="w-[80%] mx-auto flex justify-between">
          {/* Products */}
          <div>
            <h3 className="text-sm font-medium mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              {['AI', 'Enterprise', 'Fluid Compute', 'Next.js', 'Observability', 'Previews', 'Rendering', 'Security', 'Turbo', 'v0'].map((item) => (
                <li key={item} className="hover:text-white text-sm cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              {['Community', 'Docs', 'Guides', 'Help', 'Integrations', 'Pricing', 'Resources', 'Solution Partners', 'Templates'].map((item) => (
                <li key={item} className="text-sm hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {['About', 'Blog', 'Careers', 'Changelog', 'Contact Us', 'Customers', 'Partners', 'Privacy Policy', 'Legal'].map((item) => (
                <li key={item} className="text-sm flex items-center gap-2 hover:text-white cursor-pointer">{item}
                {item === 'Legal' && <IoIosArrowDown className="text-white text-xs transition-transform duration-300 group-hover:rotate-180" />}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Social */}
          <div>
            <h3 className="text-sm font-medium mb-4">Social</h3>
            <ul className="space-y-2 text-gray-400">
              {['GitHub', 'LinkedIn', 'Twitter', 'YouTube'].map((item) => (
                <li key={item} className="text-sm hover:text-white cursor-pointer flex items-center gap-2">
                  {item === 'GitHub' && <BiLogoGithub />}
                  {item === 'LinkedIn' && <BiLogoLinkedin />}
                  {item === 'Twitter' && <BiLogoTwitter />}
                  {item === 'YouTube' && <BiLogoYoutube />}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* logo */}
            <div className="">
                <a href="#" className="">
                    <img src={Logo} alt="vercel" className="w-24" />
                </a>
            </div>
            
        </div>
        <div className="w-[80%] mx-auto text-sm mt-12">
          <a href="" className="p-2 hover:bg-[#333] text-blue-600 rounded">
          • All systems normal
          </a>
          
        
            
        </div>
      </footer>
    );
  }
export default Footer; 