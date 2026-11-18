import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import About from '@/pages/About'
import ComingSoon from '@/pages/ComingSoon'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="shop"
          element={
            <ComingSoon
              title="Shop preview"
              blurb="Custom arrows, beginner bundles, bows and accessories, each with a fit badge for your setup."
            />
          }
        />
        <Route
          path="quiz"
          element={
            <ComingSoon
              title="TrueFit Quiz"
              blurb="Six quick questions that measure your draw length at home and recommend a draw weight and bow class."
            />
          }
        />
        <Route
          path="builder"
          element={
            <ComingSoon
              title="Arrow Builder"
              blurb="Enter your bow and draw, get the right spine, then pick shaft, length, point weight, fletching and nock."
            />
          }
        />
        <Route
          path="learn"
          element={
            <ComingSoon
              title="Learn"
              blurb="Plain-language guides, starting with how to choose arrow spine."
            />
          }
        />
        <Route
          path="clubs"
          element={
            <ComingSoon
              title="Clubs and schools"
              blurb="Bulk arrow builds and beginner bundles for clubs, school programs, camps and ranges."
            />
          }
        />
        <Route
          path="privacy"
          element={
            <ComingSoon
              title="Privacy policy"
              blurb="Our plain-language privacy policy is being written. In short: we only collect what fitting needs, and we never sell your data."
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
