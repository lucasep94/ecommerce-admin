export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-amber-200 flex justify-center h-full items-center">
            {children}
        </div>
    )
}