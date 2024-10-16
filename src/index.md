---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Zameel"
  text: "Documentation"
  image:
    src: /logo.svg
    alt: Zameel Logo
  tagline: Your never-be-absent classmate
  actions:
    - theme: brand
      text: Get Started
      link: frontend/setup
    - theme: alt
      text: Contribution Guide
      link: frontend/CONTRIBUTING

features:
  - title: Open Source
    icon: 🔓
    details: Zameel is fully open source, you can use it, improve it, or make your own from it.
  - title: Dedicated API
    icon: 🔗
    details: Zameel has its dedicated API, makes it easy to integrate with your own apps and technologies.
  - title: Cross Platform
    icon: ⚛
    details: Zameel is available for the Web, Android, and iOS thanks to React Native.
  - title: User-centered
    icon: 👩🏻‍🎓
    details: Zameel is made by students, for students, solving their studying-related problems!
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/khateeboveskey.png',
    name: 'Abdulrahman Al-Khateeb',
    title: 'Team Lead & Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/khateeboveskey' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/khateeb404/' },
      { icon: 'x', link: 'https://x.com/khateeb404' },
      { icon: 'youtube', link: 'https://www.youtube.com/@khateebedia' }
    ]
  },
  {
    avatar: 'https://www.github.com/Mahmood-Ahmed-Alqirshy.png',
    name: 'Mahmood Al-Qirshy',
    title: 'Backend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Mahmood-Ahmed-Alqirshy' },
    ]
  },
  {
    avatar: 'https://www.github.com/Hussein-Alyafei.png',
    name: 'Hussein Al-Yafei',
    title: 'Backend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Hussein-Alyafei' },
      { icon: 'x', link: 'https://x.com/__7ussein' },
    ]
  },
  {
    avatar: 'https://www.github.com/AbdulmalikAlsqaaf.png',
    name: 'Abdulmalik Al-Saqqaf',
    title: 'UI/UX Designer',
    links: [
      { icon: 'github', link: 'https://github.com/AbdulmalikAlsqaaf' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/abdulmalikalsqaaf' },
      { icon: 'x', link: 'https://www.x.com/3_alsqaaf' },
      { icon: 'instagram', link: 'https://www.instagram.com/3_alsqaaf' },
    ]
  },
  {
    avatar: 'https://www.github.com/ahmed-alnabhi.png',
    name: 'Ahmed Al-Nabhi',
    title: 'Analyst',
    links: [
      { icon: 'github', link: 'https://github.com/ahmed-alnabhi' },
      { icon: 'x', link: 'https://x.com/Ahmed_fahmi2004' },
    ]
  },
  {
    avatar: 'https://www.github.com/benadnan2002.png',
    name: 'Osama Al-Awdari',
    title: 'Analyst & Technical Writer',
    links: [
      { icon: 'github', link: 'https://github.com/benadnan2002' },
      { icon: 'x', link: 'https://x.com/OsamaAdnanS' },
      { icon: 'instagram', link: 'https://www.instagram.com/osamaadnansallam' },
    ]
  },
]
</script>

<span style="display: block; margin-top: 5rem"></span>

# Our Core Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
