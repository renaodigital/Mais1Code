---
title: Mais 1 Code
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-0
          - pb-6
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-b
    title: +1 Code
    subtitle: >-
      Transformando jovens periféricos ou moradores de favela em programadores
      GRATUITAMENTE.
    actions:
      - type: Button
        label: Quero ser aluno
        url: >-
          https://docs.google.com/forms/d/e/1FAIpQLSdLq7-5G8MDD_eMunWjwbPeo2o-JhMI4U2IP6aRN6WwW7kNUg/viewform
        style: primary
        iconPosition: right
        icon: arrowRight
        showIcon: true
    backgroundImage:
      type: BackgroundImage
      url: /images/Screenshot_10.png
      backgroundSize: cover
      backgroundPosition: top
      backgroundRepeat: no-repeat
      opacity: 100
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-20
          - pb-96
          - pr-12
          - pl-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: QuoteSection
    colors: colors-d
    quote: "## Por que aprender a programar\_**.**\n\n"
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pr-4
          - pl-4
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
  - elementId: ''
    colors: colors-c
    variant: variant-a
    title: Como funciona
    actions:
      - type: Link
        label: Veja tudo!
        url: /blog
        showIcon: true
        icon: arrowRight
    posts:
      - content/pages/blog/post-five.md
      - content/pages/blog/post-four.md
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedPostsSection
    showDate: true
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    showAuthor: false
  - type: TextSection
    colors: colors-e
    variant: variant-a
    text: '[Siga-nos no Instagram](https://www.instagram.com/mais1code/)'
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-36
          - pr-4
          - pl-4
        justifyContent: center
      text:
        textAlign: center
  - type: FeatureHighlightSection
    colors: colors-d
    backgroundSize: full
    title: Na mais um +1code trabalhamos o ensino Peer to Peer
    text: >+
      ## (um para um), onde você terá acesso a um professor voluntário, com uma
      a duas aulas por semana e suporte diário de nossa equipe.

    actions:
      - type: Link
        label: Comunidade no Discord
        url: 'https://discord.gg/RdevxUp6cC'
        showIcon: true
        icon: arrowRight
    backgroundImage:
      type: BackgroundImage
      url: /images/RWOkme.jpg
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 90
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-72
          - pr-4
          - pl-4
        justifyContent: flex-start
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    colors: colors-d
    title: Junte-se a Nós
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
          type: TextFormControl
        - name: updatesConsent
          label: Inscreva-me para receber atualizações
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: Enviar o formulário
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
addTitleSuffix: true
metaTags:
  - property: 'og:title'
    content: Mais Um Code
  - property: 'og:image'
    content: Impacto Social
  - property: 'og:description'
    content: ''
metaTitle: Mais 1 Code
metaDescription: Reprogramando A Quebrada
socialImage: /images/TMGGK9VwSrJFSQebBDQoS7jjsLpsy5EZpDaTyzAb.jpg
---
