const baseUrl = 'https://raw.githubusercontent.com/maurodesouza/dev-meet/main/.github/cdn'

const getIconUrl = (icon: string, variant: string) => `${baseUrl}/${icon}/${variant}.svg`

export { getIconUrl }
