import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRef, useEffect, MutableRefObject } from "react";

function ContactDetails() {
  const linkRef: MutableRefObject<HTMLAnchorElement | undefined> = useRef();

  useEffect(() => {
    if (linkRef && linkRef.current) {
      linkRef!.current!.href = atob(
        "bWFpbHRvOnNhdW15YWNkYWxhbEBnbWFpbC5jb20="
      );
    }
  }, [linkRef, linkRef.current]);

  const details = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saumyadalal/",
    },
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      url: "https://github.com/saumsizzle",
    },
    { icon: <MailIcon />, name: "Email", ref: linkRef },
  ];
  return (
    <>
      {details.map(({ icon, name, url, ref }, i) => {
        return (
          <a
            key={i}
            {...(ref ? { ref: ref as any } : {})}
            {...(url ? { href: url as string } : {})}
            href={url}
            target="_blank"
            className="no-underline outline-none"
          >
            <span className="px-4">
              {icon} {name}
            </span>
          </a>
        );
      })}
    </>
  );
}

export default ContactDetails;
