import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "陈莎拉",
    role: "内容创作者",
    avatar: "/diverse-woman-portrait.png",
    content:
      "这个工具彻底改变了我的内容创作工作流程。我现在可以在几分钟内将视频内容重新利用为博客文章，而不是几个小时。",
    rating: 5,
  },
  {
    name: "迈克尔·罗德里格斯",
    role: "软件工程师",
    avatar: "/man.jpg",
    content:
      "作为一名开发者，我观看了大量的技术教程。从YouTube学习帮助我快速提取所需的关键信息，而无需重新观看整个视频。",
    rating: 5,
  },
  {
    name: "艾米丽·沃森",
    role: "学生",
    avatar: "/diverse-students-studying.png",
    content: "非常适合学习！我可以将讲座录音转换为带有时间戳的有组织的笔记。我的成绩显著提高了。",
    rating: 5,
  },
  {
    name: "大卫·金",
    role: "营销经理",
    avatar: "/professional-teamwork.png",
    content: "AI生成的摘要非常准确。我们用它来分析竞争对手的内容，并保持行业趋势的领先地位。",
    rating: 5,
  },
  {
    name: "丽莎·汤普森",
    role: "研究员",
    avatar: "/diverse-research-team.png",
    content: "对学术研究来说非常宝贵。我可以快速浏览数小时的访谈，提取相关的引用和见解。",
    rating: 5,
  },
  {
    name: "詹姆斯·帕克",
    role: "企业家",
    avatar: "/business-meeting-diversity.png",
    content: "这对学习来说是一个游戏规则改变者。我可以在相同的时间内消费10倍的教育内容。强烈推荐！",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">深受数千人喜爱</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            加入超过10,000名专业人士，他们正在使用从YouTube学习更快地学习
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-pretty">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
