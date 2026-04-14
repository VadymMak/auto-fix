# CLAUDE.md — auto-fix

## Проект
Сайт автосервиса AutoFix. Словацкий язык.
Стек: Next.js 15, TypeScript, pure CSS (НЕ Tailwind), pnpm.

## Команды
pnpm dev / pnpm build / npx tsc --noEmit

## ВАЖНО: ТОЛЬКО Next.js 15. НИКОГДА Next.js 16.

## CSS Variables (тёмная индустриальная палитра)
--navy: #1A2332
--navy-dark: #0F1620
--navy-light: #243044
--orange: #F97316
--orange-dark: #EA580C
--orange-light: #FB923C
--steel: #374151
--steel-light: #4B5563
--white: #F9FAFB
--gray: #9CA3AF
--gray-dark: #6B7280
--card: #1F2937
--card-hover: #283548
--border: rgba(255,255,255,0.08)
--shadow: 0 4px 24px rgba(0,0,0,0.3)
--radius: 16px
--radius-sm: 10px
--transition: all 0.3s ease

## Шрифты
- Заголовки: Oswald (bold, uppercase industrial) — next/font/google
- Текст: Inter — next/font/google

## Изображения
- USE_LOCAL_IMAGES = false (Unsplash для демо)
- Все пути в IMAGES объекте в constants.ts
- remotePatterns для images.unsplash.com и plus.unsplash.com
- ВСЕ <Image fill> → sizes prop
- Hero: priority={true}

## Структура
app/
├── page.tsx, layout.tsx, globals.css
components/sections/
├── Header.tsx, HeroSection.tsx, StatsBar.tsx
├── ServicesSection.tsx, WhyUsSection.tsx
├── PricingSection.tsx, GallerySection.tsx
├── ReviewsSection.tsx, BookingSection.tsx
├── ContactSection.tsx, Footer.tsx
components/widgets/
├── WhatsAppButton.tsx, ChatWidget.tsx
lib/
├── types.ts, constants.ts
