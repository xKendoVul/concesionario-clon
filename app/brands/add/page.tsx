import { Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import BrandForm from './brand-form';
import React from 'react'

function brandsAddPage() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Card>
        <CardHeader>
          <CardTitle>Agregar Marca Nueva</CardTitle>
        </CardHeader>
        <CardContent>
          <BrandForm/>
        </CardContent>
      </Card>
    </div>
  )
}

export default brandsAddPage