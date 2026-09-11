/*
 * portfolio-data.js
 * ---------------------------------------------------------
 * Single source of truth for every portfolio project shown on the site.
 *
 * - Array order === Overview (index.html) display order.
 * - Each project's `media` array order === in-project display order.
 * - Category pages (e.g. editorial.html) filter this same array by
 *   `category` and render the result in the order it appears here.
 *   No separate ordering field is used anywhere (no overviewOrder / categoryOrder).
 * - `id` is a stable identifier for the project. It is used as the
 *   grouping key for hover-highlight / touch-tap / lightbox grouping,
 *   so that two projects that happen to share the same title + credit
 *   (e.g. two different A PART PUBLICATIONS issues) never merge into
 *   one group. `id` is NOT used for sort order.
 * ---------------------------------------------------------
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "numero-natasha-kot",
    category: "editorial",
    title: "NUMÉRO",
    line1: "Natasha Kot",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/numero/01/01.webp", full: "img/numero/01/01.webp", alt: "numero",
        width: 269, height: 350, dataW: 269, dataH: 350 },
      { type: "image", thumb: "thmbs/numero/01/02.webp", full: "img/numero/01/02.webp", alt: "numero",
        width: 269, height: 350, dataW: 269, dataH: 350 },
      { type: "image", thumb: "thmbs/numero/01/03.webp", full: "img/numero/01/03.webp", alt: "numero",
        width: 268, height: 350, dataW: 268, dataH: 350 }
    ]
  },
  {
    id: "madame-figaro-rocio-ramos",
    category: "editorial",
    title: "MADAME FIGARO",
    line1: "Rocio Ramos",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/madamefigaro/03/09.webp", full: "img/madamefigaro/03/09.webp", alt: "madamefigaro",
        width: 270, height: 350, dataW: 270, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/03/10.webp", full: "img/madamefigaro/03/10.webp", alt: "madamefigaro",
        width: 270, height: 350, dataW: 270, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/03/07.webp", full: "img/madamefigaro/03/07.webp", alt: "madamefigaro",
        width: 271, height: 350, dataW: 271, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/03/06.webp", full: "img/madamefigaro/03/06.webp", alt: "madamefigaro",
        width: 350, height: 229, dataW: 350, dataH: 229 },
      { type: "image", thumb: "thmbs/madamefigaro/03/04.webp", full: "img/madamefigaro/03/04.webp", alt: "madamefigaro",
        width: 271, height: 350, dataW: 271, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/03/08.webp", full: "img/madamefigaro/03/08.webp", alt: "madamefigaro",
        width: 275, height: 350, dataW: 275, dataH: 350 }
    ]
  },
  {
    id: "elle-france-jonas-bresnan",
    category: "editorial",
    title: "ELLE FRANCE",
    line1: "Jonas Bresnan",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/ellefrance/02/01.webp", full: "img/ellefrance/02/01.webp", alt: "ellefrance",
        width: 235, height: 350, dataW: 235, dataH: 350 },
      { type: "image", thumb: "thmbs/ellefrance/02/02.webp", full: "img/ellefrance/02/02.webp", alt: "ellefrance",
        width: 263, height: 350, dataW: 263, dataH: 350 },
      { type: "image", thumb: "thmbs/ellefrance/02/03.webp", full: "img/ellefrance/02/03.webp", alt: "ellefrance",
        width: 267, height: 350, dataW: 267, dataH: 350 }
    ]
  },
  {
    id: "madame-figaro-karina-twiss",
    category: "editorial",
    title: "MADAME FIGARO",
    line1: "Karina Twiss",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/madamefigaro/04/01.webp", full: "img/madamefigaro/04/01.webp", alt: "madamefigaro",
        width: 271, height: 350, dataW: 271, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/04/03.webp", full: "img/madamefigaro/04/03.webp", alt: "madamefigaro",
        width: 275, height: 350, dataW: 275, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/04/04.webp", full: "img/madamefigaro/04/04.webp", alt: "madamefigaro",
        width: 275, height: 350, dataW: 275, dataH: 350 }
    ]
  },
  {
    id: "elle-france-buzz-white",
    category: "editorial",
    title: "ELLE FRANCE",
    line1: "Buzz White",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/ellefrance/01/01.webp", full: "img/ellefrance/01/01.webp", alt: "ellefrance",
        width: 281, height: 350, dataW: 281, dataH: 350 },
      { type: "image", thumb: "thmbs/ellefrance/01/02.webp", full: "img/ellefrance/01/02.webp", alt: "ellefrance",
        width: 263, height: 350, dataW: 263, dataH: 350 },
      { type: "image", thumb: "thmbs/ellefrance/01/03.webp", full: "img/ellefrance/01/03.webp", alt: "ellefrance",
        width: 281, height: 350, dataW: 281, dataH: 350 }
    ]
  },
  {
    id: "madame-figaro-arthur-delloye",
    category: "editorial",
    title: "MADAME FIGARO",
    line1: "Arthur Delloye",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/madamefigaro/02/06.webp", full: "img/madamefigaro/02/06.webp", alt: "madamefigaro",
        width: 281, height: 350, dataW: 281, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/02/02.webp", full: "img/madamefigaro/02/02.webp", alt: "madamefigaro",
        width: 272, height: 350, dataW: 272, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/02/01.webp", full: "img/madamefigaro/02/01.webp", alt: "madamefigaro",
        width: 269, height: 350, dataW: 269, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/02/07.webp", full: "img/madamefigaro/02/07.webp", alt: "madamefigaro",
        width: 274, height: 350, dataW: 274, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/02/04.webp", full: "img/madamefigaro/02/04.webp", alt: "madamefigaro",
        width: 275, height: 350, dataW: 275, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/02/05.webp", full: "img/madamefigaro/02/05.webp", alt: "madamefigaro",
        width: 282, height: 350, dataW: 282, dataH: 350 }
    ]
  },
  {
    id: "elle-brasil-nicole-heiniger",
    category: "editorial",
    title: "ELLE BRASIL",
    line1: "Nicole Heiniger",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/ellebrasil/01/01.webp", full: "img/ellebrasil/01/01.webp", alt: "ellebrasil",
        width: 274, height: 350, dataW: 274, dataH: 350 },
      { type: "image", thumb: "thmbs/ellebrasil/01/02.webp", full: "img/ellebrasil/01/02.webp", alt: "ellebrasil",
        width: 280, height: 350, dataW: 280, dataH: 350 },
      { type: "image", thumb: "thmbs/ellebrasil/01/03.webp", full: "img/ellebrasil/01/03.webp", alt: "ellebrasil",
        width: 281, height: 350, dataW: 281, dataH: 350 }
    ]
  },
  {
    id: "madame-figaro-gregory-derkenne",
    category: "editorial",
    title: "MADAME FIGARO",
    line1: "Gregory Derkenne",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/madamefigaro/05/03.webp", full: "img/madamefigaro/05/03.webp", alt: "madamefigaro",
        width: 274, height: 350, dataW: 281, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/05/05.webp", full: "img/madamefigaro/05/05.webp", alt: "madamefigaro",
        width: 282, height: 350, dataW: 282, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/05/02.webp", full: "img/madamefigaro/05/02.webp", alt: "madamefigaro",
        width: 280, height: 350, dataW: 280, dataH: 350 }
    ]
  },
  {
    id: "madame-figaro-thiemo-sander",
    category: "editorial",
    title: "MADAME FIGARO",
    line1: "Thiemo Sander",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/madamefigaro/06/05.webp", full: "img/madamefigaro/06/05.webp", alt: "madamefigaro",
        width: 281, height: 350, dataW: 281, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/06/03.webp", full: "img/madamefigaro/06/03.webp", alt: "madamefigaro",
        width: 281, height: 350, dataW: 281, dataH: 350 },
      { type: "image", thumb: "thmbs/madamefigaro/06/04.webp", full: "img/madamefigaro/06/04.webp", alt: "madamefigaro",
        width: 281, height: 350, dataW: 281, dataH: 350 }
    ]
  },
  {
    id: "numero-homme-arash-khaksari",
    category: "editorial",
    title: "Numéro Homme",
    line1: "Arash Khaksari",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/numerohomme/01/01.webp", full: "img/numerohomme/01/01.webp", alt: "numerohomme",
        width: 271, height: 350, dataW: 271, dataH: 350 },
      { type: "image", thumb: "thmbs/numerohomme/01/02.webp", full: "img/numerohomme/01/02.webp", alt: "numerohomme",
        width: 271, height: 350, dataW: 271, dataH: 350 },
      { type: "image", thumb: "thmbs/numerohomme/01/06.webp", full: "img/numerohomme/01/06.webp", alt: "numerohomme",
        width: 271, height: 350, dataW: 271, dataH: 350 },
      { type: "image", thumb: "thmbs/numerohomme/01/03.webp", full: "img/numerohomme/01/03.webp", alt: "numerohomme",
        width: 271, height: 350, dataW: 271, dataH: 350 },
      { type: "image", thumb: "thmbs/numerohomme/01/05.webp", full: "img/numerohomme/01/05.webp", alt: "numerohomme",
        width: 271, height: 350, dataW: 271, dataH: 350 }
    ]
  },
  {
    id: "behind-the-blinds-emmanuel-giraud",
    category: "editorial",
    title: "Behind The Blinds",
    line1: "Emmanuel Giraud",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/behindtheblinds/01/03.webp", full: "img/behindtheblinds/01/03.webp", alt: "behindtheblinds",
        width: 280, height: 350, dataW: 280, dataH: 350 },
      { type: "image", thumb: "thmbs/behindtheblinds/01/01.webp", full: "img/behindtheblinds/01/01.webp", alt: "behindtheblinds",
        width: 235, height: 350, dataW: 235, dataH: 350 },
      { type: "image", thumb: "thmbs/behindtheblinds/01/05.webp", full: "img/behindtheblinds/01/05.webp", alt: "behindtheblinds",
        width: 279, height: 350, dataW: 279, dataH: 350 }
    ]
  },
  {
    id: "dedicate-nicolas-valois",
    category: "editorial",
    title: "DEDICATE",
    line1: "Nicolas Valois",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/dedicate/01/06.webp", full: "img/dedicate/01/06.webp", alt: "dedicate",
        width: 280, height: 350, dataW: 280, dataH: 350 },
      { type: "image", thumb: "thmbs/dedicate/01/01.webp", full: "img/dedicate/01/01.webp", alt: "dedicate",
        width: 281, height: 350, dataW: 281, dataH: 350 },
      { type: "image", thumb: "thmbs/dedicate/01/04.webp", full: "img/dedicate/01/04.webp", alt: "dedicate",
        width: 350, height: 278, dataW: 350, dataH: 278 }
    ]
  },
  {
    id: "apartpublications-10thanniversary",
    category: "editorial",
    title: "A PART PUBLICATIONS",
    line1: "Nicolas Valois",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/apartpublications/10thanniversarycelebrateissue/01.webp", full: "img/apartpublications/10thanniversarycelebrateissue/01.webp", alt: "apartpublications",
        width: 262, height: 350, dataW: 262, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/10thanniversarycelebrateissue/02.webp", full: "img/apartpublications/10thanniversarycelebrateissue/02.webp", alt: "apartpublications",
        width: 261, height: 350, dataW: 261, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/10thanniversarycelebrateissue/03.webp", full: "img/apartpublications/10thanniversarycelebrateissue/03.webp", alt: "apartpublications",
        width: 262, height: 350, dataW: 262, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/10thanniversarycelebrateissue/04.webp", full: "img/apartpublications/10thanniversarycelebrateissue/04.webp", alt: "apartpublications",
        width: 262, height: 350, dataW: 262, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/10thanniversarycelebrateissue/05.webp", full: "img/apartpublications/10thanniversarycelebrateissue/05.webp", alt: "apartpublications",
        width: 262, height: 350, dataW: 262, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/10thanniversarycelebrateissue/06.webp", full: "img/apartpublications/10thanniversarycelebrateissue/06.webp", alt: "apartpublications",
        width: 261, height: 350, dataW: 261, dataH: 350 }
    ]
  },
  {
    id: "vogue-singapore-ilyes-griyeb",
    category: "editorial",
    title: "VOGUE SINGAPORE",
    line1: "Ilyes Griyeb",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/voguesingapore/01/01.webp", full: "img/voguesingapore/01/01.webp", alt: "voguesingapore",
        width: 278, height: 350, dataW: 278, dataH: 350 },
      { type: "image", thumb: "thmbs/voguesingapore/01/02.webp", full: "img/voguesingapore/01/02.webp", alt: "voguesingapore",
        width: 283, height: 350, dataW: 283, dataH: 350 }
    ]
  },
  {
    id: "vogue-singapore",
    category: "editorial",
    title: "VOGUE SINGAPORE",
    line1: "",
    line2: "",
    media: [
      { type: "video", src: "video/voguesingapore/01.mp4", dataW: 720, dataH: 1280 }
    ]
  },
  {
    id: "samaritaine-guillaume-millet",
    category: "advertising",
    title: "SAMARITAINE",
    line1: "Guillaume Millet",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/samaritaine/01/04.webp", full: "img/samaritaine/01/04.webp", alt: "samaritaine",
        width: 350, height: 350, dataW: 350, dataH: 350 },
      { type: "image", thumb: "thmbs/samaritaine/01/02.webp", full: "img/samaritaine/01/02.webp", alt: "samaritaine",
        width: 348, height: 350, dataW: 348, dataH: 350 },
      { type: "image", thumb: "thmbs/samaritaine/01/01.webp", full: "img/samaritaine/01/01.webp", alt: "samaritaine",
        width: 350, height: 350, dataW: 350, dataH: 350 }
    ]
  },
  {
    id: "christian-louboutin",
    category: "advertising",
    title: "CHRISTIAN LOUBOUTIN",
    line1: "",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/louboutin/01/01.webp", full: "img/louboutin/01/01.webp", alt: "louboutin",
        width: 350, height: 244, dataW: 350, dataH: 244 },
      { type: "image", thumb: "thmbs/louboutin/01/02.webp", full: "img/louboutin/01/02.webp", alt: "louboutin",
        width: 350, height: 219, dataW: 350, dataH: 219 },
      { type: "video", src: "video/louboutinbeauty/01.mp4", dataW: 720, dataH: 1280 }
    ]
  },
  {
    id: "samaritaine",
    category: "advertising",
    title: "SAMARITAINE",
    line1: "",
    line2: "",
    media: [
      { type: "video", src: "video/samaritaine/01.mp4", dataW: 720, dataH: 1280 },
      { type: "video", src: "video/samaritaine/02.mp4", dataW: 720, dataH: 1280 }
    ]
  },
  {
    id: "givenchy-beauty",
    category: "advertising",
    title: "GIVENCHY BEAUTY",
    line1: "",
    line2: "",
    media: [
      { type: "video", src: "video/givenchybeauty/01.mp4", dataW: 640, dataH: 640 },
      { type: "video", src: "video/givenchybeauty/02.mp4", dataW: 640, dataH: 640 }
    ]
  },
  {
    id: "antidote-yann-weber",
    category: "editorial",
    title: "ANTIDOTE",
    line1: "Yann Weber",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/antidote/01/01.webp", full: "img/antidote/01/01.webp", alt: "antidote",
        width: 350, height: 343, dataW: 350, dataH: 343 },
      { type: "image", thumb: "thmbs/antidote/01/02.webp", full: "img/antidote/01/02.webp", alt: "antidote",
        width: 350, height: 350, dataW: 350, dataH: 350 },
      { type: "image", thumb: "thmbs/antidote/01/03.webp", full: "img/antidote/01/03.webp", alt: "antidote",
        width: 278, height: 350, dataW: 278, dataH: 350 }
    ]
  },
  {
    id: "overdue-rid-burman",
    category: "editorial",
    title: "OVERDUE",
    line1: "Rid Burman",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/overdue/01/03.webp", full: "img/overdue/01/03.webp", alt: "overdue",
        width: 269, height: 350, dataW: 269, dataH: 350 },
      { type: "image", thumb: "thmbs/overdue/01/02.webp", full: "img/overdue/01/02.webp", alt: "overdue",
        width: 245, height: 350, dataW: 245, dataH: 350 },
      { type: "image", thumb: "thmbs/overdue/01/01.webp", full: "img/overdue/01/01.webp", alt: "overdue",
        width: 289, height: 350, dataW: 289, dataH: 350 }
    ]
  },
  {
    id: "lula-kristin-vicari",
    category: "editorial",
    title: "Lula",
    line1: "Kristin Vicari",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/lula/01/01.webp", full: "img/lula/01/01.webp", alt: "lula",
        width: 234, height: 350, dataW: 234, dataH: 350 },
      { type: "image", thumb: "thmbs/lula/01/04.webp", full: "img/lula/01/04.webp", alt: "lula",
        width: 234, height: 350, dataW: 234, dataH: 350 },
      { type: "image", thumb: "thmbs/lula/01/03.webp", full: "img/lula/01/03.webp", alt: "lula",
        width: 234, height: 350, dataW: 234, dataH: 350 },
      { type: "image", thumb: "thmbs/lula/01/05.webp", full: "img/lula/01/05.webp", alt: "lula",
        width: 234, height: 350, dataW: 234, dataH: 350 }
    ]
  },
  {
    id: "essential-homme-thomas-goldblum",
    category: "editorial",
    title: "ESSENTIAL HOMME",
    line1: "Thomas Goldblum",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/essentielhomme/01/04.webp", full: "img/essentielhomme/01/04.webp", alt: "essentielhomme",
        width: 290, height: 350, dataW: 290, dataH: 350 },
      { type: "image", thumb: "thmbs/essentielhomme/01/03.webp", full: "img/essentielhomme/01/03.webp", alt: "essentielhomme",
        width: 286, height: 350, dataW: 286, dataH: 350 },
      { type: "image", thumb: "thmbs/essentielhomme/01/02.webp", full: "img/essentielhomme/01/02.webp", alt: "essentielhomme",
        width: 285, height: 350, dataW: 285, dataH: 350 },
      { type: "image", thumb: "thmbs/essentielhomme/01/05.webp", full: "img/essentielhomme/01/05.webp", alt: "essentielhomme",
        width: 286, height: 350, dataW: 286, dataH: 350 }
    ]
  },
  {
    id: "apartpublications-n016",
    category: "editorial",
    title: "A PART PUBLICATIONS",
    line1: "Nicolas Valois",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/apartpublications/n.016/01.webp", full: "img/apartpublications/n.016/01.webp", alt: "apartpublications",
        width: 270, height: 350, dataW: 270, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/n.016/02.webp", full: "img/apartpublications/n.016/02.webp", alt: "apartpublications",
        width: 247, height: 350, dataW: 247, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/n.016/03.webp", full: "img/apartpublications/n.016/03.webp", alt: "apartpublications",
        width: 249, height: 350, dataW: 249, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/n.016/04.webp", full: "img/apartpublications/n.016/04.webp", alt: "apartpublications",
        width: 231, height: 350, dataW: 231, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/n.016/05.webp", full: "img/apartpublications/n.016/05.webp", alt: "apartpublications",
        width: 263, height: 350, dataW: 263, dataH: 350 },
      { type: "image", thumb: "thmbs/apartpublications/n.016/06.webp", full: "img/apartpublications/n.016/06.webp", alt: "apartpublications",
        width: 234, height: 350, dataW: 234, dataH: 350 }
    ]
  },
  {
    id: "psg-x-jordan",
    category: "advertising",
    title: "PSG X JORDAN",
    line1: "",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/psgjordan/01/01.webp", full: "img/psgjordan/01/01.webp", alt: "PSGXJORDAN",
        width: 307, height: 350, dataW: 307, dataH: 350 },
      { type: "image", thumb: "thmbs/psgjordan/01/02.webp", full: "img/psgjordan/01/02.webp", alt: "PSGXJORDAN",
        width: 283, height: 350, dataW: 283, dataH: 350 },
      { type: "image", thumb: "thmbs/psgjordan/01/03.webp", full: "img/psgjordan/01/03.webp", alt: "PSGXJORDAN",
        width: 305, height: 350, dataW: 305, dataH: 350 }
    ]
  },
  {
    id: "vogue-ukraine-lukasz-pukowiec",
    category: "editorial",
    title: "VOGUE UKRAINE",
    line1: "Lukasz Pukowiec",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/vogueukraine/01/01.webp", full: "img/vogueukraine/01/01.webp", alt: "vogueukraine",
        width: 268, height: 350, dataW: 268, dataH: 350 },
      { type: "image", thumb: "thmbs/vogueukraine/01/02.webp", full: "img/vogueukraine/01/02.webp", alt: "vogueukraine",
        width: 265, height: 350, dataW: 265, dataH: 350 },
      { type: "image", thumb: "thmbs/vogueukraine/01/03.webp", full: "img/vogueukraine/01/03.webp", alt: "vogueukraine",
        width: 266, height: 350, dataW: 266, dataH: 350 }
    ]
  },
  {
    id: "vogue-ukraine-x-cartier-stephanie-volpato",
    category: "editorial",
    title: "VOGUE UKRAINE X CARTIER",
    line1: "Stéphanie Volpato",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/vogueukrainecartier/01/01.webp", full: "img/vogueukrainecartier/01/01.webp", alt: "vogueukrainecartier",
        width: 254, height: 350, dataW: 254, dataH: 350 },
      { type: "image", thumb: "thmbs/vogueukrainecartier/01/02.webp", full: "img/vogueukrainecartier/01/02.webp", alt: "vogueukrainecartier",
        width: 277, height: 350, dataW: 277, dataH: 350 },
      { type: "image", thumb: "thmbs/vogueukrainecartier/01/03.webp", full: "img/vogueukrainecartier/01/03.webp", alt: "vogueukrainecartier",
        width: 276, height: 350, dataW: 276, dataH: 350 }
    ]
  },
  {
    id: "numero-china-david-vasilijevic",
    category: "editorial",
    title: "Numéro China",
    line1: "David Vasilijevic",
    line2: "",
    media: [
      { type: "image", thumb: "thmbs/numerochina/01/01.webp", full: "img/numerochina/01/01.webp", alt: "numerochina",
        width: 282, height: 350, dataW: 282, dataH: 350 },
      { type: "image", thumb: "thmbs/numerochina/01/02.webp", full: "img/numerochina/01/02.webp", alt: "numerochina",
        width: 283, height: 350, dataW: 283, dataH: 350 },
      { type: "image", thumb: "thmbs/numerochina/01/03.webp", full: "img/numerochina/01/03.webp", alt: "numerochina",
        width: 282, height: 350, dataW: 282, dataH: 350 },
      { type: "image", thumb: "thmbs/numerochina/01/04.webp", full: "img/numerochina/01/04.webp", alt: "numerochina",
        width: 283, height: 350, dataW: 283, dataH: 350 },
      { type: "image", thumb: "thmbs/numerochina/01/05.webp", full: "img/numerochina/01/05.webp", alt: "numerochina",
        width: 283, height: 350, dataW: 283, dataH: 350 },
      { type: "image", thumb: "thmbs/numerochina/01/06.webp", full: "img/numerochina/01/06.webp", alt: "numerochina",
        width: 282, height: 350, dataW: 282, dataH: 350 },
      { type: "image", thumb: "thmbs/numerochina/01/07.webp", full: "img/numerochina/01/07.webp", alt: "numerochina",
        width: 279, height: 350, dataW: 279, dataH: 350 }
    ]
  }
];
