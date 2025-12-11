<script setup lang="ts">
const features = [
  {
    icon: 'i-heroicons-cpu-chip',
    title: 'DeepSeek AI Core',
    description: 'Powered by next-gen AI models to generate high-alpha trading strategies based on real-time market data.',
    color: 'text-primary-400'
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Non-Custodial Security',
    description: 'Your funds never leave your wallet. We execute trades via smart contracts with zero counterparty risk.',
    color: 'text-green-400'
  },
  {
    icon: 'i-heroicons-presentation-chart-line',
    title: 'Institutional Analytics',
    description: 'Professional-grade backtesting engine and real-time performance monitoring dashboard.',
    color: 'text-blue-400'
  }
]

const stats = [
  { label: 'Total Volume', value: '$2.4B+' },
  { label: 'Active Strategies', value: '12,040' },
  { label: 'AI Predictions', value: '89.4%' }
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 font-sans text-slate-200 relative overflow-hidden">
    
    <!-- Background Gradients -->
    <div class="absolute top-0 left-0 w-full h-[500px] bg-primary-900/20 blur-[120px] pointer-events-none" />
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] pointer-events-none" />
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
    
    <!-- Grid Background (like login page) -->
    <div class="absolute inset-0 opacity-20 pointer-events-none cyber-grid-bg"></div>

    <!-- Hero Section -->
    <div class="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-center">
      <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-medium uppercase tracking-wider shadow-[0_0_10px_rgba(var(--color-primary-500),0.2)]">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
        </span>
        Live on Mainnet
      </div>

      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8">
        <span class="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          The Future of
        </span>
        <br />
        <span class="bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(var(--color-primary-500),0.3)]">
          AI Quant Trading
        </span>
      </h1>

      <p class="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
        Unlock institutional-grade trading strategies powered by DeepSeek AI. 
        Fully decentralized, non-custodial, and transparent.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <UButton
          to="/login"
          size="xl"
          color="primary"
          variant="solid"
          class="px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(var(--color-primary-500),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.5)] transition-all duration-300"
        >
          Launch App
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right" />
          </template>
        </UButton>
        <!-- <UButton
          size="xl"
          color="gray"
          variant="ghost"
          class="px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 transition-all"
        >
          View Documentation
        </UButton> -->
      </div>
      
      <!-- Stats Row -->
      <div class="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 border-t border-slate-800/50 pt-12">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center">
          <span class="text-3xl md:text-4xl font-bold text-white mb-2">{{ stat.value }}</span>
          <span class="text-slate-500 uppercase text-xs tracking-widest">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Feature Grid -->
    <div class="relative z-10 container mx-auto px-4 py-24">
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.title" 
          class="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/30 hover:bg-slate-900/80 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div class="relative z-10">
            <div class="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(var(--color-primary-500),0.2)]">
              <UIcon :name="feature.icon" :class="['w-6 h-6', feature.color]" />
            </div>
            <h3 class="text-xl font-bold text-slate-200 mb-3 group-hover:text-white transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-slate-400 leading-relaxed text-sm">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="relative z-10 container mx-auto px-4 pb-24 text-center">
      <div class="p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/10 blur-[100px] pointer-events-none" />
        
        <div class="relative z-10">
          <h2 class="text-3xl font-bold text-white mb-6">Ready to start trading?</h2>
          <p class="text-slate-400 mb-8 max-w-xl mx-auto">
            Join thousands of traders using AI to outperform the market. No sign-up required, just connect your wallet.
          </p>
          <UButton
            to="/login"
            size="lg"
            color="white"
            variant="solid"
            class="rounded-full px-8 text-slate-900 font-bold hover:bg-slate-200 transition-colors"
          >
            Get Started Now
          </UButton>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Grid Background - matching login page style */
.cyber-grid-bg {
  background-image: 
    linear-gradient(to right, #334155 1px, transparent 1px),
    linear-gradient(to bottom, #334155 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);
}
</style>
