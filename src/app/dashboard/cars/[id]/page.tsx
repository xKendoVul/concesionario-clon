import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarForm } from "@/components/cars/car-form";

function CarsEditPage({ params }: { params: { id: string }}) {
  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Tabla de Carros</CardTitle>
        </CardHeader>
        <CardContent>
          <CarForm carId={Number(params.id)} />
        </CardContent>
      </Card>
    </div>
  );
}

export default CarsEditPage;