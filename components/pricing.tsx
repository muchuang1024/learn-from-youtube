import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "基础版",
    price: 20,
    description: "适合刚开始的个人用户",
    features: ["每月10个视频", "基础AI分析", "PDF导出", "邮件支持", "7天历史记录"],
    popular: false,
  },
  {
    name: "标准版",
    price: 60,
    description: "最适合专业人士和创作者",
    features: ["每月50个视频", "高级AI分析", "多种导出格式", "优先支持", "30天历史记录", "自定义模板", "API访问"],
    popular: true,
  },
  {
    name: "高级版",
    price: 100,
    description: "适合团队和高级用户",
    features: [
      "无限视频",
      "高级AI分析",
      "所有导出格式",
      "24/7优先支持",
      "无限历史记录",
      "自定义模板",
      "完整API访问",
      "团队协作",
      "白标选项",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      {/* Decorative bananas */}
      <div className="absolute top-20 right-20 text-5xl opacity-10 -rotate-12 hidden lg:block">🍌</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-10 rotate-12 hidden lg:block">🍌</div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">简单透明的定价</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            选择最适合您需求的方案。所有方案均包含14天免费试用。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary border-2 shadow-lg" : "border-2"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    最受欢迎
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">¥{plan.price}</span>
                  <span className="text-muted-foreground">/月</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                  {plan.popular ? "开始使用" : "开始免费试用"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          所有方案均包含14天免费试用 • 无需信用卡 • 随时取消
        </p>
      </div>
    </section>
  )
}
