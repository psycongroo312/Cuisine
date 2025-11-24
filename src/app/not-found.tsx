"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-8xl font-bold text-gray-300">404</div>
      <h1 className="text-3xl font-bold tracking-tight">Старница не найдена</h1>

      <div className="py-6">
        <Button as={Link} color="primary" variant="shadow" href="/">
          Вернутся на главную
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
