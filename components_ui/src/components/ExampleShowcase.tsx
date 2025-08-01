import React from "react";
import { Button } from "./Button";

export const ExampleShowcase: React.FC = () => (
  <div className="flex flex-col gap-4">
    <Button>Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
  </div>
);
