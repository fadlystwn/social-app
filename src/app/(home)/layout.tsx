
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-16 py-8">
      {children}
    </div>
  )
}