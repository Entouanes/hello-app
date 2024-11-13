'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'

export default function Component() {
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Welcome to Hello-App
            </h1>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-lg hover:underline">Home</a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:underline">About</a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:underline">Services</a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:underline">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col justify-start">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Hello-App is your gateway to a world of endless possibilities. Our innovative platform 
                  combines cutting-edge technology with user-friendly design to bring you an unparalleled 
                  digital experience. Whether you are a seasoned pro or just getting started, Hello-App 
                  has something for everyone. Dive in and discover how we can help you achieve your goals 
                  faster and more efficiently than ever before.
                </p>
                  <Button 
                    onClick={handleLike}
                    className="w-fit flex items-center space-x-2"
                    variant="outline"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Like</span>
                    <span className="font-bold">{likes}</span>
                    <span className="sr-only">likes</span>
                  </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}