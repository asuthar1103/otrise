// OTRise content — ported verbatim from asuthar1103/otrise index.html (LEVELS array).
// Rule: every question stores its correct answer first in opts, with a:0. Shuffled at render time.
window.OTRISE_PASS = 6;
window.OTRISE_LEVELS = [
{ title:"First Day at the Plant", role:"Level 1 · Rookie", diff:1, badge:"OT Aware",
  desc:"The absolute basics: what OT actually is and why it isn't just 'IT with hard hats'.",
  questions:[
    { q:"What does 'OT' stand for in industrial cybersecurity?", opts:["Operational Technology","Online Terminal","Output Transmission","Organizational Testing"], a:0, why:"OT — Operational Technology — is the hardware and software that monitors and controls physical processes: pumps, valves, motors, production lines." },
    { q:"Which of these is a typical OT device?", opts:["A PLC controlling a pump","An office printer","A payroll server","A conference room webcam"], a:0, why:"A PLC (Programmable Logic Controller) is a rugged industrial computer that directly controls machinery. The others are classic IT equipment." },
    { q:"What does an HMI let a plant operator do?", opts:["View and control the process from a screen","Send marketing emails","Design mechanical parts","Manage employee records"], a:0, why:"The Human-Machine Interface is the operator's window into the process — live values, alarms, and controls for the plant." },
    { q:"SCADA stands for…", opts:["Supervisory Control And Data Acquisition","Secure Central Access Data Application","System Check And Device Alert","Standard Control And Diagnostic Array"], a:0, why:"SCADA systems supervise and collect data from processes spread over large areas — pipelines, power grids, water networks." },
    { q:"In a typical office IT system, confidentiality comes first. What comes first in OT?", opts:["Safety and keeping the process running","Confidentiality, same as IT","Fast internet speed","Data storage capacity"], a:0, why:"In OT the priority flips: a leaked file is bad, but a compromised controller can stop production or physically hurt people. Safety and availability lead." },
    { q:"Why can't OT systems simply install every update immediately like office laptops?", opts:["Updates can force downtime and must be tested against the process first","OT systems never need updates","Updates are illegal in factories","OT devices have unlimited storage for patches"], a:0, why:"Many plants run 24/7, and an untested patch can break control software. Patching in OT is planned around shutdown windows and vendor validation." },
    { q:"A colleague says: \"Our plant network is air-gapped, so hackers can't reach it.\" What's the realistic view?", opts:["True air gaps are rare — vendor links, USBs and remote access usually create paths in","He's right, air gaps make plants unhackable","Air gaps only fail during storms","Hackers can only attack websites, not plants"], a:0, why:"Modern plants exchange data with business systems, vendors and remote engineers. Even 'isolated' networks are reachable via USB media and temporary connections — Stuxnet proved it." },
    { q:"Why do attackers bother targeting industrial systems at all?", opts:["Disruption, extortion and sabotage of physical operations can be very valuable","Only to test their internet speed","OT systems store cat videos","They can't — OT has no value to attackers"], a:0, why:"Stopping a pipeline, factory or power grid creates enormous pressure — for ransom, politics or sabotage. Physical impact is exactly what makes OT a target." }
  ]},
{ title:"Threats on the Floor", role:"Level 2 · Operator", diff:2, badge:"Threat Spotter",
  desc:"Everyday attack paths: USB sticks, phishing, remote access and bad habits.",
  questions:[
    { q:"You find a USB stick in the plant parking lot. What do you do?", opts:["Hand it to security/IT — never plug it into any plant machine","Plug it into the HMI to find the owner","Plug it into your work laptop 'just quickly'","Format it and keep it"], a:0, why:"Dropped USB sticks are a classic attack. Stuxnet entered its target via removable media. Unknown media never touches OT equipment." },
    { q:"Which email is most likely phishing?", opts:["\"Urgent: your SCADA password expires in 1 hour — click here to keep access\"","A newsletter you subscribed to","A meeting invite from your known manager","A delivery note you were expecting from a known supplier"], a:0, why:"Urgency + credential link = phishing pattern. Attackers often steal IT credentials first, then pivot toward OT systems." },
    { q:"Why are default passwords (admin/admin) on OT devices so dangerous?", opts:["They're published in manuals online — attackers try them first","They use too much memory","They slow the network down","They expire too quickly"], a:0, why:"Default credentials for PLCs, HMIs and routers are freely documented. Scanning tools try them automatically — changing them is step one of hardening." },
    { q:"A vendor asks for permanent, always-on remote access to 'their' machine in your plant. Best practice?", opts:["Time-limited access via a controlled gateway with MFA, monitored and approved per session","Give them a permanent VPN with full network access","Share the operator's own password","Let them install their own 4G modem on the PLC"], a:0, why:"Remote access is one of the top OT attack vectors. It should be brokered, time-boxed, least-privilege and logged — never a standing open door." },
    { q:"Ransomware hits the office (IT) network. Why can production still end up stopping?", opts:["Shared services and connections mean plants often halt as a precaution or dependency","Ransomware improves plant performance","It can't — IT and OT are always separate","Only printers are affected by ransomware"], a:0, why:"Colonial Pipeline 2021: the ransomware hit IT, but operations were shut down because of dependencies and uncertainty. IT incidents become OT incidents fast." },
    { q:"Why is an accurate asset inventory considered the first step of any OT security program?", opts:["You can't protect, patch or monitor devices you don't know exist","Inventories are only needed for accounting","It makes the network faster","Auditors like long spreadsheets"], a:0, why:"Unknown PLCs, forgotten modems and undocumented links are where attackers live. Visibility comes before any control." },
    { q:"During maintenance you notice an unlabelled cellular modem wired to a controller. What is this?", opts:["A possible rogue/shadow connection that bypasses all network defenses — report it","Normal — more connectivity is always good","A Wi-Fi booster for the break room","Something to ignore if the machine still runs"], a:0, why:"Undocumented modems create a direct path from the internet to the process, skipping every firewall. They must be verified, authorized or removed." },
    { q:"A contractor wants to connect his personal laptop directly to the control network 'to save time'. You should…", opts:["Refuse — only approved, scanned, managed devices connect to OT","Allow it if he promises he has antivirus","Allow it outside office hours only","Allow it if the laptop looks new"], a:0, why:"Transient devices are a major infection path into OT. Plants use dedicated, hardened engineering machines and controlled file-transfer processes instead." }
  ]},
{ title:"Blueprints & Barriers", role:"Level 3 · Engineer", diff:3, badge:"Architect",
  desc:"Network architecture: the Purdue model, zones, conduits, DMZs and segmentation.",
  questions:[
    { q:"In the Purdue reference model, what lives at Level 0?", opts:["Sensors and actuators touching the physical process","The corporate email server","The ERP system","Cloud analytics dashboards"], a:0, why:"Level 0 is the physical layer — instruments and final elements (valves, motors). Levels rise through control (1), supervision (2), operations (3) to enterprise (4/5)." },
    { q:"What is the main purpose of the industrial DMZ (the 'Level 3.5' between IT and OT)?", opts:["Broker all data exchange so no direct connection exists between enterprise and control networks","Host the company website","Store operator lunch menus","Make the network diagram look bigger"], a:0, why:"The iDMZ terminates connections from both sides — historians, patch servers, jump hosts — so enterprise systems never talk straight to controllers." },
    { q:"Why is a 'flat' network (everything on one segment) dangerous in a plant?", opts:["One compromised device can reach every controller directly","Cables lie flat on the floor","It uses too many IP addresses","Flat networks are slower by definition"], a:0, why:"Without segmentation there is nothing to stop lateral movement: infect one laptop, reach every PLC. Segmentation contains the blast radius." },
    { q:"In IEC 62443 language, what are 'zones' and 'conduits'?", opts:["Groups of assets with shared security needs, and the controlled channels between them","Physical fences and corridors in the plant","Types of firewall hardware","Wi-Fi frequency bands"], a:0, why:"A zone groups assets with similar criticality; conduits are the defined, restricted communication paths between zones — each with its own security requirements." },
    { q:"The enterprise wants live production data. The secure pattern is…", opts:["OT pushes data outward to a historian/broker in the DMZ; enterprise reads from there","Give every office PC direct read access to the PLCs","Email CSV files from the HMI every hour","Put the PLC on the internet with a strong password"], a:0, why:"Data flows outward through an intermediary; nothing from the enterprise side initiates connections into the control network." },
    { q:"What is a data diode (unidirectional gateway) used for?", opts:["Physically guaranteeing data flows in one direction only, e.g. out of a critical network","Boosting Wi-Fi signal","Encrypting USB sticks","Cooling the server room"], a:0, why:"Hardware-enforced one-way flow lets you export monitoring data from critical zones (like safety systems) with no physical possibility of traffic coming back in." },
    { q:"Which firewall rule is the most suspicious on an IT→OT boundary?", opts:["'Any' source allowed to reach the PLC subnet on all ports","DMZ historian allowed to receive data from Level 3","Jump host reachable from a named admin subnet with MFA","Time-sync (NTP) from a defined internal server"], a:0, why:"'Any/any' rules to controller networks defeat the entire purpose of the boundary. Rules should be specific: named sources, named destinations, named ports." },
    { q:"Where should a vendor's remote engineering session terminate?", opts:["On a monitored jump host in the DMZ, which then connects onward under control","Directly on the safety controller","On the operator's personal phone","On any machine that's free"], a:0, why:"The jump host pattern gives one controlled, recorded, policy-enforced entry point — instead of tunnels landing anywhere in the control network." }
  ]},
{ title:"Speaking Machine", role:"Level 4 · Specialist", diff:4, badge:"Protocol Pro",
  desc:"Industrial protocols and the attack surface: Modbus, DNP3, OPC UA, engineering workstations.",
  questions:[
    { q:"What is the core security weakness of classic Modbus TCP?", opts:["No authentication — any device that can reach the port can read and write","It only works on Fridays","It encrypts too strongly to monitor","It requires cloud connectivity"], a:0, why:"Modbus was designed decades before security mattered. If you can reach a Modbus device, you can typically write coils and registers — the network must provide the protection the protocol lacks." },
    { q:"An attacker on the control network sends valid 'write' commands to a PLC using the normal protocol. Why is this hard to detect?", opts:["The traffic looks like legitimate commands — nothing is 'malformed'","PLCs automatically block all attackers","Writes are always encrypted","Firewalls read the attacker's mind"], a:0, why:"Living-off-the-land in OT: abuse of legitimate protocol functions. Detection needs context — who sends, from where, when, and does the command make process sense." },
    { q:"What does OPC UA offer that classic OPC (DCOM-based) did not?", opts:["Built-in authentication, encryption and signing","Faster floppy disk support","Guaranteed air-gapping","Free hardware upgrades"], a:0, why:"OPC UA was designed with security in the protocol: certificates, encrypted sessions, user authentication. Classic OPC relied on notoriously fragile DCOM settings." },
    { q:"Why is the engineering workstation (EWS) such a prized target?", opts:["It holds the tools and project files to legitimately reprogram controllers","It has the best graphics card","Operators store music on it","It is always offline"], a:0, why:"Own the EWS and you own the process logic: attackers download modified programs to PLCs with the vendor's own software — exactly how Stuxnet and Triton worked." },
    { q:"DNP3 is widely used in power and water utilities. What does 'DNP3 Secure Authentication' add?", opts:["Verification that critical commands come from an authorized source","Color graphics on RTUs","Automatic ransom payments","Unlimited bandwidth"], a:0, why:"SAv5 adds challenge-response authentication for critical operations, addressing plain DNP3's total trust in whoever is on the wire." },
    { q:"Why can an ordinary IT vulnerability scan be dangerous on a live control network?", opts:["Fragile embedded devices can hang or reboot when probed — stopping the process","Scans are boring","It voids the office coffee machine warranty","Scanning always requires internet"], a:0, why:"Legacy PLC/RTU network stacks were never built for unexpected packets. OT asset discovery prefers passive monitoring, with active queries used carefully in maintenance windows." },
    { q:"How could an attacker change a controller's behavior without touching its logic program?", opts:["Replace or tamper with the device firmware","Repaint the cabinet","Rename the HMI shortcuts","Update the plant's wall clock"], a:0, why:"Firmware attacks sit below the application logic and survive logic re-downloads. Integrity verification and controlled update processes are the defense." },
    { q:"Which detection approach fits OT networks best as a baseline?", opts:["Passive monitoring that learns normal traffic and flags new connections or commands","Weekly aggressive port scans of all PLCs","Installing antivirus directly on every 20-year-old controller","Blocking all traffic and hoping"], a:0, why:"OT traffic is highly repetitive, which makes anomaly detection powerful: a new master, a first-ever write, a config download at 3 AM all stand out — without touching fragile endpoints." }
  ]},
{ title:"Standards & Risk", role:"Level 5 · Professional", diff:5, badge:"Risk Professional",
  desc:"IEC 62443, IEC 61511, safety systems, and how professionals actually reason about cyber-physical risk.",
  questions:[
    { q:"What is IEC 62443?", opts:["The international standard series for industrial automation and control system security","A Wi-Fi certification","A forklift driving license","An accounting regulation"], a:0, why:"IEC 62443 covers programs, processes, system requirements and component requirements for securing industrial automation — the reference framework for OT security." },
    { q:"IEC 62443 defines Security Levels SL1–SL4. What does SL4 protect against?", opts:["Sophisticated attackers with extensive resources and motivation (state-level)","Rain damage","Accidental coffee spills only","Slow internet connections"], a:0, why:"The SLs scale with attacker capability: SL1 casual/accidental, SL2 simple intentional, SL3 sophisticated, SL4 sophisticated with extensive resources. Target SLs are chosen per zone based on risk." },
    { q:"What is a Safety Instrumented System (SIS)?", opts:["An independent layer that automatically forces the process to a safe state when limits are breached","The plant's CCTV system","A backup email server","Software for HR safety training"], a:0, why:"The SIS is the last automated line of defense — independent sensors, logic solver and final elements that trip the process before an unsafe condition becomes an accident." },
    { q:"A SIS is certified SIL 3. Does that mean it is resistant to cyber attack?", opts:["No — SIL measures reliability against random/accidental failures, not against intelligent attackers","Yes, SIL 3 includes hackers","Yes, if the cabinet is locked","SIL only applies to elevators"], a:0, why:"IEC 61511's SIL targets assume accidental failure modes. A deliberate attacker who reprograms the logic solver defeats the certification's assumptions — which is why 61511 now requires a security risk assessment for the SIS." },
    { q:"Why do many OT practitioners argue the IT 'CIA triad' fits OT poorly, proposing instead to assess Controllability, Observability and Operability (COO)?", opts:["Because what matters is whether operators can still control, see, and run the process — not primarily data secrecy","Because confidentiality is illegal in factories","Because OT has no data at all","Because triads must always be renamed"], a:0, why:"In the cyber-physical risk knowledge base, the risk-bearing object is the physical process: an attack matters when you lose the ability to control it, observe its true state, or keep operating. CIA describes information, COO describes the process. (CIA still applies to e.g. recipes and credentials.)" },
    { q:"Mature OT security design assumes the perimeter will eventually fail. What is the key 'second layer' question to ask?", opts:["\"If an attacker is already inside, is the process still controllable, observable and bounded?\"","\"Who do we blame first?\"","\"Can we buy a second firewall of the same brand?\"","\"Should we turn off all alarms to reduce noise?\""], a:0, why:"Prevention (layer 1) will someday fail. Resilient design preserves operational integrity under degraded trust — bounded authority, sanity-checked commands, independent protection — so compromise doesn't instantly become catastrophe." },
    { q:"There are few good statistics on OT attacks. How do professionals still quantify cyber-physical risk defensibly?", opts:["Estimate the probability their own defenses fail if attacked (PFA), and let consequence severity drive priority","Wait a few decades for enough incidents","Copy last year's IT risk register","Use gut feeling and a red/yellow/green sheet only"], a:0, why:"The cyber-physical risk approach: you can't derive frequencies from scarce attack data, but you can analyze your own barriers — the conditional probability that defenses fail given an attack — and weigh scenarios by the physical consequence ('risk pressure'), aligning with existing safety-risk criteria." },
    { q:"Where does NIST SP 800-82 fit in?", opts:["It's the (US) NIST guide to OT security — practical guidance complementing IEC 62443","It's a firewall product","It's an EU privacy law","It replaces the need for engineering"], a:0, why:"SP 800-82 ('Guide to Operational Technology Security') gives architecture, risk and control guidance for OT, widely used alongside IEC 62443 and sector regulations." }
  ]},
{ title:"Incident Command", role:"Level 6 · Expert", diff:6, badge:"OT Cyber Expert",
  desc:"Real attacks and expert judgment: Stuxnet, Triton, Ukraine — and the calls you'd have to make.",
  questions:[
    { q:"What made Stuxnet (discovered 2010) a landmark in OT security?", opts:["It crossed an air gap and made PLCs physically destroy equipment while operators saw normal readings","It was the first email virus","It only defaced websites","It attacked smartphones"], a:0, why:"Stuxnet spread via USB and vendor laptops, injected code into Siemens S7 PLCs, spun centrifuges out of tolerance and replayed normal data to the operators — proof that malware can cause targeted physical destruction while blinding the control room." },
    { q:"Why is Triton/TRISIS (2017, Saudi petrochemical plant) considered a red line even among ICS attacks?", opts:["It targeted the Safety Instrumented System itself — the layer that prevents explosions and loss of life","It stole cafeteria menus","It only affected printers","It was purely a phishing test"], a:0, why:"Triton reprogrammed Triconex safety controllers. Disabling the SIS while an attacker also holds the control system removes the last automated barrier between an upset and a catastrophe. The plant tripped safe — partly luck." },
    { q:"In the 2015 Ukraine power grid attack, how were the breakers actually opened?", opts:["Attackers used the operators' own SCADA sessions/tools after months of quiet preparation","A lightning strike","A software bug with no attacker","Solar flares"], a:0, why:"After spear-phishing and long reconnaissance, attackers took over operator workstations and clicked the breakers open themselves — then wiped systems and jammed the call center. Legitimate functionality, hostile hands." },
    { q:"What did Industroyer/CrashOverride (Ukraine, 2016) demonstrate that generic malware had not?", opts:["Malware speaking grid protocols (like IEC 60870-5-104/61850) natively to command substations directly","That antivirus stops all ICS attacks","That grids cannot be attacked twice","That only USB sticks matter"], a:0, why:"Industroyer contained protocol modules to issue breaker commands itself — no human at the HMI needed. Attack capability had been productized for the grid domain." },
    { q:"Scenario: Ransomware detonates in your company's IT network. OT is 'probably' clean. As OT lead, your soundest immediate posture is…", opts:["Pre-planned segmentation/isolation of OT, heightened monitoring, and keep operating only what you can verify as trustworthy","Do nothing — OT is someone else's problem","Immediately connect OT to IT to 'help' IT recover","Pay the ransom from petty cash"], a:0, why:"Colonial Pipeline's lesson: uncertainty about OT integrity is itself an operational risk. Prepared isolation playbooks, out-of-band monitoring and verified-trust operation beat both panic shutdown and blind continuation.", scenario:true },
    { q:"Scenario: During unexplained controller reboots, an engineer suggests bypassing the SIS 'to stop nuisance trips' while you investigate. Expert response?", opts:["Refuse — with possible compromise in play, weakening the independent protection layer is exactly the wrong move; investigate with the SIS armed","Agree — trips are annoying","Bypass it but only on night shift","Bypass it and also disable alarms for quiet"], a:0, why:"Triton logic: an attacker (or fault) plus a bypassed SIS equals no remaining barrier. Unexplained controller behavior is a potential safety-critical incident; the protection layer stays in, and any bypass must be visible, authorized and time-limited.", scenario:true },
    { q:"Scenario: A vendor states their new device 'complies with IEC 62443-4-2 and the CRA, so your risk is covered.' The professional reading is…", opts:["Compliance is an input, not proof — resilience depends on how the device is deployed, connected and operated in *your* installation","Compliance means nothing can ever go wrong","Certificates replace the need for architecture","Buy two, so you're doubly compliant"], a:0, why:"A certified product in a flat network with shared passwords is still a soft target. Product security must be translated through deployment context, automation function and operational consequence — installation-level risk is yours to assess.", scenario:true },
    { q:"Scenario: The board asks, 'Are we secure now?' after a big OT security investment. The most honest expert answer is…", opts:["\"We've reduced specific risks measurably; here's what an attacker would still have to defeat, what we'd detect, and how the process stays safe if they succeed\"","\"Yes, 100% secure, forever\"","\"No idea, but the auditors were happy\"","\"Security is done; we can disband the team\""], a:0, why:"Expert maturity is speaking in residual risk: which scenarios are now bounded, what detection and response cover, and how safety is preserved under compromise — not absolute promises no honest engineer can make.", scenario:true }
  ]}
];

