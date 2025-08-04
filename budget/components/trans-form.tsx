'use client'

import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const transactionFormSchema = z.object({
 transactionType: z.enum(['income', 'expense']),
 category: z.number().positive('Please select a category'),
  transactionDate: z.date()
  .max(addDays(new Date(), 1), 'Date cannot be in the future'),
    amount: z.number().positive('Amount must be a positive number'),
    description: z.string()
    .min(3, 'Description must contain at least 3 characters')
    .max(300, 'Description must contain a maximum of 300 characters')
})


const transForm = () => {
    const form = useForm<z.infer<typeof transactionFormSchema>>({
        resolver: zodResolver(transactionFormSchema),
        defaultValues: {
            amount: 0,
            category: 0,
            description: "",
            transactionDate: new Date(),
            transactionType: "income",
        },
    })
    const handleSubmit = async (data: z.infer<typeof transactionFormSchema>) => {}
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <fieldset
                className="grid gird-cols-2 gap-y-5 gap-x-2 items-start"
                disabled={form.formState.isSubmitting}
            >
            <FormField control={form.control} name="transactionType" render={({field}) => (
                <FormItem>
                    <FormLabel>Transaction Type</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a transaction type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="income">Income</SelectItem>
                                <SelectItem value="expense">Expense</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                </FormItem>
            )} />
            <FormField control={form.control} name="categoryId" render={({field}) => (
                <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* Replace with actual categories */}
                                <SelectItem value="1">Food</SelectItem>
                                <SelectItem value="2">Transport</SelectItem>
                                <SelectItem value="3">Entertainment</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                </FormItem>
            )} />
            </fieldset>
        </form>
    </Form>
  );
}

export default transForm

