"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Submitted URL:", url)
    // Handle URL submission
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Decorative banana elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 rotate-12 hidden lg:block">🍌</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-20 -rotate-12 hidden lg:block">🍌</div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>AI驱动的视频学习</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            将YouTube视频转化为<span className="text-primary">易读报告</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto">
            将数小时的视频内容浓缩为几分钟的阅读。更快学习，创造更多内容，用我们的智能视频解析器构建更智能的AI。
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="在此粘贴YouTube链接..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 h-12 text-base"
                required
              />
              <Button type="submit" size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                解析视频
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <p className="text-sm text-muted-foreground mt-4">无需信用卡 • 免费试用</p>
        </div>
      </div>
    </section>
  )
}
