import { useState } from "react";
import Section from "./components/Section";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation(["home"]);
  const [page, setPage] = useState(0);

  return (
    <div className="page">
      <Section className="bg-dark">
        <div className="left-bar">
          <div className="title">{t("education.title")}</div>
        </div>
        <div className="right-bar"></div>
      </Section>
      <Section backgroundColor="blue">
        <h1>Page 2</h1>
      </Section>
      <Section backgroundColor="pink">
        <h1>Page3</h1>
      </Section>
      <Section>
        <h1>Home </h1>
      </Section>
    </div>
  );
}