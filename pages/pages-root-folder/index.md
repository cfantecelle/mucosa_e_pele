---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
#header:
#  image_fullwidth: skin_header_01.png
widget1:
  title: "Quem somos?"
  url: '/info/'
  image: 
  text: 'O Grupo de Estudos em Mucosas e Pele (GEMP) reúne cientistas dedicados ao estudo das mucosas e pele, promovendo inovação científica e colaborativa para avanços em saúde.'

widget2:
  title: "Colaborações"
  url: '/info/#colaborações-internacionais'
  image: 
  text: 'Atualmente, nossos pesquisadores apresentam mais de 30 colaborações internacionais ao todo! Confira mais sobre as nossas parcerias.'

widget3:
  title: "Publicações"
  url: '/publications/'
  image: 
  text: "Nosso site conta com diversas publicações em destaque no âmbito de mucosas e pele, realizadas por membros do nosso grupo."

#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
# callforaction:
#   url: /info/
#   text: Clique aqui para saber mais sobre o GEMP
#   style: alert

permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---
