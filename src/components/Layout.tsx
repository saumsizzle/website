/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import NextNprogress from "nextjs-progressbar";
import { AppBarProps } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Background from "./Background";

interface LayoutProps {
  children?: any;
  headerPosition?: AppBarProps["position"];
  className?: string;
}

function Layout({ children, headerPosition, className }: LayoutProps) {
  const router = useRouter();
  return (
    <div
      className={` h-full w-full overflow-x-hidden justify-center ${className}`}
    >
      <NextNprogress
        color="#6fffb1"
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
