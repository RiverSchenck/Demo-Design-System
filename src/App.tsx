import './App.css'
import { Button } from './ui/primatives/Button/Button'
import { ThemeProvider } from './lib/theme-provider'
import { Content } from '@radix-ui/react-popover'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/primatives/Card/Card'
import { FormItem, FormLabel, FormControl, FormDescription, Form } from './ui/primatives/Form/Form'
import { ReviewCard } from './ui/primatives/Review Card/ReviewCard'
import { placeholderImage } from './ui/images'
import { GoogleIcon } from './ui/icons/Google'
import { GitHubIcon } from './ui/icons/Github'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
<section className={`flex flex-col items-start rounded-xl border border-border bg-background w-full mx-auto
px-12 py-8 gap-10 max-w-6xl`}>
{/* Headline / Subhead */}
<header className="flex flex-col gap-2 text-left">
<h2 className="text-3xl font-bold">What our customers are saying</h2>
<p className="text-xl text-muted-foreground">Real feedback from people using our platform every day.</p>
</header>
{/* Review Cards */}
<div className={`grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
<ReviewCard title="Incredible experience!" review="This tool completely streamlined our design-to-dev workflow. The handoff is smoother than ever." reviewer="Alex Johnson" date="May 15, 2024" rating={5}/><ReviewCard title="Super intuitive" review="Even our non-technical team members can now build and manage assets confidently. Love it!" reviewer="Priya Patel" date="April 28, 2024" rating={4}/><ReviewCard title="Saved us so much time" review="Before this, our asset management was chaos. Now everything’s in one place, easy to find, and consistent." reviewer="Liam Nguyen" date="June 3, 2024" rating={5}/><ReviewCard title="Beautifully designed" review="The interface feels modern and approachable. It’s easy to forget this is enterprise software." reviewer="Sofia Martínez" date="March 22, 2024" rating={5}/><ReviewCard title="Customer support is top-notch" review="We had a setup question and got a response within an hour. Seriously impressive support team!" reviewer="James Wilson" date="May 2, 2024" rating={5}/><ReviewCard title="Game changer for our brand" review="Helped us unify our brand assets across markets. Everything feels connected now." reviewer="Reviewer Name" date="Date" rating={3}/>
</div>
</section>
<GoogleIcon /> <GitHubIcon />
    </ThemeProvider>

  )

}

export default App
