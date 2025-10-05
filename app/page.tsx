import { HowItWorks } from "@/components/how-it-works"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { VideoAnalyzer } from "@/components/video-analyzer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoAnalyzer />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
