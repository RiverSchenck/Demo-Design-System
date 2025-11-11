import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './lib/theme-provider'
import { ReviewCard } from './ui/primatives/Review Card/ReviewCard'
import { Avatar } from './ui/primatives/Avatar/Avatar'
import { placeholderImage } from './ui/images'
import { GoogleIcon } from './ui/icons/Google'
import { GitHubIcon } from './ui/icons/Github'
import Desktop from './pages/Desktop'
import SignIn from './pages/SignIn'
import CreateAccount from './pages/CreateAccount'

function HomePage() {
  return (
    <>
      <Desktop />
      <div className="p-8 space-y-12">
        {/* Avatar Demo Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Avatar Variants Demo</h2>

          {/* Sizes */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Sizes</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Avatar size="xxs" type="initial" initials="XXS" />
              <Avatar size="xs" type="initial" initials="XS" />
              <Avatar size="sm" type="image" src={placeholderImage} />
              <Avatar size="md" type="image" src={placeholderImage} />
              <Avatar size="lg" type="image" src={placeholderImage} />
              <Avatar size="xl" type="image" src={placeholderImage} />
            </div>
          </div>

          {/* Shapes */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Shapes</h3>
            <div className="flex items-center gap-4">
              <Avatar size="md" shape="circle" type="image" src={placeholderImage} />
              <Avatar size="md" shape="square" type="image" src={placeholderImage} />
            </div>
          </div>

          {/* Types */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Types</h3>
            <div className="flex items-center gap-4">
              <Avatar size="md" type="image" src={placeholderImage} />
              <Avatar size="md" type="initial" initials="JD" />
              <Avatar size="md" type="placeholder" />
            </div>
          </div>

          {/* Notifications */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">With Notifications</h3>
            <div className="flex items-center gap-4">
              <Avatar size="md" type="image" src={placeholderImage} hasNotification notificationPosition="top" />
              <Avatar size="md" type="image" src={placeholderImage} hasNotification notificationPosition="bottom" />
              <Avatar size="lg" type="initial" initials="AB" hasNotification />
            </div>
          </div>
        </section>

        {/* Original Review Section */}
        <section className={`flex flex-col items-start rounded-xl border border-border bg-background w-full mx-auto
px-12 py-8 gap-10 max-w-6xl`}>
          {/* Headline / Subhead */}
          <header className="flex flex-col gap-2 text-left">
            <h2 className="text-3xl font-bold">What our customers are saying</h2>
            <p className="text-xl text-muted-foreground">Real feedback from people using our platform every day.</p>
          </header>
          {/* Review Cards */}
          <div className={`grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
            <ReviewCard title="Incredible experience!" review="This tool completely streamlined our design-to-dev workflow. The handoff is smoother than ever." reviewer="Alex Johnson" date="May 15, 2024" rating={5}/>
            <ReviewCard title="Super intuitive" review="Even our non-technical team members can now build and manage assets confidently. Love it!" reviewer="Priya Patel" date="April 28, 2024" rating={4}/>
            <ReviewCard title="Saved us so much time" review="Before this, our asset management was chaos. Now everything's in one place, easy to find, and consistent." reviewer="Liam Nguyen" date="June 3, 2024" rating={5}/>
            <ReviewCard title="Beautifully designed" review="The interface feels modern and approachable. It's easy to forget this is enterprise software." reviewer="Sofia Martínez" date="March 22, 2024" rating={5}/>
            <ReviewCard title="Customer support is top-notch" review="We had a setup question and got a response within an hour. Seriously impressive support team!" reviewer="James Wilson" date="May 2, 2024" rating={5}/>
            <ReviewCard title="Game changer for our brand" review="Helped us unify our brand assets across markets. Everything feels connected now." reviewer="Reviewer Name" date="Date" rating={3}/>
          </div>
        </section>
        <div>
          <GoogleIcon /> <GitHubIcon />
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
