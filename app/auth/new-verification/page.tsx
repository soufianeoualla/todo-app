
import { VerificationForm } from "@/components/auth/VerificationForm"
import { Suspense } from "react"

const VerificationPage = () => {
  return (
    <Suspense>

      <VerificationForm headerLabel={'Confirming your verification'}/>
    </Suspense>
  )
}

export default VerificationPage
