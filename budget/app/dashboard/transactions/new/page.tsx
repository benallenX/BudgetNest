import Header from '@/components/Header'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import {transForm} from '@/components/trans-form'
const NewTransaction = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10'>
        <Header/>
        <Breadcrumb>
            <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href='/dashboard'>Dashboard</Link>
                </BreadcrumbLink>                
             </BreadcrumbItem>
             <BreadcrumbSeparator/>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href='/dashboard/transactions'>Transactions</Link>
                </BreadcrumbLink>                
             </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        New Transaction
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <Card className='mt-6  max-w-screen-md'>
            <CardHeader>
                <CardTitle> New Transaction</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Form for creating a new transaction will go here */}
                <div className='w-full'>
                    <transForm />
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default NewTransaction