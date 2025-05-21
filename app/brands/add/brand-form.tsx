"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { addBrand} from '../brands.api';
import { BrandData } from '@/interfaces/brand-interface'
// import React from 'react'

function BrandForm() {
  const { register, handleSubmit } =useForm<BrandData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await addBrand(data);
  });

  return (
    <div>BrandForm
      <form onSubmit={onSubmit}>
        <Label>Marca</Label>
        <Input {...register("name")}/>
        <Label>Descripcion</Label>
        <Input {...register("description")}/>
        <br />
        <Button>Agregar Marca</Button>
        </form>
    </div>
  )
}

export default BrandForm