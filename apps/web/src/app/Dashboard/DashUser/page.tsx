"use client";

import { Alert } from "flowbite-react";

export function page() {
  return (
    <Alert color="warning" withBorderAccent>
      <span>
        <span className="font-medium">Info alert!</span> Dashbord hanya bisa dibuka oleh Admin.
      </span>
    </Alert>
  );
}