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

export default function Education({ t }: EducationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);
  console.log(isVisible);

  const getDelay = (index: number) => {
    return isVisible ? `${index * 0.6}s` : undefined;
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // 0.5 means at least 50% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const eventsData = [
    {
      date: t("education.events.high-school.date"),
      text: (
        <>
          <div className="title">{t("education.events.high-school.title")}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: t("education.events.high-school.description"),
            }}
          />
          <div className="thesis">
            <UniversityIcon stroke="#e279b3" />
            <a href="https://www.iiseinaudimuravera.edu.it/">
              {t("education.events.high-school.location")}
              <ExternalLinkIcon />
            </a>
          </div>
        </>
      ),
    },
    {
      date: t("education.events.college.date"),
      text: (
        <>
          <div className="title">{t("education.events.college.title")}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: t("education.events.college.description"),
            }}
          />
          <div className="thesis">
            <BookIcon stroke="#e279b3" />
            <a href="https://www.iiseinaudimuravera.edu.it/">
              <span
                dangerouslySetInnerHTML={{
                  __html: t("education.events.college.thesis"),
                }}
              />
              <ExternalLinkIcon />
            </a>
          </div>
          <div className="thesis">
            <UniversityIcon stroke="#e279b3" />
            <a href="https://www.unica.it/it">
              {t("education.events.college.location")}
              <ExternalLinkIcon />
            </a>
          </div>
        </>
      ),
    },
    {
      date: t("education.events.master.date"),
      text: (
        <>
          <div className="title">{t("education.events.master.title")}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: t("education.events.master.description"),
            }}
          />
          <div className="thesis">
            <BookIcon stroke="#e279b3" />
            <a href="https://www.iiseinaudimuravera.edu.it/">
              <span
                dangerouslySetInnerHTML={{
                  __html: t("education.events.master.thesis"),
                }}
              />
              <ExternalLinkIcon />
            </a>
          </div>
          <div className="thesis">
            <UniversityIcon stroke="#e279b3" />
            <a href="https://www.unica.it/it">
              {t("education.events.master.location")}
              <ExternalLinkIcon />
            </a>
          </div>
        </>
      ),
    },
  ];

  return (
    <div
      ref={educationRef}
      className="education"
      style={{
        backgroundImage: `url(${
          require("../icons/educational_wallpaper.svg").default
        }) `,
      }}
    >
      <div className="left-bar">
        <div className="title">
          <UniversityHatIcon fill={"#e0b1cb"} />
          {t("education.title")}
        </div>
        <div className="events">
          {eventsData.map((event, index) => (
            <Event
              key={index}
              className={isVisible ? "event-item" : ""}
              date={event.date}
              text={event.text}
              style={{
                animationDelay: isVisible ? `${index * 0.5}s` : "0s",
              }}
            />
          ))}
        </div>
      </div>
      <div className="right-bar">
        <EducationIcon />
      </div>
    </div>
  );
}
