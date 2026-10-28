# Good Company: frontend demo (handover)

A frontend-only demo of a platonic, public-outing companion marketplace (Lahore, Islamabad, Karachi).
All profiles are fictional. Forms are local demos: nothing is sent or saved.

## Is folder mein kya hai
Ye tayyar (built) website hai. Seedha kisi bhi static hosting par chal sakti hai
(GitHub Pages, Netlify, Vercel). Isay edit karne ki zaroorat nahi.

## Preview / publish
- GitHub Pages: is folder ka content repo mein upload karein, Settings > Pages > main / root.
- Ya kisi bhi hosting par poora folder upload karein.

## Content badalna (source code mein)
Source code alag original project mein hai (Replit, pnpm workspace: artifacts/good-company).
- Saara text aur profiles: `src/App.tsx` (`profiles` list upar hai)
- Rang aur design: `src/index.css`
- Hero photo: `public/images/city-cafe-hero.jpg`
- Rebuild: `pnpm --filter @workspace/good-company run build`
  (BASE_PATH aur PORT environment variables chahiye; Replit mein khud set hote hain)

## Abhi kya NAHI hai (asli launch ke liye)
Login, database, profile verification (CNIC/selfie), admin panel, asli booking, payment,
Terms / Privacy / Safety policy. Asli users ke saath launch se pehle qanooni mashwara zaroori hai.
