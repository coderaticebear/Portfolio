import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Experience - Richu Thankachan</title>
        <meta
          name="description"
          content="If you are looking for your next guest speaker, I'm your girl!"
        />
      </Head>
      <SimpleLayout
        title="From then to now"
        intro="Discover the journey from my early days in tech to the present. Each experience has contributed to my professional growth and development, helping me become the adaptable and innovative developer I am today."
      >
        <div className="space-y-20">
  
          <SpeakingSection title="Team Leader at Buyer Folio – Toronto, ON (2023)">
            <Appearance
              href=""
              title="Financial DNA App Development"
              description="Developed a parallel calculation engine for the world’s first Financial DNA app in the real-estate industry. Applied Agile principles, and employed tools like React Native, Styled Components, MongoDB, Axios, and PayPal."
              event="Buyer Folio"
              cta="Completed"
            />
          </SpeakingSection>
          <SpeakingSection title="Software Engineer at Innovature Labs – Kerala, IN (2021)">
            <Appearance
              href=""
              title="Software Engineer and Team lead"
              description="Developed and deployed multiple solutions, Managed big databases. Created tailored solutions to meet evolving needs and industry standards."
              event="Innovature Labs"
              cta="Completed"
            />
          </SpeakingSection>
          <SpeakingSection title="Full Stack Web Developer/Team Lead at D'katia – Kerala, IN (2018)">
            <Appearance
              href=""
              title="Website Development and Team Collaboration"
              description="Led the development and delivery of over 20 web and mobile products, including ERP systems, through effective collaboration with cross-functional teams to ensure seamless user experiences."
              event="D'Katia Software Technologies"
              cta="Completed"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
