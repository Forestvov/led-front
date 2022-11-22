import React from 'react'

import {
  AboutSection,
  BannerBriefSection,
  ClientListSection,
  ClientSection,
  ExperienceSection,
  FaqSection,
  Layout,
  MainSection,
  MediaSection,
  ServiceSection,
  SliderLoopBriefSection,
  TeamSection
} from '@/ui/index'

import { getContentBlock } from '@/helpers/getContentBlock'

export const Home = props => {
  const {
    meta,
    contacts,
    branches,
    contentBlocks,
    services,
    reviews,
    massMedia,
    companies,
    team,
    articles,
    faq
  } = props

  const { title, description, keywords } = meta

  const {
    email,
    briefUrl,
    telegramUrl,
    discussProjectUrl,
    workTogetherUrl,
    textUsUrl,
    presentation,
    presentationSize,
    askQuestionUrl
  } = contacts

  return (
    <Layout
      title={title}
      briefUrl={briefUrl}
      description={description}
      keywords={keywords}
      email={email}
      discussProjectUrl={discussProjectUrl}
      presentation={presentation}
      presentationSize={presentationSize}
    >
      <MainSection
        presentation={presentation}
        briefUrl={briefUrl}
        telegramUrl={telegramUrl}
        ctxBlock={getContentBlock(contentBlocks, 'first_block_with_video')}
      />
      <AboutSection
        branches={branches}
        discussProjectUrl={discussProjectUrl}
        topBlock={getContentBlock(contentBlocks, 'second_block_with_stickers')}
        bottomBlock={getContentBlock(
          contentBlocks,
          'third_block_with_description'
        )}
      />
      <ServiceSection
        ctxBlock={getContentBlock(contentBlocks, 'fourth_block_with_services')}
        briefUrl={briefUrl}
        textUsUrl={textUsUrl}
        services={services}
      />
      <ClientSection clients={massMedia} reviews={reviews} />
      <BannerBriefSection
        briefUrl={briefUrl}
        presentation={presentation}
        telegramUrl={telegramUrl}
        ctxBlock={getContentBlock(contentBlocks, 'fifth_block_with_image')}
      />
      <ClientListSection
        ctxBlock={getContentBlock(contentBlocks, 'sixth_block_with_stickers')}
        clients={companies}
      />
      <ExperienceSection
        content={team}
        image={team.images.main}
        discussProjectUrl={discussProjectUrl}
      />
      <TeamSection
        title={team.secondTitle}
        image={team.images.team}
        workTogetherUrl={workTogetherUrl}
      />
      <MediaSection
        ctxBlock={getContentBlock(contentBlocks, 'seventh_block')}
        articles={articles}
      />
      <FaqSection
        questions={faq}
        askQuestionUrl={askQuestionUrl}
        ctxBlock={getContentBlock(contentBlocks, 'eighth_block_with_stickers')}
      />
      <SliderLoopBriefSection briefUrl={briefUrl} />
    </Layout>
  )
}
