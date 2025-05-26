import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BrandForm from "../../../../components/brands/brand-form";

function BrandsAddPage({ params }: { params: { id: string}}) {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Agregar Nueva Marca</CardTitle>
        </CardHeader>
        <CardContent>
          <BrandForm brandId={Number(params.id)}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default BrandsAddPage;