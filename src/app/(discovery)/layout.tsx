import React, { FC } from "react";

export interface CommonLayoutProps2 {
  children?: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps2> = ({ children }) => {
  return (
    <div className="nc-CommonLayoutAccount bg-neutral-50 dark:bg-neutral-900">

      <div className="container pt-14 sm:pt-20 pb-24 lg:pb-32">{children}</div>
    </div>
  );
};

export default CommonLayout;
