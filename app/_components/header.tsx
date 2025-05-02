import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-accent p-3 mb-2 flex items-center justify-between rounded-b-md">
      header
      <Button variant="outline" className="bg-card p-2">
        <MenuIcon />
      </Button>
    </div>
  );
}