// ---------------------------------------------------------------------------
// IEC 62443 module — product certification guidance for 62443-4-1 and 62443-4-2.
// 4-1 clauses (8 practices, 47 requirements) are presented per Maturity Level (ML 1-4).
// 4-2 requirements (7 FRs, CR + EDR/HDR/NDR/SAR sets) are presented per Security Level (SL-C 1-4).
// Summarized guidance for training — the normative text is the IEC standard itself.
// ---------------------------------------------------------------------------
window.OTRISE_IEC62443 = {
  kicker: "// IEC 62443 — PRODUCT CERTIFICATION GUIDANCE",
  title: "Certify the process. Certify the product.",
  intro: "Two parts of IEC 62443 carry product certification. IEC 62443-4-1 certifies how you develop — a secure development lifecycle of 47 requirements in 8 practices, graded by Maturity Level (ML 1–4). IEC 62443-4-2 certifies what you ship — the security capability of the component itself, graded by Capability Security Level (SL-C 1–4). They are deliberately coupled: no scheme certifies a component under 4-2 without a conformant 4-1 process behind it. ISASecure CSA requires the supplier's SDLA process certificate; IECEE CB certificates bundle a 4-1 audit the same way.",
  p41: {
    tab: "62443-4-1 · PROCESS — BY MATURITY LEVEL",
    heading: "IEC 62443-4-1 — Secure product development lifecycle",
    sub: "Eight practices, 47 requirements. The certificate states the Maturity Level your organization demonstrates — pick a level to see what every practice must look like at that ML, and what an auditor expects as evidence.",
    levels: [
      { name: "ML 1 — Initial", desc: "Product development is ad hoc and largely undocumented. Security work happens when a motivated individual makes it happen, so results vary from product to product and are hard to repeat.", cert: "Not certifiable — no scheme issues a 62443-4-1 certificate at ML 1. Use it only as a gap-assessment baseline." },
      { name: "ML 2 — Managed", desc: "Every practice is backed by a written, repeatable process. People are trained, roles are assigned, and the organization can show it is capable of executing the SDL — even if execution evidence across all products is still building up.", cert: "The certification entry point: ISASecure SDLA and IECEE CB certificates start at ML 2. For a first-time certification, ML 2 across all eight practices is the standard target." },
      { name: "ML 3 — Defined (Practiced)", desc: "The documented SDL is demonstrably practiced across the whole organization. Auditors see execution evidence for real products — records, review minutes, test artifacts — not just procedures on paper.", cert: "The credibility level experienced buyers ask about: it proves the process runs in practice, product after product, not only in the quality manual." },
      { name: "ML 4 — Improving", desc: "The SDL is measured. Metrics from all eight practices — defect escape rates, fix latency, test coverage — are collected, analyzed, and demonstrably drive continuous improvement of the process itself.", cert: "Rare in the market. An ML 4 certificate signals a mature, self-correcting product security organization — a differentiator, not a floor." }
    ],
    practices: [
      { id: "SM", clause: "Practice 1 · SM-1…SM-13", name: "Security management", desc: "The umbrella practice: SDL scoping, personnel expertise, protection of the development environment and toolchain, control of third-party components, and periodic review of the process itself.",
        ml: [
          "Some security activities exist, but they depend on individuals and nothing is formally written down or repeatable.",
          "A documented SDL exists with assigned roles, trained staff, a protected build environment, and a defined process for third-party and open-source components.",
          "The SDL demonstrably governs every product team — audits show consistent execution, including supplier control, toolchain integrity, and periodic process reviews with records.",
          "SDL performance is measured (e.g. defect escape rate, time-to-fix) and the metrics demonstrably drive changes to the process and its tooling." ] },
      { id: "SR", clause: "Practice 2 · SR-1…SR-5", name: "Specification of security requirements", desc: "Define the product's security context and intended environment, build and maintain a threat model, and derive traceable security requirements from it.",
        ml: [
          "Security requirements appear informally, if at all, and are rarely revisited after the project starts.",
          "A written procedure produces a security context, a threat model, and reviewed security requirements for the product.",
          "Every product has a maintained, current threat model with requirements traceable through design and test, re-reviewed on significant change.",
          "Threat-modeling effectiveness is measured (e.g. threats discovered late vs. early) and the method itself is tuned from the data." ] },
      { id: "SD", clause: "Practice 3 · SD-1…SD-4", name: "Secure by design", desc: "Defense in depth, attack-surface reduction, analysis of all trust boundaries and interfaces, and documented secure-design best practices.",
        ml: [
          "Design security relies on the instincts of whoever architects the product.",
          "A documented design process requires layered defenses, interface and trust-boundary analysis, and security design reviews.",
          "Security design reviews with defined criteria are evidenced for all products, and the best-practice catalog is applied organization-wide and kept current.",
          "Design-review findings feed metrics that measurably refine the secure-design guidance itself." ] },
      { id: "SI", clause: "Practice 4 · SI-1…SI-2", name: "Secure implementation", desc: "Secure coding standards for every language and platform in the product, enforced through code review and static analysis.",
        ml: [
          "Coding style and security checks vary by developer; findings are handled informally.",
          "Secure coding standards exist and static analysis / security code review are defined steps in the build process.",
          "Enforcement is evidenced across all teams and products; deviations are documented, risk-assessed and approved.",
          "Rule-violation and defect-density trends are tracked and drive updates to standards, training and tooling." ] },
      { id: "SVV", clause: "Practice 5 · SVV-1…SVV-5", name: "Security verification & validation", desc: "Test that security requirements are met and threats are mitigated: requirements testing, vulnerability scanning, fuzzing and penetration testing, with defined tester independence.",
        ml: [
          "Testing is essentially functional; security testing happens occasionally and unsystematically.",
          "A documented security test plan covers requirements testing, abuse cases, known-vulnerability scanning and fuzz/penetration testing, with independence rules.",
          "Security test evidence exists for each release of each product, executed with the required degree of tester independence.",
          "Escape analysis — issues found in the field versus in test — is used to tune test depth, tooling and coverage." ] },
      { id: "DM", clause: "Practice 6 · DM-1…DM-6", name: "Management of security-related issues", desc: "Receive security issues from internal and external reporters, triage and rate them, perform root-cause analysis, resolve them, and disclose responsibly.",
        ml: [
          "Vulnerabilities are handled ad hoc, when and if someone notices them.",
          "A documented intake exists — including a public reporting channel — with defined impact rating (e.g. CVSS), tracking and a disclosure process.",
          "Handling timelines, root-cause analysis and periodic issue review are evidenced across the whole product portfolio.",
          "Issue metrics such as time-to-fix and recurrence rate drive systemic corrections to development practice." ] },
      { id: "SUM", clause: "Practice 7 · SUM-1…SUM-5", name: "Security update management", desc: "Deliver security patches that are verified, documented and timely — and keep users informed, including about updates to third-party components underneath the product.",
        ml: [
          "Patches ship irregularly, with little verification or documentation.",
          "A documented update process delivers verified patches with release notes over an integrity-protected channel.",
          "Update delivery, compatibility testing and user notification are evidenced product-by-product, release after release.",
          "Patch latency is measured from disclosure to availability and demonstrably shortened over time." ] },
      { id: "SG", clause: "Practice 8 · SG-1…SG-7", name: "Security guidelines", desc: "Ship the documentation that lets an asset owner deploy the product securely: hardening guides, secure defaults, account handling, and secure decommissioning.",
        ml: [
          "Security documentation is thin, outdated, or missing entirely.",
          "A documented process produces hardening guidance, defense-in-depth expectations for the environment, and account/credential guidance for every product.",
          "Every shipped product has current, review-evidenced security guidelines, updated with the product itself.",
          "Support cases and field feedback are analyzed and measurably improve the guidance." ] }
    ]
  },
  p42: {
    tab: "62443-4-2 · COMPONENT — BY SECURITY LEVEL",
    heading: "IEC 62443-4-2 — Technical security requirements for components",
    sub: "Seven Foundational Requirements (FRs) containing Component Requirements (CRs) plus device-specific sets (EDR/HDR/NDR/SAR). The certificate states the Capability Security Level, SL-C 1–4: higher levels switch on Requirement Enhancements (REs). Pick a target SL-C to see what each FR demands.",
    levels: [
      { name: "SL-C 1", desc: "Protection against casual or coincidental violation — honest mistakes, curious employees, misconfiguration.", cert: "Base CRs only, no REs. Rarely worth certifying on its own today; treat it as the floor you pass through." },
      { name: "SL-C 2", desc: "Protection against intentional violation using simple means: low resources, generic (IT-grade) skills, low motivation.", cert: "The de-facto market minimum for new components — and the level most CRA- and NIS2-driven buyers will ask for as evidence. First REs switch on: unique identities, RBAC, signed updates, protected audit trails." },
      { name: "SL-C 3", desc: "Protection against intentional violation using sophisticated means: moderate resources, IACS-specific skills, moderate motivation.", cert: "Demands substantial RE coverage plus hardware-anchored security on devices (roots of trust, boot-chain authenticity, tamper detection, MFA). The first SL 3 component certificates were only issued in 2024 — expect real engineering effort." },
      { name: "SL-C 4", desc: "Protection against intentional violation using sophisticated means with extended resources: IACS-specific skills and high motivation — state-level adversaries.", cert: "Near-total RE coverage with the strongest assurances (hardware-protected credentials, non-repudiation for all users, tamper response). Very rare in the market; specify it only where the threat model truly justifies it." }
    ],
    frs: [
      { id: "FR 1", clause: "IAC · CR 1.1–1.14", name: "Identification & authentication control", desc: "Identify and authenticate every human user, software process and device before granting any access.",
        sl: [
          "Identify and authenticate human users; basic password capability and key/certificate handling where used.",
          "Adds unique accounts (no shared identities), identification and authentication of software processes and devices, and managed identifiers, authenticators and password strength.",
          "Adds multifactor authentication for human access and hardened protection of authenticators and credential stores.",
          "Strongest identity assurance on all interfaces, including hardware-protected credentials." ] },
      { id: "FR 2", clause: "UC · CR 2.1–2.13", name: "Use control", desc: "Enforce authorization on every interface, control wireless, mobile code and sessions, and record what happens in a defensible audit trail.",
        sl: [
          "Enforce assigned authorizations on all interfaces and generate audit records for security-relevant events.",
          "Adds per-role authorization mapping for users, processes and devices, mobile-code and session controls, audit-record protection, and control of physical diagnostic and test interfaces.",
          "Adds non-repudiation for human actions, supervisor-override discipline, and active monitoring of diagnostic interfaces.",
          "Extends non-repudiation to all users and processes with the strongest audit-chain assurance." ] },
      { id: "FR 3", clause: "SI · CR 3.1–3.9 + EDR/HDR/NDR 3.10–3.14", name: "System integrity", desc: "Protect the integrity of communications and sessions — and of the device itself, from firmware to boot chain. This is where the device-specific EDR/HDR/NDR requirements live.",
        sl: [
          "Integrity-protect communications, validate inputs, produce deterministic output, verify security functions, and report malicious-code protection status.",
          "Adds cryptographic session integrity, authenticity of software updates before installation, and the device-specific set: security update support and boot-process integrity.",
          "Adds hardware roots of trust (supplier- and asset-owner-provisioned), authenticity of the full boot chain, and physical tamper resistance and detection.",
          "Adds tamper response beyond detection and the strongest integrity assurance across all functions." ] },
      { id: "FR 4", clause: "DC · CR 4.1–4.3", name: "Data confidentiality", desc: "Protect designated sensitive information — credentials, keys, recipes, configuration — at rest and in transit, using vetted cryptography.",
        sl: [
          "Confidentiality of sensitive data in transit and at rest, using standard, vetted cryptographic mechanisms.",
          "Adds purging of sensitive data remnants — information must not survive decommissioning or resource release in readable form.",
          "Adds verification of erasure and hardened cryptographic key storage.",
          "As SL 3, with hardware-backed key protection expected in practice — FR 4 differentiates early; assurance depth carries the rest." ] },
      { id: "FR 5", clause: "RDF · CR 5.1 + NDR 5.2–5.3", name: "Restricted data flow", desc: "Support the zones-and-conduits architecture: components must be segmentable, and network devices must enforce the boundary.",
        sl: [
          "Support network segmentation — interfaces can be separated and the component does not silently bridge networks.",
          "Network devices enforce zone-boundary policy and can deny traffic by default.",
          "Adds island mode and fail-close behavior at the boundary when under attack.",
          "Same mechanisms at the strongest assurance level." ] },
      { id: "FR 6", clause: "TRE · CR 6.1–6.2", name: "Timely response to events", desc: "Make evidence available and support the plant's continuous monitoring — a component that cannot be monitored cannot be defended.",
        sl: [
          "Audit logs are accessible on demand for incident handling.",
          "Adds programmatic, machine-readable access to audit logs and support for continuous monitoring using commonly accepted security industry practices.",
          "Adds support for near-real-time indication of potential breaches.",
          "Same capabilities at the strongest assurance level." ] },
      { id: "FR 7", clause: "RA · CR 7.1–7.8", name: "Resource availability", desc: "Stay available under attack: degrade gracefully, never become the reason the process stops, and support backup and recovery.",
        sl: [
          "Operate at degraded capacity during DoS conditions, manage resource exhaustion, support backup and restore, and apply least functionality.",
          "Adds load management, backup integrity verification, recovery to a known secure state, and reporting of the component's security settings inventory.",
          "Adds limiting DoS effects so an attacked component cannot drag down other systems or zones.",
          "Same mechanisms at the strongest assurance level." ] }
    ],
    components: [
      { id: "SAR", name: "Software application", note: "Application running on a host you don't control. Certified per application; mobile-code and integrity requirements apply in SAR form." },
      { id: "EDR", name: "Embedded device", note: "Special-purpose device running firmware — PLC, RTU, safety controller. Carries the heaviest device set: EDR 3.10–3.14 (updates, tamper, roots of trust, boot integrity)." },
      { id: "HDR", name: "Host device", note: "General-purpose OS platform hosting applications — HMI server, historian, engineering workstation image. HDR 3.10–3.14 variants apply." },
      { id: "NDR", name: "Network device", note: "Switch, router, firewall, gateway. Adds NDR 5.2–5.3: zone-boundary enforcement and restriction of person-to-person communications." }
    ]
  },
  cert: {
    heading: "THE CERTIFICATION PATH — 4-1 AND 4-2 TOGETHER",
    steps: [
      "Fix the target: pick the component type (SAR / EDR / HDR / NDR) and a target SL-C from the markets you sell into. SL-C 2 is today's practical floor; SL-C 3 where the component sits at an exposed or safety-relevant position.",
      "Get the process certified first: 4-2 presupposes a conformant 4-1 SDL. Aim for ML 2 as the certification entry point, ML 3 to be credible — ISASecure CSA formally requires the supplier's SDLA certificate.",
      "Gap-assess the product against every applicable CR and RE for the target SL-C — including the device-specific EDR/HDR/NDR/SAR sets, which is where embedded products usually find their hardest gaps (roots of trust, boot integrity, tamper).",
      "Close the gaps in design, then build the evidence package: security context and threat model (SR), test reports including robustness/fuzz testing (SVV), defect and update records (DM/SUM), and the hardening guide (SG).",
      "Certify with an accredited scheme: ISASecure CSA (components) or ICSA (IIoT components), or an IECEE CB certificate issued via a certification body such as exida, TÜV SÜD, TÜV Rheinland, UL Solutions or SGS.",
      "Keep it alive: certificates reference exact versions — surveillance audits, patch obligations under SUM, and re-assessment on significant change are part of the deal, not an afterthought."
    ],
    note: "Why now: certified 62443-4-1/4-2 conformance is the strongest available evidence toward the EU Cyber Resilience Act's essential requirements (reporting obligations start 11 Sep 2026) and feeds NIS2 supply-chain expectations. This page is summarized training guidance — the normative text is the IEC standard itself."
  }
};
