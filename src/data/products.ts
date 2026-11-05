export type Product = {
  slug: "moto" | "snow";
  name: string;
  discipline: string;
  headline: string;
  intro: string;
  price: string;
  /** Price as a number, for the cart */
  amount: number;
  world: "dirt" | "snow";
  stats: { value: string; label: string }[];
  features: { title: string; text: string }[];
  feature: { photo: string; widths: [number, number]; alt: string; line: string; note: string };
  engineeringTitle: string;
  engineering: { mark: string; title: string; text: string }[];
  fitTitle: string;
  fit: { title: string; text: string }[];
  specs: { label: string; value: string }[];
};

export const moto: Product = {
  slug: "moto",
  name: "Sentio Moto",
  discipline: "Motocross & Enduro",
  headline: "Born for the dirt.",
  intro: "Dust-protected electronics, a vibration-dampened HUD and a ballistic-rated lens, in one 185 g goggle.",
  price: "$349",
  amount: 349,
  world: "dirt",
  stats: [
    { value: "185 g", label: "Lens, frame and electronics" },
    { value: "8 h", label: "Active battery" },
    { value: "IP54", label: "Dust and splash protection" },
    { value: "14", label: "Tear-off layers" },
  ],
  features: [
    { title: "Live speed", text: "Large, high-contrast numerals at 60 fps, readable through roost and direct sun." },
    { title: "Trail navigation", text: "Load a GPX file and follow a bearing arrow to the next waypoint, accurate to ±3 m." },
    { title: "Lap timer", text: "Automatic GPS laps with ±50 ms timing and a running delta to your best." },
    { title: "HD recording", text: "1600×1200 straight to onboard flash, with up to 45 minutes of recording and no SD card." },
  ],
  feature: {
    photo: "lens-glint",
    widths: [700, 1100],
    alt: "Low sun catching the edge of the Sentio lens",
    line: "38% warm amber lens. Ruts, roots and rocks stand out in flat light.",
    note: "High-contrast dirt vision",
  },
  engineeringTitle: "Off-road is one of the harshest places on earth for electronics.",
  engineering: [
    { mark: "IP54", title: "Sealed against dust", text: "Pressure-tested TPU housing with silicone gaskets at every seam, for roost, mud and puddle hits." },
    { mark: "7-post", title: "Tear-off ready", text: "Takes stacks of up to 14 layers. The HUD sits behind the tear-off plane, so pulling one never touches your display." },
    { mark: "38%", title: "Tuned for flat light", text: "A warm amber tint lifts terrain contrast, with a hydrophobic outer coat that sheds water." },
    { mark: "50 g", title: "Vibration-dampened HUD", text: "A dual-durometer silicone cradle keeps text steady over whoops and protects the OLED from shock up to 50 g." },
  ],
  fitTitle: "Technology means nothing if it hurts.",
  fit: [
    { title: "Triple-layer foam", text: "Three densities for support and all-day comfort. Antimicrobial and removable." },
    { title: "45 mm silicone strap", text: "Triple lines of silicone grip any shell finish, adjusting from 15 to 28 cm." },
    { title: "50+ helmets", text: "Confirmed with leading MX and enduro helmets, with outriggers that flex ±15°." },
  ],
  specs: [
    { label: "Display", value: "128×64 OLED SSD1309" },
    { label: "Processor", value: "ESP32S3 Dual-Core 240 MHz" },
    { label: "Memory", value: "8 MB PSRAM + 8 MB Flash" },
    { label: "Camera", value: "OV2640 HD (1600×1200)" },
    { label: "IMU", value: "LSM6DSO 6-Axis (±16g / ±2000°/s)" },
    { label: "Connectivity", value: "Wi-Fi 802.11n + BLE 5.0" },
    { label: "Battery", value: "Li-Po 800mAh, 8h Active" },
    { label: "Charging", value: "USB-C, 90 min Full / 15 min Quick" },
    { label: "Protection", value: "IP54 Dust & Splash Protected" },
    { label: "Lens Standard", value: "MIL-PRF-32432 Ballistic" },
    { label: "Lens VLT", value: "38% Warm Amber" },
    { label: "Field of View", value: "140° Horizontal / 90° Vertical" },
    { label: "Weight", value: "185 g (Lens + Frame + Electronics)" },
    { label: "Operating Temp", value: "-20°C to 45°C" },
    { label: "Strap Width", value: "45 mm Silicone-Grip" },
    { label: "Tear-Offs", value: "7-Post System, 14 Layer Stack" },
  ],
};

