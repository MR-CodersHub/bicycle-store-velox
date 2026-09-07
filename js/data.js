/* ==========================================================================
   Velox Cycles — shared static data for bikes, accessories + cycling blog
   Loaded by navbar.js / blog.js / products.js / bikes.js across all public pages
   ========================================================================== */

var STRIDE_DATA = (function () {
  'use strict';

  /* ----------------------------------------------------------------------
     PRODUCTS — Bicycles & Cycling Accessories
     ---------------------------------------------------------------------- */
  var PRODUCTS = [
    /* ---------------- ROAD BIKES ---------------- */
    {
      id: 'velox-aero-slr9',
      name: 'Velox Aero SLR 9',
      brand: 'Velox',
      category: 'road',
      type: 'Road',
      tagline: 'Wind-tunnel tested carbon aero road racer.',
      lede:
        'Engineered for sheer velocity on flats and crosswinds. High-modulus carbon frame with fully integrated internal routing, Shimano Ultegra Di2 electronic 24-speed gearing, and 50mm deep-section carbon wheels.',
      price: 185000,
      compareAt: 210000,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 48,
      sizes: ['S (52cm)', 'M (54cm)', 'L (56cm)', 'XL (58cm)'],
      colors: ['#0D1B2A', '#556B2F', '#ffffff'],
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&auto=format&fit=crop',
      imageAlt: 'Velox Aero SLR 9 carbon road bicycle in studio view',
      stats: [
        { value: '7.4 kg', label: 'complete weight (M)' },
        { value: '24-Speed', label: 'Ultegra Di2' },
        { value: '4.9★', label: 'from 48 racers' }
      ],
      specs: [
        { title: 'Frame', text: 'Toray T800 Monocoque Aero Carbon, 12x142mm thru-axle' },
        { title: 'Fork', text: 'Full carbon aero fork with tapered steerer' },
        { title: 'Drivetrain', text: 'Shimano Ultegra R8170 Di2 Electronic, 52/36T, 11-30T' },
        { title: 'Brakes', text: 'Shimano Ultegra Hydraulic Disc, 160mm IceTech rotors' },
        { title: 'Wheelset', text: 'Velox Aeromax 50 Carbon Tubeless-Ready' },
        { title: 'Tires', text: 'Continental Grand Prix 5000 S TR, 700x28c' }
      ],
      faqs: [
        { q: 'Is this bike UCI approved for racing?', a: 'Yes, the frame and fork are fully UCI certified for all national and international road race competitions.' },
        { q: 'Does it ship fully assembled?', a: 'All Velox road bikes include free in-store laser fitting and tuning. For home delivery, bikes arrive 95% assembled with tools and torque wrench included.' }
      ],
      related: ['trek-emonda-sl6', 'cannondale-supersix', 'giro-aether-helmet']
    },
    {
      id: 'trek-emonda-sl6',
      name: 'Trek Émonda SL 6 Disc',
      brand: 'Trek',
      category: 'road',
      type: 'Road',
      tagline: 'Ultralight climbing machine built for summits.',
      lede:
        'The Émonda SL 6 gives you the aerodynamic tube shaping and ultralight 500 Series OCLV Carbon ride quality that climbs steep mountain passes with effortless agility.',
      price: 245000,
      compareAt: 265000,
      badge: 'sale',
      rating: 4.8,
      reviewCount: 36,
      sizes: ['50cm', '52cm', '54cm', '56cm', '58cm'],
      colors: ['#dc2626', '#0D1B2A', '#64748b'],
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=900&auto=format&fit=crop',
      imageAlt: 'Trek Emonda SL 6 Disc road bike in race red',
      stats: [
        { value: '8.1 kg', label: 'lightweight build' },
        { value: 'OCLV 500', label: 'carbon technology' },
        { value: '4.8★', label: 'from 36 reviews' }
      ],
      specs: [
        { title: 'Frame', text: 'Ultralight 500 Series OCLV Carbon, Ride Tuned performance' },
        { title: 'Drivetrain', text: 'Shimano 105 R7100 12-Speed Mechanical' },
        { title: 'Brakes', text: 'Shimano 105 Hydraulic Disc, Flat Mount' },
        { title: 'Wheels', text: 'Bontrager Aeolus Elite 35, OCLV Carbon, Tubeless Ready' }
      ],
      faqs: [
        { q: 'Can it fit wider tires?', a: 'Yes, the frame clears up to 32mm tires comfortably for rough tarmac and chip-seal roads.' }
      ],
      related: ['velox-aero-slr9', 'cannondale-supersix', 'bontrager-ion-light']
    },
    {
      id: 'cannondale-supersix',
      name: 'Cannondale SuperSix EVO 3',
      brand: 'Cannondale',
      category: 'road',
      type: 'Road',
      tagline: 'The ultimate pure road racing synthesis of speed.',
      lede:
        'Low drag. High speed. The SuperSix EVO flies uphill and swoops downhill with telepathic handling, sleek aerodynamic lines, and a Shimano 105 Di2 wireless electronic groupset.',
      price: 299000,
      compareAt: null,
      badge: 'new',
      rating: 4.9,
      reviewCount: 29,
      sizes: ['48cm', '51cm', '54cm', '56cm', '58cm'],
      colors: ['#556B2F', '#1e293b', '#ffffff'],
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=900&auto=format&fit=crop',
      imageAlt: 'Cannondale SuperSix EVO road bicycle',
      stats: [
        { value: '7.8 kg', label: 'total weight' },
        { value: 'Di2 Wireless', label: 'shifting precision' },
        { value: '4.9★', label: 'from 29 reviews' }
      ],
      specs: [
        { title: 'Frame', text: 'SuperSix EVO Carbon, integrated cable routing w/ SwitchPlate' },
        { title: 'Drivetrain', text: 'Shimano 105 Di2 7150, 12-speed electronic' },
        { title: 'Brakes', text: 'Shimano 105 R7170 hydraulic disc, 160/160mm RT70 rotors' }
      ],
      faqs: [
        { q: 'What kind of bottom bracket does it use?', a: 'It utilizes a threaded BSA 68mm BB for rock-solid reliability and whisper-quiet operation.' }
      ],
      related: ['velox-aero-slr9', 'trek-emonda-sl6', 'rapha-bib-shorts']
    },

    /* ---------------- MOUNTAIN BIKES ---------------- */
    {
      id: 'velox-apex-trail',
      name: 'Velox Apex Trail 29 FS',
      brand: 'Velox',
      category: 'mountain',
      type: 'Mountain',
      tagline: 'Full-suspension 29er trail weapon built for rock gardens.',
      lede:
        'With 140mm front and 130mm rear plush air travel, progressive enduro geometry, and a SRAM GX Eagle 1x12 drivetrain, the Apex Trail turns technical descents into pure playground runs.',
      price: 165000,
      compareAt: 185000,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 52,
      sizes: ['S (15")', 'M (17.5")', 'L (19")', 'XL (21")'],
      colors: ['#556B2F', '#0D1B2A', '#f59e0b'],
      image: '/assets/home-bg.jpg',
      imageAlt: 'Velox Apex Trail full-suspension mountain bike on trail',
      stats: [
        { value: '140 mm', label: 'Fox 34 Performance Fork' },
        { value: '1x12', label: 'SRAM GX Eagle' },
        { value: '4.9★', label: 'from 52 trail riders' }
      ],
      specs: [
        { title: 'Frame', text: 'Hydroformed 6061-T6 Aluminum, Boost 148x12mm, internal dropper routing' },
        { title: 'Fork', text: 'Fox 34 Float Rhythm, GRIP damper, 140mm, Boost 110x15mm' },
        { title: 'Rear Shock', text: 'Fox Float DPS Performance, 3-position lever, 130mm' },
        { title: 'Drivetrain', text: 'SRAM GX Eagle 12-Speed, 10-52T cassette' },
        { title: 'Brakes', text: 'Shimano SLX 4-piston hydraulic disc, 203/180mm' },
        { title: 'Dropper Post', text: 'TranzX 150mm dropper with handlebar remote' }
      ],
      faqs: [
        { q: 'Is it tubeless set up from factory?', a: 'Yes, wheels come taped with tubeless valves and Stan’s NoTubes sealant pre-installed.' }
      ],
      related: ['specialized-stumpjumper', 'giant-stance-29', 'poc-tectal-helmet']
    },
    {
      id: 'specialized-stumpjumper',
      name: 'Specialized Stumpjumper Pro',
      brand: 'Specialized',
      category: 'mountain',
      type: 'Mountain',
      tagline: 'The benchmark of all-mountain trail performance.',
      lede:
        'Featherweight FACT 11m carbon chassis with SWAT door downtube storage, Fox Factory Kashima suspension, and SRAM X01 Eagle AXS wireless shifting for lightning fast trail dominance.',
      price: 385000,
      compareAt: null,
      badge: 'new',
      rating: 5.0,
      reviewCount: 22,
      sizes: ['S2', 'S3', 'S4', 'S5'],
      colors: ['#0D1B2A', '#e2e8f0', '#556B2F'],
      image: '/assets/p1.jpg',
      imageAlt: 'Specialized Stumpjumper Pro carbon mountain bike',
      stats: [
        { value: 'Kashima', label: 'Fox Factory Coating' },
        { value: 'AXS', label: 'Wireless Shifting' },
        { value: '5.0★', label: 'from 22 expert reviews' }
      ],
      specs: [
        { title: 'Frame', text: 'FACT 11m carbon chassis and rear-end, asymmetrical design, SWAT door' },
        { title: 'Suspension', text: 'Fox Float 36 Factory 140mm + Fox Float DPX2 Factory' },
        { title: 'Drivetrain', text: 'SRAM X01 Eagle AXS Wireless 12-speed' },
        { title: 'Brakes', text: 'SRAM Code RSC 4-piston hydraulic disc' }
      ],
      faqs: [
        { q: 'What is Specialized S-Sizing?', a: 'S-Sizing is style-specific sizing based on rider reach and riding style rather than inseam height.' }
      ],
      related: ['velox-apex-trail', 'giant-stance-29', 'poc-tectal-helmet']
    },
    {
      id: 'giant-stance-29',
      name: 'Giant Stance 29 1',
      brand: 'Giant',
      category: 'mountain',
      type: 'Mountain',
      tagline: 'Inspiring 29er trail bike with FlexPoint suspension.',
      lede:
        'Engineered around lightweight ALUXX aluminum, the Stance 29 delivers smooth 130mm front and 120mm rear travel to soak up roots, drops, and rocky singletrack with plush poise.',
      price: 119000,
      compareAt: 135000,
      badge: 'sale',
      rating: 4.7,
      reviewCount: 64,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#334155', '#556B2F', '#0D1B2A'],
      image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=900&auto=format&fit=crop',
      imageAlt: 'Giant Stance 29 mountain bike on mountain summit',
      stats: [
        { value: '130/120mm', label: 'Front / Rear Travel' },
        { value: 'SRAM SX', label: '1x12 Drivetrain' },
        { value: '4.7★', label: 'from 64 reviews' }
      ],
      specs: [
        { title: 'Frame', text: 'ALUXX-Grade Aluminum, 120mm FlexPoint suspension' },
        { title: 'Fork', text: 'Crest 34 SL RCL, 130mm, 15x110mm thru-axle' },
        { title: 'Drivetrain', text: 'SRAM SX Eagle, 1x12 speed, 11-50T' },
        { title: 'Brakes', text: 'Shimano MT200 hydraulic disc' }
      ],
      faqs: [
        { q: 'Is it suitable for beginners on trails?', a: 'Yes, the progressive 29er wheels roll effortlessly over obstacles, making it ideal for new and intermediate trail riders.' }
      ],
      related: ['velox-apex-trail', 'specialized-stumpjumper', 'kryptonite-ny-lock']
    },

    /* ---------------- HYBRID & COMMUTER BIKES ---------------- */
    {
      id: 'velox-metro-urban',
      name: 'Velox Metro Urban 3 Disc',
      brand: 'Velox',
      category: 'hybrid',
      type: 'Hybrid',
      tagline: 'Fast, weather-proof, and agile city commuter.',
      lede:
        'Designed for the city jungle. Hydroformed lightweight alloy frame, Shimano Deore 1x10 shifting, puncture-resistant 700x38c commuter tires, and Shimano hydraulic disc brakes for confident stopping in downpours.',
      price: 46999,
      compareAt: 52999,
      badge: 'sale',
      rating: 4.8,
      reviewCount: 78,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#0D1B2A', '#556B2F', '#94a3b8'],
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=900&auto=format&fit=crop',
      imageAlt: 'Velox Metro Urban 3 hybrid bicycle in city square',
      stats: [
        { value: '11.2 kg', label: 'light commuter' },
        { value: 'Hydraulic', label: 'all-weather disc brakes' },
        { value: '4.8★', label: 'from 78 commuters' }
      ],
      specs: [
        { title: 'Frame', text: 'Alloy 6061 double-butted with internal cable routing and rack/fender mounts' },
        { title: 'Fork', text: 'Alloy straight-blade with lowrider pannier eyelets' },
        { title: 'Drivetrain', text: 'Shimano Deore M4100 1x10-Speed with clutch derailleur' },
        { title: 'Brakes', text: 'Shimano MT200 Hydraulic Disc, 160mm rotors' },
        { title: 'Tires', text: 'Kenda Kwick Drumlin 700x38c with K-Shield puncture defense' }
      ],
      faqs: [
        { q: 'Can I fit a child seat or pannier rack?', a: 'Yes, the frame includes dedicated reinforced threaded eyelets for rear cargo racks, front lowriders, and full-coverage mudguards.' }
      ],
      related: ['trek-fx3-disc', 'cannondale-quick4', 'knog-blinder-light']
    },
    {
      id: 'trek-fx3-disc',
      name: 'Trek FX 3 Disc',
      brand: 'Trek',
      category: 'hybrid',
      type: 'Hybrid',
      tagline: 'Fitness hybrid with carbon fork IsoZone handlebars.',
      lede:
        'FX 3 Disc is a versatile fitness bike that provides an invigorating ride for exercise, daily work commutes, or leisurely weekend coffee spins.',
      price: 68000,
      compareAt: null,
      badge: 'new',
      rating: 4.9,
      reviewCount: 45,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['#1e293b', '#556B2F', '#dc2626'],
      image: '/assets/p2.jpg',
      imageAlt: 'Trek FX 3 Disc hybrid bicycle',
      stats: [
        { value: 'Carbon Fork', label: 'Vibration absorbing' },
        { value: 'IsoZone Bar', label: 'Reduces hand fatigue' },
        { value: '4.9★', label: 'from 45 reviews' }
      ],
      specs: [
        { title: 'Frame', text: 'Alpha Gold Aluminum, DuoTrap S compatible, internal cable routing' },
        { title: 'Fork', text: 'FX Carbon, flat mount disc, rack and fender mounts' },
        { title: 'Drivetrain', text: 'Shimano Deore M5100, 1x10-speed, 40T chainring, 11-46T' }
      ],
      faqs: [
        { q: 'Is the carbon fork durable for potholes?', a: 'Extremely. The carbon blades absorb high-frequency road vibrations while maintaining high impact strength.' }
      ],
      related: ['velox-metro-urban', 'cannondale-quick4', 'kryptonite-ny-lock']
    },

    /* ---------------- ELECTRIC BIKES ---------------- */
    {
      id: 'velox-evolt-adventure',
      name: 'Velox E-Volt Adventure',
      brand: 'Velox',
      category: 'electric',
      type: 'Electric',
      tagline: 'Bosch-powered e-bike with 120km range.',
      lede:
        'Flatten any hill and cruise past gridlock traffic. Equipped with a Bosch Performance Line CX motor, integrated 625Wh PowerTube battery, front suspension fork, and integrated Supernova LED headlights.',
      price: 189000,
      compareAt: 215000,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 31,
      sizes: ['M (17")', 'L (19")', 'XL (21")'],
      colors: ['#0D1B2A', '#556B2F', '#e2e8f0'],
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&auto=format&fit=crop',
      imageAlt: 'Velox E-Volt electric bicycle with Bosch mid-drive motor',
      stats: [
        { value: '85 Nm', label: 'Bosch CX Torque' },
        { value: '120 km', label: 'Eco Battery Range' },
        { value: '4.9★', label: 'from 31 owners' }
      ],
      specs: [
        { title: 'Motor', text: 'Bosch Performance Line CX, 250W, 85Nm torque, up to 25 km/h assist' },
        { title: 'Battery', text: 'Bosch PowerTube 625Wh, lockable and removable' },
        { title: 'Display', text: 'Bosch Kiox Color Display with Bluetooth and navigation' },
        { title: 'Drivetrain', text: 'Shimano Deore 10-Speed e-bike certified' },
        { title: 'Brakes', text: 'Magura MT Thirty 4-piston hydraulic disc' }
      ],
      faqs: [
        { q: 'How long does a full charge take?', a: 'With the included Bosch 4A fast charger, 50% charge takes 1.5 hours, and 0-100% takes approximately 3.7 hours.' },
        { q: 'Is it legal to ride without a license in India?', a: 'Yes! It meets all ARAI and CMVR exemptions (pedal-assist up to 25 km/h, 250W rated), so no registration, road tax, or license is required.' }
      ],
      related: ['specialized-turbo-vado', 'giant-roam-e', 'abus-bordo-lock']
    },
    {
      id: 'giant-roam-e',
      name: 'Giant Roam E+ GTS',
      brand: 'Giant',
      category: 'electric',
      type: 'Electric',
      tagline: 'All-terrain electric adventure hybrid bike.',
      lede:
        'Smooth roads, rough roads, dirt paths or trails — Roam E+ handles them all with a SyncDrive Core motor by Yamaha and EnergyPak 500Wh battery integrated cleanly into the downtube.',
      price: 155000,
      compareAt: 172000,
      badge: 'sale',
      rating: 4.8,
      reviewCount: 26,
      sizes: ['M', 'L', 'XL'],
      colors: ['#475569', '#556B2F', '#0D1B2A'],
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=900&auto=format&fit=crop',
      imageAlt: 'Giant Roam E+ all-terrain electric bike',
      stats: [
        { value: 'Yamaha', label: 'SyncDrive Motor' },
        { value: '500 Wh', label: 'EnergyPak' },
        { value: '4.8★', label: 'from 26 reviews' }
      ],
      specs: [
        { title: 'Motor', text: 'SyncDrive Core, 50Nm, powered by Yamaha' },
        { title: 'Battery', text: 'EnergyPak 500Wh, 36V 13.8Ah rechargeable Lithium-Ion' },
        { title: 'Brakes', text: 'Hydraulic disc with motor inhibitor cutoff' }
      ],
      faqs: [
        { q: 'Can it be ridden if the battery runs out?', a: 'Yes, it rides just like a regular hybrid bicycle with standard pedal gears when unpowered.' }
      ],
      related: ['velox-evolt-adventure', 'specialized-turbo-vado', 'giro-aether-helmet']
    },

    /* ---------------- KIDS BIKES ---------------- */
    {
      id: 'velox-mini-ripper',
      name: 'Velox Mini Ripper 20"',
      brand: 'Velox',
      category: 'kids',
      type: 'Kids',
      tagline: 'Lightweight bike engineered for young riders.',
      lede:
        'Most kids bikes are heavy steel tanks. The Mini Ripper uses custom butted aluminum weighing only 8.2 kg, short-reach brake levers sized for small hands, and durable puncture-resistant tires.',
      price: 18999,
      compareAt: 22000,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 88,
      sizes: ['20" Wheels (Age 5-9)'],
      colors: ['#556B2F', '#0D1B2A', '#f59e0b'],
      image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=900&auto=format&fit=crop',
      imageAlt: 'Velox Mini Ripper 20 inch kids bicycle',
      stats: [
        { value: '8.2 kg', label: 'featherweight for kids' },
        { value: 'V-Brakes', label: 'short-reach levers' },
        { value: '4.9★', label: 'from 88 parents' }
      ],
      specs: [
        { title: 'Frame', text: 'Lightweight 6061 heat-treated aluminum, low standover height' },
        { title: 'Drivetrain', text: 'Single speed with child-proportioned cranks (114mm)' },
        { title: 'Brakes', text: 'Tektro alloy V-brakes with junior reach-adjustable levers' }
      ],
      faqs: [
        { q: 'What height rider is this bike for?', a: 'Ideal for children approximately 115cm to 135cm tall (ages 5 to 9).' }
      ],
      related: ['trek-precaliber-24', 'specialized-riprock-20', 'lazer-blade-helmet']
    },
    {
      id: 'trek-precaliber-24',
      name: 'Trek Precaliber 24 8-Speed',
      brand: 'Trek',
      category: 'kids',
      type: 'Kids',
      tagline: 'Versatile kids bike with front suspension fork and 8 gears.',
      lede:
        'Precaliber 24 8-Speed is a rugged kids’ bike for young adventurers who love riding off the pavement and onto the dirt. It has a lightweight aluminum frame and suspension fork to absorb bumps.',
      price: 28500,
      compareAt: null,
      badge: 'new',
      rating: 4.8,
      reviewCount: 42,
      sizes: ['24" Wheels (Age 8-12)'],
      colors: ['#0D1B2A', '#dc2626', '#556B2F'],
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&auto=format&fit=crop',
      imageAlt: 'Trek Precaliber 24 kids youth bicycle',
      stats: [
        { value: '24" Wheels', label: '8-12 years age group' },
        { value: '8-Speed', label: 'Shimano Tourney' },
        { value: '4.8★', label: 'from 42 parents' }
      ],
      specs: [
        { title: 'Frame', text: 'Alpha Silver aluminum, rack and kickstand mounts' },
        { title: 'Fork', text: 'Dialed suspension, 45mm travel' },
        { title: 'Drivetrain', text: 'Shimano Tourney RS45, 8-speed twist shift' }
      ],
      faqs: [
        { q: 'Is the twist shifter easy for kids?', a: 'Yes! The intuitive twist shifter is easier for kids to operate than traditional thumb triggers.' }
      ],
      related: ['velox-mini-ripper', 'specialized-riprock-20', 'lazer-blade-helmet']
    },

    /* ---------------- ACCESSORIES: HELMETS ---------------- */
    {
      id: 'giro-aether-helmet',
      name: 'Giro Aether Spherical MIPS Helmet',
      brand: 'Giro',
      category: 'accessories',
      type: 'Helmets',
      tagline: 'State-of-the-art rotational impact protection and ventilation.',
      lede:
        'Revolutionary Spherical Technology powered by MIPS redirects impact forces with a ball-and-socket design. 11 Wind Tunnel vents with deep internal channeling keep you cool in high summer heat.',
      price: 18500,
      compareAt: 22000,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 94,
      sizes: ['S (51-55cm)', 'M (55-59cm)', 'L (59-63cm)'],
      colors: ['#0D1B2A', '#556B2F', '#ffffff'],
      image: '/assets/a-h5.jpg',
      imageAlt: 'Giro Aether Spherical cycling helmet',
      stats: [
        { value: '263 g', label: 'featherlight road helmet' },
        { value: 'MIPS Spherical', label: '5-Star Virginia Tech Safety' },
        { value: '4.9★', label: 'from 94 riders' }
      ],
      specs: [
        { title: 'Safety System', text: 'Spherical Technology powered by MIPS rotational energy management' },
        { title: 'Shell Construction', text: 'Independent In-Mold liners with spherical ball-and-socket design' },
        { title: 'Fit System', text: 'Roc Loc 5+ Air multi-directional micro-adjuster' },
        { title: 'Ventilation', text: '21 Wind Tunnel vents with internal channeling' }
      ],
      faqs: [
        { q: 'Does it have an eyewear dock?', a: 'Yes, front rubberized gripper pads lock sunglasses firmly in place when not in use.' }
      ],
      related: ['poc-tectal-helmet', 'lazer-blade-helmet', 'velox-pro-jersey']
    },
    {
      id: 'poc-tectal-helmet',
      name: 'POC Tectal Race MIPS Mountain Helmet',
      brand: 'POC',
      category: 'accessories',
      type: 'Helmets',
      tagline: 'Extended temple and rear head coverage for aggressive trail and enduro.',
      lede:
        'Unibody PC shell with EPS core and aramid fiber bridge grid provides supreme structural integrity. Integrated RECCO reflector aids search-and-rescue teams in deep backcountry trails.',
      price: 16999,
      compareAt: null,
      badge: 'new',
      rating: 4.8,
      reviewCount: 62,
      sizes: ['XS-S (51-54cm)', 'M-L (55-58cm)', 'XL-XXL (59-62cm)'],
      colors: ['#556B2F', '#0D1B2A', '#e2e8f0'],
      image: '/assets/a-h6.jpg',
      imageAlt: 'POC Tectal Race MIPS mountain bike helmet in olive green',
      stats: [
        { value: 'Aramid Bridges', label: 'Crash Protection' },
        { value: 'RECCO', label: 'Rescue Reflector' },
        { value: '4.8★', label: 'from 62 trail riders' }
      ],
      specs: [
        { title: 'Protection', text: 'MIPS Integra rotational impact system + Aramid bridge network' },
        { title: 'Visor', text: 'Adjustable breakaway visor designed to snap off safely in a crash' },
        { title: 'Goggle Clip', text: 'Rear strap channel keeps enduro goggles secure' }
      ],
      faqs: [
        { q: 'Can I wear regular sunglasses with this?', a: 'Yes, the temple channels are shaped to fit sunglass arms comfortably.' }
      ],
      related: ['giro-aether-helmet', 'velox-apex-trail', 'giro-monaco-gloves']
    },

    /* ---------------- ACCESSORIES: LIGHTS ---------------- */
    {
      id: 'bontrager-ion-light',
      name: 'Bontrager Ion Pro RT 1300 Lumen Front Light',
      brand: 'Bontrager',
      category: 'accessories',
      type: 'Lights',
      tagline: 'Daytime-visible from 2km away with 1300 high-power lumens.',
      lede:
        'Light up the darkest country roads and singletrack trails. Five modes including daytime flash, USB rechargeable, IPX4 waterproof rating, and ANT+ connectivity to pair with Garmin computers.',
      price: 9999,
      compareAt: 11999,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 110,
      sizes: ['One Size (Universal 31.8 / 35mm Mount)'],
      colors: ['#0D1B2A'],
      image: '/assets/a-l3.jpg',
      imageAlt: 'Bontrager high powered bicycle front light',
      stats: [
        { value: '1300 lm', label: 'CREE LED Output' },
        { value: '26 hrs', label: 'Max Flash Runtime' },
        { value: '4.9★', label: 'from 110 night riders' }
      ],
      specs: [
        { title: 'Output', text: '1300 lm (1.5h), 800 lm (3h), 400 lm (6h), Night Flash (26h), Day Flash (22h)' },
        { title: 'Battery', text: '4800mAh Li-ion battery, USB-C fast charging' },
        { title: 'Connectivity', text: 'ANT+ and Bluetooth Smart wireless light control' }
      ],
      faqs: [
        { q: 'Can it be mounted under a GPS computer?', a: 'Yes! It is fully compatible with Blendr and GoPro-style dual under-mounts.' }
      ],
      related: ['knog-blinder-light', 'kryptonite-ny-lock', 'velox-metro-urban']
    },

    /* ---------------- ACCESSORIES: LOCKS ---------------- */
    {
      id: 'kryptonite-ny-lock',
      name: 'Kryptonite New York Fahgettaboudit D-Lock',
      brand: 'Kryptonite',
      category: 'accessories',
      type: 'Locks',
      tagline: 'Sold Secure Diamond bicycle defense against angle grinders & pry bars.',
      lede:
        'The golden standard in bike security. 18mm hardened max-performance steel shackle resists bolt cutters and leverage attacks, featuring a double deadbolt locking mechanism.',
      price: 9499,
      compareAt: 10999,
      badge: 'sale',
      rating: 5.0,
      reviewCount: 83,
      sizes: ['Standard 8.3cm x 15.3cm'],
      colors: ['#f59e0b', '#0D1B2A'],
      image: '/assets/a-l4.jpg',
      imageAlt: 'Kryptonite heavy duty bicycle D lock',
      stats: [
        { value: '18 mm', label: 'Hardened Steel Shackle' },
        { value: '10/10', label: 'Kryptonite Security Rating' },
        { value: '5.0★', label: 'from 83 city riders' }
      ],
      specs: [
        { title: 'Security Rating', text: 'Sold Secure Diamond (Pedal Cycle) · 10/10 Maximum Security' },
        { title: 'Cylinder', text: 'High security disc-style cylinder is pick and drill resistant' },
        { title: 'Keys', text: 'Includes 3 stainless steel keys, with 1 high-intensity LED light key' },
        { title: 'Weight', text: '2.06 kg' }
      ],
      faqs: [
        { q: 'What is the Key Safe program?', a: 'Register your key number on Kryptonite’s website and they will ship your first two replacement keys worldwide for free if lost.' }
      ],
      related: ['abus-bordo-lock', 'velox-metro-urban', 'specialized-turbo-vado']
    },
    {
      id: 'abus-bordo-lock',
      name: 'Abus Bordo Granit XPlus 6500 Folding Lock',
      brand: 'Abus',
      category: 'accessories',
      type: 'Locks',
      tagline: 'High-security German folding lock with frame mounting holster.',
      lede:
        '5.5mm bars of specially hardened steel linked with special rivets to fold down into a compact bracket mounted right to your water bottle bosses.',
      price: 11500,
      compareAt: null,
      badge: 'new',
      rating: 4.8,
      reviewCount: 47,
      sizes: ['85cm Length', '110cm Length'],
      colors: ['#0D1B2A', '#556B2F'],
      image: '/assets/a-l1.jpg',
      imageAlt: 'Abus Bordo folding bicycle lock',
      stats: [
        { value: '5.5 mm', label: 'Hardened Steel Bars' },
        { value: 'Level 15', label: 'Abus Maximum Security' },
        { value: '4.8★', label: 'from 47 reviews' }
      ],
      specs: [
        { title: 'Mechanism', text: 'ABUS XPlus cylinder for top-tier defense against lock picking' },
        { title: 'Mount', text: 'Rattle-free SH bracket with silicone tensioning straps included' }
      ],
      faqs: [
        { q: 'Does it scratch the bike paint?', a: 'No, each bar is coated in extra soft 2-component casing to safeguard your frame finish.' }
      ],
      related: ['kryptonite-ny-lock', 'velox-evolt-adventure', 'trek-fx3-disc']
    },

    /* ---------------- ACCESSORIES: APPAREL ---------------- */
    
    {
      id: 'shimano-rc7-shoes',
      name: 'Shimano RC7 Carbon Road Shoes (RC702)',
      brand: 'Shimano',
      category: 'accessories',
      type: 'Apparel',
      tagline: 'Competition-level road shoes with ultra-rigid carbon composite sole.',
      lede:
        'Dual independent BOA L6 dials give micro-adjustable tensioning across the forefoot. Stiffness index of 10/12 transfers every watt directly to the pedals without power loss.',
      price: 15499,
      compareAt: 17999,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 68,
      sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
      colors: ['#ffffff', '#0D1B2A', '#dc2626'],
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&auto=format&fit=crop',
      imageAlt: 'Shimano RC7 carbon road cycling shoes with dual BOA dials',
      stats: [
        { value: '10/12', label: 'Carbon Stiffness Index' },
        { value: 'Dual BOA', label: 'L6 Micro Dials' },
        { value: '4.9★', label: 'from 68 road cyclists' }
      ],  
      specs: [
        { title: 'Outsole', text: 'Ultra-rigid carbon fiber composite midsole and heel cup' },
        { title: 'Cleat Fit', text: 'Standard 3-bolt SPD-SL / Look Keo road cleat mounting' }
      ],
      faqs: [
        { q: 'Do cleats come in the box?', a: 'Pedal cleats come with your pedals (Shimano SPD-SL or Look), but our store provides free precision cleat alignment with any shoe purchase.' }
      ],
      related: ['velox-aero-slr9', 'rapha-bib-shorts', 'velox-pro-jersey']
    },
    {
      id: 'garmin-varia-radar',
      name: 'Garmin Varia RTL515 Radar Tail Light',
      brand: 'Garmin',
      category: 'accessories',
      type: 'Lights',
      tagline: 'Rearview radar alerts you to approaching vehicles up to 140m away.',
      lede:
        'Pairs with your Garmin Edge, smartphone, or smartwatch to provide visual and audible alerts for vehicles approaching from behind up to 140 meters. Integrated tail light offers daylight visibility up to 1 mile.',
      price: 19990,
      compareAt: 22500,
      badge: 'new',
      rating: 5.0,
      reviewCount: 84,
      sizes: ['Universal Seatpost Mount (Includes D-shape & Aero Shims)'],
      colors: ['#0D1B2A'],
      image: '/assets/a-l2.jpg',
      imageAlt: 'Garmin Varia RTL515 rearview radar and safety tail light',
      stats: [
        { value: '140 m', label: 'Vehicle Detection Range' },
        { value: '16 hrs', label: 'Day Flash Battery Life' },
        { value: '5.0★', label: 'from 84 riders' }
      ],
      specs: [
        { title: 'Detection', text: 'Visual and audible alerts for vehicles approaching from behind up to 140 meters' },
        { title: 'Visibility', text: 'Daylight visibility up to 1 mile with 220-degree light spread' },
        { title: 'Connectivity', text: 'ANT+ and Bluetooth Low Energy (BLE) compatible with Edge & smartphones' }
      ],
      faqs: [
        { q: 'Does it work with Wahoo or Hammerhead computers?', a: 'Yes! The Varia uses standard ANT+ radar protocol and pairs seamlessly with Wahoo, Hammerhead, and Stages bike computers.' }
      ],
      related: ['bontrager-ion-light', 'giro-aether-helmet', 'kryptonite-ny-lock']
    },
    {
      id: 'oakley-sutro-glasses',
      name: 'Oakley Sutro Prizm Road Sunglasses',
      brand: 'Oakley',
      category: 'accessories',
      type: 'Apparel',
      tagline: 'High-wrap cylindrical shield with contrast-enhancing Prizm Road optics.',
      lede:
        'Designed with performance in mind, Sutro gives cyclists a bold, versatile look that they can confidently wear on and off the bike. High-wrap shield protects eyes from wind and debris while Prizm lens technology fine-tunes colors for optimum road visibility.',
      price: 13800,
      compareAt: 15500,
      badge: 'sale',
      rating: 4.9,
      reviewCount: 105,
      sizes: ['Standard Fit (Universal Face Geometry)'],
      colors: ['#0D1B2A', '#ffffff', '#dc2626'],
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop',
      imageAlt: 'Oakley Sutro Prizm Road performance cycling sunglasses',
      stats: [
        { value: 'Prizm Road', label: 'Optimum Contrast' },
        { value: 'O Matter', label: 'Lightweight Frame' },
        { value: '4.9★', label: 'from 105 road racers' }
      ],
      specs: [
        { title: 'Lens', text: 'Prizm Road 20% VLT, Plutonite UV400 100% UVA/UVB protection' },
        { title: 'Grip', text: 'Unobtainium nosepads increase grip with perspiration' },
        { title: 'Frame', text: 'Lightweight O Matter durable, stress-resistant frame material' }
      ],
      faqs: [
        { q: 'Does it come with a protective case?', a: 'Yes, includes a protective ballistic hard case, microbag cleaning pouch, and alternate nosepad.' }
      ],
      related: ['velox-pro-jersey', 'giro-aether-helmet', 'shimano-rc7-shoes']
    }
  ];

  /* ----------------------------------------------------------------------
     BLOG POSTS — Cycling Technical Articles, Guides & Stories
     ---------------------------------------------------------------------- */
  var POSTS = [
    {
      id: 'how-to-choose-first-road-bike',
      slug: 'how-to-choose-first-road-bike',
      title: 'How to Choose Your First Performance Road Bike in 2026',
      date: '2026-08-28',
      readTime: '6 min read',
      author: {
        name: 'Karthik Raman',
        role: 'Head Mechanic & Master Bike Fitter',
        image: '../assets/men1.jpg'
      },
      category: 'Gear Guides',
      excerpt:
        'Carbon vs. aluminum frames, mechanical vs. wireless Di2 electronic shifting, and why proper geometry matters more than sticker price.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&auto=format&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&auto=format&fit=crop',
      imageAlt: 'Rider on carbon road bike accelerating on smooth tarmac',
      heroImageAlt: 'Rider on carbon road bike accelerating on smooth tarmac',
      tags: ['Road Bikes', 'Buying Guide', 'Shimano Di2', 'Carbon Frame'],
      content: [
        {
          heading: 'Geometry First: Endurance vs. Race',
          body: [
            'Before looking at gear ratios or carbon weaves, understand stack and reach. An aggressive race geometry (like our Velox Aero SLR 9) places you lower for minimum aerodynamic drag. An endurance geometry (like Trek Domane) gives a slightly taller headtube that spares your lower back and neck over 100km rides.',
            'Always get your flexibility and femur-to-torso proportions assessed at our fitting studio before locking in your frame size.'
          ],
          quote: 'A bike that fits 5% better delivers 20% more power and endurance on century rides.'
        },
        {
          heading: 'Electronic vs. Mechanical Groupsets',
          body: [
            'In 2026, wireless electronic groupsets (Shimano Di2 and SRAM AXS) have trickled down to mid-tier prices. Electronic shifting never loses cable tension, self-trims the front derailleur to prevent chain rub, and shifts under heavy climbing loads without hesitation.'
          ]
        }
      ]
    },
    {
      id: 'essential-bike-maintenance',
      slug: 'essential-bike-maintenance',
      title: 'The 5-Minute Post-Ride Routine That Doubles Drivetrain Life',
      date: '2026-08-14',
      readTime: '4 min read',
      author: {
        name: 'Arjun Swaminathan',
        role: 'Senior Workshop Technician',
        image: '../assets/men2.jpg'
      },
      category: 'Maintenance',
      excerpt:
        'Save thousands in worn chains and chewed cassettes with this simple 3-step degrease, wipe, and precision lubrication checklist.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=900&auto=format&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1200&auto=format&fit=crop',
      imageAlt: 'Bicycle drivetrain with sparkling clean chain and cassette',
      heroImageAlt: 'Bicycle drivetrain with sparkling clean chain and cassette',
      tags: ['Maintenance', 'Chain Care', 'Drivetrain', 'Workshop'],
      content: [
        {
          heading: 'Wipe Dirt Before Applying Lube',
          body: [
            'The single biggest mistake cyclists make is adding wet lube directly onto a dusty chain. That creates an abrasive grinding paste that wears through cassette teeth. Always wipe the chain down with a microfiber rag and citrus degreaser first.',
            'Apply one drop of synthetic lubricant per chain roller, spin the cranks backward for 30 seconds, and wipe off excess surface oil.'
          ],
          quote: 'A clean drivetrain saves between 5 to 9 watts of wasted mechanical drag.'
        }
      ]
    },
    {
      id: 'tubeless-tires-guide',
      slug: 'tubeless-tires-guide',
      title: 'Tubeless vs. Inner Tubes: Why We Converted Our Entire Fleet',
      date: '2026-07-30',
      readTime: '5 min read',
      author: {
        name: 'Priya Sundaram',
        role: 'Endurance Racer & Club Lead',
        image: '../assets/woman1.jpg'
      },
      category: 'Tech & Fit',
      excerpt:
        'Lower tire pressures, virtually zero pinch flats, lower rolling resistance, and how liquid sealant seals 4mm glass punctures instantly.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop',
      imageAlt: 'Tubeless road bicycle tire rolling smoothly over gravel',
      heroImageAlt: 'Tubeless road bicycle tire rolling smoothly over gravel',
      tags: ['Tubeless', 'Tire Pressure', 'Puncture Defense', 'Wheels'],
      content: [
        {
          heading: 'The Magic of Lower Tire Pressure',
          body: [
            'Without an inner tube to pinch against the rim edge, you can run 60-70 psi on 28mm road tires instead of 100 psi. The tire deforms over road imperfections instead of bouncing upward, making you both faster and significantly more comfortable.',
            'Modern liquid latex sealants seal thorn and glass punctures instantly while rolling, requiring just an annual refresh.'
          ]
        }
      ]
    },
    {
      id: 'laser-bike-fit-guide',
      slug: 'laser-bike-fit-guide',
      title: 'Dialing Your Position: The Biomechanics of Laser Bike Fitting',
      date: '2026-07-15',
      readTime: '7 min read',
      author: {
        name: 'Karthik Raman',
        role: 'Head Mechanic & Master Bike Fitter',
        image: '../assets/men1.jpg'
      },
      category: 'Tech & Fit',
      excerpt:
        'Knee angle, pelvic tilt, saddle setback, and reach: how 3mm of adjustment cures numb hands, saddle sores, and lower back ache.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=900&auto=format&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=1200&auto=format&fit=crop',
      imageAlt: 'Cyclist undergoing precision dynamic bike fit measurement',
      heroImageAlt: 'Cyclist undergoing precision dynamic bike fit measurement',
      tags: ['Bike Fit', 'Ergonomics', 'Cleat Alignment', 'Endurance'],
      content: [
        {
          heading: 'Cleat Alignment: The Kinetic Anchor',
          body: [
            'Your connection to the pedals dictates hip rotation and knee tracking. Misaligned pedal cleats cause 80% of medial and lateral knee pain. By aligning the pedal spindle under the metatarsal head and matching your foot varus tilt with shims, power delivery becomes frictionless.'
          ],
          quote: 'Fit first, buy second. A perfectly fitted ₹50,000 bike outperforms an ill-fitting ₹2,000,000 superbike every single day.'
        }
      ]
    },
    {
      id: 'coastal-gran-fondo-prep',
      slug: 'coastal-gran-fondo-prep',
      title: 'Fueling & Pacing Your First 160km Century Ride',
      date: '2026-06-25',
      readTime: '5 min read',
      author: {
        name: 'Vikram Mehta',
        role: 'Club Ride Director',
        image: '../assets/men3.jpg'
      },
      category: 'Training & Routes',
      excerpt:
        'Carb intake math (60-90g/hr), heart rate zone discipline, cadence targets, and mental strategies for conquering high wind miles.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=900&auto=format&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&auto=format&fit=crop',
      imageAlt: 'Group peloton riding on scenic highway during sunrise',
      heroImageAlt: 'Group peloton riding on scenic highway during sunrise',
      tags: ['Gran Fondo', 'Century Ride', 'Hydration', 'Pacing'],
      content: [
        {
          heading: 'Never Ride Faster Than Zone 2 in the First 80km',
          body: [
            'Adrenaline on the start line is your worst enemy. If you burn glycogen early, the dreaded wall awaits at kilometer 120. Stay strictly within Zone 2 endurance wattage, sip electrolytes every 15 minutes, and ride within drafting echelons when crosswinds pick up.'
          ]
        }
      ]
    },
    {
      id: 'hydraulic-vs-mechanical-disc',
      slug: 'hydraulic-vs-mechanical-disc',
      title: 'Hydraulic vs. Mechanical Disc Brakes: Stopping Power Compared',
      date: '2026-06-10',
      readTime: '4 min read',
      author: {
        name: 'Arjun Swaminathan',
        role: 'Senior Workshop Technician',
        image: '../assets/men2.jpg'
      },
      category: 'Maintenance',
      excerpt:
        'Why closed hydraulic mineral oil circuits offer one-finger modulation, zero cable friction, and reliable wet-weather descending control.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&auto=format&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&auto=format&fit=crop',
      imageAlt: 'Close-up of hydraulic disc caliper and heat-dissipating rotor',
      heroImageAlt: 'Close-up of hydraulic disc caliper and heat-dissipating rotor',
      tags: ['Disc Brakes', 'Mineral Oil', 'Brake Pads', 'Safety'],
      content: [
        {
          heading: 'Single-Finger Lever Modulation',
          body: [
            'Mechanical cable disc brakes stretch and suffer cable housing friction. Hydraulic systems transfer hydraulic pressure evenly to dual opposing pistons, delivering 30% greater clamping force with a featherlight lever pull that prevents forearm fatigue on steep alpine descents.'
          ]
        }
      ]
    }
  ];

  /* ----------------------------------------------------------------------
     REPAIR & SERVICE PACKAGES
     ---------------------------------------------------------------------- */
  var SERVICES = [
    {
      id: 'safety-tune',
      title: 'Safety Inspection & Basic Tune',
      price: 1499,
      duration: '45 mins (Express while-you-wait)',
      badge: 'Quick Service',
      description: 'Essential seasonal safety tune-up to keep your bike crisp, smooth, and road-ready.',
      includes: [
        'Brake caliper alignment & pad wear check',
        'Front & rear derailleur gear indexing',
        'Chain wear gauge measurement & precision lube',
        'Tire inspection & PSI optimization',
        'Headset, stem & handlebar bolt safety torque check',
        'Full 25-point road safety checklist'
      ]
    },
    {
      id: 'performance-tune',
      title: 'Comprehensive Performance Tune-Up',
      price: 2999,
      duration: '2 to 3 hours (Same-Day turnaround)',
      badge: 'Most Popular',
      description: 'Complete drivetrain ultrasonic bath, precision wheel truing, and bearing adjustment for demanding riders.',
      includes: [
        'Everything in Safety Tune-Up',
        'Full drivetrain removal & ultrasonic solvent bath',
        'Precision front & rear wheel truing on digital stand',
        'Bottom bracket and headset bearing pre-load adjustment',
        'Inner cable tensioning & barrel adjuster reset',
        'Brake rotor degrease & resurfacing',
        'Detailed frame hand polish and UV protectant'
      ]
    },
    {
      id: 'pro-overhaul',
      title: 'Velox Pro Race Overhaul',
      price: 5499,
      duration: '24 hours',
      badge: 'Complete Rebuild',
      description: 'The ultimate ground-up strip down. Your bike is completely disassembled to bare frame and rebuilt to factory spec.',
      includes: [
        'Everything in Comprehensive Performance Tune',
        'Complete bike stripped down to bare frame',
        'Full hydraulic brake fluid bleed (Shimano Mineral / SRAM DOT)',
        'Bottom bracket and headset stripped, cleaned & repacked with marine grease',
        'Hub bearings disassembled, inspected & calibrated',
        'New stainless steel inner gear & brake cables installed',
        'Dropper post / Di2 firmware diagnostics & update',
        '100-point master technician certification report'
      ]
    },
    {
      id: 'ebike-service',
      title: 'E-Bike Diagnostic & Motor Service',
      price: 3499,
      duration: 'Same-day',
      badge: 'Bosch & Shimano Certified',
      description: 'Specialized electronic and mechanical overhaul for electric assist bicycles.',
      includes: [
        'Bosch & Shimano official diagnostic computer scan',
        'Motor firmware updates & torque sensor calibration',
        'Battery health diagnostic (capacity test & cell balance check)',
        'Heavy-duty e-bike chain & cassette wear measurement',
        'Wiring harness, magnetic sensors & display inspection',
        'Full mechanical brake & drivetrain adjustment'
      ]
    }
  ];

  /* ----------------------------------------------------------------------
     BRAND PARTNERS
     ---------------------------------------------------------------------- */
  var BRANDS = [
    {
      name: 'Trek Bicycles',
      origin: 'Waterloo, Wisconsin, USA',
      tagline: 'Born from a red barn in 1976 — pioneering OCLV carbon technology and world-champion race engineering.',
      categories: ['Road', 'Mountain', 'Hybrid', 'Kids'],
      logo: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop',
      dealerTier: 'Authorized Tier-1 Diamond Dealer'
    },
    {
      name: 'Specialized',
      origin: 'Morgan Hill, California, USA',
      tagline: '“Innovate or Die.” The creators of the legendary Stumpjumper and S-Works Tour de France winning machines.',
      categories: ['Road', 'Mountain', 'Electric'],
      logo: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop',
      dealerTier: 'Authorized S-Works Certified Partner'
    },
    {
      name: 'Cannondale',
      origin: 'Wilton, Connecticut, USA',
      tagline: 'Renowned pioneers of aluminum tube shaping, lightweight carbon, and single-sided Lefty suspension forks.',
      categories: ['Road', 'Gravel', 'Hybrid'],
      logo: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&auto=format&fit=crop',
      dealerTier: 'Official Regional Retailer'
    },
    {
      name: 'Giant Bicycles',
      origin: 'Taichung, Taiwan',
      tagline: 'The world’s largest precision bicycle manufacturer, revolutionizing compact road geometry and Maestro suspension.',
      categories: ['Mountain', 'Hybrid', 'Electric'],
      logo: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&auto=format&fit=crop',
      dealerTier: 'Authorized Master Dealer'
    },
    {
      name: 'Shimano',
      origin: 'Sakai, Osaka, Japan',
      tagline: 'The global benchmark in cycling drivetrains, Di2 electronic shifting, and hydraulic disc braking performance.',
      categories: ['Components', 'Pedals', 'Shoes', 'Apparel'],
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop',
      dealerTier: 'Certified Shimano Service Center (SSC)'
    },
    {
      name: 'SRAM',
      origin: 'Chicago, Illinois, USA',
      tagline: 'Innovators of 1x mountain bike drivetrains and AXS fully wireless electronic gear shifting systems.',
      categories: ['Drivetrains', 'Wireless AXS', 'RockShox', 'Zipp'],
      logo: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=500&auto=format&fit=crop',
      dealerTier: 'Authorized SRAM Drivetrain Specialist'
    },
    {
      name: 'Giro',
      origin: 'Santa Cruz, California, USA',
      tagline: 'Industry leaders in Spherical MIPS helmet technology, aerodynamic wind-tunnel testing, and ergonomic cycling shoes.',
      categories: ['Helmets', 'Gloves', 'Shoes'],
      logo: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop',
      dealerTier: 'Official Protection Partner'
    },
    {
      name: 'Kryptonite',
      origin: 'Canton, Massachusetts, USA',
      tagline: 'The world’s most trusted bicycle security company, providing Sold Secure Diamond locks and anti-theft protection.',
      categories: ['Locks', 'Security', 'Cables'],
      logo: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop',
      dealerTier: 'Certified Security Provider'
    }
  ];

  return {
    PRODUCTS: PRODUCTS,
    POSTS: POSTS,
    SERVICES: SERVICES,
    BRANDS: BRANDS,
    getProduct: function (id) {
      return PRODUCTS.find(function (p) { return p.id === id; }) || null;
    },
    getPost: function (id) {
      return POSTS.find(function (p) { return p.id === id; }) || null;
    },
    categories: function () {
      var seen = [];
      POSTS.forEach(function (p) {
        if (seen.indexOf(p.category) === -1) seen.push(p.category);
      });
      return seen;
    },
    productCategories: function () {
      var seen = [];
      PRODUCTS.forEach(function (p) {
        if (seen.indexOf(p.category) === -1) seen.push(p.category);
      });
      return seen;
    }
  };
})();

window.STRIDE_DATA = STRIDE_DATA;
