import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  ArrowRight, 
  Database, 
  Workflow, 
  LineChart,
  BookOpen,
  Star
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          SEVEN<span className="text-blue-600">17</span> SYSTEMS
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-blue-600 transition-colors">Architecture Gallery</a>
          <a href="#lab" className="hover:text-blue-600 transition-colors">The Systems Lab</a>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Book a Diagnostic</Button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-6xl mx-auto text-center">
        <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50 px-4 py-1">
          Senior CRM Solutions Architect
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
          Stop Guessing. Start <span className="text-blue-600">Architecting</span> Your Growth.
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          I help e-commerce and SaaS brands recover hidden revenue by installing the same 
          Fortune 500-grade lifecycle systems I built for <span className="font-semibold text-slate-900">Disney, Sony, and Toyota.</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
            Get Your Profit Path Assessment <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Explore the 717 System
          </Button>
        </div>
      </section>

      {/* Social Proof / Power Couple Section */}
      <section className="bg-white py-16 border-y">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Trusted by Global Enterprises & High-Performance Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex justify-center font-bold text-xl">DISNEY</div>
            <div className="flex justify-center font-bold text-xl">SONY</div>
            <div className="flex justify-center font-bold text-xl">TOYOTA</div>
            <div className="flex justify-center font-bold text-xl">U.S. ARMY</div>
            <div className="flex justify-center font-bold text-xl italic">EBONY 100</div>
          </div>
          <p className="text-center mt-12 text-slate-500 italic text-sm">
            &quot;Behind every high-achiever is a system that works. I architect the frameworks that power global brands and high-performance lives.&quot;
          </p>
        </div>
      </section>

      {/* Services Section - The Profit Path Pivot */}
      <section id="services" className="px-8 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Profit Path Framework</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I don&apos;t just &quot;fix emails.&quot; I install a technical infrastructure designed to scale.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="text-blue-600 h-6 w-6" />
              </div>
              <CardTitle className="text-xl">The Profit Path Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                A professional diagnostic to identify and quantify hidden revenue opportunities. 
                Includes a custom ROI roadmap and 3 &quot;Quick-Win&quot; automations.
              </p>
              <div className="text-2xl font-bold text-slate-900">$1,500</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-600 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
              Most Popular
            </div>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600 h-6 w-6" />
              </div>
              <CardTitle className="text-xl">The Profit Pillar Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                Surgical solution for your #1 revenue leak. We design and deploy 3-5 custom 
                automations with advanced behavioral triggers and full documentation.
              </p>
              <div className="text-2xl font-bold text-slate-900">$3,500</div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="text-blue-600 h-6 w-6" />
              </div>
              <CardTitle className="text-xl">The 717 Architecture Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                A complete lifecycle transformation. 12-15 custom automations, full data modeling, 
                and team training. The &quot;Fortune 500&quot; engine for your business.
              </p>
              <div className="text-2xl font-bold text-slate-900">$9,900</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Architecture Gallery - Portfolio */}
      <section id="gallery" className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Architecture Gallery</h2>
              <p className="text-slate-400 max-w-xl">
                See the invisible frameworks that power millions in revenue. 
                From 2B+ subscriber logic to mid-market growth engines.
              </p>
            </div>
            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
              View Full Portfolio
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="aspect-video bg-slate-800 rounded-xl mb-6 overflow-hidden border border-slate-700 flex items-center justify-center">
                <Workflow className="h-16 w-16 text-slate-600 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Disney ABC: Multi-Channel Onboarding</h3>
              <p className="text-slate-400 text-sm">
                Architected a Braze-powered journey integrating Email, SMS, and In-App messaging. 
                Result: 58% increase in user engagement.
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video bg-slate-800 rounded-xl mb-6 overflow-hidden border border-slate-700 flex items-center justify-center">
                <Database className="h-16 w-16 text-slate-600 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sony Pictures: 2B+ Subscriber Reactivation</h3>
              <p className="text-slate-400 text-sm">
                Engineered complex SQL-based segmentation logic for a global reactivation campaign. 
                Result: 62% CTR increase across 17 business units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Systems Lab - Blog */}
      <section id="lab" className="px-8 py-24 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">The Systems Lab</h2>
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
            Read All Insights <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-slate-400" />
            </div>
            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 border-none">Case Study</Badge>
            <h3 className="text-xl font-bold leading-tight hover:text-blue-600 cursor-pointer transition-colors">
              The Disney Method: How to build a 58% engagement onboarding series.
            </h3>
            <p className="text-slate-600 text-sm">
              A deep dive into the multi-channel architecture we used to scale Disney&apos;s digital presence.
            </p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-slate-400" />
            </div>
            <Badge className="bg-green-50 text-green-700 hover:bg-green-50 border-none">Strategy</Badge>
            <h3 className="text-xl font-bold leading-tight hover:text-blue-600 cursor-pointer transition-colors">
              Why your CRM is a &quot;Leaky Bucket&quot; (and how to fix the architecture).
            </h3>
            <p className="text-slate-600 text-sm">
              Identifying the 3 most common structural failures in mid-market CRM systems.
            </p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-slate-400" />
            </div>
            <Badge className="bg-purple-50 text-purple-700 hover:bg-purple-50 border-none">Efficiency</Badge>
            <h3 className="text-xl font-bold leading-tight hover:text-blue-600 cursor-pointer transition-colors">
              The Efficiency Nerd&apos;s Guide to automating your first $1M.
            </h3>
            <p className="text-slate-600 text-sm">
              How to build a &quot;set it and forget it&quot; revenue engine using the 717 framework.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative">
             <div className="absolute inset-0 flex items-center justify-center text-slate-300">
               [Professional Photo of Nicole]
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, I&apos;m Nicole. Your CRM Revenue Architect.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I spent over 10 years in enterprise CRM, building high-performance systems for 
              <span className="font-semibold text-slate-900"> Disney, Sony Pictures, and the U.S. Army.</span> 
              I&apos;ve managed database infrastructures for over 2B+ subscribers and maintained a 99% deployment accuracy rate.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Now, I bring that same &quot;Big System&quot; rigor to e-commerce and SaaS brands. I&apos;m part strategist, 
              part efficiency nerd, and part technical lead. My goal is to build the frameworks that 
              give you the freedom to focus on what truly matters.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-500">Helped over 100+ clients scale with systems.</span>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Book a Diagnostic Call</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter text-white">
            SEVEN<span className="text-blue-600">17</span> SYSTEMS
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <div className="text-sm">
            © 2026 Seven17 Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
