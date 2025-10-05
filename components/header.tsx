import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-2">
          <Youtube className="h-8 w-8 text-red-500" />
          <span className="text-xl font-bold">从YouTube学习</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            工作原理
          </Link>
          <Link
            href="#examples"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            案例展示
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            用户评价
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            定价
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            登录
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            开始使用
          </Button>
        </div>
      </div>
    </header>
  )
}
