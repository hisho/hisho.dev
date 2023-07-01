'use client'
import { Input } from '@/src/component/from/input/input'
import { Textarea } from '@/src/component/from/textarea/textarea'
import {
  CreateContactError,
  createContact,
} from '@/src/feature/contact/create-contact/create-contact'
import { useForm } from '@/src/lib/form/use-form/use-form'
import { useState, useTransition } from 'react'
import { z } from 'zod'

const schema = z.object({
  email: z.string(),
  message: z.string(),
  name: z.string(),
})

type Props = Partial<{
  onError: () => void
  onSuccess: () => void
}>
export const CreateContactForm = ({ onError, onSuccess }: Props = {}) => {
  const [isPending, startTransition] = useTransition()
  const { formState, handleSubmit, register, reset } = useForm({
    schema,
  })
  const [errors, setErrors] = useState<CreateContactError | undefined>(
    undefined
  )

  const handleFormSubmit = async (input: z.output<typeof schema>) => {
    try {
      const result = await createContact(input)
      if (result.success) {
        onSuccess?.()
        reset()
        setErrors(undefined)
      } else {
        console.log(result.error)
        setErrors(result.error)
        onError?.()
      }
    } catch (e) {
      console.log(e)
      onError?.()
    }
  }

  return (
    <form
      onSubmit={(e) =>
        startTransition(() => handleSubmit((i) => handleFormSubmit(i))(e))
      }
      className={'grid gap-y-2'}
    >
      <div>
        <label htmlFor={'name'}>名前</label>
        <Input {...register('name')} />
        {formState.errors.name?.message && (
          <span>{formState.errors.name.message}</span>
        )}
        {errors?.name &&
          errors.name.map((m) => <span key={`name_${m}`}>{m}</span>)}
      </div>
      <div>
        <label htmlFor={'email'}>メールアドレス</label>
        <Input {...register('email')} type={'email'} />
        {formState.errors.email?.message && (
          <span>{formState.errors.email.message}</span>
        )}
        {errors?.email &&
          errors.email.map((m) => <span key={`email_${m}`}>{m}</span>)}
      </div>
      <div>
        <label htmlFor={'message'}>メッセージ</label>
        <Textarea {...register('message')} />
        {formState.errors.email?.message && (
          <span>{formState.errors.email.message}</span>
        )}
        {errors?.message &&
          errors.message.map((m) => <span key={`message_${m}`}>{m}</span>)}
      </div>
      <button>{isPending ? '送信中' : '送信'}</button>
    </form>
  )
}
