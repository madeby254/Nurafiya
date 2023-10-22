import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3704956,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </Head>

      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link href="/" className="block" aria-label="Nurafya">
                <Image
                  src="/images/Nurafya.png" // Replace with your logo's path
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
    </>
  );
}
