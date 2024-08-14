import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Richu Thankachan</title>
        <meta
          name="description"
          content="I'm Richu Thankachan. Full Stack developer, photographer"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl transition duration-300 hover:scale-110 bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Richu. Full Stack Developer in
              Toronto.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              As a highly skilled Software Engineering professional with over three years of experience, I am a passionate Full Stack Developer dedicated to crafting seamless digital experiences. I moved to Canada with a dream to explore the world of software, bringing innovation and creativity to every project I undertake.

With extensive expertise in HTML, CSS, Angular, React, Node.js, and PHP, I specialize in developing high-quality, responsive web and mobile applications that captivate users and boost performance. My proficiency extends to SQL and database management, ensuring robust and efficient data handling in all my projects.
Explore my portfolio to discover how I transform ideas into interactive realities, building the future of the web with every line of code.
              </p>
              <p>
                <b>Fluent</b> in English, Malayalam

              </p>
              <p><b>
                Areas of Expertise:

                </b>

              </p>
              <p>
              Software Engineering, Full Stack Development, Frontend Development, Web Development, DevOps
              </p>
              <p>
                <b>Industry Experience:</b>
              </p>
              <p>
              Software as a Service (SaaS), Fintech, Information Technology, ERP Solutions 
              </p>
              <p>
              Feel free to reach out to me.  


              </p>
              <p>
              Have a great day! 
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>*/}
              <SocialLink href="https://www.instagram.com/ric_panthackan/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> 
              <SocialLink
                href="https://github.com/coderaticebear"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/richu-thankachan"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:richuthankachan96@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                richuthankachan96@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
