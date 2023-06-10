function replaceTags(newTags: string[]): void {
    const tagsDiv: HTMLDivElement = document.getElementById('tags') as HTMLDivElement

    while (tagsDiv.hasChildNodes()) {
        const firstTag: HTMLElement = tagsDiv.firstChild as HTMLElement
    
        tagsDiv.removeChild(firstTag)
    }
    
    newTags.forEach(tag => {
        const tagSpan: HTMLElement = document.createElement('span')

        tagSpan.innerText = tag
        tagsDiv.appendChild(tagSpan)
    })
}

export default replaceTags
