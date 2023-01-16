import React from "react";

export const projectDataToList = (data: any, component: React.ReactNode) => {
  Object.keys(data).map((key) => {
    const p = data[key];
    return {
      value: key,
      name: p.name,
      label: p.name,
      component,
    };
  });
};
