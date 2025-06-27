'use client'

import React, { useEffect, useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { client } from '@/sanity/lib/client'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

interface SocialLink {
  icon: string
  link: string
}

interface DashboardData {
  introText: string
  mainName: string
  typewriterWords: string[]
  tagline: string
  socialLinks: SocialLink[]
}

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        *[_type == "dashboard"][0] {
          introText,
          mainName,
          typewriterWords,
          tagline,
          socialLinks[]{ icon, link }
        }
      `
      try {
        const result: DashboardData = await client.fetch(query)
        setData(result)
      } catch (error) {
        console.error('Sanity fetch error:', error)
      }
    }

    fetchData()
  }, [])

  // Safe default for words
  const [text] = useTypewriter({
    words: data?.typewriterWords?.length ? data.typewriterWords : [''],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  })

const allIcons: Record<string, React.ElementType> = {
  ...FaIcons,
  ...SiIcons,
}

const renderIcon = (iconName: string) => {
  const IconComponent = allIcons[iconName]
  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found`)
    return null
  }
  return <IconComponent size={30} />
}

  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <p className="text-[#00df9a] font-bold md:mb-[-10px] p-2">{data.introText}</p>
        <h1 className="md:text-5xl sm:text-5xl text-4xl font-bold md:py-6">{data.mainName}</h1>

        <div className="flex justify-center items-center">
          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
            A {text}
            <Cursor />
          </span>
        </div>

        <p className="md:text-2xl text-xl font-bold text-gray-500 px-2 mt-4">{data.tagline}</p>

        <div className="flex justify-center items-center space-x-5 md:w-[75%] my-8">
          {data.socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00df9a] transition-colors duration-300"
            >
              {renderIcon(item.icon)}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
