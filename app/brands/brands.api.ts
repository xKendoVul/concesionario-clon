import { BrandData } from "@/interfaces/brand-interface";

export async function addBrand(brandData: BrandData) {
  const res = await fetch("http://localhost:4000/api/v1/brands", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(brandData),
  });

  const data = await res.json();
  console.log(data)
}