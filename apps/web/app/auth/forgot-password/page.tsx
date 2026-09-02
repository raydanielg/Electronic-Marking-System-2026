import { ForgotPasswordForm } from "@workspace/ui/components/forgot-password-form"
import { Toaster } from "@workspace/ui/components/sonner"

export default function ForgotPasswordPage() {
  return (
    <div className="relative flex min-h-svh items-center justify-center p-6">
      <img
        src="/assets/bg (1).jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
      />
      <div className="absolute inset-0 bg-black/20" />
      <ForgotPasswordForm className="relative z-10 w-full max-w-md" />
      <Toaster />
    </div>
  )
}
