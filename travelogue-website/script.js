// PALAKKAD TRAVELOGUE - SCRIPT & INTERACTIVE LOGIC WITH AUTHENTIC PHOTOGRAPHY

// 1. PALAKKAD DESTINATIONS DATA WITH AUTHENTIC PHOTOGRAPHY
var PLACES = [
  {
    id: 'silent-valley',
    name: 'Silent Valley National Park',
    kind: 'Rainforests & Wildlife',
    distance: '45 km from Mannarkkad',
    elevation: '1,100 m',
    blurb: 'Untouched tropical evergreen rainforest canopy where the crystal-clear Kunthi River flows and the rare lion-tailed macaque calls through ancient mossy trees.',
    highlight: 'Sairandhri Tower & Kunthi River',
    timing: '8:00 AM – 1:00 PM (Entry hours)',
    entry: '₹400–600 (Permit + Guide + Jeep Share)',
    img: 'images/silent-valley.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/SAN_BIRDS_48.jpg/1280px-SAN_BIRDS_48.jpg',
    secondaryImg: 'images/macaque.jpg',
    secondaryCaption: 'Endangered Lion-tailed Macaque photographed in Silent Valley',
    details: {
      reach: 'Board a KSRTC bus from Palakkad Stadium Stand to Mannarkkad (1 hr), then take a local bus to Mukkali Base Camp (45 mins). Forest Department 4x4 jeeps operate from Mukkali.',
      bestTime: 'October to March for crisp mist; September for post-monsoon waterfalls.',
      rules: 'Strictly zero-plastic biosphere. Forest department inspects all baggage at Mukkali. No private vehicles beyond Mukkali.',
      mustDo: 'Climb the 100-foot Sairandhri watchtower for an infinite ocean of unbroken rainforest canopy, followed by the 1.5 km stone trail down to Kunthi River suspension bridge.',
      food: 'Simple vegetarian Kerala lunch served at Mukkali Vanasree cafeteria. Carry your own steel water bottle.'
    }
  },
  {
    id: 'nelliyampathy',
    name: 'Nelliyampathy Hills & Seethargundu',
    kind: 'Misty Hills & Treks',
    distance: '52 km from Palakkad',
    elevation: '1,572 m',
    blurb: 'Thirty dramatic hairpin turns through wild elephant corridors leading to rolling tea estates, orange orchards, and precipitous ridge drops into the clouds.',
    highlight: '30 Hairpin Bends & Cliff Drop',
    timing: 'Best early morning (6:00 AM – 5:00 PM)',
    entry: 'Free checkpost pass at Pothundi',
    img: 'images/nelliyampathy.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Nelliampathi_Sitharkundu_viewpoint.jpg/1280px-Nelliampathi_Sitharkundu_viewpoint.jpg',
    secondaryImg: 'images/pothundi-dam.jpg',
    secondaryCaption: 'View overlooking Pothundi reservoir from the Nelliyampathy climb',
    details: {
      reach: 'Bus or cab from Palakkad to Nenmara (26 km). From Nenmara, state buses wind up the ghat road through Pothundi Dam checkpost to Kaikatty and Nelliyampathy.',
      bestTime: 'September to February. Cloud immersion usually rolls in by 2:30 PM.',
      rules: 'Drive slowly on hairpins. Wild gaurs and elephants frequently cross between bends 14 and 22.',
      mustDo: 'Stand at the edge of Seethargundu Viewpoint where the cliff plunges 1,000 meters down into the emerald patchwork of the Palakkad plains.',
      food: 'Sip hot cardamom tea and buy freshly harvested organic Palakkad hill oranges, crushed guava jam, and forest honey from local cooperative counters.'
    }
  },
  {
    id: 'palakkad-fort',
    name: "Palakkad Fort (Tipu's Fort)",
    kind: 'Forts & Heritage',
    distance: 'Heart of Palakkad Town',
    elevation: '84 m',
    blurb: 'A formidable 1766 granite citadel built by Hyder Ali and rebuilt by Tipu Sultan, ringed by a wide water moat, drawbridge, and ancient banyan trees.',
    highlight: '1766 Granite Bastions & Moat',
    timing: '8:00 AM – 6:00 PM Daily',
    entry: 'Free entry (ASI Protected)',
    img: 'images/palakkad-fort.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Palakkad_Fort_1.jpg/1280px-Palakkad_Fort_1.jpg',
    secondaryImg: 'images/palakkad-fort.jpg',
    secondaryCaption: 'Water-filled moat and stone perimeter ramparts at Palakkad Fort',
    details: {
      reach: 'Located in the town center next to Kota Maidan. 10 minutes by auto rickshaw from Palakkad Junction (Olavakkode) Railway Station.',
      bestTime: 'Early morning (6:30 AM – 8:30 AM) with morning joggers or late afternoon for golden hour photography.',
      rules: 'Well-maintained ASI monument. Walking on granite ramparts requires care.',
      mustDo: 'Walk the shaded perimeter path along the water-filled moat, visit the ancient Anjaneya (Hanuman) temple inside, and explore the old sub-jail barracks.',
      food: 'Walk across the street to local tea shops for piping hot Pazham Pori (crisp banana fritters) and Sulaimani black tea.'
    }
  },
  {
    id: 'malampuzha-dam',
    name: 'Malampuzha Dam & Rock Garden',
    kind: 'Dams & Waters',
    distance: '10 km from Palakkad',
    elevation: '104 m',
    blurb: "Kerala's largest reservoir cradled by majestic Western Ghats peaks, famous for the colossal Yakshi sculpture and passenger ropeway across gardens.",
    highlight: "Kanayi's Yakshi & Ropeway",
    timing: '9:00 AM – 8:00 PM',
    entry: '₹30 Dam Garden, ₹70 Ropeway',
    img: 'images/malampuzha-dam.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Malampuzha-dam-2019.jpg/1280px-Malampuzha-dam-2019.jpg',
    secondaryImg: 'images/malampuzha-yakshi.jpg',
    secondaryCaption: "The legendary Yakshi sculpture carved by Kanayi Kunhiraman in 1969",
    details: {
      reach: 'Town buses leave from Palakkad Stadium Stand every 10 minutes directly to Malampuzha Dam gates (25 mins ride).',
      bestTime: 'Late afternoon (3:30 PM – 6:30 PM) when the mountain breeze cools the reservoir.',
      rules: 'Plastic bags prohibited in garden grounds.',
      mustDo: 'Ride the passenger ropeway gliding over illuminated fountains, admire the legendary Yakshi sculpture carved by Kanayi Kunhiraman, and tour the Rock Garden built with broken bangles and tiles.',
      food: 'Try fresh grilled reservoir fish (Karimeen / Tilapia) and cooling Elaneer (tender coconut) shakes right outside the main gate.'
    }
  },
  {
    id: 'kalpathy',
    name: 'Kalpathy Heritage Village & Temple',
    kind: 'Forts & Heritage',
    distance: '3 km from Palakkad Town',
    elevation: '90 m',
    blurb: 'Centuries-old Tamil Brahmin Agraharam settlement along the Kalpathy river, echoing with Vedic chants and ancient chariot festival traditions.',
    highlight: 'Agraharam Streets & Ratholsavam',
    timing: 'Temple: 5:30 AM – 11:30 AM & 5:00 PM – 8:00 PM',
    entry: 'Free to walk village streets',
    img: 'images/kalpathy-temple.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Kalpathy_Palakkad.jpg/1280px-Kalpathy_Palakkad.jpg',
    secondaryImg: 'images/kalpathy-chariots.jpg',
    secondaryCaption: 'The three giant temple chariots during the annual Kalpathy Ratholsavam festival',
    details: {
      reach: '5 minutes by auto rickshaw from Palakkad town center or Olavakkode railway station.',
      bestTime: 'November during the world-famous Kalpathy Ratholsavam (chariot festival), or quiet early mornings on ordinary days.',
      rules: 'Traditional residential lanes. Please respect resident privacy and remove footwear when entering temple premises.',
      mustDo: 'Walk through Old Kalpathy, New Kalpathy, Chathapuram, and Govindarajapuram street grids to witness 200-year-old sloping-roof row houses.',
      food: 'Traditional vegetarian fare: crisp Nei Appam, Mor Kuzhambu, Molagootal, and authentic Brahmin tumbler filter coffee.'
    }
  },
  {
    id: 'ramassery',
    name: 'Ramassery Heritage Village',
    kind: 'Villages & Cuisine',
    distance: '8 km from Palakkad',
    elevation: '75 m',
    blurb: 'The birth village of the legendary Ramassery Idli — disc-shaped fluffy idlis steamed on clay pots wrapped in unbleached cotton over wood fires.',
    highlight: '200-Year-Old Clay Pot Steam Secret',
    timing: '6:30 AM – 11:30 AM (Morning batches)',
    entry: 'Free to visit / Meal ₹60–₹120',
    img: 'images/ramassery-idli.jpg',
    fallbackImg: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG',
    secondaryImg: 'images/palmyra-palm.jpg',
    secondaryCaption: 'Iconic Palmyrah palm trees lining the road to Ramassery village',
    details: {
      reach: 'Take a bus towards Elappully / Chittur from Palakkad Municipal Stand and ask for Ramassery junction, or 20 mins by auto.',
      bestTime: 'Between 7:00 AM and 9:30 AM when tamarind-wood fires are burning and the first hot batches emerge.',
      rules: 'Small rustic village tea shops; modest seating. Be patient as idlis are steamed freshly on order.',
      mustDo: 'Watch the skilled makers weave the unbleached cotton cloth over wide earthenware pots and lift wafer-soft idlis using tamarind leaf water.',
      food: 'Savor 4 Ramassery idlis topped with spicy gun-powder (chammanthi podi) drenched in coconut oil, served with country chicken curry or vegetable sambar.'
    }
  },
  {
    id: 'parambikulam',
    name: 'Parambikulam Tiger Reserve',
    kind: 'Rainforests & Wildlife',
    distance: '95 km via Pollachi',
    elevation: '600–1,400 m',
    blurb: "Protected sanctuary famous for Kannimara Teak (one of world's oldest living teaks), reservoir bamboo rafting, and guided indigenous tribal trails.",
    highlight: 'Kannimara Teak & Bamboo Rafting',
    timing: '7:00 AM – 6:00 PM (Permit required)',
    entry: '₹450+ (Eco-tourism safari package)',
    img: 'images/parambikulam.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Valley_View_Parambikulam_02.jpg/1280px-Valley_View_Parambikulam_02.jpg',
    secondaryImg: 'images/parambikulam.jpg',
    secondaryCaption: 'Vast reservoir and mist-covered forest ranges of Parambikulam',
    details: {
      reach: 'Access is via Pollachi (Tamil Nadu) through Topslip. Advance booking through Kerala Forest Department portal is highly recommended.',
      bestTime: 'November to February for mild temperatures and active wildlife spotting.',
      rules: 'Zero-plastic zone. Guided solely by indigenous Kadar and Malasar tribal trackers.',
      mustDo: 'Stand beneath the 460-year-old Kannimara Teak (girth of 6.57m), glide across Parambikulam reservoir on a silent bamboo raft, and spot herds of spotted deer and hornbills.',
      food: 'Traditional tribal-style meals provided inside eco-camps, cooked with local millets, vegetables, and river spices.'
    }
  },
  {
    id: 'kollengode',
    name: 'Kollengode Village & Gayatri River',
    kind: 'Villages & Cuisine',
    distance: '19 km from Palakkad',
    elevation: '110 m',
    blurb: "Voted one of India's cleanest and most picturesque rural hamlets, framed by emerald paddy fields, palmyra groves, and the soaring Western Ghats wall.",
    highlight: 'Kollengode Palace & Cinema Vistas',
    timing: 'Sunrise & Sunset recommended',
    entry: 'Free open countryside',
    img: 'images/kollengode-fields.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Fields_near_Kollengode%2C_Kerala_06.jpg/1280px-Fields_near_Kollengode%2C_Kerala_06.jpg',
    secondaryImg: 'images/dhoni-waterfalls.jpg',
    secondaryCaption: 'Seetharkundu hill streams that nourish the Kollengode paddy basin',
    details: {
      reach: 'Direct KSRTC or private buses run every 15 minutes from Palakkad to Kollengode. A scooter ride on this route is unforgettable.',
      bestTime: 'August to December when paddy terraces are vibrant fluorescent green and streams from the hills run full.',
      rules: 'Please do not litter in farm channels or step onto growing paddy crops.',
      mustDo: 'Visit Kollengode Palace displaying traditional mural architecture, then cycle along village roads lined with iconic Palmyrah palms (Karimpana) featured in classic cinema.',
      food: 'Drop by local village messes for Kerala Red Matta Rice meals served on banana leaves with tender mango pickle and crispy pappadam.'
    }
  },
  {
    id: 'pothundi-dam',
    name: 'Pothundi Dam & Reservoir',
    kind: 'Dams & Waters',
    distance: '40 km from Palakkad',
    elevation: '108 m',
    blurb: 'An engineering marvel from the 19th century, constructed with a rare core wall of jaggery and quicklime at the foot of the Nelliyampathy hills.',
    highlight: 'Jaggery-Core Dam & Mountain Backdrop',
    timing: '9:00 AM – 5:00 PM',
    entry: '₹20 Entry',
    img: 'images/pothundi-dam.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Pothundi_dam_palakkad.jpg/1280px-Pothundi_dam_palakkad.jpg',
    secondaryImg: 'images/nelliyampathy.jpg',
    secondaryCaption: 'The Nelliyampathy mountain ridge rising directly behind Pothundi Dam',
    details: {
      reach: '8 km from Nenmara on the uphill highway toward Nelliyampathy. Easily reached by bus or private vehicle.',
      bestTime: 'Morning on the way up to Nelliyampathy or early evening as the sun dips behind the mountain ridge.',
      rules: 'Do not venture past designated spillway safety railings.',
      mustDo: 'Walk along the embankment to see the placid water mirror the jagged peaks of the Nelliyampathy range.',
      food: 'Fresh roasted spiced corn and pickled amla (gooseberries) from local carts by the garden gate.'
    }
  },
  {
    id: 'dhoni-hills',
    name: 'Dhoni Waterfalls & Reserve Forest',
    kind: 'Misty Hills & Treks',
    distance: '15 km from Palakkad',
    elevation: '450 m',
    blurb: 'A scenic 4 km forest trek through Western Ghats deciduous canopy and gushing seasonal brooks leading to a secluded jungle waterfall in the hills.',
    highlight: '3-Hour Forest Hike & Hidden Falls',
    timing: 'Batches at 9:30 AM, 11:00 AM & 2:00 PM',
    entry: '₹120 Forest Department Trek Pass',
    img: 'images/dhoni-waterfalls.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/A_picture_of_Seetharkund_Waterfalls%2C_Kollengode.jpg/1280px-A_picture_of_Seetharkund_Waterfalls%2C_Kollengode.jpg',
    secondaryImg: 'images/dhoni-waterfalls.jpg',
    secondaryCaption: 'Cascading natural stream and rock pool inside the forest',
    details: {
      reach: 'Local bus from Palakkad Town to Dhoni (25 mins). Trek starts at the Kerala Forest Department check-post.',
      bestTime: 'July to December when the forest streams and waterfall have abundant flow.',
      rules: 'Trekkers must register with forest officials. Solo wandering into off-trail elephant zones is prohibited.',
      mustDo: 'Hike through orange, teak, and cardamom trails to the cascade; dip your feet in the cool mountain brook.',
      food: 'Carry energy bars and water. Dhoni Farm nearby sells fresh Swiss-hybrid farm milk and curd.'
    }
  },
  {
    id: 'kanjikode-winds',
    name: 'Kanjikode Wind Farm & The Gap',
    kind: 'Misty Hills & Treks',
    distance: '14 km from Palakkad',
    elevation: '95 m',
    blurb: 'Vast fields of colossal wind turbines harnessing the ceaseless mountain gales blowing through the 32 km break in the Western Ghats.',
    highlight: 'Gigantic Turbines & Mountain Gales',
    timing: 'Open access / Best during Golden Hour',
    entry: 'Free scenic route',
    img: 'images/kanjikode-windmills.jpg',
    fallbackImg: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Malampuzha_Dam_Wind_turbine.jpg',
    secondaryImg: 'images/kanjikode-windmills.jpg',
    secondaryCaption: 'Wind turbine harnessing the Palakkad Gap breeze against the Western Ghats',
    details: {
      reach: 'Follow NH544 eastward towards Walayar. Turn off onto local Kanjikode countryside roads.',
      bestTime: 'May to September when the southwest monsoon gusts create howling winds through the gap.',
      rules: 'Turbines are situated on industrial and private farmlands; stay on public roads.',
      mustDo: 'Feel the force of the Palakkad Gap wind that has cooled South India for millennia; capture panoramic silhouette photos as the sun drops behind the turbines.',
      food: 'Highway dhabas along NH544 offer hearty Malabar parottas and spicy Kerala chicken roasts.'
    }
  },
  {
    id: 'attappadi',
    name: 'Attappadi Valley & Bhavani River',
    kind: 'Rainforests & Wildlife',
    distance: '38 km from Mannarkkad',
    elevation: '750 m',
    blurb: 'A rugged plateau where the Bhavani and Siruvani rivers flow, home to ancient tribal settlements and rolling rain-shadow mountain roads.',
    highlight: 'Bhavani Riverbanks & Malleswara Peak',
    timing: 'Daylight hours recommended',
    entry: 'Free public transit corridor',
    img: 'images/attappadi-ghat.jpg',
    fallbackImg: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Attappadi_ghat_road_%2834022%29.jpg/1280px-Attappadi_ghat_road_%2834022%29.jpg',
    secondaryImg: 'images/attappadi-ghat.jpg',
    secondaryCaption: 'Hairpin road cutting through the dramatic rain-shadow slopes of Attappadi',
    details: {
      reach: 'Buses climb from Mannarkkad up the hairpin roads of Attappadi Ghat to Agali town.',
      bestTime: 'September to February when the valley is pleasant and the Bhavani river is clean and shimmering.',
      rules: 'Do not photograph indigenous tribal settlements without explicit permission. Respect local cultural sanctity.',
      mustDo: 'Catch a glimpse of the pyramid-shaped Malleswara peak, revered by local tribes as Lord Shiva, and walk along the pebble banks of Bhavani.',
      food: 'Taste traditional ragi (finger millet) kali, country-style horse gram sambar, and fresh river fish curries at Agali village diners.'
    }
  }
];

