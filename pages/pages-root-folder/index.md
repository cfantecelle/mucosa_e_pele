---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: header_teste.png
widget1:
  title: "Notícias"
  url: 'http://cfantecelle.github.io/mucosa_e_pele/blog/'
  image: widget-1-302x182.jpg
  text: 'Que tal acompanhar as notícias do Grupo de Estudos em Mucosas e Pele?'

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
callforaction:
  url: https://cfantecelle.github.io/mucosa_e_pele/info/
  text: Clique aqui para saber mais sobre o GEMP
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---
