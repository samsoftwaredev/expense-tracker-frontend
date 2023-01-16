import React from "react";

export interface INTERFACE_PROJECT {
  name: string;
  description: string;
}

export interface INTERFACE_PROJECT_ITEM extends INTERFACE_PROJECT {
  id: string;
}

export interface INTERFACE_PROJECT_LIST {
  value: string;
  name: string;
  label: string;
  component: React.ReactNode;
}

export interface INTERFACE_EXPENSE {
  name: string;
  description: string;
  amount: string;
  location: string;
}

export interface INTERFACE_EXPENSE_ITEM extends INTERFACE_EXPENSE {
  id: string;
}
