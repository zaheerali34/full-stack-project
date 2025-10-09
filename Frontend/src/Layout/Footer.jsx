import React from 'react';
import Logo from '/logo.svg';
import { Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

function Footer() {
  const navItems = [
    {
      id: 1,
      Tags: 'Product',
      itemsOne: [
        'Latest launches',
        'Visual Suite',
        'Magic Studio',
        'Brand management',
        'Social media',
        'Features',
        'Print',
        'Apps Marketplace',
      ],
    },
    {
      id: 2,
      Tags: 'Resources',
      itemsOne: [
        'Help Center',
        'Community',
        'Blog',
        'Tutorials',
        'API Documentation',
      ],
    },
    {
      id: 3,
      Tags: 'Company',
      itemsOne: [
        'About Us',
        'Careers',
        'Contact',
        'Privacy Policy',
        'Terms of Service',
      ],
    },
  ];
  return (
    <footer>
      <div className="w-full h-full py-10 flex items-start justify-center max-md:flex-col px-8 gap-20">
        <div className="w-fit">
          <img src={Logo} alt="Logo" />
          <h4 className="mt-12 font-semibold text-[0.9rem]">
            Download Canva for free
          </h4>
          <div className="flex items-center gap-2 py-2">
            <button className="py-[11px] px-4 border-[1px] border-zinc-400 rounded-[10px] font-semibold hover:bg-zinc-200 transition duration-500 text-sm">
              Windows
            </button>
            <button className="py-[11px] px-6 border-[1px] border-zinc-400 rounded-[10px] font-semibold hover:bg-zinc-200 transition duration-500 text-sm">
              Mac
            </button>
          </div>
        </div>

        <div className="w-full flex items-start justify-center max-md:flex-wrap">
          {navItems.map(group => (
            <div key={group.id} className="w-full flex items-start">
              <div className="w-full flex items-start flex-col gap-3">
                <h2 className="font-semibold px-4 text-zinc-700">
                  {group.Tags}
                </h2>
                <ul className="w-full text-sm space-y-1">
                  {group.itemsOne.map((item, idx) => (
                    <li
                      key={idx}
                      className="w-full text-zinc-700 hover:bg-zinc-200 py-3 rounded-md px-4 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-8 py-12 max-sm:flex-col gap-4">
        <div className="flex items-center gap-6">
          <Linkedin className="cursor-pointer" />
          <Instagram className="cursor-pointer" />
          <Facebook className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
          <Youtube className="cursor-pointer" />
        </div>

        <div>
          <span>Privacy</span>
          <span className="px-6">Terms</span>
          <span>© 2025 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
