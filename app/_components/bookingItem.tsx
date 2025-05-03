import React from 'react'
import { Sheet, SheetTrigger } from './ui/sheet'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarImage } from './ui/avatar'

export default function BookingItem() {
  return (
    <Sheet>
        <SheetTrigger className='w-full min-w-[90%]'>
            <Card className="bg-muted min-w-[90%]">
                <CardContent className='flex justify-between p-0'>
                    <div className='flex flex-col gap-2 py-5 pl-5'> {/* Esque.  */}
                        <Badge className='w-fit bg-primary text-accent text-sm'>Confirmado</Badge>
                        <h3 className='font-semibold text-xl right-10'>Corte de Cabelo</h3>

                        <div className='gap-2 flex items-center'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src='https://casaeconstrucao.vivadecora.com.br/wp-content/uploads/2020/11/A-lumin%C3%A1ria-trilho-traz-uma-nova-perspectiva-par-aa-decora%C3%A7%C3%A3o-de-barbearia.-Fonte-Pinterest.jpg' />
                            </Avatar>

                            <span className='text-sm'>Barbearia Vintage</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center border-l-2 border-solid px-5'>{/* Direi.  */}
                        <p className="text-sm capitalize">
                            Maio
                        </p>
                        <p className="text-2xl">
                            10
                        </p>
                        <p className="text-sm">
                            13:30
                        </p>
                    </div>
                </CardContent>
            </Card>
        </SheetTrigger>
    </Sheet>
  )
}