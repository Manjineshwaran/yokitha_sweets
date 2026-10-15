import { useEffect, useState } from 'react'
import './App.css'

const WHATSAPP_NUMBER = '919999999999'
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact Us', href: '#contact' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    color: '#3b5998',
    icon: (
      <path
        fill="currentColor"
        d="M13.5 8.5V6.8c0-.8.2-1.3 1.4-1.3H16V2.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H7.5v3.2h2.4V20h3.6v-8.3h2.4l.4-3.2h-2.8z"
      />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    color: '#e1523d',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </g>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    color: '#55acee',
    icon: (
      <path
        fill="currentColor"
        d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.4 11.7 11.7 0 0 0 8.3 20.2c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"
      />
    ),
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com',
    color: '#e0473b',
    icon: (
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.5-4.4-3 0-4.8 2.3-4.8 4.6 0 .9.3 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.8-2.4 6.8-5.7 6.8-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.2 1-.9 2.2-1.4 2.9A10 10 0 1 0 12 2z"
      />
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    color: '#ff0000',
    icon: (
      <g>
        <rect x="2" y="5.5" width="20" height="13" rx="3.5" fill="currentColor" />
        <path d="M10 9v6l5.2-3z" fill="#ff0000" />
      </g>
    ),
  },
]

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const featureIcons = {
  hand: (
    <g {...strokeProps}>
      <path d="M24 26V13" />
      <path d="M24 18c-5 0-8-3-8-8 5 0 8 3 8 8z" />
      <path d="M24 15c0-4.5 3-7 7.5-7 0 4.5-3 7-7.5 7z" />
      <path d="M6 31h6c2 0 3.5.6 5 1.6l1.4.9H26a2.2 2.2 0 0 1 0 4.4h-7" />
      <path d="M26 37.5l9.5-5.2c1.6-.9 3.6-.3 4.2 1.4l-13 8.3H14l-8-2" />
    </g>
  ),
  wheat: (
    <g {...strokeProps}>
      {[14, 24, 34].map((x) => (
        <g key={x}>
          <path d={`M${x} 40V12`} />
          {[14, 20, 26].map((y) => (
            <g key={y}>
              <path d={`M${x} ${y + 4}c-3-1-4-3.5-4-6 3 .5 4 3 4 6z`} />
              <path d={`M${x} ${y + 4}c3-1 4-3.5 4-6-3 .5-4 3-4 6z`} />
            </g>
          ))}
          <path d={`M${x} 12c-1.2-1.5-1.2-3.5 0-5 1.2 1.5 1.2 3.5 0 5z`} />
        </g>
      ))}
    </g>
  ),
  basket: (
    <g {...strokeProps}>
      <circle cx="17" cy="15" r="5" />
      <circle cx="29" cy="13" r="6" />
      <path d="M29 7c0-2 1-3.5 3-4.5" />
      <path d="M12 21c0-4 2-6 5-6" />
      <path d="M8 21h32l-3 19H11z" />
      <path d="M9.5 28h29M10.5 34h27" />
      <path d="M18 21v19M24 21v19M30 21v19" />
    </g>
  ),
  search: (
    <g {...strokeProps}>
      <circle cx="20" cy="20" r="12" />
      <path d="M29 29l11 11" strokeWidth="3.2" />
      <path d="M15 25c0-6 4-10 11-10 0 7-4 11-11 10z" />
      <path d="M15 25l7-6" />
    </g>
  ),
  truck: (
    <g {...strokeProps}>
      <path d="M4 14h24v20H4z" />
      <path d="M28 20h8l6 7v7H28" />
      <circle cx="12" cy="36" r="3.5" fill="#fff" />
      <circle cx="35" cy="36" r="3.5" fill="#fff" />
      <path d="M11 20c0 4 3 7 7 7M11 20c4 0 7 3 7 7" />
    </g>
  ),
  medal: (
    <g {...strokeProps}>
      <circle cx="24" cy="19" r="11" />
      <circle cx="24" cy="19" r="7" />
      <path d="M17 28l-4 13 6-3 3 5 3-9M31 28l4 13-6-3-3 5-3-9" />
      <path d="M24 15l1.3 2.6 2.9.4-2.1 2 .5 2.9-2.6-1.4-2.6 1.4.5-2.9-2.1-2 2.9-.4z" />
    </g>
  ),
}

