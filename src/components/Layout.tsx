/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import NextNprogress from "nextjs-progressbar";
import { AppBarProps } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Background from "./Background";
import Pet from "./Pet/Pet";
import MonsterGarden from "./decor/MonsterGarden";
import { useThemeMode } from "@/contexts/ThemeModeContext";

interface LayoutProps {
  children?: any;
  headerPosition?: AppBarProps["position"];
  className?: string;
}

function Layout({ children, headerPosition, className }: LayoutProps) {
  const router = useRouter();
  const { mode } = useThemeMode();
  return (
    <div
      className={` h-full w-full overflow-x-hidden justify-center ${className}`}
    >
      <NextNprogress
        color={mode === "light" ? "#6f8fc9" : "#dc322f"}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <AnimatePresence mode={"wait"}>
        <Header position={headerPosition} />
        <motion.div key={router.asPath} {...pageAnimations}>
          {children}
        </motion.div>
      </AnimatePresence>
      <Pet />
      <MonsterGarden />
    </div>
  );
}

const pageAnimations = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 },
  exit: {
    y: 5,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  transition: { duration: 0.2, ease: "easeInOut" },
};

export default Layout;