export const snow: Product = {
  slug: "snow",
  name: "Sentio Snow",
  discipline: "Ski & Snowboard",
  headline: "Made for the mountain.",
  intro: "Dual-pane heated anti-fog, a thermally insulated battery and UV400 protection, in one 195 g goggle.",
  price: "$379",
  amount: 379,
  world: "snow",
  stats: [
    { value: "195 g", label: "Lens, frame and electronics" },
    { value: "6 h", label: "Heated, 8 h standard" },
    { value: "IP64", label: "Dust-tight, splash-proof" },
    { value: "−25°C", label: "Lowest operating temperature" },
  ],
  features: [
    { title: "Temperature", text: "Ambient temperature and wind chill on your lens, so you can layer up before your hands go numb." },
    { title: "Altitude", text: "Live elevation and vertical drop from a barometer accurate to ±1 m." },
    { title: "Run mapping", text: "Every run logged at 10 Hz and replayed in the app with a speed heat map." },
    { title: "Anti-fog", text: "A heated inner pane clears the lens in under 8 seconds." },
  ],
  feature: {
    photo: "lens-open-side",
    widths: [900, 1600],
    alt: "The Sentio goggle with its magnetic lens swung open",
    line: "Eight magnets. Ten seconds. No tools, even with gloves on.",
    note: "Magnetic lens system",
  },
  engineeringTitle: "We didn't design around the cold. We designed for it.",
  engineering: [
    { mark: "3 mm", title: "Dual-pane anti-fog", text: "A sealed air gap stops condensation forming. When that isn't enough, a 3 W ITO element takes over." },
    { mark: "85%+", title: "Thermal battery insulation", text: "An aerogel-foam jacket keeps the cell above -5°C when the air drops to -25°C." },
    { mark: "UV400", title: "Snow-blindness protection", text: "Blocks 100% of UVA, UVB and UVC. The Category 3 tint cuts glare and keeps terrain contrast." },
    { mark: "140°", title: "Spherical lens", text: "Curved to match the eye, for edge-to-edge clarity with no warping at the periphery." },
  ],
  fitTitle: "All-day comfort in freezing conditions.",
  fit: [
    { title: "Moisture-wicking foam", text: "Three layers with a fleece surface that keeps the lens area dry. Removable and washable." },
    { title: "Articulating outriggers", text: "Pivot ±15° to seal against any helmet profile, with no gaps and no cold air." },
    { title: "Quick-swap lens", text: "Eight neodymium magnets give a tool-free change in under 10 seconds." },
  ],
  specs: [
    { label: "Display", value: "128×64 OLED SSD1309" },
    { label: "Processor", value: "ESP32S3 Dual-Core 240 MHz" },
    { label: "Memory", value: "8 MB PSRAM + 8 MB Flash" },
    { label: "Camera", value: "OV2640 HD (1600×1200)" },
    { label: "IMU", value: "LSM6DSO 6-Axis (±16g / ±2000°/s)" },
    { label: "Barometer", value: "BMP280, ±1 m Altitude" },
    { label: "Connectivity", value: "Wi-Fi 802.11n + BLE 5.0" },
    { label: "Battery", value: "Li-Po 800mAh, 6h Heated / 8h Standard" },
    { label: "Charging", value: "USB-C, 90 min Full / 15 min Quick" },
    { label: "Protection", value: "IP64 Dust-Tight & Splash-Proof" },
    { label: "Lens Standard", value: "MIL-PRF-32432 Ballistic" },
    { label: "Lens Category", value: "Cat.3 S3 (8-18% VLT)" },
    { label: "Anti-Fog", value: "Dual-Pane + ITO Heating (3W)" },
    { label: "UV Protection", value: "UV400 (100% UVA/UVB/UVC)" },
    { label: "Field of View", value: "140° Horizontal / 90° Vertical" },
    { label: "Weight", value: "195 g (Lens + Frame + Electronics)" },
    { label: "Operating Temp", value: "-25°C to 40°C" },
    { label: "Lens Swap", value: "Magnetic 8-Point, 10 sec" },
  ],
};