const topFeatures = [
  {
    icon: 'hand',
    title: 'Family Healthy',
    text: "If you have a family, it's important to keep them healthy and happy, too.",
  },
  {
    icon: 'wheat',
    title: 'Always Fresh',
    text: 'Farms is your year round supplier of berries, citrus, and melons.',
  },
]

const leftFeatures = [
  {
    icon: 'basket',
    title: '100% Natural',
    text: 'Made from naturally grown ingredients without any added chemicals.',
  },
  {
    icon: 'truck',
    title: 'Fast Delivery',
    text: 'Fresh products packed with care and delivered right to your doorstep.',
  },
]

const rightFeatures = [
  {
    icon: 'search',
    title: 'Quality Check',
    text: 'Every product goes through strict quality checks before it reaches you.',
  },
  {
    icon: 'medal',
    title: 'Best Quality',
    text: 'Traditional recipes and the finest ingredients for a taste you will love.',
  },
]

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function Leaf() {
  return (
    <svg className="leaf" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20c0-9 6-15 16-16-1 10-7 16-16 16z" fill="#4caf50" />
      <path d="M4 20c4-5 8-9 12-12" stroke="#2e7d32" strokeWidth="1.2" fill="none" />
    </svg>
  )
}

const bambooLeaves = [
  { x: 182, y: 28, angle: 150, length: 96 },
  { x: 182, y: 28, angle: 172, length: 110 },
  { x: 182, y: 28, angle: 194, length: 92 },
  { x: 184, y: 92, angle: 140, length: 84 },
  { x: 184, y: 92, angle: 162, length: 104 },
  { x: 184, y: 92, angle: 186, length: 88 },
  { x: 186, y: 140, angle: 155, length: 78 },
]

