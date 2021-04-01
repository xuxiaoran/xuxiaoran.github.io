import React from "react";
import Popover from "@material-ui/core/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const EMAIL = "xuxiaoranus@gmail.com";
const socials = [
  {
    brand: "Github",
    url: "https://github.com/xuxiaoran",
    icon: faGithub,
  },
  {
    brand: "Instagram",
    url: "https://www.instagram.com/xiaorxu/",
    icon: faInstagram,
  },
  {
    brand: "Linkedin",
    url: "https://www.linkedin.com/in/xiaoran-xu/",
    icon: faLinkedinIn,
  },
  {
    brand: "Facebook",
    url: "fakebook",
    icon: faFacebook,
  },
];

const Contact = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    navigator.clipboard.writeText(EMAIL);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (url) => {
    if (url === "fakebook") {
      alert("I don't do Facebook...");
    } else {
      window.open(url);
    }
  };

  const open = Boolean(anchorEl);
  const emailId = open ? "emailCopied" : undefined;

  return (
    <div className="section">
      <div className="ml-3 mt-3 mb-3">
        <div className="text-center section-title">Contact</div>
        <div className="mt-3">
          <span
            className="email"
            aria-describedby={emailId}
            onClick={handleOpen}
          >
            {EMAIL}
          </span>
          <Popover
            open={open}
            id={emailId}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            <div className="emailCopied">Email copied!</div>
          </Popover>
        </div>

        <div className="mt-10 mb-3">
          {socials.map((s) => (
            <span
              className="mr-2 social-icon"
              onClick={() => handleRedirect(s.url)}
            >
              <FontAwesomeIcon icon={s.icon} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
