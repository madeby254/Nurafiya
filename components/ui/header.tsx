import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Nurafya">
              <Image
                src="/images/nurafyalogo.png" // Replace with your logo's path
                alt="Your Brand Name"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li> */}
              <li>
                <Link
                  href="https://pd7yntvhc27.typeform.com/to/B8ErubXm"
                  target="blank"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Investors
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