function BambooLeaves() {
  return (
    <svg className="bamboo" viewBox="0 0 200 180" aria-hidden="true">
      <defs>
        <linearGradient id="bambooLeaf" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3f9a1c" />
          <stop offset="100%" stopColor="#9bd43a" />
        </linearGradient>
      </defs>
      <rect x="186" y="0" width="9" height="180" fill="#8cc63f" />
      {[60, 120].map((y) => (
        <rect key={y} x="184" y={y} width="13" height="3" rx="1.5" fill="#5f9426" />
      ))}
      {bambooLeaves.map(({ x, y, angle, length }) => (
        <g key={`${x}-${y}-${angle}`} transform={`translate(${x} ${y}) rotate(${angle})`}>
          <path
            d={`M0 0 Q${length * 0.45} -11 ${length} 0 Q${length * 0.45} 11 0 0Z`}
            fill="url(#bambooLeaf)"
          />
          <path d={`M2 0 L${length - 4} 0`} stroke="#2f7a12" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  )
}

const productCategories = [
  'All',
  'Chikki Bar',
  'Ball Pack',
  'Chikki Round',
  'Pet Jar',
  'Medium Jar',
  'Large Jar',
  'Fancy Box',
  'Sliced Candy Pack',
]

const products = [
  { name: 'Small Peanut Bar', category: 'Chikki Bar', image: '/images/small-peanut-bar-transparent.png' },
  { name: 'Regular Peanut Bar', category: 'Chikki Bar', image: '/images/regular-peanut-bar-yellow.png?v=2' },
  { name: 'Regular Crushed Peanut Bar', category: 'Chikki Bar', image: '/images/crushed-peanut-bar-blue.png?v=2' },
  { name: 'Large Peanut Bar', category: 'Chikki Bar', image: '/images/large-peanut-bar-rose.png?v=2' },
]

function Peanuts({ x, y, w, h, crushed }) {
  const dots = []
  const step = crushed ? 5 : 9
  for (let i = x + step / 2; i < x + w; i += step) {
    for (let j = y + step / 2; j < y + h; j += step) {
      dots.push(
        <ellipse
          key={`${i}-${j}`}
          cx={i + ((j * 7) % 3)}
          cy={j}
          rx={crushed ? 2 : 3.6}
          ry={crushed ? 1.5 : 2.6}
          fill={(i + j) % 3 ? '#d9a04a' : '#c58630'}
        />,
      )
    }
  }
  return <g>{dots}</g>
}

function ProductArt({ art, color, size = 1, crushed }) {
  const label = (x, y, fs = 11) => (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontFamily="'Brush Script MT', 'Segoe Script', cursive"
      fontSize={fs}
      fontWeight="700"
      fill="#ffe680"
      stroke="#7a0a0e"
      strokeWidth="0.4"
    >
      Yokitha Sweets
    </text>
  )

  let body
  if (art === 'bar' || art === 'sliced') {
    const crimp = (inner, outer) =>
      Array.from({ length: 9 }, (_, i) => `${i % 2 ? outer : inner},${30 + i * 5}`).join(' ')
    body = (
      <g>
        <polygon points={crimp(12, 4)} fill={color} />
        <polygon points={crimp(148, 156)} fill={color} />
        <rect x="12" y="30" width="136" height="40" fill={color} />
        <rect x="26" y="36" width="108" height="28" rx="3" fill="#f6e2b0" />
        {art === 'sliced' ? (
          [30, 52, 74, 96, 118].map((sx) => (
            <rect key={sx} x={sx} y="38" width="18" height="24" rx="2" fill="#d9a04a" stroke="#a8761a" />
          ))
        ) : (
          <Peanuts x={26} y={36} w={108} h={28} crushed={crushed} />
        )}
        <rect x="40" y="32" width="80" height="14" rx="7" fill={color} opacity="0.92" />
        {label(80, 43)}
      </g>
    )
  } else if (art === 'jar') {
    body = (
      <g>
        <rect x="52" y="8" width="56" height="12" rx="3" fill={color} />
        <path d="M50,22 h60 q8,0 8,10 v52 q0,8 -8,8 h-60 q-8,0 -8,-8 v-52 q0,-10 8,-10z" fill="#fff8e6" stroke="#d8c9a0" />
        <Peanuts x={46} y={26} w={68} h={60} />
        <rect x="42" y="44" width="76" height="24" fill={color} />
        {label(80, 60, 12)}
      </g>
    )
  } else if (art === 'round') {
    body = (
      <g>
        <circle cx="80" cy="50" r="38" fill={color} />
        <circle cx="80" cy="50" r="30" fill="#f6e2b0" />
        <clipPath id={`round-${color.slice(1)}`}>
          <circle cx="80" cy="50" r="30" />
        </clipPath>
        <g clipPath={`url(#round-${color.slice(1)})`}>
          <Peanuts x={50} y={20} w={60} h={60} />
        </g>
        <rect x="44" y="42" width="72" height="16" rx="8" fill={color} />
        {label(80, 54)}
      </g>
    )
  } else if (art === 'box') {
    body = (
      <g>
        <path d="M30,30 L80,14 L130,30 L80,46 Z" fill="#e2b54a" />
        <path d="M30,30 L80,46 L80,90 L30,74 Z" fill={color} />
        <path d="M130,30 L80,46 L80,90 L130,74 Z" fill="#8f0d11" />
        <path d="M80,14 L80,46" stroke="#fff3c4" strokeWidth="1.5" />
        <path d="M55,22 L105,38" stroke="#fff3c4" strokeWidth="3" />
        <text x="55" y="64" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontWeight="700" fill="#ffe680" transform="rotate(18 55 64)">
          YOKITHA
        </text>
      </g>
    )
  } else {
    body = (
      <g>
        <path d="M45,10 h70 l6,6 v70 l-6,6 h-70 l-6,-6 v-70z" fill={color} />
        <circle cx="80" cy="54" r="22" fill="#f6e2b0" />
        <g>
          {[[72, 46], [88, 46], [80, 58], [70, 62], [90, 62]].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="#d9a04a" stroke="#a8761a" />
          ))}
        </g>
        {label(80, 26, 12)}
      </g>
    )
  }

  return (
    <svg viewBox="0 0 160 100" aria-hidden="true" style={{ width: `${size * 100}%` }}>
      {body}
    </svg>
  )
}

function OurProducts() {
  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? products : products.filter((p) => p.category === category)

  return (
    <section className="our-products">
      <p className="welcome-kicker">Featured Products</p>
      <h2 className="our-products-title">Our Products</h2>

      <div className="product-filters">
        {productCategories.map((c) => (
          <button
            key={c}
            type="button"
            className={c === category ? 'active' : ''}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length === 0 && <p className="products-empty">Products coming soon.</p>}

      <div className="product-grid">
        {visible.map((p) => (
          <article key={p.name} className="product-card">
            <div className="product-card-image">
              {p.image ? <img src={p.image} alt={p.name} /> : <ProductArt {...p} />}
            </div>
            <h3 className="product-card-name">{p.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: 'Rajesh',
    rating: 5,
    text: 'This is the 4th time I bought this product and the taste is always the same. The peanut bars are crunchy, fresh and not too sweet. My kids love them!',
  },
  {
    name: 'Priya',
    rating: 5,
    text: 'The puffed rice balls remind me of the ones we had in childhood. Neatly packed, fresh and delivered on time. Highly recommended.',
  },
  {
    name: 'Karthik',
    rating: 5,
    text: 'Bought the fancy box for a family function and everyone asked where it was from. Great quality and traditional taste at a good price.',
  },
]

function AvatarIcon() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#525f80" />
      <circle cx="50" cy="40" r="19" fill="#e3e8ef" />
      <path d="M14,92 Q16,64 50,62 Q84,64 86,92 Q70,100 50,100 Q30,100 14,92z" fill="#e3e8ef" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#f5b301"
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"
      />
    </svg>
  )
}

function BasilLeaves() {
  const leaves = [
    { x: 70, y: 70, rotate: -20, scale: 1 },
    { x: 150, y: 150, rotate: -60, scale: 0.85 },
    { x: 170, y: 20, rotate: 15, scale: 0.75 },
  ]
  return (
    <svg className="basil" viewBox="0 0 220 230" aria-hidden="true">
      <defs>
        <linearGradient id="basilLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8fd14f" />
          <stop offset="100%" stopColor="#3e8e1e" />
        </linearGradient>
      </defs>
      {leaves.map(({ x, y, rotate, scale }) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
          <path d="M-60,0 Q-20,-38 60,-6 Q20,36 -60,0z" fill="url(#basilLeaf)" />
          <path d="M-60,0 Q0,-6 60,-6" stroke="#2f6e14" strokeWidth="1.5" fill="none" />
          {[-30, -5, 20].map((vx) => (
            <path key={vx} d={`M${vx},-3 q12,-10 22,-14 M${vx},-3 q12,8 20,12`} stroke="#4f9a2a" strokeWidth="0.8" fill="none" />
          ))}
        </g>
      ))}
    </svg>
  )
}

function PeanutShells() {
  const shells = [
    { x: 55, y: 30, rotate: 10 },
    { x: 35, y: 100, rotate: 35 },
    { x: 110, y: 150, rotate: -25 },
  ]
  return (
    <svg className="peanuts" viewBox="0 0 160 180" aria-hidden="true">
      {shells.map(({ x, y, rotate }) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rotate})`}>
          <path
            d="M-38,0 Q-38,-16 -22,-16 Q-12,-16 -4,-10 Q4,-6 12,-12 Q20,-17 30,-14 Q42,-8 38,6 Q34,18 20,16 Q10,14 4,10 Q-4,6 -12,12 Q-22,18 -32,12 Q-38,8 -38,0z"
            fill="#d8b07a"
            stroke="#a87d45"
            strokeWidth="1.2"
          />
          {[-26, -16, 18, 28].map((dx) => (
            <path key={dx} d={`M${dx},-12 l0,22`} stroke="#b88d55" strokeWidth="0.8" />
          ))}
        </g>
      ))}
      {[
        [62, 62, 20],
        [78, 92, -30],
      ].map(([cx, cy, r]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="10" ry="14" fill="#8a3a1c" transform={`rotate(${r} ${cx} ${cy})`} />
      ))}
      {[
        [118, 70, 40],
        [100, 112, -70],
        [60, 150, 10],
      ].map(([cx, cy, r]) => (
        <g key={`${cx}-${cy}`} transform={`rotate(${r} ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx="10" ry="14" fill="#f3dfb5" stroke="#d2b47c" />
          <path d={`M${cx},${cy - 12} l0,24`} stroke="#d2b47c" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <PeanutShells />
      <div className="newsletter-inner">
        <div className="newsletter-text">
          <h2 className="newsletter-title">Subscribe Newsletter.</h2>
          <p className="newsletter-desc">
            {subscribed
              ? 'Thank you for subscribing! You will hear from us soon.'
              : 'Get e-mail updates about our latest shop and special offers.'}
          </p>
        </div>
        <form className="newsletter-form" onSubmit={onSubmit}>
          <input
            type="email"
            required
            placeholder="Your email address"
            aria-label="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearTimeout(timer)
  }, [index])

  const current = testimonials[index]

  return (
    <section className="testimonials">
      <BasilLeaves />

      <div className="testimonial" key={index}>
        <div className="testimonial-avatar">
          <AvatarIcon />
        </div>
        <h3 className="testimonial-name">{current.name}</h3>
        <div className="testimonial-stars" aria-label={`${current.rating} out of 5 stars`}>
          {Array.from({ length: current.rating }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="testimonial-text">{current.text}</p>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            className={i === index ? 'active' : ''}
            aria-label={`Show review by ${t.name}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}

const contactInfo = {
  email: 'info@yokithasweets.com',
  address:
    'No. 19 A, 3rd Cross Street Ambal Nagar, Koundanpalayam, Near To The St. Patrick School, Pondicherry-605009, India.',
  phones: ['7010623382', '7539907524'],
}

const instagramPosts = [
  { name: 'Peanut Chikki Jar', art: 'jar', color: '#e3262b' },
  { name: 'Sesame Chikki Jar', art: 'jar', color: '#1f4fd1' },
  { name: 'Puffed Rice Balls', image: '/images/puffed-rice-balls.png' },
  { name: 'Peanut Balls Pack', art: 'pack', color: '#2a7de1' },
  { name: 'Sliced Peanut Candy', art: 'sliced', color: '#e3262b' },
  { name: 'Round Peanut Chikki', art: 'round', color: '#c0161b' },
]

const footerIconProps = {
  width: 15,
  height: 15,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const paymentFont = { fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700 }

const paymentMethods = [
  {
    name: 'MasterCard',
    art: (
      <g>
        <rect width="60" height="30" rx="3" fill="#1a1f71" />
        <circle cx="25" cy="15" r="10" fill="#eb001b" />
        <circle cx="35" cy="15" r="10" fill="#f79e1b" fillOpacity="0.9" />
        <text x="30" y="18" textAnchor="middle" fontSize="7" fill="#fff" {...paymentFont}>
          MasterCard
        </text>
      </g>
    ),
  },
  {
    name: 'PayPal',
    art: (
      <text x="30" y="20" textAnchor="middle" fontSize="13" fontStyle="italic" {...paymentFont}>
        <tspan fill="#253b80">Pay</tspan>
        <tspan fill="#179bd7">Pal</tspan>
      </text>
    ),
  },
  {
    name: 'Visa',
    art: (
      <g>
        <text x="30" y="20" textAnchor="middle" fontSize="15" fontStyle="italic" fill="#1a1f71" {...paymentFont}>
          VISA
        </text>
        <rect x="12" y="23" width="36" height="3" fill="#f7b600" />
      </g>
    ),
  },
  {
    name: 'American Express',
    art: (
      <g>
        <rect x="6" y="3" width="48" height="24" rx="2" fill="#2e77bc" />
        <text x="30" y="13" textAnchor="middle" fontSize="7" fill="#fff" {...paymentFont}>
          AMERICAN
        </text>
        <text x="30" y="22" textAnchor="middle" fontSize="7" fill="#fff" {...paymentFont}>
          EXPRESS
        </text>
      </g>
    ),
  },
  {
    name: 'Discover',
    art: (
      <g>
        <text x="30" y="18" textAnchor="middle" fontSize="9" fill="#231f20" {...paymentFont}>
          DISC
          <tspan fill="#f58220">●</tspan>
          VER
        </text>
        <text x="30" y="25" textAnchor="middle" fontSize="4" fill="#888" {...paymentFont}>
          NETWORK
        </text>
      </g>
    ),
  },
  {
    name: 'Paytm',
    art: (
      <text x="30" y="20" textAnchor="middle" fontSize="13" {...paymentFont}>
        <tspan fill="#042e6f">pay</tspan>
        <tspan fill="#00baf2">tm</tspan>
      </text>
    ),
  },
  {
    name: 'PhonePe',
    art: (
      <g>
        <circle cx="30" cy="15" r="11" fill="#5f259f" />
        <text x="30" y="20" textAnchor="middle" fontSize="13" fill="#fff" {...paymentFont}>
          पे
        </text>
      </g>
    ),
  },
  {
    name: 'Google Pay',
    art: (
      <text x="30" y="20" textAnchor="middle" fontSize="12" {...paymentFont}>
        <tspan fill="#4285f4">G</tspan>
        <tspan fill="#5f6368"> Pay</tspan>
      </text>
    ),
  },
  {
    name: 'BHIM',
    art: (
      <g>
        <text x="27" y="20" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#58595b" {...paymentFont}>
          BHIM
        </text>
        <path d="M46 9 l6 6 -6 6z" fill="#f47920" />
        <path d="M50 9 l6 6 -6 6z" fill="#138808" />
      </g>
    ),
  },
]

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-about">
          <img className="footer-logo" src="/images/logo.svg?v=4" alt="Yokitha Sweets" />
          <p className="footer-desc">
            Yokitha Sweets was established in the year 1999. We are leading manufacturer,
            wholesale and supplier of peanut balls, puffed rice balls, black sesame balls, white
            sesame balls, etc.
          </p>
          <ul className="footer-contact">
            <li>
              <svg {...footerIconProps}>
                <rect x="3" y="5" width="18" height="14" rx="1.5" />
                <path d="M3.5 6l8.5 7 8.5-7" />
              </svg>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <svg {...footerIconProps}>
                <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>{contactInfo.address}</span>
            </li>
            <li>
              <svg {...footerIconProps}>
                <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
              </svg>
              <span>
                {contactInfo.phones.map((p, i) => (
                  <span key={p}>
                    {i > 0 && ' / '}
                    <a href={`tel:+91${p}`}>{p}</a>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Information</h3>
          <ul>
            {navLinks
              .filter((link) => link.href !== '#home')
              .map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
          </ul>
        </div>

        <div className="footer-instagram">
          <h3 className="footer-heading">Instagram</h3>
          <div className="instagram-grid">
            {instagramPosts.map((post) => (
              <a
                key={post.name}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label={`${post.name} on Instagram`}
              >
                {post.image ? <img src={post.image} alt="" /> : <ProductArt {...post} />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()}. Yokitha Sweets All Rights Reserved.
        </p>
        <ul className="payment-methods">
          {paymentMethods.map((m) => (
            <li key={m.name} title={m.name}>
              <svg viewBox="0 0 60 30" role="img" aria-label={m.name}>
                {m.art}
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
      <path
        fill="#fff"
        d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.9 4.9-10.7 11-10.7s11 4.8 11 10.7-4.9 10.9-10.9 10.9zm6-8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"
      />
    </svg>
  )
}

function SketchCircle() {
  return (
    <svg className="sketch-circle" viewBox="0 0 100 100" aria-hidden="true">
      <ellipse cx="50" cy="50" rx="45" ry="43" transform="rotate(-10 50 50)" />
      <ellipse cx="51" cy="49" rx="43" ry="46" transform="rotate(14 50 50)" />
    </svg>
  )
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      <div className="feature-icon">
        <SketchCircle />
        <svg viewBox="0 0 48 48" width="50" height="50" aria-hidden="true">
          {featureIcons[icon]}
        </svg>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  )
}

function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page" id="home">
      <div className="top-progress" />

      <header className="site-header">
        <nav className="main-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#home" className="brand">
          <img src="/images/logo.svg?v=4" alt="Yokitha Sweets" />
        </a>

        <button type="button" className="search-btn" aria-label="Search">
          <SearchIcon />
        </button>
      </header>

      <main className="hero">
        <div className="hero-text">
          <p className="hero-kicker">
            Peanut <strong>Candy Cake</strong>
          </p>
          <h1 className="hero-title">
            Fresh Pe<span className="leaf-letter">a<Leaf /></span>nuts
          </h1>
          <p className="hero-desc">
            These peanut candy cakes are a good snack for kids to munch on in between meals as it
            provides instant energy for active kids.
          </p>
          <a href="#contact" className="enquiry-btn">
            Enquiry Now <span aria-hidden="true">&gt;&gt;</span>
          </a>
        </div>

        <div className="hero-product">
          <img
            className="hero-poster"
            src="/images/mazz-peanut-chikki-poster.png"
            alt="MAZZ Peanut Chikki - A taste of real peanut"
          />
          <div className="product-shadow" />
        </div>
      </main>

      <section className="welcome" id="about">
        <p className="welcome-kicker">Green Agriculture</p>
        <h2 className="welcome-title">Welcome to Organive</h2>

        <div className="welcome-layout">
          <div className="welcome-side">
            {leftFeatures.map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>

          <div className="welcome-center">
            <div className="welcome-top">
              {topFeatures.map((f) => (
                <Feature key={f.title} {...f} />
              ))}
            </div>
            <div className="welcome-image">
              <img src="/images/logo.svg?v=4" alt="Yokitha Sweets" />
            </div>
          </div>

          <div className="welcome-side">
            {rightFeatures.map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="best-price" id="products">
        <BambooLeaves />
        <div className="best-price-inner">
          <div className="best-price-product">
            <img src="/images/puffed-rice-balls.png" alt="Yokitha Sweets Puffed Rice Balls pack" />
          </div>
          <div className="best-price-text">
            <p className="best-price-kicker">Best Price of</p>
            <h2 className="best-price-title">Puffed Rice Balls</h2>
            <a href="#contact" className="shop-btn">
              Shop Now <span aria-hidden="true">&gt;&gt;</span>
            </a>
          </div>
        </div>
      </section>

      <OurProducts />

      <Testimonials />

      <Newsletter />

      <Footer />

      <ul className="social-bar">
        {socialLinks.map((s) => (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              style={{ background: s.color }}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
                {s.icon}
              </svg>
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="enquiry-tab">
        Enquiry Now <span aria-hidden="true">&raquo;</span>
      </a>

      <button
        type="button"
        className={`back-to-top${showTop ? ' visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export default App
