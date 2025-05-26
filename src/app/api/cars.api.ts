import { CarData, CarsResponse } from "../../interfaces/car.interface";

export async function getAllCars(
  offset: number = 0,
  limit: number = 5
): Promise<CarsResponse> {
  const response = await fetch(
    `http://localhost:4000/api/v1/cars?offset=${offset}&limit=${limit}`,
    { cache: "no-store" }
  );
  return await response.json();
}

export async function addCar(carData: CarData) {
  const res = await fetch("http://localhost:4000/api/v1/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ4MjM0MTE1LCJleHAiOjE3NDgyNDEzMTV9.dKuXmJwz9n5MhrHfv1wZLJLtzLl2BnxLJ9PpM6Jd_7U`
    },
    body: JSON.stringify(carData),
  });

  return await res.json();
}

export async function getCarById(carId: number): Promise<CarData> {
  const res = await fetch(`http://localhost:4000/api/v1/cars/${carId}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ4MjM0MTE1LCJleHAiOjE3NDgyNDEzMTV9.dKuXmJwz9n5MhrHfv1wZLJLtzLl2BnxLJ9PpM6Jd_7U`
    }
  });
  return await res.json();
}

export async function updateCar(carData: CarData) {
  const res = await fetch(`http://localhost:4000/api/v1/cars/${carData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ4MjM0MTE1LCJleHAiOjE3NDgyNDEzMTV9.dKuXmJwz9n5MhrHfv1wZLJLtzLl2BnxLJ9PpM6Jd_7U`
    },
    body: JSON.stringify(carData),
  });

  return await res.json();
}

export async function deleteCar(CarId: number) {
  await fetch(`http://localhost:4000/api/v1/cars/${CarId}`, {
    method: "DELETE",
    // Add Authorization header if you have a token, e.g. 'Bearer <token>'
    // headers: { "Authorization": "Bearer <token>" }
    headers: { 
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ4MjM0MTE1LCJleHAiOjE3NDgyNDEzMTV9.dKuXmJwz9n5MhrHfv1wZLJLtzLl2BnxLJ9PpM6Jd_7U`
    }
  });
}