import createHeading from './generators/createHeading'
import createButton from './generators/createButton'
import createQuoteSection from './generators/createQuoteSection'
import createDescription from './generators/createDescription'
import displayRandomQuote from './mutators/displayRandomQuote'

const heading: HTMLHeadingElement = createHeading()
const button: HTMLButtonElement = createButton()
const section: HTMLElement = createQuoteSection()
const description: HTMLElement = createDescription()

const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement

body.appendChild(heading)
body.appendChild(button)
body.appendChild(section)
body.appendChild(description)

displayRandomQuote()
