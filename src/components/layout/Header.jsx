/* eslint-disable jsx-a11y/anchor-is-valid */
import { headerLinks } from "../../stubs";
import Logo from "../Logo";

const Header = () => (
  <header className="px-6 py-4 text-white bg-slate-800">
    <div className="mx-auto max-w-[1170px] flex justify-between items-center [@media(max-width:1040px)]:justify-center">
      <Logo />
      <nav className="[@media(max-width:1040px)]:hidden">
        <ul className="flex space-x-32 items-center">
          {headerLinks.map((link) => <a key={link} href="#">{link}</a>)}
        </ul>
      </nav>
      <button
        type="button"
        className="py-3 px-10 border-2 border-slate-400 rounded-md [@media(max-width:1040px)]:hidden"
      >
        CONTACT
      </button>
    </div>
  </header>
);

export default Header;
