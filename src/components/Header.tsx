import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import css from "styled-jsx/css";
import { useThemeMode } from "@/contexts/ThemeModeContext";
import Logo from "./Logo";

function Header({ position }: any) {
  const router = useRouter();
  const path = router.pathname;
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar position={position || "fixed"} variant="elevation" color="primary">
      <Toolbar variant="dense">
        <Logo className="cursor-pointer" onClick={() => router.push("/")} />
        <div className="w-full flex flex-row justify-evenly max-w-sm mx-auto">
          <Link href="/">
            <Button
              className="font-title"
              classes={{ text: classNames({ "font-bold": path === "/" }) }}
            >
              About Me
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              className="font-title"
              classes={{ text: classNames({ "font-bold": path === "/blog" }) }}
            >
              Articles
            </Button>
          </Link>
        </div>
        <IconButton
          aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggleMode}
          sx={{ color: "inherit", width: 40, height: 40 }}
        >
          {mode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
        </IconButton>
      </Toolbar>
      {styles}
    </AppBar>
  );
}

const { className, styles } = css.resolve`
  span {
    font-weight: 800;
  }
`;

export default Header;
