
import type { Config ,  } from "tailwindcss";
const {default: flattenColorPalette,} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		perspective: {
			2000: '2000px',
		  },
		transform: {
			'rotate-y-30': 'rotateY(30deg)',
			'rotate-y-45': 'rotateY(45deg)',
		  },
		  textShadow: {
			'inside': '2px 2px 4px rgba(0, 0, 0, 0.5)',
		  },
		  textStroke: {
			'sm': '0.5px',
			'DEFAULT': '1px',
			'lg': '2px',
		  },
		  
		animation: {
			scroll:"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			spotlight: "spotlight 2s ease .75s 1 forwards",
			revolution: 'revolve 3s ease-in 1 ',
			falls: 'dropDowm 3s ease-out 1',
			"accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
		},
		keyframes: {
			"accordion-down": {
          		from: { height: "0" },
          		to: { height: "var(--radix-accordion-content-height)" },
        		},
        	"accordion-up": {
          		from: { height: "var(--radix-accordion-content-height)" },
          		to: { height: "0" },
        },
			scroll: {
				to: {
				transform: "translate(calc(-50% - 0.5rem))",
				},
			},
			spotlight: {
				"0%": {
				  opacity: "0",
				  transform: "translate(-72%, -62%) scale(0.5)",
				},
				"100%": {
				  opacity: "1",
				  transform: "translate(-50%,-40%) scale(1)",
				},
			  },
			   revolve: {
				"0%": {
				  transform: "rotateY(90deg)"
				},
				"100%": {
				  transform: "rotateY(30deg)"
				}
			  },
			  dropDowm: {
				"0%": {
				opacity: "0",
					transform: "translateY(-1000%)"
				},
				"100%": {
					opacity: "1",
					transform: "translateY(0)"
				}
			  }
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},


  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},


	fontFamily: {
        TitleName: ['Dancing Script'],
		ProjectLine: ['Bebas Neue'],
		LoadingNumber: ['Jersey 25'],
	},
  },

  plugins: [
      require("tailwindcss-animate"),
	  require('tailwindcss-text-stroke'),
	  addVariablesForColors,

	  function ({ addUtilities, theme, matchUtilities }: { 
		addUtilities: (utilities: Record<string, any>) => void;
		theme: (path: string) => any;
		matchUtilities: (utilities: Record<string, any>, options: { values: Record<string, any> }) => void;
	  }) {
		// Add basic text stroke utilities
		addUtilities({
		  ".text-outline": {
			"-webkit-text-stroke-width": "1px",
			"-webkit-text-stroke-color": "#000",
			color: "transparent",
		  },
		  ".text-outline-white": {
			"-webkit-text-stroke-width": "1px",
			"-webkit-text-stroke-color": "#fff",
			color: "transparent",
		  },
		  ".text-outline-hover": {
			transition: "all 0.3s ease",
			"&:hover": {
			  "-webkit-text-stroke-width": "2px",
			  "-webkit-text-stroke-color": "#000",
			  color: "transparent",
			},
		  },
		});
  
		// Add customizable text stroke width
		matchUtilities(
		  {
			"text-stroke": (value: string) => ({
			  "-webkit-text-stroke-width": value,
			}),
		  },
		  { values: theme("textStroke") }
		);
  
		// Add customizable text stroke color
		matchUtilities(
		  {
			"text-stroke": (value: string) => ({
			  "-webkit-text-stroke-color": value,
			}),
		  },
		  { values: theme("textStrokeColor") }
		);
	  },

],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }


