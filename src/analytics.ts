import mixpanel from 'mixpanel-browser'

const SWIPE_EVENT_NAME = 'Mochi Swipe'

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init(import.meta.env.PUBLIC_MIXPANEL_PROJECT_TOKEN, {
  debug: import.meta.env.DEV,
})
mixpanel.track('Visited page')

type SwipeDirection = 'left' | 'right' | 'up' | 'down'
type TrackSwipleEventInput = {
  image: string
  direction: SwipeDirection
}

export function trackSwipeEvent({ image, direction }: TrackSwipeEventInput) {
  mixpanel.track(SWIPE_EVENT_NAME, { image, direction })
}