// 2. PALAKKAD TRAVELOGUE FIELD JOURNALS WITH AUTHENTIC THUMBNAILS
var ENTRIES = [
  {
    id: 'journal-nelliyampathy',
    title: 'Chasing Mist on 30 Hairpins: Rising to Nelliyampathy',
    place: 'Nenmara to Seethargundu Ridge',
    date: 'Oct 2026',
    distance: '52 km',
    cost: '₹1,250',
    img: 'images/nelliyampathy.jpg',
    snippet: 'We caught the 6:15 AM red KSRTC bus out of Nenmara. As the old diesel engine roared into the first of thirty hairpin bends, the heat of the plains surrendered to thick mountain mist.',
    content: `
      <h4>Day 1: The Ascent from Nenmara</h4>
      <p>The dawn over Nenmara was warm and smells of damp clay. At the bus stand, tea stalls were clattering with steel tumblers. We paid ₹42 each for the ordinary KSRTC bus that climbs up into the Nelliyampathy reserve forest.</p>
      <p>Passing Pothundi Dam, the road narrows abruptly. The signboard warns: <em>Elephant Crossing Corridor. Drive with Care.</em> By hairpin bend 14, the temperature dropped noticeably. Towering wild fig trees gave way to manicured emerald slopes of tea bushes.</p>
      <h4>Afternoon: The Drop at Seethargundu</h4>
      <p>From Kaikatty junction, we shared a local 4x4 Mahindra jeep up to Seethargundu. The cliff edge here does not have noisy souvenir shops or guard rails that block your vision. You stand on damp granite and look straight down into a 1,000-meter void. Below, the paddy fields of Palakkad look like a tiny green motherboard crisscrossed by water canals.</p>
      <h4>Field Notes & Costs</h4>
      <p>Stayed at a government guest house near Kaikatty (₹900/night). Dinner was a simple plate of hot Kerala rice, moru curry, and unpolished papad. Total transport cost for two days came to less than ₹350 using state transport.</p>
    `,
    routeSteps: [
      { step: '06:15 AM', desc: 'Board KSRTC bus at Nenmara Bus Stand' },
      { step: '07:00 AM', desc: 'Pass Pothundi Dam Forest Checkpost' },
      { step: '08:15 AM', desc: 'Reach Kaikatty Junction; fresh tea & cardamom banana' },
      { step: '10:00 AM', desc: 'Arrive at Seethargundu Viewpoint cliff edge' },
      { step: '02:00 PM', desc: 'Walk through historic tea estates & orange groves' }
    ],
    costLedger: [
      { item: 'KSRTC Return Bus Fare (Palakkad – Nenmara – Nelliyampathy)', cost: '₹180' },
      { item: 'Shared Jeep to Seethargundu', cost: '₹100' },
      { item: 'Homestay Dorm / Govt Rest House', cost: '₹800' },
      { item: 'Meals & Fresh Hill Honey / Tea', cost: '₹170' }
    ]
  },
  {
    id: 'journal-silent-valley',
    title: 'Where the Forest Whispers: Deep into Silent Valley',
    place: 'Mannarkkad to Kunthi River',
    date: 'Nov 2026',
    distance: '45 km',
    cost: '₹1,850',
    img: 'images/silent-valley.jpg',
    snippet: 'Silent Valley does not welcome loud engines or hasty feet. The 23-kilometer jeep track is rough granite, moss, and giant fern trees leading to the crystal waters of Kunthi.',
    content: `
      <h4>08:00 AM: The Gate at Mukkali</h4>
      <p>At Mukkali forest camp, our backpacks were thoroughly inspected by Kerala Forest Department wardens. Every single plastic wrapper, water bottle, and snack pouch was counted and marked with a sticker. A deposit of ₹100 was taken — return every piece of plastic or forfeit the money. It is refreshing to see true conservation in action.</p>
      <h4>The 23-km Rainforest Track</h4>
      <p>We boarded the authorized forest department jeep with our Kadar tribal guide, Suresh. The track into the core zone cannot be navigated by ordinary cars. For an hour, we bumped through pristine evergreen rainforest canopy where sunlight barely reaches the forest floor. Suresh pointed out a family of Lion-tailed Macaques feeding silently high up in the Cullenia trees.</p>
      <h4>Kunthi River Suspension Bridge</h4>
      <p>From the Sairandhri watchtower, a 1.5 km stone trail winds downhill to the Kunthi River. The water here is so clear you can count pebbles six feet beneath the surface. There are no rowdy tourists, no plastic litter, and no mobile signals — just the steady rush of ancient waters.</p>
    `,
    routeSteps: [
      { step: '07:30 AM', desc: 'Report at Forest Information Centre, Mukkali' },
      { step: '08:30 AM', desc: 'Baggage inspection & eco-permit issuance' },
      { step: '09:00 AM', desc: 'Department 4x4 Jeep departure into core zone' },
      { step: '10:30 AM', desc: 'Climb Sairandhri 100ft Canopy Tower' },
      { step: '11:30 AM', desc: 'Guided trek to Kunthi River Suspension Bridge' }
    ],
    costLedger: [
      { item: 'Entry Permit & Conservation Fee', cost: '₹250' },
      { item: 'Forest Department Jeep (split between 5 people)', cost: '₹480' },
      { item: 'Mandatory Certified Tribal Guide', cost: '₹200' },
      { item: 'Bus transit Palakkad – Mannarkkad – Mukkali', cost: '₹120' },
      { item: 'Forest Canteen Meal & Snack', cost: '₹180' }
    ]
  },
  {
    id: 'journal-ramassery',
    title: 'The 200-Year-Old Secret: Sunrise Steam in Ramassery',
    place: 'Palakkad Town to Ramassery',
    date: 'Nov 2026',
    distance: '9 km',
    cost: '₹140',
    img: 'images/ramassery-idli.jpg',
    snippet: 'At 6:45 AM in Ramassery village, tamarind firewood smoke drifts across palm groves. Four generations have guarded this earthen-pot steam cooking secret.',
    content: `
      <h4>The Morning Bicycle Ride</h4>
      <p>We set out from Palakkad town while the streetlamps were still glowing. The road to Ramassery passes through Elappully, where rows of towering Palmyra palm trees silhouette against the pale violet dawn sky.</p>
      <h4>Inside the Hearth at Saraswathy Tea Stall</h4>
      <p>Unlike regular cylindrical aluminum idli steamers, here the cooking setup looks like an ancient alchemical workshop. Wide clay pots (Kalam) sit over open wood fires. Over each pot's mouth, a coarse net of unbleached muslin cloth is tied tautly with coir strings.</p>
      <p>The batter — made from seasoned Ponni paddy rice and black gram — is ladled onto the warm cloth, covered with a clay lid, and steamed for four minutes. The cook slides a smooth tamarind leaf soaked in water under the idli, lifting it off cleanly. The result is a disc-like idli that stays fresh for days without refrigeration.</p>
      <h4>The Taste</h4>
      <p>We ordered four idlis. They arrived steaming on a fresh banana leaf, alongside a fiery red Chammanthi Podi (gunpowder) mixed with cold-pressed coconut oil and a bowl of rustic chicken curry. One bite, and you understand why food travelers cross continents for this.</p>
    `,
    routeSteps: [
      { step: '06:00 AM', desc: 'Early start from Palakkad Town' },
      { step: '06:45 AM', desc: 'Arrive at Ramassery Village junction' },
      { step: '07:15 AM', desc: 'Watch clay pot steaming process with tamarind leaves' },
      { step: '07:45 AM', desc: 'Breakfast: 4 idlis + podi + sambar + filter coffee' },
      { step: '09:00 AM', desc: 'Cycle back through village paddy canals' }
    ],
    costLedger: [
      { item: 'Local Auto / Bus return', cost: '₹70' },
      { item: '4 Ramassery Idlis + Chicken / Sambar', cost: '₹60' },
      { item: 'Steaming hot filter coffee', cost: '₹15' }
    ]
  },
  {
    id: 'journal-palakkad-fort',
    title: 'Granite Moats & Chariot Bells: Walking Old Palakkad',
    place: 'Kota Maidan to Kalpathy Agraharam',
    date: 'Sep 2026',
    distance: '6 km',
    cost: '₹95',
    img: 'images/palakkad-fort.jpg',
    snippet: 'The morning sun hits the dark laterite blocks of Hyder Ali’s 1766 fort. A wide moat mirrors giant banyan trees where kingfishers perch before our walk to Kalpathy.',
    content: `
      <h4>07:00 AM: Palakkad Fort Ramparts</h4>
      <p>The fort stands squarely in the middle of town, yet inside its thick stone walls, traffic noise ceases. We entered through the drawbridge gate. Built by Hyder Ali of Mysore in 1766 to secure the strategic Palakkad Gap against British troops, the masonry is colossal square granite.</p>
      <p>An ancient Hanuman temple sits inside the courtyard, where temple bells were chiming for the morning puja. We climbed the stone rampart stairs to look out over the moat. Egrets and pied kingfishers were diving into the lotus-covered water.</p>
      <h4>09:30 AM: Kalpathy Agraharam</h4>
      <p>A short two-kilometer walk took us across the railway line into Old Kalpathy. Here, the world shifts into quiet Tamil Brahmin heritage. Rows of houses share common walls and wooden-pillared verandas (Thinnai). Elders sat on stone benches reading Malayalam newspapers while nadaswaram melodies echoed from the Viswanatha Swamy temple.</p>
    `,
    routeSteps: [
      { step: '07:00 AM', desc: 'Start at Kota Maidan Fort Gate' },
      { step: '08:00 AM', desc: 'Walk moat circuit & visit internal temple' },
      { step: '09:15 AM', desc: 'Stroll north through Kalpathy river bridge' },
      { step: '10:00 AM', desc: 'Explore Old Kalpathy Agraharam lanes' },
      { step: '11:00 AM', desc: 'Filter coffee and hot Nei Appam' }
    ],
    costLedger: [
      { item: 'Fort Entry (Archaeological Survey of India)', cost: '₹0 (Free)' },
      { item: 'Temple archana & coconut', cost: '₹40' },
      { item: 'Snacks & Brahmin filter coffee in Kalpathy', cost: '₹55' }
    ]
  },
  {
    id: 'journal-kollengode',
    title: 'Breezes of the Gap: Windmills, Kollengode & Paddy Trails',
    place: 'Kanjikode to Kollengode',
    date: 'Aug 2026',
    distance: '42 km',
    cost: '₹480',
    img: 'images/kollengode-fields.jpg',
    snippet: 'The Palakkad Gap is not just geography; it is a living breath. A relentless mountain wind whistles through thousands of palmyra fronds and giant turbine blades.',
    content: `
      <h4>Riding the Wind at Kanjikode</h4>
      <p>We rented a 110cc scooter in town and headed east toward Kanjikode. The Palakkad Gap — a 32-kilometer wide natural geological break in the Western Ghats — funnels the ocean breezes inland like a wind tunnel. Rows of massive white wind turbines spin effortlessly against the dramatic blue silhouette of the Walayar range.</p>
      <h4>South to Kollengode</h4>
      <p>Taking the narrow country bypass through Koduvayur, we entered what many travelers consider the quintessential Kerala village. There are no concrete shopping malls here. On either side of the asphalt, endless green paddy fields ripple in waves under the wind, accented by single sentinel Palmyrah palms (Karimpana).</p>
      <h4>Sunset by the Gayatri River</h4>
      <p>We sat on the stone steps of a village bathing ghat as bullock carts and farmers pedaled home with freshly cut fodder. The clouds turned amber, reflecting in the flooded paddy terraces. A pristine slice of Kerala life that modern highways have left untouched.</p>
    `,
    routeSteps: [
      { step: '08:00 AM', desc: 'Scooter pickup at Palakkad Station' },
      { step: '09:30 AM', desc: 'Wind turbine fields at Kanjikode' },
      { step: '11:30 AM', desc: 'Weavers village of Koduvayur' },
      { step: '01:30 PM', desc: 'Banana leaf sadya at Kollengode village mess' },
      { step: '05:00 PM', desc: 'Sunset overlooking Seetharkundu foothills & Gayatri river' }
    ],
    costLedger: [
      { item: 'Scooter Fuel', cost: '₹220' },
      { item: 'Banana leaf Kerala Matta Rice Sadya', cost: '₹120' },
      { item: 'Tender coconut & roadside snacks', cost: '₹60' },
      { item: 'Tea stall stops', cost: '₹40' }
    ]
  }
];

