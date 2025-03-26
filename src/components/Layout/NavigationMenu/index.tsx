"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import cn from "@/utils/cn";
import Wrapper from "@/components/Wrapper";
import Links from "./Links";
import Hamburger from "./Hamburger";
import ThemeSelector from "./ThemeSelector";

const NavigationMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-10 bg-white/75 py-2 dark:bg-black/75 sm:py-3",
        isHamburgerOpen ? "" : "backdrop-blur-xl",
      )}
    >
      <Wrapper>
        <nav className="flex items-center justify-between font-semibold">
          <Link
            href="/"
            className="grid grid-flow-col items-center rounded-full overflow-hidden"
          >
            <Image className="rounded-full opacity-100" height={32} width={32} src="/images/mutlukasap.png" alt="Mutlu Kasap" />
          </Link>

          <div className="flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-4">
            <Links
              links={[
                { href: "/about", text: "About" },
                { href: "/music", text: "Music" },
                { href: "/photos", text: "Photos" },
              ]}
            />

            <Hamburger
              isOpen={isHamburgerOpen}
              setIsOpen={setIsHamburgerOpen}
            />

            <ThemeSelector />
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default NavigationMenu;
