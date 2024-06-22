<template>
    <div id="bg">
  <svg width="270" height="270"
       viewBox="0 0 270 270" fill="none">
    <symbol id="container">
      <circle cx="135" cy="135" r="130" stroke="#02CAF7" stroke-width="10"/>
    </symbol>
    <symbol id="liquid">
      <path d="M0 71.0344C0 11.7849 73.6393 -15.5736 112.324 29.3037V29.3037C134.143 54.6151 171.778 58.8457 198.672 39.0103L206.818 33.002C231.973 14.4496 266.21 14.1976 291.635 32.3779V32.3779C318.355 51.4837 354.605 50.1371 379.833 29.1014L397.314 14.5252C414.946 -0.176172 439.21 -4.04721 460.54 4.43827V4.43827C484.364 13.9156 500 36.963 500 62.6028V399H0V71.0344Z" fill="#02CAF7" fill-opacity="0.5"/> 
    </symbol>
    <symbol id="bubbles">
      <path d="M91 10C91 15.5228 86.5228 20 81 20C75.4772 20 71 15.5228 71 10C71 4.47715 75.4772 0 81 0C86.5228 0 91 4.47715 91 10Z" fill="#CEF4FD"/>
      <path d="M20 38C20 43.5228 15.5228 48 10 48C4.47715 48 0 43.5228 0 38C0 32.4772 4.47715 28 10 28C15.5228 28 20 32.4772 20 38Z" fill="#CEF4FD"/>
      <circle cx="58.5" cy="58.5" r="7.5" fill="#CEF4FD"/>
      <circle cx="110.5" cy="78.5" r="7.5" fill="#CEF4FD"/>
      <circle cx="131" cy="33" r="5" fill="#CEF4FD"/>
      <circle cx="37" cy="111" r="5" fill="#CEF4FD"/>
    </symbol>
    <defs>
      <clipPath id="circleClip">
        <circle cx="135" cy="135" r="130"/>
      </clipPath>
    </defs>
  
    <g class="loader">
      <g id="liquid1-clip" clip-path="url(#circleClip)">
        <g>
          <use id="liquid1"  href="#liquid" transform="translate(0,180)"/>
          <use id="bubble1" href="#bubbles" transform="translate(60,100)"/>
        </g>
      </g>
      <g id="liquid2-clip" clip-path="url(#circleClip)">
        <g>
          <use id="liquid2" href="#liquid" fill-opacity="0.15" transform="translate(0,175)"/>
          <use id="bubble2" href="#bubbles" transform="translate(60,100)"/>
        </g>
      </g>
      <use href="#container"/>
    </g>
  </svg>
</div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
}

#bg {
  background-color: #010433;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
}

#liquid1-clip, #liquid2-clip {
  transform-origin: 50% 50%;
}

#liquid1-clip {
  animation: swingLeft 2s ease-in-out infinite;
}

#liquid2-clip {
  animation: swingLeft 2s ease-in-out infinite;
  animation-delay: 0.3s;
}

#liquid1 {
  transform-origin: 50% 50%;
  animation: liquid1Fill 2s linear infinite;
}

#liquid2 {
  transform-origin: 50% 50%;
  animation: liquid2Fill 2s linear infinite;
}

#bubble1 {
  transform-origin: 50% 50%;
  animation: bubbleRise1 2s linear infinite;
}

#bubble2 {
  animation: bubbleRise2 2s linear infinite;
}

@keyframes liquid1Fill {
  0% {
    transform: translate(0px,180px) scaleX(-1);
  }
  25% {
    transform: translate(10px,144px) scaleX(-2);
  }
  50% {
    transform: translate(0px,108px) scaleX(-3);
  }
  75% {
    transform: translate(-10px,72px) scaleX(-2);
  }
  100% {
    transform: translate(0px,36px) scaleX(-1);
  }
}

@keyframes liquid2Fill {
  0% {
    transform: translate(-5px,165px) scaleX(1);
  }
  25% {
    transform: translate(-15px,129px) scaleX(3);
  }
  50% {
    transform: translate(-5px,93px) scaleX(2);
  }
  75% {
    transform: translate(5px,57px) scaleX(2);
  }
  100% {
    transform: translate(-5px,21px) scaleX(1);
  }
}

@keyframes bubbleRise1 {
  from {
    transform: translate(60px,280px);
  }
  to {
    transform: translate(60px,100px)
  }
}

@keyframes bubbleRise2 {
  from {
    transform: translate(125px,280px) rotate(45deg);
  }
  to {
    transform: translate(125px,85px) rotate(45deg);
  }
}

@keyframes swingLeft {
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}

@keyframes swingRight {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>