// 3. CATEGORIES & FILTER STATE
var CATS = ['All', 'Rainforests & Wildlife', 'Misty Hills & Treks', 'Forts & Heritage', 'Dams & Waters', 'Villages & Cuisine'];
var currentCat = 'All';
var searchQuery = '';

function el(tag, cls, text) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined && text !== null) n.textContent = text;
  return n;
}

// RENDER FILTER CHIPS
function renderChips() {
  var box = document.getElementById('chips');
  if (!box) return;
  box.textContent = '';
  CATS.forEach(function (c) {
    var b = el('button', 'chip', c);
    b.type = 'button';
    b.setAttribute('aria-pressed', c === currentCat ? 'true' : 'false');
    b.addEventListener('click', function () {
      currentCat = c;
      renderChips();
      renderPlaces();
    });
    box.appendChild(b);
  });
}

// RENDER DESTINATION CARDS WITH REAL PHOTOS
function renderPlaces() {
  var box = document.getElementById('places');
  if (!box) return;
  box.textContent = '';

  var filtered = PLACES.filter(function (p) {
    var matchCat = (currentCat === 'All' || p.kind === currentCat);
    var q = searchQuery.toLowerCase().trim();
    var matchSearch = !q ||
      p.name.toLowerCase().indexOf(q) !== -1 ||
      p.blurb.toLowerCase().indexOf(q) !== -1 ||
      p.highlight.toLowerCase().indexOf(q) !== -1 ||
      p.kind.toLowerCase().indexOf(q) !== -1;
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    var empty = el('div', 'empty-state');
    empty.style.gridColumn = '1 / -1';
    empty.style.textAlign = 'center';
    empty.style.padding = '48px 20px';
    empty.innerHTML = '<h3>No destinations found</h3><p style="color:var(--muted);margin-top:8px;">Try searching for "trek", "dam", "idli", or choose another category.</p>';
    box.appendChild(empty);
    return;
  }

  filtered.forEach(function (p) {
    var card = el('div', 'card');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'View details for ' + p.name);

    // Photo Box
    var photoBox = el('div', 'photo-box');
    var img = document.createElement('img');
    img.src = p.img;
    img.alt = p.name;
    img.loading = 'lazy';
    img.onerror = function() {
      if (p.fallbackImg && this.src !== p.fallbackImg) {
        this.src = p.fallbackImg;
      }
    };
    photoBox.appendChild(img);

    var photoGrad = el('div', 'photo-gradient');
    photoBox.appendChild(photoGrad);

    var photoTag = el('div', 'photo-tag', p.kind.split(' ')[0]);
    photoBox.appendChild(photoTag);

    var artBadge = el('div', 'art-badge');
    artBadge.innerHTML = '<span>✦ ' + p.elevation + '</span>';
    photoBox.appendChild(artBadge);

    card.appendChild(photoBox);

    // Content
    var content = el('div', 'card-content');

    var meta = el('div', 'card-meta');
    meta.appendChild(el('span', 'kind', p.kind));
    meta.appendChild(el('span', 'distance', p.distance));
    content.appendChild(meta);

    content.appendChild(el('h3', '', p.name));
    content.appendChild(el('p', '', p.blurb));

    var footer = el('div', 'card-footer');
    footer.appendChild(el('span', '', '★ ' + p.highlight));
    footer.appendChild(el('span', '', 'Explore Photos & Route →'));
    content.appendChild(footer);

    card.appendChild(content);

    // Click handler to open destination modal
    function openModal() {
      showDestinationModal(p);
    }
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });

    box.appendChild(card);
  });
}

