import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex gap-1">
      <Input className="w-full bg-muted" />

      <Button className="bg-accent p-3 text-primary hover:bg-primary hover:text-accent transition-colors duration-300">
        <SearchIcon />
      </Button>
    </div>
  );
}
