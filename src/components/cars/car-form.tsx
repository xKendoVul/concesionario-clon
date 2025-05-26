// import React from "react";
"use client";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { CarData } from '../../interfaces/car.interface';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { addCar, getCarById, updateCar } from "@/app/api/cars.api";
import { useEffect, useState } from "react";
import { getAllBrands } from "@/app/api/brands.api";

interface Brand {
  id: number;
  name: string
}

export const metadata = {
  title: "Agregar Marca",
  description: "Agregar una nueva marca al sistema",
};

export function CarForm({ carId }: { carId?: number}) {
  const { register, handleSubmit, setValue, reset } = useForm<CarData>();
  const router = useRouter();

  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getAllBrands();
      setBrands(data.data);
      console.log(data.data)
    };
    fetchBrands();

    if (carId) {
      const fetchCar = async () => {
        const car = await getCarById(Number(carId));
        reset({
          model: car.model,
          description: car.description,
          year: car.year,
          stock: car.stock,
          price: car.price,
          brand_id: car.brand_id,
          isAvailable: car.isAvailable,
        });
      };
      fetchCar();
    }
  }, [carId, reset ]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const fixedData = {
      ...data,
      year: Number(data.year),
      stock: Number(data.stock),
      price: Number(data.price),
      brand_id: Number(data.brand_id),
      isAvailable: data.isAvailable,
    };
    if (carId) {
      await updateCar({ ...fixedData, id: carId });
      alert("Carro Actualizado")
    } else {
      await addCar(fixedData);
      alert("Carro Creado")
    }
    router.push("/dashboard/cars");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Modelo</Label>
      <Input {...register("model")} />
      <Label>Descripción</Label>
      <Input {...register("description")} />
      <Label>Año</Label>
      <Input type="number" {...register("year")} />
      <Label>Stock</Label>
      <Input type="number"{...register("stock")} />
      <Label>Precio</Label>
      <Input type="number"{...register("price")} />
      <Label>Marca</Label>
      <Select onValueChange={(value) => setValue("brand_id", Number(value))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent className="bg-white">
          {brands.map((brand) => (
            <SelectItem key={brand.id} value={brand.id.toString()}>
              {brand.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Label>Disponibilidad</Label>
      <Select onValueChange={(value) => setValue("isAvailable", value === "true")} >
        <SelectTrigger className="w-[180px]">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="true">Si</SelectItem>
          <SelectItem value="false">No</SelectItem>
        </SelectContent>
      </Select>
      <br/>
      <Button className={buttonVariants({ variant: "agregar" })}>
        {carId? "Actualizar" : "Agregar"}
      </Button>
    </form>
  );
}
