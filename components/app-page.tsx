'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sandstone-100 to-sandstone-200 p-4">
      <main className="max-w-4xl w-full space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-forest-green">Welcome to PrayerCircle</h1>
        <p className="text-xl text-warm-gray">Connect, Share, and Grow in Faith</p>
        
        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-terracotta">Offer a Prayer</CardTitle>
              <CardDescription>Share your thoughts and intentions with our community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-warm-gray">Express your faith through heartfelt prayers and connect with others in spiritual reflection.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/prayer-input">Start Praying</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-terracotta">Join Prayer Circles</CardTitle>
              <CardDescription>Find support and strength in community prayers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-warm-gray">Participate in group prayers, share your experiences, and support others in their spiritual journey.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/prayer-circles">Explore Circles</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-forest-green mb-4">Our Mission</h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            PrayerCircle is dedicated to fostering a supportive online community where individuals can share their faith, 
            offer prayers, and find spiritual encouragement. We believe in the power of collective prayer and the strength 
            found in a compassionate, faith-driven community.
          </p>
        </div>
      </main>

      <footer className="mt-16 text-warm-gray">
        <p>&copy; 2023 PrayerCircle. All rights reserved.</p>
      </footer>
    </div>
  )
}