// RENDER FIELD JOURNAL LIST WITH PHOTOS
function renderEntries() {
  var box = document.getElementById('entries');
  if (!box) return;
  box.textContent = '';

  ENTRIES.forEach(function (e) {
    var entry = el('div', 'entry');
    entry.setAttribute('role', 'button');
    entry.setAttribute('tabindex', '0');

    // Thumbnail
    var thumb = el('div', 'entry-thumb');
    var thumbImg = document.createElement('img');
    thumbImg.src = e.img;
    thumbImg.alt = e.title;
    thumbImg.loading = 'lazy';
    thumb.appendChild(thumbImg);
    entry.appendChild(thumb);

    var body = el('div', 'entry-body');

    var head = el('div', 'entry-head');
    head.appendChild(el('h3', '', e.title));
    head.appendChild(el('div', 'date', e.date));
    body.appendChild(head);

    var meta = el('div', 'entry-meta');
    meta.appendChild(el('span', '', '📍 ' + e.place));
    meta.appendChild(el('span', '', '⏱ ' + e.distance));
    meta.appendChild(el('span', '', '💰 ' + e.cost + ' budget'));
    body.appendChild(meta);

    body.appendChild(el('p', 'snippet', e.snippet));
    entry.appendChild(body);

    function openJournal() {
      showJournalModal(e);
    }
    entry.addEventListener('click', openJournal);
    entry.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        openJournal();
      }
    });

    box.appendChild(entry);
  });
}

