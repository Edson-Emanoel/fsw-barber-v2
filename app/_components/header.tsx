import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-popover p-3 mb-2 flex items-center justify-between rounded-b-md">
      header

      <Button variant="outline" className="p-3 bg-card hover:bg-card-foreground hover:text-background transition-colors duration-300">
        <MenuIcon />
      </Button>
    </div>
  );
}
