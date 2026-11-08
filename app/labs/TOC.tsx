"use client";
import "@/app/labs/lab2/tailwind/utilities.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/") },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.includes("/lab2") },
  { href: "/labs/lab2/tailwind", id: "wd-lab2-tailwind-link", label: "Tailwind CSS", match: () => false },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.includes("/lab3") },
  { href: "/labs/lab4", id: "wd-lab4-link", label: "Lab 4", match: (p: string) => p.includes("/lab4") },
  { href: "/labs/lab5", id: "wd-lab5-link", label: "Lab 5", match: () => false },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  { href: "/book/ch1", id: "wd-toc-book-link", label: "Chapter 1", match: () => false },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3", match: () => false },
] as const;

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-toc" className="p-2">
      <p className="font-semibold">Dhrumi Ajaybhai Patel</p>
      <ul className="m-0 list-none p-0">
        {LINKS.map((link) => {
          const active = link.match(pathname);
          return (
            <li key={link.id} className="mb-1">
              <Link
                href={link.href}
                id={link.id}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "rounded bg-blue-600 px-2 py-1 text-sm font-medium text-white no-underline"
                    : "text-blue-600 no-underline hover:underline"
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}