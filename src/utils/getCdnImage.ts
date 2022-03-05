const baseUrl = 'https://raw.githubusercontent.com/maurodesouza/dev-meet/main/.github/cdn'

const getCdnImage = (path: string) => `${baseUrl}/${path}.svg`

export { getCdnImage }
