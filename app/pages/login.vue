<script setup lang="ts">
const connectWallet = () => {
  alert('Connecting to Web3 Wallet...')
}

// Tech/Cyber background grid visual
const gridStyle = {
  backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
  backgroundSize: '40px 40px',
  maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans text-slate-200 mobile-safe-area">
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-20 pointer-events-none" :style="gridStyle"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none"></div>

    <UCard class="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 ring-1 ring-white/10 shadow-2xl relative z-10">
      <template #header>
        <div class="text-center space-y-2 py-4">
          <div class="flex justify-center mb-4">
            <div class="p-3 bg-primary-500/10 rounded-xl border border-primary-500/20 shadow-[0_0_15px_rgba(var(--color-primary-500),0.3)]">
               <UIcon name="i-heroicons-chart-bar-square" class="w-10 h-10 text-primary-400" />
            </div>
          </div>
          <h1 class="text-2xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Web3 AI Quant
          </h1>
          <p class="text-slate-400 text-sm">
            Institutional-grade AI Trading Terminal
          </p>
        </div>
      </template>

      <div class="space-y-6">
        <div class="bg-primary-500/5 border border-primary-500/10 rounded-xl p-4 text-center">
            <p class="text-slate-300 text-sm">
                Connect your wallet to access the decentralized trading terminal.
            </p>
        </div>

        <UButton
          block
          size="xl"
          color="primary"
          variant="solid"
          class="font-bold rounded-xl shadow-[0_0_20px_rgba(var(--color-primary-500),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.5)] transition-all duration-300"
          @click="connectWallet"
        >
          <template #leading>
             <UIcon name="i-heroicons-wallet" class="w-6 h-6" />
          </template>
          Connect Web3 Wallet
        </UButton>
      </div>

      <template #footer>
        <p class="text-center text-xs text-slate-500">
          Protected by Quantum Encryption Layer. <br/>
          By entering, you agree to the <span class="text-slate-400 cursor-pointer hover:underline">Terms of Service</span>.
        </p>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
/* Mobile Safe Area Support */
.mobile-safe-area {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
</style>
