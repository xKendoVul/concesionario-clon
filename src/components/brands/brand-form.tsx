// import React from "react";
"use client";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { BrandData } from "../../interfaces/brand.interface";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { addBrand, updateBrand } from "../../app/api/brands.api";

export const metadata = {
  title: "Agregar Marca",
  description: "Agregar una nueva marca al sistema",
};

export function BrandForm({ brandId }: { brandId?: number }) {
  const { register, handleSubmit } = useForm<BrandData>();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (brandId) {
      await updateBrand({ ...data, id: brandId });
      alert("Marca Actualizad");
    } else {
      await addBrand(data);
      alert("Marca Creada")
    }
    router.push("/dashboard/brands");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Marca</Label>
      <Input {...register("name")} />
      <Label>Descripción</Label>
      <Input {...register("description")} />

      <Button className={buttonVariants({ variant: "agregar" })}>
        {brandId? "Actualizar" : "Agregar"}
      </Button>
    </form>
  );
}

export default BrandForm;
