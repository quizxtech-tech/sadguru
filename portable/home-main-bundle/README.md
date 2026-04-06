# HomeMain Portable Bundle

This folder is the target for the portable bundle. Use the provided PowerShell script to gather the `HomeMain` page, its dependent components/hooks/utils/svg/plugins, and the required images into this folder so you can copy it to another project.

## How to generate the bundle

Run from your project root in Windows PowerShell:

```powershell
# 1) Create/refresh the bundle
./scripts/bundle-home-main.ps1

# Optional: choose a different output folder
./scripts/bundle-home-main.ps1 -BundleRoot "portable/home-main-bundle"
```

The script will copy:
- `src/pages/homes/home/HomeMain.tsx`
- Needed component folders: `components/testimonial`, `text-slider`, `award`, `funfact`, `project`, `service`, `video-area`, `hero-banner`, `about`, `work`, `shared`
- Layouts: `layouts/headers`, `layouts/footers`
- Hooks/utils: `hooks/useCursorAndBackground.ts`, `hooks/useScrollSmooth.ts`, `hooks/useGsapAnimation.ts`, `utils/titleAnimation.ts`
- Data: `data/panelsData.ts`, `data/serviceData.ts`
- Icons and exports: entire `svg` folder
- Plugins: entire `plugins` folder
- Public assets (images): `public/assets/img/home-01`, `public/assets/img/logo`, and `public/assets/img/bg-wrap-2.jpg`

After it runs, everything will be inside `portable/home-main-bundle/` under the same `src/` and `public/` structure.

## How to use in another Next.js project

1) Copy the generated bundle folder into the root of your other project (e.g. `portable/home-main-bundle`).
2) Copy or merge the folders inside it into your target project:
   - Merge `portable/home-main-bundle/src` into your project's `src`
   - Merge `portable/home-main-bundle/public` into your project's `public`
3) Ensure path alias support for `@/*` in your target project's `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

4) Install required packages (run in the target project):

```bash
# Core
npm i gsap @gsap/react swiper jquery

# If using sass styles in project
npm i -D sass
```

5) Add the page route in your Next.js project:
- App Router: create `src/app/(homes)/home/page.tsx` with:

```tsx
export { default } from "@/pages/homes/home/HomeMain";
```

- Or Pages Router: create `src/pages/home.tsx` with:

```tsx
export { default } from "@/pages/homes/home/HomeMain";
```

6) Start the dev server:

```bash
npm run dev
```

## Notes
- If you already have some of these folders (e.g., `svg`, `plugins`) in the target project, merge carefully.
- The copied images must land under `public/assets/...` to keep import paths valid.
- The bundle includes a minimal `tsconfig.json` inside the bundle as a reference; you should configure aliases in your main project `tsconfig.json` instead.
