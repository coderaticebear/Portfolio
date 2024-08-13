import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Richu Thankachan</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” Acer Aspire, Intel core-i5, 32GB RAM">
             Old is Gold! This machine packs a punch. With enough memory threshold,
             working through multiple apps is a breeze!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Communication">
            <Tool title="Apple iPhone 15 pro">
             Unmatched simplicity!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I`ve hustled through different code editors. Hailing from the OG Adobe Dreamworks to bracket.
              But VS is a legend. 
            </Tool>

            <Tool title="OpenAI">
              I leverage OpenAI for various AI and API purposes, enhancing my
              applications with state-of-the-art language models.
            </Tool>

            <Tool title="Amazon AWS">
              A powerful platform for front-end development and deployment,
              enabling seamless integration with frameworks like Next.js.
            </Tool>

            <Tool title="GitHub">
              Need a repo? No questions asked, GitHub it is.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">

            <Tool title="Apple Notes">
              I use Keep for noting my thoughts, new project ideas, and sometimes 
              I use it as my to-do list as well. 
            </Tool>

            <Tool title="Apple Calendar">
              My go-to tool for scheduling managing appointments, and
              organizing my time effectively.
            </Tool>

          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
