import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Lightbulb } from "lucide-react"

const examples = [
  {
    icon: BookOpen,
    title: "更快学习",
    description: "教育内容",
    example: "将2小时的讲座转换为10分钟的摘要，包含关键概念、时间戳和可操作的见解。",
    stats: "节省80%时间",
  },
  {
    icon: Code,
    title: "创造更多内容",
    description: "内容创作",
    example: "在几分钟内将视频教程转换为博客文章、社交媒体内容和文档。",
    stats: "内容产出5倍",
  },
  {
    icon: Lightbulb,
    title: "构建更智能的AI",
    description: "AI训练",
    example: "从视频中提取结构化数据，用高质量、有组织的信息训练AI模型。",
    stats: "数据质量10倍",
  },
]

export function CaseStudies() {
  return (
    <section id="examples" className="py-20 md:py-32 relative">
      {/* Decorative banana */}
      <div className="absolute top-10 left-1/4 text-4xl opacity-10 rotate-45 hidden lg:block">🍌</div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">强大的使用场景</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            看看专业人士如何使用从YouTube学习来加速他们的工作流程
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {examples.map((example, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <example.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{example.example}</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-primary">
                  {example.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
