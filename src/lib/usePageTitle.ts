import { useEffect } from 'react'

const SITE = 'TrueSpine Archery'

/** Sets the browser tab title for a page. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Arrows fitted to you`
  }, [title])
}
