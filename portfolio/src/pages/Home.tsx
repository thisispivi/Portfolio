import { i18n } from "i18next";
import { Event } from "../components/Event";
import { EducationIcon } from "../icons/Education";
import { useState, useRef, useEffect } from "react";
import ExternalLinkIcon from "../icons/ExternalLink";
import BookIcon from "../icons/Book";
import UniversityIcon from "../icons/University";
import UniversityHatIcon from "../icons/UniversityHat";

export interface EducationProps {
  t: i18n["t"];
}

export default function Home({ t }: EducationProps) {
  return (
    <div
      className="home-page"
      style={{
        backgroundImage: `url(${
          require("../icons/HomeWallpaper.svg").default
        }) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="center">
        <div className="image"></div>
        <div className="title">{t("home.title")}</div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: t("home.description") }}
        />
      </div>
    </div>
  );
}
