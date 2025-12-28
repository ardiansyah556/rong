import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Send, Users, Zap } from "lucide-react";

/**
 * Rong Memecoin Website - Home Page
 * Design: BSC-Inspired Brand (深黑色背景 + 币安黄色强调)
 * 色彩: #0B0E11 (深黑) + #F3BA2F (币安黄) + #1E3A8A (深蓝)
 * 排版: Sora (标题) + Roboto Mono (数据)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/rong-logo.jpg"
              alt="Rong Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-accent">RONG</h1>
              <p className="text-xs text-muted-foreground">首个 Nina Rong 代币</p>
            </div>
          </div>

          <div className="hidden gap-6 md:flex">
            <a href="#features" className="text-sm hover:text-accent transition-colors">
              功能
            </a>
            <a href="#tokenomics" className="text-sm hover:text-accent transition-colors">
              代币经济
            </a>
            <a href="#community" className="text-sm hover:text-accent transition-colors">
              社区
            </a>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <a href="https://four.meme" target="_blank" rel="noopener noreferrer">
                购买 <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-2xl opacity-20 rounded-full" />
              <img
                src="/images/rong-logo.jpg"
                alt="Rong Token"
                className="relative h-32 w-32 rounded-full object-cover mx-auto border-4 border-accent"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-accent">RONG</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            币安智能链上的首个 Nina Rong 代币
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            加入 Rong 社区，体验 BSC 上最有趣的 Memecoin。由 Nina Rong 创建，为社区而生。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-yellow-500 text-base font-semibold"
              asChild
            >
              <a href="https://four.meme" target="_blank" rel="noopener noreferrer">
                在 Four.Meme 购买 <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              asChild
            >
              <a href="#community">加入社区</a>
            </Button>
          </div>

          {/* Ticker Info */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">合约地址</p>
              <p className="font-mono text-sm text-accent truncate">RONG</p>
            </div>
            <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">区块链</p>
              <p className="font-mono text-sm text-accent">BSC</p>
            </div>
            <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">平台</p>
              <p className="font-mono text-sm text-accent">Four.Meme</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-accent text-2xl">↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 relative"
        style={{
          backgroundImage: "url('/images/features-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              为什么选择 <span className="text-accent">RONG</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Rong 不仅仅是一个 Memecoin，它代表了社区、创新和真正的价值
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="bg-card/80 backdrop-blur border-border hover:border-accent transition-colors group">
              <div className="p-6">
                <div className="mb-4 inline-block p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">快速交易</h3>
                <p className="text-gray-400">
                  在 BSC 上享受闪电般的交易速度和极低的 Gas 费用
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card/80 backdrop-blur border-border hover:border-accent transition-colors group">
              <div className="p-6">
                <div className="mb-4 inline-block p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">社区驱动</h3>
                <p className="text-gray-400">
                  由 Nina Rong 和充满热情的社区成员共同推动发展
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card/80 backdrop-blur border-border hover:border-accent transition-colors group">
              <div className="p-6">
                <div className="mb-4 inline-block p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Send className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">公平启动</h3>
                <p className="text-gray-400">
                  在 Four.Meme 上进行公平启动，确保所有人平等机会
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              代币经济学
            </h2>
            <p className="text-gray-400 text-lg">
              透明的代币分配和可持续的经济模型
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tokenomics Info */}
            <div>
              <Card className="bg-card border-border p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">项目信息</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-gray-400">代币名称</span>
                    <span className="font-mono text-accent font-semibold">RONG</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-gray-400">区块链</span>
                    <span className="font-mono text-accent font-semibold">BSC</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-gray-400">启动平台</span>
                    <span className="font-mono text-accent font-semibold">Four.Meme</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-gray-400">创建者</span>
                    <span className="font-mono text-accent font-semibold">Nina Rong</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-400">类型</span>
                    <span className="font-mono text-accent font-semibold">Memecoin</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Visual Token */}
            <div className="flex items-center justify-center">
              <img
                src="/images/token-visual.jpg"
                alt="Token Visual"
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        className="py-20 relative"
        style={{
          backgroundImage: "url('/images/community-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              加入 <span className="text-accent">RONG</span> 社区
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              与全球 Rong 持有者连接，分享想法，共同成长
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Twitter */}
            <Card className="bg-card/80 backdrop-blur border-border hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20 group cursor-pointer">
              <a
                href="http://x.com/rongonbsc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 flex flex-col items-center text-center h-full"
              >
                <div className="mb-4 p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Twitter</h3>
                <p className="text-sm text-gray-400">
                  关注最新动态和公告
                </p>
              </a>
            </Card>

            {/* Telegram */}
            <Card className="bg-card/80 backdrop-blur border-border hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20 group cursor-pointer">
              <a
                href="https://t.me/Rongportal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 flex flex-col items-center text-center h-full"
              >
                <div className="mb-4 p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.97-.924c-.644-.203-.658-.644.135-.954l11.593-4.47c.538-.196 1.006.128.832.941z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Telegram</h3>
                <p className="text-sm text-gray-400">
                  加入社区讨论和交流
                </p>
              </a>
            </Card>

            {/* Four.Meme */}
            <Card className="bg-card/80 backdrop-blur border-border hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20 group cursor-pointer">
              <a
                href="https://four.meme"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 flex flex-col items-center text-center h-full"
              >
                <div className="mb-4 p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <ExternalLink className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Four.Meme</h3>
                <p className="text-sm text-gray-400">
                  在启动平台购买和交易
                </p>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/rong-logo.jpg"
                  alt="Rong"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-lg font-bold text-accent">RONG</span>
              </div>
              <p className="text-sm text-gray-400">
                首个 Nina Rong 代币，由社区驱动的 BSC Memecoin
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">快速链接</h4>
              <div className="space-y-2">
                <a
                  href="https://four.meme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                >
                  购买 <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="http://x.com/rongonbsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                >
                  Twitter <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://t.me/Rongportal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                >
                  Telegram <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-bold mb-4">信息</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>区块链: BSC</p>
                <p>代币: RONG</p>
                <p>启动: Four.Meme</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Rong Memecoin. 由 Nina Rong 创建。</p>
            <p className="mt-2">
              免责声明: RONG 是一个 Memecoin，仅供娱乐目的。投资前请进行充分研究。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
