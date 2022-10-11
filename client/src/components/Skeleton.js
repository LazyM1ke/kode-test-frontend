import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="97" y="44" rx="10" ry="10" width="80" height="12" /> 
    <circle cx="48" cy="41" r="36" /> 
    <rect x="97" y="20" rx="10" ry="10" width="144" height="16" />
  </ContentLoader>
)

export default Skeleton