// 4. MODALS & INTERACTIVE OVERLAYS WITH REAL PHOTOGRAPHY
var modalOverlay = document.getElementById('modal-overlay');
var modalSheet = document.getElementById('modal-sheet');

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
  }
}

// Show Destination Details Modal
function showDestinationModal(p) {
  if (!modalSheet || !modalOverlay) return;

  modalSheet.innerHTML = '';

  // Close Button
  var closeBtn = el('button', 'modal-close', '✕');
  closeBtn.setAttribute('aria-label', 'Close dialog');
  closeBtn.addEventListener('click', closeModal);
  modalSheet.appendChild(closeBtn);

  // Header with Real Photography
  var headerPhoto = el('div', 'modal-header-photo');
  var coverImg = document.createElement('img');
  coverImg.src = p.img;
  coverImg.alt = p.name;
  coverImg.className = 'modal-cover-img';
  coverImg.onerror = function() {
    if (p.fallbackImg && this.src !== p.fallbackImg) {
      this.src = p.fallbackImg;
    }
  };
  headerPhoto.appendChild(coverImg);

  var overlay = el('div', 'modal-cover-overlay');
  headerPhoto.appendChild(overlay);

  var headerTitle = el('div', 'modal-header-content');
  headerTitle.appendChild(el('div', 'eyebrow orange-text', p.kind + ' • ' + p.elevation));
  headerTitle.appendChild(el('h2', '', p.name));
  headerPhoto.appendChild(headerTitle);

  modalSheet.appendChild(headerPhoto);

  // Body
  var body = el('div', 'modal-body');

  // Info Pills
  var infoGrid = el('div', 'modal-grid-info');
  infoGrid.innerHTML = `
    <div class="info-pill-item"><span class="label">Location</span><span class="val">${p.distance}</span></div>
    <div class="info-pill-item"><span class="label">Altitude</span><span class="val">${p.elevation}</span></div>
    <div class="info-pill-item"><span class="label">Timings</span><span class="val">${p.timing}</span></div>
    <div class="info-pill-item"><span class="label">Entry / Fee</span><span class="val">${p.entry}</span></div>
  `;
  body.appendChild(infoGrid);

  // Prose
  var prose = el('div', 'modal-prose');
  prose.innerHTML = `
    <h4>About the Location</h4>
    <p>${p.blurb}</p>
  `;

  // Secondary Photography if available
  if (p.secondaryImg) {
    var secBox = el('div', 'modal-secondary-photo');
    var secImg = document.createElement('img');
    secImg.src = p.secondaryImg;
    secImg.alt = p.name + ' scenery';
    secBox.appendChild(secImg);
    if (p.secondaryCaption) {
      secBox.appendChild(el('span', 'caption', p.secondaryCaption));
    }
    prose.appendChild(secBox);
  }

  prose.innerHTML += `
    <h4>How to Reach</h4>
    <p>${p.details.reach}</p>
    <h4>Best Hours & Season</h4>
    <p>${p.details.bestTime}</p>
    <h4>Rules & Green Protocols</h4>
    <p>${p.details.rules}</p>
    <h4>Don’t Miss Experience</h4>
    <p>${p.details.mustDo}</p>
    <h4>Local Food & Refreshments</h4>
    <p>${p.details.food}</p>
  `;
  body.appendChild(prose);

  // Action Button
  var actionRow = el('div', 'actions');
  var planBtn = el('button', 'pill green', 'Plan Route & Cost');
  planBtn.addEventListener('click', function () {
    closeModal();
    var plannerSec = document.getElementById('planner');
    if (plannerSec) plannerSec.scrollIntoView({ behavior: 'smooth' });
  });
  actionRow.appendChild(planBtn);
  body.appendChild(actionRow);

  modalSheet.appendChild(body);
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

// Show Field Journal Modal
function showJournalModal(e) {
  if (!modalSheet || !modalOverlay) return;

  modalSheet.innerHTML = '';

  var closeBtn = el('button', 'modal-close', '✕');
  closeBtn.setAttribute('aria-label', 'Close dialog');
  closeBtn.addEventListener('click', closeModal);
  modalSheet.appendChild(closeBtn);

  // Header Photo
  var headerPhoto = el('div', 'modal-header-photo');
  var coverImg = document.createElement('img');
  coverImg.src = e.img;
  coverImg.alt = e.title;
  coverImg.className = 'modal-cover-img';
  headerPhoto.appendChild(coverImg);

  var overlay = el('div', 'modal-cover-overlay');
  headerPhoto.appendChild(overlay);

  var headerTitle = el('div', 'modal-header-content');
  headerTitle.appendChild(el('div', 'eyebrow orange-text', 'Field Journal • ' + e.date));
  headerTitle.appendChild(el('h2', '', e.title));
  headerPhoto.appendChild(headerTitle);

  modalSheet.appendChild(headerPhoto);

  var body = el('div', 'modal-body');

  var infoGrid = el('div', 'modal-grid-info');
  infoGrid.innerHTML = `
    <div class="info-pill-item"><span class="label">Route</span><span class="val">${e.place}</span></div>
    <div class="info-pill-item"><span class="label">Distance Covered</span><span class="val">${e.distance}</span></div>
    <div class="info-pill-item"><span class="label">Real Cost Logged</span><span class="val">${e.cost}</span></div>
    <div class="info-pill-item"><span class="label">Field Season</span><span class="val">${e.date}</span></div>
  `;
  body.appendChild(infoGrid);

  var prose = el('div', 'modal-prose');
  prose.innerHTML = e.content;

  // Itinerary steps table
  if (e.routeSteps && e.routeSteps.length > 0) {
    var routeHeading = el('h4', '', 'Route & Timeline Steps');
    prose.appendChild(routeHeading);
    var routeTable = el('table', 'cost-table');
    routeTable.innerHTML = '<thead><tr><th>Time</th><th>Milestone / Activity</th></tr></thead><tbody>' +
      e.routeSteps.map(function (s) {
        return '<tr><td><strong>' + s.step + '</strong></td><td>' + s.desc + '</td></tr>';
      }).join('') +
      '</tbody>';
    prose.appendChild(routeTable);
  }

  // Cost table
  if (e.costLedger && e.costLedger.length > 0) {
    var costHeading = el('h4', '', 'Itemized Field Cost Ledger');
    prose.appendChild(costHeading);
    var costTable = el('table', 'cost-table');
    costTable.innerHTML = '<thead><tr><th>Expense Item</th><th>Amount Paid</th></tr></thead><tbody>' +
      e.costLedger.map(function (c) {
        return '<tr><td>' + c.item + '</td><td><strong>' + c.cost + '</strong></td></tr>';
      }).join('') +
      '</tbody>';
    prose.appendChild(costTable);
  }

  body.appendChild(prose);
  modalSheet.appendChild(body);
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

// 5. INTERACTIVE TRIP & COST PLANNER LOGIC
var plannerState = {
  days: 2,
  style: 'moderate'
};

var PLANNER_DATA = {
  1: {
    title: '1-Day Palakkad Gap & Heritage Express',
    description: 'Perfect for transit travelers and day trippers wanting the highlights of history, food, and the mountain breeze.',
    timeline: [
      { step: '1', title: '07:30 AM – Sunrise Idlis in Ramassery', desc: 'Taste the ancient earthen-pot steamed disc idlis with hot podi & filter coffee.' },
      { step: '2', title: '09:30 AM – Palakkad Fort (Tipu Sultan)', desc: 'Explore the 1766 granite bastions, moat promenade, and shady banyan trails.' },
      { step: '3', title: '12:30 PM – Kalpathy Agraharam & Heritage Sadya', desc: 'Walk centuries-old Brahmin settlement streets and enjoy authentic vegetarian lunch.' },
      { step: '4', title: '03:30 PM – Malampuzha Dam & Passenger Ropeway', desc: 'Glide over the vast reservoir, visit Kanayi Kunhiraman’s Yakshi and the rock garden.' }
    ],
    costs: {
      budget: { total: '₹480', travel: '₹90 (State bus & local auto)', stay: '₹0 (Day trip)', food: '₹280 (Tea stalls & Sadya)', permits: '₹110 (Dam & ropeway)' },
      moderate: { total: '₹1,250', travel: '₹450 (Scooter rent & fuel)', stay: '₹0 (Day trip)', food: '₹550 (Cafes & snacks)', permits: '₹250 (Full access & cameras)' },
      comfort: { total: '₹3,400', travel: '₹2,200 (Private AC sedan for day)', stay: '₹0 (Day trip)', food: '₹850 (Heritage dining)', permits: '₹350 (Fast-track entries)' }
    }
  },
  2: {
    title: '2-Day Misty Ghats & Rural Palakkad',
    description: 'The traveler favorite: climb through 30 hairpin turns to Nelliyampathy on Day 1, and wander heritage villages and forts on Day 2.',
    timeline: [
      { step: 'Day 1', title: 'Pothundi Dam → Nelliyampathy Ridge', desc: 'Ascend the 30 hairpin bends, stand at Seethargundu cliff edge, and stay amidst organic tea gardens.' },
      { step: 'Day 2', title: 'Ramassery → Tipu Fort → Kollengode', desc: 'Morning idlis in Ramassery, midday walk in Palakkad Fort, and sunset by Kollengode paddy streams.' }
    ],
    costs: {
      budget: { total: '₹1,650', travel: '₹280 (KSRTC & shared jeeps)', stay: '₹750 (Forest dorm/budget lodge)', food: '₹520 (Village meals)', permits: '₹100 (Dam passes)' },
      moderate: { total: '₹3,450', travel: '₹950 (Rented bike/scooter & fuel)', stay: '₹1,600 (Plantation homestay)', food: '₹750 (Local feasts)', permits: '₹150 (Entries)' },
      comfort: { total: '₹7,800', travel: '₹3,800 (AC Cab 2 days)', stay: '₹2,600 (Resort with valley view)', food: '₹1,100 (Fine local dining)', permits: '₹300 (Activities)' }
    }
  },
  3: {
    title: '3-Day Deep Valley & Rainforest Expedition',
    description: 'Comprehensive expedition: Silent Valley National Park wilderness, high Nelliyampathy ridges, and peaceful rural heartlands.',
    timeline: [
      { step: 'Day 1', title: 'Silent Valley National Park & Kunthi River', desc: 'Report to Mukkali, forest 4x4 safari, Sairandhri watchtower, and rainforest bridge trek.' },
      { step: 'Day 2', title: 'Nelliyampathy Hills & Seethargundu', desc: 'Hairpin ascent, Kesavampara, orange plantations, and cloud-line sunset.' },
      { step: 'Day 3', title: 'Heritage Palakkad, Ramassery & Wind Farm', desc: 'Clay pot idlis, Tipu Fort moat, Kalpathy agraharam, and Kanjikode turbine breezes.' }
    ],
    costs: {
      budget: { total: '₹2,950', travel: '₹650 (KSRTC routes)', stay: '₹1,300 (Eco lodges & youth stays)', food: '₹600 (Simple South Indian)', permits: '₹400 (Forest entry split)' },
      moderate: { total: '₹6,200', travel: '₹1,600 (Scooter / Shared cab hire)', stay: '₹3,000 (2 nights cozy stays)', food: '₹1,000 (Cafeteria & meals)', permits: '₹600 (Forest guide & safari)' },
      comfort: { total: '₹14,500', travel: '₹6,500 (Dedicated private vehicle)', stay: '₹5,500 (Boutique nature resorts)', food: '₹1,600 (Resort dining)', permits: '₹900 (VIP guided tours)' }
    }
  }
};

function updatePlannerUI() {
  var data = PLANNER_DATA[plannerState.days];
  var costs = data.costs[plannerState.style];

  var titleEl = document.getElementById('planner-plan-title');
  var descEl = document.getElementById('planner-plan-desc');
  var costTotalEl = document.getElementById('planner-cost-total');
  var costTravelEl = document.getElementById('planner-cost-travel');
  var costStayEl = document.getElementById('planner-cost-stay');
  var costFoodEl = document.getElementById('planner-cost-food');
  var costPermitsEl = document.getElementById('planner-cost-permits');
  var timelineEl = document.getElementById('planner-timeline');

  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.description;
  if (costTotalEl) costTotalEl.textContent = costs.total;
  if (costTravelEl) costTravelEl.textContent = costs.travel;
  if (costStayEl) costStayEl.textContent = costs.stay;
  if (costFoodEl) costFoodEl.textContent = costs.food;
  if (costPermitsEl) costPermitsEl.textContent = costs.permits;

  if (timelineEl) {
    timelineEl.innerHTML = data.timeline.map(function (step) {
      return `
        <div class="timeline-step">
          <div class="step-marker">${step.step}</div>
          <div class="step-content">
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }
}

function initPlanner() {
  var dayButtons = document.querySelectorAll('[data-days]');
  dayButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      dayButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      plannerState.days = parseInt(btn.getAttribute('data-days'), 10);
      updatePlannerUI();
    });
  });

  var styleButtons = document.querySelectorAll('[data-style]');
  styleButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      styleButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      plannerState.style = btn.getAttribute('data-style');
      updatePlannerUI();
    });
  });

  updatePlannerUI();
}

// 6. TOAST NOTIFICATION
function showToast(message) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 4000);
}

// 7. EVENT LISTENERS SETUP
document.addEventListener('DOMContentLoaded', function () {
  // Search input
  var searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      searchQuery = e.target.value;
      renderPlaces();
    });
  }

  // Modal backdrop click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // ESC key to close modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Featured journal read button
  var readFeaturedBtn = document.getElementById('btn-read-featured');
  if (readFeaturedBtn) {
    readFeaturedBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showJournalModal(ENTRIES[0]);
    });
  }

  // Featured journal route button
  var routeFeaturedBtn = document.getElementById('btn-route-featured');
  if (routeFeaturedBtn) {
    routeFeaturedBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showJournalModal(ENTRIES[0]);
    });
  }

  // Subscribe form
  var form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var input = document.getElementById('email');
      var msg = document.getElementById('msg');
      if (!input || !input.value || !input.checkValidity()) {
        if (msg) msg.textContent = 'Please enter a valid email address.';
        if (input) input.focus();
        return;
      }

      var userEmail = input.value;
      input.value = '';
      if (msg) {
        msg.textContent = 'Subscribed! You will receive field notes for ' + userEmail + '.';
        msg.style.color = 'var(--forest-deep)';
      }
      showToast('✓ Welcome aboard! The Palakkad Gap field dispatch is on its way.');
    });
  }

  // Initial renders
  renderChips();
  renderPlaces();
  renderEntries();
  initPlanner();
});
