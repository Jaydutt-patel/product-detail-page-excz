import Link from "next/link";

import { Logo } from "../svg";
import { FOOTERLINK } from "../constants";

interface FooterLinks {
  id: number,
  category: string,
  class?: string,
  name: Array<{
    id: number,
    title: string,
    path: string,
  }>,
}

const Footer = () => {

  const footerLinks = () => {
    return FOOTERLINK.map((footer: FooterLinks) =>
      <div className={`${footer.class ? footer.class : "sm:w-1/5 lg:w-1/6"}`} key={footer.id}>
        <ul className="pb-3">
          <li className="font-bold pb-3">{footer.category}</li>
          {footer.name.map((link) => <Link href="/" key={link.id}>
            <li className="text-gray-400 py-2 hover:text-black">{link.title}</li>
          </Link>)}
        </ul>
      </div>);
  };

  return (
    <footer className="pb-8">
      <div className="flex justify-between flex-wrap">
        <div className="min-w-300 xsm:w-full xsm:min-w-0 sm:w-1/12"><Logo color="#5649de" /></div>
        {footerLinks()}
        <div className="w-full lg:w-2/5">
          <p className="font-bold">Sign up for our newsletter</p>
          <p className="text-gray-400 pt-4 pb-2">The latest deals and savings, sent to your inbox weekly</p>
          <div className="flex justify-between">
            <input type="text" className="border w-3/5 rounded-lg" />
            <button className="bg-indigo-600 w-1/3 text-white py-3 rounded-lg  border border-transparent 
              hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600">Sign up</button>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="text-gray-500 flex justify-center pt-10 text-xs xsm:text-sm sm:text-lg">
        &copy;	2022 Workflow, Inc. All rights not reserved.
      </div>
    </footer>
  );
};

export default Footer;
