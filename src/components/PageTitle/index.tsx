import React from "react";
import "./index.css";

export type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  return (
    <header className="pageTitle">
      <h1>{title}</h1>
    </header>
  );
}
