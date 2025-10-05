import { Link2, Sparkles, Download } from "lucide-react"

const steps = [
  {
    icon: Link2,
    title: "粘贴链接",
    description: "只需将任何YouTube视频链接粘贴到我们的智能解析器中。",
  },
  {
    icon: Sparkles,
    title: "AI分析",
    description: "我们的AI将内容重组为有序、易消化的部分。",
  },
  {
    icon: Download,
    title: "导出保存",
    description: "以多种格式下载您的报告，保存以供日后参考。",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">工作原理</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            三个简单步骤，将任何YouTube视频转化为结构化的学习资源
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
