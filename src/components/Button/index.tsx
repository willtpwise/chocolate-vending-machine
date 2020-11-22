/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import flattenChildren from "react-flatten-children";
import classNames from "classnames";
import "./index.css";

type Props = {
  name?: string;
  title: string;
  subTitle?: string;
  onClick: React.MouseEventHandler;
  isDisabled?: boolean;
};

function Button(props: Props) {
  const { name, title, subTitle, onClick, isDisabled = false } = props;

  return (
    <button
      name={name}
      onClick={onClick}
      disabled={isDisabled}
      type="button"
      role="button"
      className="button"
    >
      <span className="title">{title}</span>
      {subTitle && <span className="subTitle">{subTitle}</span>}
    </button>
  );
}

type GroupProps = {
  children: React.ReactElement;
  isBlock?: boolean;
};

function Group(props: GroupProps) {
  const { children, isBlock = false } = props;

  return (
    <ul className={classNames("buttonGroup", { isBlock })} role="group">
      {flattenChildren(children).map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}

Button.Group = Group;
export default Button;
