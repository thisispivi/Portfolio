import { useState, useEffect, useRef } from "react";
import Section from "./components/Section";
import { useTranslation } from "react-i18next";
import Education from "./pages/Education";
import { LanguageDropdown } from "./components/Language";

export default function HomePage() {
  const { t, i18n } = useTranslation(["home"]);
  const currentLanguage = i18n.language;
  const pageRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  console.log("page", page);

  useEffect(() => {
    const container = pageRef.current;
    if (!container) return;

    function customRound(scrollTop: number, clientHeight: number) {
      const divisionResult = scrollTop / clientHeight;
      const decimalPart = divisionResult - Math.floor(divisionResult);
      const roundedValue =
        decimalPart <= 0.9
          ? Math.floor(divisionResult)
          : Math.ceil(divisionResult);
      return roundedValue;
    }

    const handleScroll = () => {
      const { clientHeight, scrollTop } = container;
      const currentPageNumber = customRound(scrollTop, clientHeight);
      setPage(currentPageNumber);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPage = (pageNumber: number) => {
    const container = pageRef.current;
    if (!container) return;

    const pageHeight = container.clientHeight;
    container.scrollTo({
      top: pageHeight * pageNumber,
      behavior: "smooth",
    });
    setPage(pageNumber);
  };

  const pages = [
    {
      label: "home",
      title: t("home.title"),
      content: <>PAGE 0</>,
      color: "bg-medium",
    },
    {
      label: "education",
      title: t("education.title"),
      content: <Education t={t} />,
      color: "bg-dark",
    },
    {
      label: "home",
      title: t("home.title"),
      content: <>PAGE 1</>,
      color: "bg-medium",
    },
    {
      label: "home",
      title: t("home.title"),
      content: <>PAGE 2</>,
      color: "bg-medium",
    },
  ];

  return (
    <div className={`page ${pages[page].label}`} ref={pageRef}>
      <LanguageDropdown
        onClick={(lang) => {
          i18n.changeLanguage(lang);
        }}
        currentLanguage={currentLanguage}
      />
      <Menu pages={pages} scrollToPage={scrollToPage} />
      {pages.map((page, index) => (
        <Section key={index} className={page.color}>
          {page.content}
        </Section>
      ))}
    </div>
  );
}

interface MenuProps {
  pages: {
    label: string;
    title: string;
    content: React.ReactNode;
    color: string;
  }[];
  scrollToPage: (pageNumber: number) => void;
}

function Menu({ pages, scrollToPage }: MenuProps) {
  return (
    <div className="menu">
      <div className="menu-container">
        {pages.map((page, index) => (
          <div
            key={index}
            className="menu-item"
            onClick={() => {
              scrollToPage(index);
            }}
          >
            {page.title}
          </div>
        ))}
      </div>
    </div>
  );
}
