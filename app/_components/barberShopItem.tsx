import React from 'react'
import Image from "next/image";
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge';
import { StarIcon } from 'lucide-react';

export default function BrberShopItem() {
  return (
    <Card className='min-w-[167px] rounded-2xl'>
      <CardContent className='p-0 px-1 pt-1'>
        <div className='relative h-[159px] w-full'>
          <Image
            fill
            alt='Barbearia Vintage'
            className='rounded-2xl object-cover'
            src="https://casaeconstrucao.vivadecora.com.br/wp-content/uploads/2020/11/A-lumin%C3%A1ria-trilho-traz-uma-nova-perspectiva-par-aa-decora%C3%A7%C3%A3o-de-barbearia.-Fonte-Pinterest.jpg"
          />
          
          <Badge
            className='left-2 top-2 absolute space-x-1'
            variant='secondary'
          >
            <StarIcon size={12} className='fill-chart-3 border-none' />
            <p className="text-sm font-semibold">5,0</p>
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}