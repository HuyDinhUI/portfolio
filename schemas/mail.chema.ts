import z from "zod";

const MailSchema = z.object({
    name: z.string().max(50),
    email: z.email(),
    message: z.string(),
})

export type MailFormValue = z.infer<typeof MailSchema>
export default MailSchema