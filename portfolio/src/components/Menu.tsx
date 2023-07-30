import Tippy from "@tippyjs/react";
import React from "react";

interface MenuProps {
  pages: {
    label: string;
    title: string;
    content: React.ReactNode;
    color: string;
  }[];
  scrollToPage: (pageNumber: number) => void;
  currentPage: number; // You'll need to add a prop to keep track of the current page
}

function Menu({ pages, scrollToPage, currentPage }: MenuProps) {
  return (
    <div className="menu">
      <div className="menu-container">
        {pages.map((page, index) => (
          <Tippy
            content={page.title}
            placement="left"
            theme={"syrto-" + pages[currentPage].label}
            animation={"scale-extreme"}
          >
            <div
              key={index}
              className={`menu-item ${currentPage === index ? "active" : ""}`}
              onClick={() => {
                scrollToPage(index);
              }}
            />
          </Tippy>
        ))}
      </div>
    </div>
  );
}

export default Menu;
