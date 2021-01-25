import Icon from './icon.js'

export default function SocialMedia(props = {}) {
  let linkedin = props.linkedin || ''

  return `
<div class="display-flex">
${linkedin
  ? `
  <a
    href="https://linkedin.com/in/${linkedin}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: 'margin-right-18 fill-979797 fill-hover-058AEA transition-fill',
      style: 'width:1.25rem;height:1.25rem;',
      href: 'linkedin'
    })}
  </a>
  `
  : ''
}
</div>
  `
}