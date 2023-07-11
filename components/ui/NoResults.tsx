import React from "react";

type Props = {};

export default function NoResults({}: Props) {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      No results found.
    </div>
  );
}
