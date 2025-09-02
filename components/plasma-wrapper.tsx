"use client"

import dynamic from 'next/dynamic'
import { ErrorBoundary } from './error-boundary'

const Plasma = dynamic(() => import('./plasma'), { ssr: false })

export default function PlasmaWrapper() {
  return (
    <div className="fixed inset-0 z-0">
      <ErrorBoundary>
        <Plasma 
          color="#8b5cf6" 
          speed={0.8} 
          direction="forward" 
          scale={1.5} 
          opacity={0.4} 
          mouseInteractive={true} 
          className="z-0" 
        />
      </ErrorBoundary>
    </div>
  )
}
