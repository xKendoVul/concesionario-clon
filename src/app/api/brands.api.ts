import { BrandData, BrandsResponse } from "../../interfaces/brand.interface";

export async function getAllBrands(
  offset: number = 0,
  limit: number = 5
): Promise<BrandsResponse> {
  const response = await fetch(
    `http://localhost:4000/api/v1/brands?offset=${offset}&limit=${limit}`,
    { cache: "no-store" }
  );
  return await response.json();
}

export async function addBrand(brandData: BrandData) {
  const res = await fetch("http://localhost:4000/api/v1/brands", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(brandData),
  });

  return await res.json();
}

export async function updateBrand(brandData: BrandData) {
  const res = await fetch(`http://localhost:4000/api/v1/brands/${brandData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ4MjM0MTE1LCJleHAiOjE3NDgyNDEzMTV9.dKuXmJwz9n5MhrHfv1wZLJLtzLl2BnxLJ9PpM6Jd_7U`
    },
    body: JSON.stringify(brandData),
  });

  return await res.json();
}

export async function deleteBrand(brandId: number) {
  await fetch(`http://localhost:4000/api/v1/brands/${brandId}`, {
    method: "DELETE",
  });
}
