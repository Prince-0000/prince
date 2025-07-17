// utils/api.ts
import { client } from "@/sanity/lib/client";

export const getAboutData = async () => {
  return await client.fetch(
    `*[_type == "about"][0]`,
    {},
    { next: { revalidate: 3600 } } // revalidate every hour
  );
};
export const getDashboardData = async () => {
  const query = `*[_type == "dashboard"][0]`
  return await client.fetch(query, {})
}
