import mixpanel from 'mixpanel-browser'

export type SwipeDirection = 'left' | 'right' | 'up' | 'down'

const SWIPE_EVENT_NAME = 'Mochi Swipe'
const INSTAGRAM_CLICK_EVENT_NAME = 'Instagram click'

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init(import.meta.env.PUBLIC_MIXPANEL_PROJECT_TOKEN, {
  debug: import.meta.env.DEV,
})
mixpanel.track('Visited page')

type TrackSwipeEventInput = {
  image: string
  direction: SwipeDirection
}

export function trackSwipeEvent({ image, direction }: TrackSwipeEventInput) {
  mixpanel.track(SWIPE_EVENT_NAME, { image, direction })
}

export function registerLinkTracking() {
  mixpanel.track_links('a#mocheroni-instagram', INSTAGRAM_CLICK_EVENT_NAME)
}
