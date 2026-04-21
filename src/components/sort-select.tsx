"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function SortSelect({ defaultValue }: { defaultValue: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);

    router.push(`/?${params.toString()}`);
  };

  return (
    <select
      value={searchParams.get("sort") ?? defaultValue}
      onChange={(e) => handleSortChange(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
    >
      <option value="trending">🔥 Trending</option>
      <option value="newest">✨ Newest</option>
      <option value="oldest">🕰️ Oldest</option>
    </select>
  );
}
