# Walking with Jesus 🙏

A beautiful, conversion-optimized landing page for a mystical Christian meditation newsletter. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **High-Converting Landing Page** - Multiple optimized CTAs, social proof, and trust signals
- **Real Email Integration** - Support for ConvertKit, Mailchimp, Beehiiv, or custom APIs
- **AI-Powered Message Generator** - Gemini AI creates personalized spiritual meditations
- **Sample Newsletter Preview** - Show visitors exactly what they'll receive
- **FAQ Section** - Answers common questions to reduce friction
- **Privacy & Terms Pages** - Full legal compliance (GDPR/CCPA ready)
- **Beautiful UX** - Confetti animations, smooth scrolling, responsive design
- **Analytics Ready** - Google Analytics integration built-in
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **Google Gemini API Key** - [Get one here](https://makersuite.google.com/app/apikey)
- **Email Service Account** - ConvertKit, Mailchimp, Beehiiv, or custom API

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd walking-with-jesus---mystical-newsletter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Edit `.env.local` with your API keys**
   ```env
   # Required for AI message generator
   API_KEY=your_gemini_api_key_here

   # Email service configuration
   VITE_EMAIL_PROVIDER=convertkit
   VITE_EMAIL_API_KEY=your_convertkit_api_key
   VITE_EMAIL_FORM_ID=your_convertkit_form_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Configuration

### Email Service Setup

#### Option 1: ConvertKit (Recommended)

1. Sign up at [ConvertKit](https://convertkit.com)
2. Create a new Form
3. Get your API Key from Settings → Advanced → API Key
4. Add to `.env.local`:
   ```env
   VITE_EMAIL_PROVIDER=convertkit
   VITE_EMAIL_API_KEY=your_api_key
   VITE_EMAIL_FORM_ID=your_form_id
   ```

#### Option 2: Mailchimp

1. Sign up at [Mailchimp](https://mailchimp.com)
2. Create a backend proxy (Mailchimp doesn't support direct frontend calls)
3. Add to `.env.local`:
   ```env
   VITE_EMAIL_PROVIDER=mailchimp
   VITE_EMAIL_API_URL=/api/subscribe
   VITE_EMAIL_LIST_ID=your_list_id
   ```

#### Option 3: Beehiiv

1. Sign up at [Beehiiv](https://beehiiv.com)
2. Get API key from Developer settings
3. Add to `.env.local`:
   ```env
   VITE_EMAIL_PROVIDER=beehiiv
   VITE_EMAIL_API_KEY=your_api_key
   VITE_EMAIL_LIST_ID=your_publication_id
   ```

#### Option 4: Custom API

```env
VITE_EMAIL_PROVIDER=custom
VITE_EMAIL_API_URL=https://your-api.com/subscribe
```

### Google Analytics Setup

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Replace `GA_MEASUREMENT_ID` in `index.html` with your actual ID

### AI Message Generator

The Gemini API key is required for the mystical message generator feature:

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add to `.env.local` as `API_KEY`

## 📁 Project Structure

```
walking-with-jesus---mystical-newsletter/
├── components/
│   ├── About.tsx              # Founder story & mission
│   ├── Button.tsx             # Reusable button component
│   ├── FAQ.tsx                # Frequently asked questions
│   ├── Features.tsx           # What subscribers receive
│   ├── Hero.tsx               # Landing page hero section
│   ├── MysticalMessageGenerator.tsx  # AI message generator
│   ├── NewsletterForm.tsx     # Email signup form
│   ├── PrivacyPolicy.tsx      # Privacy policy content
│   ├── SampleNewsletter.tsx   # Newsletter preview
│   ├── TermsOfService.tsx     # Terms of service
│   └── Testimonials.tsx       # Social proof testimonials
├── services/
│   ├── emailService.ts        # Email integration logic
│   └── geminiService.ts       # AI message generation
├── App.tsx                    # Main app component
├── index.html                 # HTML entry point
├── index.tsx                  # React entry point
├── types.ts                   # TypeScript type definitions
├── .env.example               # Environment variables template
└── package.json               # Dependencies
```

## 🎨 Customization

### Change Colors

Edit the color scheme in `index.html`:

```javascript
colors: {
  mystic: {
    900: '#1c1917',  // Background
    gold: '#d4af37', // Primary accent
    goldLight: '#f3e5ab', // Secondary accent
    accent: '#7f1d1d', // Tertiary accent
  }
}
```

### Update Copy

Main conversion points to optimize:

1. **Hero headline** - `components/Hero.tsx` (line 28-32)
2. **Value proposition** - `components/Hero.tsx` (line 36-43)
3. **Features** - `components/Features.tsx` (lines 6-42)
4. **Testimonials** - `components/Testimonials.tsx` (lines 5-48)
5. **FAQ answers** - `components/FAQ.tsx` (lines 14-59)

### Add/Remove Sections

Edit `App.tsx` to reorder or remove sections:

```tsx
<Hero />
<Features />
<SampleNewsletter />
<MysticalMessageGenerator />
<About />
<Testimonials />
<FAQ />
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Environment Variables in Production

Make sure to set these in your hosting provider:

- `API_KEY` (Gemini API)
- `VITE_EMAIL_PROVIDER`
- `VITE_EMAIL_API_KEY`
- `VITE_EMAIL_FORM_ID` or `VITE_EMAIL_LIST_ID`

## 📊 Tracking & Analytics

### Key Metrics to Monitor

1. **Newsletter Signups** - Tracked automatically via gtag
2. **Scroll Depth** - See how far users scroll
3. **Message Generator Usage** - Track engagement
4. **Form Abandonment** - Identify friction points

### Custom Events

The app tracks these events automatically:

- `newsletter_signup_attempt` - User clicks submit
- `newsletter_signup` - Successful subscription
- `sample_message_generated` - AI message generated

## 🔒 Privacy & Legal

### GDPR Compliance

- Privacy Policy included
- Cookie consent (add banner if needed)
- User data deletion on request
- Explicit opt-in required

### CCPA Compliance

- Data collection disclosed
- Opt-out mechanism provided
- No sale of personal data

### CAN-SPAM Act

- Unsubscribe link in emails (handled by email service)
- Physical address in emails
- No misleading subject lines

## 🐛 Troubleshooting

### Newsletter signup not working

1. Check `.env.local` has correct API keys
2. Verify email provider is configured
3. Check browser console for errors
4. Test in demo mode (no API keys set)

### AI message generator failing

1. Verify `API_KEY` is set in `.env.local`
2. Check Gemini API quota limits
3. Ensure API key has correct permissions

### Build errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📈 Conversion Optimization Tips

1. **A/B Test Headlines** - Try different value propositions
2. **Social Proof** - Update subscriber count regularly
3. **Urgency** - Add limited-time bonuses
4. **Exit Intent** - Add popup with special offer
5. **Lead Magnet** - Offer free 7-day devotional guide
6. **Video** - Add founder story video to About section
7. **Testimonials** - Replace with real user testimonials ASAP

## 🤝 Contributing

Pull requests welcome! For major changes, please open an issue first.

## 📄 License

This project is private and proprietary.

## 💌 Support

Questions? Email: hello@walkingwithjesus.com

---

Built with ❤️ for souls seeking Christ's unconditional love
