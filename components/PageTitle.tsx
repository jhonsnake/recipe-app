import { Separator } from "@/components/ui/separator"

interface PageTitleProps {
    title: string
}

const PageTitle = ({title}: PageTitleProps) => {
  return (
    <div className="my-6">
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{title}</h1>
    <Separator />
    </div>
  )
}

export default PageTitle