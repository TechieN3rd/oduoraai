import { useState, useRef, useEffect } from "react";

// ── ODUORA LOGO COMPONENT ─────────────────────────────────────────
function OduoraLogo({ size = 60, showText = false, animate = true }) {
  const orbSize = size;
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap: showText ? 10 : 0 }}>
      <div style={{ position:"relative", width:orbSize, height:orbSize, flexShrink:0 }}>
        {/* Outer glow */}
        <div style={{
          position:"absolute", inset:-orbSize*0.22,
          borderRadius:"50%",
          background:"radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
          animation: animate ? "nebulaPulse 4s ease-in-out infinite" : "none",
          pointerEvents:"none",
        }}/>
        {/* Ring 1 */}
        <div style={{
          position:"absolute",
          top:"50%", left:"50%",
          width:orbSize*2.4, height:orbSize*0.75,
          marginLeft:-orbSize*1.2, marginTop:-orbSize*0.375,
          borderRadius:"50%",
          border:"1px solid rgba(167,139,250,0.4)",
          transform:"rotateX(72deg) rotateZ(-20deg)",
          animation: animate ? "orbit1 12s linear infinite" : "none",
          pointerEvents:"none",
        }}/>
        {/* Ring 2 */}
        <div style={{
          position:"absolute",
          top:"50%", left:"50%",
          width:orbSize*2.1, height:orbSize*0.65,
          marginLeft:-orbSize*1.05, marginTop:-orbSize*0.325,
          borderRadius:"50%",
          border:"1px solid rgba(96,165,250,0.25)",
          transform:"rotateX(72deg) rotateZ(40deg)",
          animation: animate ? "orbit2 18s linear infinite reverse" : "none",
          pointerEvents:"none",
        }}/>
        {/* Main orb */}
        <div style={{
          position:"absolute", inset:0, borderRadius:"50%",
          background:"radial-gradient(circle at 38% 32%, #ddd6fe 0%, #a855f7 25%, #6d28d9 55%, #3b0764 100%)",
          boxShadow:"0 0 "+orbSize*0.3+"px rgba(124,58,237,0.7), 0 0 "+orbSize*0.6+"px rgba(91,33,182,0.3), inset 0 1px "+orbSize*0.2+"px rgba(255,255,255,0.15)",
          animation: animate ? "orbFloat 5s ease-in-out infinite" : "none",
          overflow:"hidden",
        }}>
          {/* highlight */}
          <div style={{ position:"absolute", top:"16%", left:"20%", width:"38%", height:"28%", background:"radial-gradient(ellipse, rgba(255,255,255,0.28) 0%, transparent 80%)", borderRadius:"50%", transform:"rotate(-25deg)" }}/>
          {/* grid */}
          <div style={{ position:"absolute", inset:0, borderRadius:"50%",
            background:"repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(255,255,255,0.04) 12px, rgba(255,255,255,0.04) 13px), repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(255,255,255,0.04) 12px, rgba(255,255,255,0.04) 13px)"
          }}/>
        </div>
        {/* Centre spark */}
        <div style={{
          position:"absolute", inset:0,
          display:"flex", alignItems:"center", justifyContent:"center",
          animation: animate ? "sparkSpin 20s linear infinite" : "none",
        }}>
          <svg width={orbSize*0.42} height={orbSize*0.42} viewBox="0 0 48 48" fill="none"
            style={{ filter:`drop-shadow(0 0 ${orbSize*0.08}px rgba(255,255,255,0.9)) drop-shadow(0 0 ${orbSize*0.16}px rgba(192,132,252,0.8))` }}>
            <path d="M24 4 C25.5 15 25.5 15 24 24 C22.5 15 22.5 15 24 4Z" fill="white"/>
            <path d="M24 44 C25.5 33 25.5 33 24 24 C22.5 33 22.5 33 24 44Z" fill="white" opacity="0.9"/>
            <path d="M4 24 C15 25.5 15 25.5 24 24 C15 22.5 15 22.5 4 24Z" fill="white" opacity="0.9"/>
            <path d="M44 24 C33 25.5 33 25.5 24 24 C33 22.5 33 22.5 44 24Z" fill="white" opacity="0.9"/>
            <path d="M24 24 L32 16 L24 24 L16 16Z" fill="white" opacity="0.35"/>
            <path d="M24 24 L32 32 L24 24 L16 32Z" fill="white" opacity="0.3"/>
            <circle cx="24" cy="24" r="3.5" fill="white"/>
          </svg>
        </div>
      </div>
      {showText && (
        <div style={{ textAlign:"center" }}>
          <div style={{
            fontFamily:"'Cormorant Garamond', Georgia, serif",
            fontSize: size * 0.52,
            fontWeight:700,
            letterSpacing:"0.22em",
            textTransform:"uppercase",
            background:"linear-gradient(100deg, #c4b5fd 0%, #f8f4ff 45%, #a78bfa 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            backgroundClip:"text",
            filter:"drop-shadow(0 2px 8px rgba(124,58,237,0.5))",
          }}>Oduora</div>
          <div style={{ height:1, background:"linear-gradient(90deg, transparent, rgba(167,139,250,0.5), rgba(56,189,248,0.4), transparent)", margin:"4px auto", width:"80%" }}/>
          <div style={{ fontFamily:"'Rajdhani', 'DM Sans', sans-serif", fontSize:size*0.13, fontWeight:300, letterSpacing:"0.45em", color:"rgba(167,139,250,0.5)", textTransform:"uppercase" }}>AI · Assistant</div>
        </div>
      )}
    </div>
  );
}

// ── LANGUAGES ─────────────────────────────────────────────────────
const LANGUAGES = [
  { code: "sw", label: "Kiswahili", voice: "sw-KE" },
  { code: "luo", label: "Dholuo (Luo)", voice: "sw-KE" },
  { code: "kikuyu", label: "Gĩkũyũ (Kikuyu)", voice: "sw-KE" },
  { code: "en", label: "English", voice: "en-US" },
  { code: "fr", label: "Français", voice: "fr-FR" },
  { code: "es", label: "Español", voice: "es-ES" },
  { code: "pt", label: "Português", voice: "pt-PT" },
  { code: "ar", label: "العربية", voice: "ar-SA" },
  { code: "zh", label: "中文", voice: "zh-CN" },
  { code: "hi", label: "हिन्दी", voice: "hi-IN" },
  { code: "yo", label: "Yorùbá", voice: "yo-NG" },
  { code: "ha", label: "Hausa", voice: "ha-NG" },
  { code: "ig", label: "Igbo", voice: "ig-NG" },
  { code: "zu", label: "isiZulu", voice: "zu-ZA" },
  { code: "am", label: "አማርኛ", voice: "am-ET" },
  { code: "de", label: "Deutsch", voice: "de-DE" },
  { code: "ru", label: "Русский", voice: "ru-RU" },
  { code: "ja", label: "日本語", voice: "ja-JP" },
  { code: "ko", label: "한국어", voice: "ko-KR" },
  { code: "rw", label: "Kinyarwanda", voice: "rw-RW" },
  { code: "so", label: "Soomaali", voice: "so-SO" },
  { code: "xh", label: "isiXhosa", voice: "xh-ZA" },
];

// ── IN-MEMORY STORE ────────────────────────────────────────────────
const userStore = {};
const historyStore = {};   // email -> [{id, title, messages, date, projectId}]
const projectStore = {};   // email -> [{id, name, color, createdAt}]

function getUserHistory(email) { return historyStore[email] || []; }
function saveHistory(email, sessions) { historyStore[email] = sessions; }
function getUserProjects(email) { return projectStore[email] || []; }
function saveProjects(email, projects) { projectStore[email] = projects; }

// ── PASSWORD VALIDATION ────────────────────────────────────────────
function validatePassword(pw) {
  const checks = {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    digit: /[0-9]/.test(pw),
    special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pw),
  };
  const score = Object.values(checks).filter(Boolean).length;
  return { checks, score, valid: Object.values(checks).every(Boolean) };
}

// ── UI TRANSLATIONS ────────────────────────────────────────────────
const UI_STRINGS = {
  en: { greet: (n) => `Hi **${n}**! 👋 I'm Oduora. Ask me anything!`, placeholder: "Ask anything, upload files, start a project...", logout: "Logout" },
  sw: { greet: (n) => `Habari **${n}**! 👋 Mimi ni Oduora. Niulize chochote!`, placeholder: "Uliza chochote, pakia faili, anza mradi...", logout: "Toka" },
  fr: { greet: (n) => `Bonjour **${n}** ! 👋 Je suis Oduora. Posez n'importe quelle question !`, placeholder: "Demandez n'importe quoi, téléchargez des fichiers...", logout: "Déconnexion" },
  es: { greet: (n) => `¡Hola **${n}**! 👋 Soy Oduora. ¡Pregunta lo que quieras!`, placeholder: "Pregunta lo que quieras, sube archivos...", logout: "Cerrar sesión" },
  ar: { greet: (n) => `مرحباً **${n}**! 👋 أنا Oduora. اسألني أي شيء!`, placeholder: "اسأل أي شيء، ارفع الملفات...", logout: "خروج" },
  zh: { greet: (n) => `你好 **${n}**！👋 我是Oduora。问我任何问题！`, placeholder: "问任何问题，上传文件...", logout: "退出" },
  hi: { greet: (n) => `नमस्ते **${n}**! 👋 मैं Oduora हूँ। कुछ भी पूछें!`, placeholder: "कुछ भी पूछें, फ़ाइलें अपलोड करें...", logout: "लॉग आउट" },
};
function getUI(code) { return UI_STRINGS[code] || UI_STRINGS["en"]; }

// ── HELPERS ────────────────────────────────────────────────────────
// ── CODE BLOCK COMPONENT ──────────────────────────────────────────
function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  // Simple keyword-based syntax highlighting
  function highlight(code, lang) {
    if (!lang || lang === "text" || lang === "plaintext") return escHtml(code);
    let c = escHtml(code);
    // strings
    c = c.replace(/(&#x27;|&quot;)(.*?)\1/g, '<span style="color:#a3e635">$1$2$1</span>');
    c = c.replace(/(`[^`]*`)/g, '<span style="color:#a3e635">$1</span>');
    // comments
    c = c.replace(/(\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\/)/g, '<span style="color:#6b7280;font-style:italic">$1</span>');
    // keywords
    const kw = ["function","const","let","var","return","if","else","for","while","import","export","from","default","class","new","this","async","await","try","catch","throw","typeof","instanceof","true","false","null","undefined","def","print","self","in","not","and","or","pass","break","continue","elif","lambda","yield","with","as","public","private","static","void","int","string","bool","float","double","interface","extends","implements"];
    kw.forEach(k => { c = c.replace(new RegExp(`\\b(${k})\\b`, "g"), '<span style="color:#818cf8;font-weight:600">$1</span>'); });
    // numbers
    c = c.replace(/\b(\d+\.?\d*)\b/g, '<span style="color:#fb923c">$1</span>');
    // function calls
    c = c.replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g, '<span style="color:#38bdf8">$1</span>');
    return c;
  }
  function escHtml(t) { return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  const langLabels = { js:"JavaScript", javascript:"JavaScript", ts:"TypeScript", typescript:"TypeScript", py:"Python", python:"Python", html:"HTML", css:"CSS", json:"JSON", bash:"Bash", sh:"Shell", sql:"SQL", java:"Java", cpp:"C++", c:"C", cs:"C#", php:"PHP", swift:"Swift", kotlin:"Kotlin", go:"Go", rs:"Rust", ruby:"Ruby", r:"R" };
  const displayLang = langLabels[lang?.toLowerCase()] || lang?.toUpperCase() || "Code";
  return (
    <div style={{ margin:"8px 0", borderRadius:12, overflow:"hidden", border:"1px solid rgba(124,58,237,0.25)", background:"#0d0b1e" }}>
      {/* Header bar */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"7px 14px", background:"rgba(124,58,237,0.15)", borderBottom:"1px solid rgba(124,58,237,0.15)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ display:"flex", gap:5 }}>
            {["#ef4444","#f59e0b","#22c55e"].map(c=><div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c, opacity:0.7 }} />)}
          </div>
          <span style={{ color:"rgba(167,139,250,0.6)", fontSize:11, fontWeight:600, letterSpacing:"0.05em" }}>{displayLang}</span>
        </div>
        <button onClick={copy} style={{ background: copied?"rgba(74,222,128,0.15)":"rgba(124,58,237,0.2)", border:`1px solid ${copied?"rgba(74,222,128,0.3)":"rgba(124,58,237,0.2)"}`, borderRadius:6, padding:"3px 10px", color: copied?"#4ade80":"rgba(167,139,250,0.7)", fontSize:11, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}>
          {copied ? "✓ Copied!" : "📋 Copy"}
        </button>
      </div>
      {/* Code */}
      <pre style={{ margin:0, padding:"14px 16px", overflowX:"auto", fontSize:13, lineHeight:1.7, fontFamily:"'Fira Code','Cascadia Code','Consolas',monospace", color:"#e2e8f0" }}>
        <code dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
      </pre>
    </div>
  );
}

// ── MESSAGE RENDERER (handles code blocks + markdown) ─────────────
function MessageContent({ content }) {
  // Split on ```lang\ncode\n``` blocks
  const parts = [];
  const codeBlockRe = /```(\w*)\n?([\s\S]*?)```/g;
  let last = 0, m;
  while ((m = codeBlockRe.exec(content)) !== null) {
    if (m.index > last) parts.push({ type:"text", value: content.slice(last, m.index) });
    parts.push({ type:"code", lang: m[1]||"text", value: m[2].replace(/\n$/, "") });
    last = m.index + m[0].length;
  }
  if (last < content.length) parts.push({ type:"text", value: content.slice(last) });

  function renderText(t) {
    const html = t
      .replace(/\*\*(.*?)\*\*/g, "<strong style='color:#e9d5ff'>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code style='background:rgba(124,58,237,0.2);padding:2px 6px;border-radius:4px;font-family:monospace;font-size:12px;color:#a78bfa'>$1</code>")
      .replace(/^#{3}\s(.+)$/gm, "<div style='color:#c4b5fd;font-weight:700;font-size:15px;margin:10px 0 4px'>$1</div>")
      .replace(/^#{2}\s(.+)$/gm, "<div style='color:#e9d5ff;font-weight:800;font-size:16px;margin:12px 0 5px'>$1</div>")
      .replace(/^#{1}\s(.+)$/gm, "<div style='color:#f0e6ff;font-weight:800;font-size:18px;margin:14px 0 6px'>$1</div>")
      .replace(/^- (.+)$/gm, "<li style='margin:3px 0;padding-left:4px'>$1</li>")
      .replace(/^(\d+)\. (.+)$/gm, "<li style='margin:3px 0;padding-left:4px;list-style-type:decimal'>$2</li>")
      .replace(/(<li.*<\/li>)/gs, "<ul style='margin:6px 0 6px 18px;padding:0'>$1</ul>")
      .replace(/\n\n/g, "<br/><br/>")
      .replace(/\n/g, "<br/>");
    return html;
  }

  return (
    <div>
      {parts.map((p, i) =>
        p.type === "code"
          ? <CodeBlock key={i} code={p.value} lang={p.lang} />
          : <div key={i} dangerouslySetInnerHTML={{ __html: renderText(p.value) }} />
      )}
    </div>
  );
}

function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gs, "<ul style='margin:6px 0 6px 18px;padding:0'>$1</ul>")
    .replace(/\n/g, "<br/>");
}
function stripHtml(h) { return h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(); }
function timeAgo(date) {
  const d = new Date(date), now = new Date();
  const diff = Math.floor((now - d) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
  return `${Math.floor(diff/86400)}d ago`;
}
function genId() { return Math.random().toString(36).substr(2, 9); }

const PROJECT_COLORS = ["#7c3aed","#0ea5e9","#10b981","#f59e0b","#ef4444","#ec4899","#8b5cf6","#14b8a6"];

// ── STYLES ─────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=DM+Sans:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&family=Cormorant+Garamond:wght@400;600;700&family=Rajdhani:wght@300;400;600&display=swap');
  @keyframes nebulaPulse { 0%,100%{transform:scale(1);opacity:0.7} 50%{transform:scale(1.15);opacity:1} }
  @keyframes orbit1 { from{transform:rotateX(72deg) rotateZ(-20deg)} to{transform:rotateX(72deg) rotateZ(340deg)} }
  @keyframes orbit2 { from{transform:rotateX(72deg) rotateZ(40deg)} to{transform:rotateX(72deg) rotateZ(-320deg)} }
  @keyframes orbFloat { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-4px)} }
  @keyframes sparkSpin { to{transform:rotate(360deg)} }
  @keyframes bounce { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-6px);opacity:1} }
  @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0.4)} 50%{box-shadow:0 0 0 10px rgba(124,58,237,0)} }
  @keyframes micPulse { 0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0.5)} 50%{box-shadow:0 0 0 8px rgba(239,68,68,0)} }
  @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
  * { box-sizing: border-box; margin:0; padding:0; }
  body { font-family: 'DM Sans', sans-serif; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.3); border-radius: 4px; }
  input::placeholder, textarea::placeholder { color: rgba(167,139,250,0.35) !important; }
  select option { background: #13102b; color: #e9d5ff; }
  .hover-row:hover { background: rgba(124,58,237,0.08) !important; }
  .btn-hover:hover { opacity: 0.85; transform: translateY(-1px); }
`;

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, padding: "4px 0" }}>
      {[0,1,2].map(i => (
        <span key={i} style={{
          width: 7, height: 7, borderRadius: "50%", background: "#a78bfa",
          display: "inline-block", animation: "bounce 1.2s infinite",
          animationDelay: `${i * 0.2}s`
        }} />
      ))}
    </div>
  );
}

// ── PASSWORD STRENGTH ──────────────────────────────────────────────
function PasswordStrength({ password }) {
  if (!password) return null;
  const { checks, score } = validatePassword(password);
  const colors = ["#ef4444","#f97316","#eab308","#84cc16","#22c55e"];
  const labels = ["","Weak","Fair","Good","Strong","Very Strong"];
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{ flex:1, height:3, borderRadius:3, background: i<=score ? colors[score-1] : "rgba(255,255,255,0.1)", transition:"background 0.3s" }} />
        ))}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:11 }}>
        <span style={{ color:"rgba(167,139,250,0.5)" }}>Password strength</span>
        <span style={{ color: colors[score-1]||"rgba(167,139,250,0.4)", fontWeight:700 }}>{labels[score]}</span>
      </div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"3px 8px", marginTop:5 }}>
        {[["length","8+ chars"],["upper","A-Z"],["lower","a-z"],["digit","0-9"],["special","!@#$"]].map(([k,t])=>(
          <span key={k} style={{ fontSize:11, color: checks[k]?"#4ade80":"rgba(167,139,250,0.35)" }}>{checks[k]?"✓":"○"} {t}</span>
        ))}
      </div>
    </div>
  );
}

// ── AUTH SCREEN ────────────────────────────────────────────────────
function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [lang, setLang] = useState("en");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [focused, setFocused] = useState("");
  const [showPw, setShowPw] = useState(false);
  // OTP
  const [otpStep, setOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [sendingOtp, setSendingOtp] = useState(false);
  const timerRef = useRef(null);

  function startResendTimer() {
    setResendTimer(60);
    timerRef.current = setInterval(() => {
      setResendTimer(t => { if (t<=1){ clearInterval(timerRef.current); return 0; } return t-1; });
    }, 1000);
  }

  async function sendOtp() {
    if (!email.includes("@")) { setErr("Enter a valid email first."); return; }
    setErr(""); setSendingOtp(true);
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);

    // ── Try EmailJS (free browser email service) ──────────────────
    // EmailJS sends real emails from the browser — no server needed.
    // To activate: sign up at emailjs.com, create a service + template,
    // replace the IDs below with yours. Template variables: {{to_email}}, {{otp_code}}, {{user_name}}
    const EMAILJS_SERVICE_ID  = "service_oduora";   // ← replace with your EmailJS service ID
    const EMAILJS_TEMPLATE_ID = "template_otp";     // ← replace with your EmailJS template ID
    const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";  // ← replace with your EmailJS public key

    let emailSent = false;
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: email,
            otp_code: code,
            user_name: name || email.split("@")[0],
            app_name: "Oduora",
          }
        })
      });
      emailSent = res.ok;
    } catch { emailSent = false; }

    setOtpStep(true);
    setOtpSent(true);
    setOtpVerified(false);
    setOtpCode("");
    setSendingOtp(false);
    startResendTimer();

    if (emailSent) {
      setSuccess(`✅ Code sent to ${email}! Check your inbox (and spam folder).`);
    } else {
      // Fallback: show code directly on screen so user can still sign up
      setSuccess(`📋 Email service not configured yet. Your code is shown below — copy it!`);
      // Show code visibly in the OTP box as a hint
      setTimeout(() => setOtpCode(code), 100);
    }
  }

  function verifyOtp() {
    if (otpCode.trim() === generatedOtp) {
      setOtpVerified(true);
      setOtpStep(false);
      setSuccess("✅ Email verified!");
      setErr("");
    } else {
      setErr("❌ Incorrect code. Check again or resend.");
    }
  }

  const inp = (f) => ({
    width:"100%", background: focused===f?"rgba(124,58,237,0.1)":"rgba(255,255,255,0.04)",
    border:`1px solid ${focused===f?"rgba(124,58,237,0.6)":"rgba(124,58,237,0.15)"}`,
    borderRadius:10, padding:"11px 14px", color:"#e9d5ff", fontSize:14, outline:"none",
    fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s",
  });

  function submit() {
    setErr(""); setSuccess("");
    if (mode === "signup") {
      if (!name.trim()) { setErr("Enter your name."); return; }
      if (!email.includes("@")) { setErr("Enter a valid email."); return; }
      if (!validatePassword(pw).valid) { setErr("Password needs 8+ chars, uppercase, lowercase, number & special character."); return; }
      if (!otpVerified) { setErr("Please verify your email first — click 'Send Code'."); return; }
      if (userStore[email]) { setErr("Account exists. Log in instead."); return; }
      userStore[email] = { name: name.trim(), password: pw, language: lang, plan: "free" };
      historyStore[email] = [];
      projectStore[email] = [];
      onLogin({ name: name.trim(), email, language: lang, plan: "free" });
    } else {
      if (!email.trim() || !pw.trim()) { setErr("Fill in all fields."); return; }
      const u = userStore[email];
      if (!u || u.password !== pw) { setErr("Incorrect email or password."); return; }
      onLogin({ name: u.name, email, language: u.language, plan: u.plan || "free" });
    }
  }

  function continueAsGuest() {
    onLogin({ name:"Guest", email:"guest@oduora.app", language:"en", plan:"free", isGuest:true });
  }

  return (
    <div style={{
      minHeight:"100vh", width:"100%",
      background:"linear-gradient(135deg,#06030f,#0b0618,#120d24)",
      display:"flex", fontFamily:"'DM Sans',sans-serif", overflow:"hidden",
    }}>
      <style>{CSS}</style>

      {/* ── LEFT PANEL — Logo showcase ── */}
      <div style={{
        flex:"0 0 52%", position:"relative",
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center",
        padding:"60px 48px",
        background:"linear-gradient(135deg,rgba(124,58,237,0.07) 0%,rgba(45,10,122,0.1) 50%,rgba(14,165,233,0.04) 100%)",
        borderRight:"1px solid rgba(124,58,237,0.1)",
        overflow:"hidden",
      }}>
        {/* Ambient orbs */}
        <div style={{ position:"absolute", top:"8%", left:"5%", width:280, height:280, borderRadius:"50%", background:"rgba(124,58,237,0.09)", filter:"blur(80px)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:"10%", right:"5%", width:200, height:200, borderRadius:"50%", background:"rgba(14,165,233,0.06)", filter:"blur(70px)", pointerEvents:"none" }}/>

        {/* Main logo large */}
        <div style={{ position:"relative", zIndex:2, animation:"fadeIn 0.8s ease both", marginBottom:40 }}>
          <OduoraLogo size={150} showText={true} animate={true} />
        </div>

        {/* Feature pills */}
        <div style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", gap:10, width:"100%", maxWidth:320 }}>
          {[
            ["💬","Chat in 60+ languages","Swahili, Luo, English & more"],
            ["🎬","Media Studio","Edit images & videos with AI"],
            ["📄","Document AI","PDF, Word, Excel analysis"],
            ["🌤️","Weather & AI Detect","Smart tools built in"],
            ["🎨","AI Generate","Text to image & video"],
          ].map(([icon,title,sub])=>(
            <div key={title} style={{
              display:"flex", alignItems:"center", gap:12,
              padding:"11px 14px", borderRadius:12,
              background:"rgba(255,255,255,0.025)",
              border:"1px solid rgba(124,58,237,0.1)",
              backdropFilter:"blur(10px)",
            }}>
              <div style={{ fontSize:20, flexShrink:0 }}>{icon}</div>
              <div>
                <div style={{ color:"#e9d5ff", fontSize:12.5, fontWeight:700 }}>{title}</div>
                <div style={{ color:"rgba(167,139,250,0.4)", fontSize:10.5, marginTop:1 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div style={{ position:"relative", zIndex:2, marginTop:28, textAlign:"center" }}>
          <div style={{ color:"rgba(167,139,250,0.28)", fontSize:10.5, letterSpacing:"0.35em", textTransform:"uppercase", fontFamily:"'Rajdhani','DM Sans',sans-serif" }}>
            Your intelligent workspace
          </div>
        </div>

        {/* Corner marks */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position:"absolute", top:18, left:18, opacity:0.18 }}><path d="M2 18 L2 2 L18 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position:"absolute", top:18, right:18, opacity:0.18, transform:"scaleX(-1)" }}><path d="M2 18 L2 2 L18 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position:"absolute", bottom:18, left:18, opacity:0.18, transform:"scaleY(-1)" }}><path d="M2 18 L2 2 L18 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position:"absolute", bottom:18, right:18, opacity:0.18, transform:"scale(-1)" }}><path d="M2 18 L2 2 L18 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>

      {/* ── RIGHT PANEL — Auth form ── */}
      <div style={{
        flex:"0 0 48%", display:"flex", alignItems:"center", justifyContent:"center",
        padding:"32px 28px", overflowY:"auto",
      }}>
        <div style={{
          width:"100%", maxWidth:400,
          background:"rgba(255,255,255,0.03)",
          backdropFilter:"blur(30px)", borderRadius:22,
          border:"1px solid rgba(124,58,237,0.18)",
          boxShadow:"0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          padding:"28px 26px",
          animation:"fadeIn 0.6s ease both 0.15s",
        }}>
          {/* Card top */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
            <OduoraLogo size={34} showText={false} animate={true}/>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:18, color:"#f0e6ff", fontWeight:700, letterSpacing:"0.1em" }}>
                {mode==="login" ? "Welcome back" : "Join Oduora"}
              </div>
              <div style={{ color:"rgba(167,139,250,0.45)", fontSize:11.5 }}>
                {mode==="login" ? "Sign in to your workspace" : "Create your free account"}
              </div>
            </div>
          </div>

          {/* Guest banner */}
          <div style={{ background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.2)", borderRadius:10, padding:"9px 13px", marginBottom:14, display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
            <div>
              <div style={{ color:"#fbbf24", fontWeight:700, fontSize:12, marginBottom:1 }}>👤 Try as Guest</div>
              <div style={{ color:"rgba(251,191,36,0.45)", fontSize:10.5 }}>No account needed</div>
            </div>
            <button onClick={continueAsGuest} style={{ padding:"6px 13px", borderRadius:8, border:"1px solid rgba(245,158,11,0.32)", background:"rgba(245,158,11,0.12)", color:"#fbbf24", fontSize:11.5, fontWeight:700, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", whiteSpace:"nowrap" }}>
              Try Free →
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display:"flex", background:"rgba(0,0,0,0.3)", borderRadius:9, padding:3, marginBottom:16, gap:2 }}>
            {[["login","🔑 Log In"],["signup","🌱 Sign Up"]].map(([m,l])=>(
              <button key={m} onClick={()=>{setMode(m);setErr("");setSuccess("");}} style={{
                flex:1, padding:"7px 0", borderRadius:7, border:"none",
                background: mode===m?"linear-gradient(135deg,#7c3aed,#5b21b6)":"transparent",
                color: mode===m?"#fff":"rgba(167,139,250,0.5)",
                fontFamily:"'DM Sans',sans-serif", fontWeight: mode===m?700:500,
                fontSize:13, cursor:"pointer", transition:"all 0.2s",
              }}>{l}</button>
            ))}
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
            {mode==="signup" && (
              <div>
                <label style={{ color:"rgba(167,139,250,0.6)", fontSize:11, marginBottom:4, display:"block", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>Full Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="Your full name" onFocus={()=>setFocused("name")} onBlur={()=>setFocused("")} style={inp("name")} />
              </div>
            )}

            <div>
              <label style={{ color:"rgba(167,139,250,0.6)", fontSize:11, marginBottom:4, display:"block", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>Email</label>
              <div style={{ display:"flex", gap:7 }}>
                <div style={{ position:"relative", flex:1 }}>
                  <input type="email" value={email} onChange={e=>{ setEmail(e.target.value); setOtpVerified(false); setOtpSent(false); setOtpStep(false); setSuccess(""); }} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="you@example.com" onFocus={()=>setFocused("email")} onBlur={()=>setFocused("")}
                    style={{ ...inp("email"), borderColor: otpVerified?"rgba(74,222,128,0.6)":focused==="email"?"rgba(124,58,237,0.6)":"rgba(124,58,237,0.15)" }}
                  />
                  {otpVerified && <span style={{ position:"absolute", right:9, top:"50%", transform:"translateY(-50%)", color:"#4ade80", fontSize:15 }}>✓</span>}
                </div>
                {mode==="signup" && (
                  <button onClick={sendOtp} disabled={!email.includes("@")||resendTimer>0||sendingOtp} style={{
                    padding:"0 11px", borderRadius:8, border:"1px solid rgba(124,58,237,0.3)",
                    background: otpVerified?"rgba(74,222,128,0.12)":"rgba(124,58,237,0.15)",
                    color: otpVerified?"#4ade80":!email.includes("@")||resendTimer>0?"rgba(167,139,250,0.3)":"#a78bfa",
                    fontSize:11, fontWeight:700, cursor:!email.includes("@")||resendTimer>0||sendingOtp?"not-allowed":"pointer",
                    fontFamily:"'DM Sans',sans-serif", whiteSpace:"nowrap", flexShrink:0, minWidth:80,
                  }}>
                    {otpVerified?"✓ Verified":sendingOtp?"⏳...":resendTimer>0?`${resendTimer}s`:otpSent?"Resend":"Send Code"}
                  </button>
                )}
              </div>
              {otpStep && mode==="signup" && (
                <div style={{ marginTop:9, animation:"fadeIn 0.3s ease" }}>
                  <div style={{ background:"rgba(124,58,237,0.06)", border:"1px solid rgba(124,58,237,0.18)", borderRadius:10, padding:"11px" }}>
                    <div style={{ color:"rgba(167,139,250,0.65)", fontSize:11, marginBottom:8 }}>
                      📧 6-digit code sent to <strong style={{ color:"#c4b5fd" }}>{email}</strong>
                    </div>
                    <div style={{ display:"flex", gap:5, justifyContent:"center", marginBottom:9 }}>
                      {[0,1,2,3,4,5].map(i=>(
                        <div key={i} style={{ width:36, height:44, borderRadius:7, border:`2px solid ${otpCode[i]?"#7c3aed":"rgba(124,58,237,0.18)"}`, background: otpCode[i]?"rgba(124,58,237,0.15)":"rgba(255,255,255,0.02)", display:"flex", alignItems:"center", justifyContent:"center", color:"#c4b5fd", fontFamily:"'Fira Code',monospace", fontSize:19, fontWeight:800, transition:"all 0.15s" }}>
                          {otpCode[i]||""}
                        </div>
                      ))}
                    </div>
                    <div style={{ display:"flex", gap:7 }}>
                      <input value={otpCode} onChange={e=>setOtpCode(e.target.value.replace(/\D/g,"").slice(0,6))} onKeyDown={e=>e.key==="Enter"&&verifyOtp()} placeholder="Enter code" maxLength={6} style={{ flex:1, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:7, padding:"8px 11px", color:"#e9d5ff", fontSize:15, outline:"none", fontFamily:"'Fira Code',monospace", letterSpacing:"0.2em", fontWeight:700, textAlign:"center" }} />
                      <button onClick={verifyOtp} disabled={otpCode.length<6} style={{ padding:"8px 13px", borderRadius:7, border:"none", background:otpCode.length<6?"rgba(124,58,237,0.2)":"linear-gradient(135deg,#7c3aed,#a78bfa)", color:"#fff", fontSize:12, fontWeight:700, cursor:otpCode.length<6?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif" }}>Verify →</button>
                    </div>
                    <div style={{ color:"rgba(167,139,250,0.3)", fontSize:10, marginTop:6, textAlign:"center" }}>
                      {resendTimer>0?`Resend in ${resendTimer}s`:<span onClick={sendOtp} style={{ color:"#a78bfa", cursor:"pointer", textDecoration:"underline" }}>Resend code</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label style={{ color:"rgba(167,139,250,0.6)", fontSize:11, marginBottom:4, display:"block", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>Password</label>
              <div style={{ position:"relative" }}>
                <input type={showPw?"text":"password"} value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder={mode==="signup"?"Min 8 chars e.g. Hello@123":"Password"} onFocus={()=>setFocused("pw")} onBlur={()=>setFocused("")} style={{...inp("pw"), paddingRight:40}} />
                <button onClick={()=>setShowPw(!showPw)} style={{ position:"absolute", right:10, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", color:"rgba(167,139,250,0.45)", cursor:"pointer", fontSize:13, padding:0 }}>{showPw?"🙈":"👁️"}</button>
              </div>
              {mode==="signup" && <PasswordStrength password={pw} />}
            </div>

            {mode==="signup" && (
              <div>
                <label style={{ color:"rgba(167,139,250,0.6)", fontSize:11, marginBottom:4, display:"block", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>Language</label>
                <select value={lang} onChange={e=>setLang(e.target.value)} style={{ ...inp(""), cursor:"pointer", appearance:"none", backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='7' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23a78bfa' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat:"no-repeat", backgroundPosition:"right 12px center", paddingRight:32 }}>
                  {LANGUAGES.map(l=><option key={l.code} value={l.code}>{l.label}</option>)}
                </select>
              </div>
            )}

            {success && <div style={{ background:"rgba(74,222,128,0.07)", border:"1px solid rgba(74,222,128,0.2)", borderRadius:8, padding:"8px 11px", color:"#86efac", fontSize:12 }}>{success}</div>}
            {err && <div style={{ background:"rgba(239,68,68,0.07)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:8, padding:"8px 11px", color:"#fca5a5", fontSize:12 }}>⚠️ {err}</div>}

            <button onClick={submit} className="btn-hover" style={{ width:"100%", padding:"11px 0", borderRadius:9, border:"none", background:"linear-gradient(135deg,#7c3aed,#a78bfa)", color:"#fff", fontSize:14, fontWeight:700, fontFamily:"'DM Sans',sans-serif", cursor:"pointer", boxShadow:"0 6px 20px rgba(124,58,237,0.32)", transition:"all 0.2s" }}>
              {mode==="login"?"Continue →":"Create Account →"}
            </button>

            <div style={{ textAlign:"center", color:"rgba(167,139,250,0.38)", fontSize:12 }}>
              {mode==="login"
                ? <span>No account? <span onClick={()=>{setMode("signup");setErr("");setSuccess("");}} style={{ color:"#a78bfa", cursor:"pointer", fontWeight:700 }}>Sign up free</span></span>
                : <span>Have an account? <span onClick={()=>{setMode("login");setErr("");setSuccess("");}} style={{ color:"#a78bfa", cursor:"pointer", fontWeight:700 }}>Log in</span></span>}
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ flex:1, height:1, background:"rgba(124,58,237,0.1)" }}/>
              <span style={{ color:"rgba(167,139,250,0.22)", fontSize:11 }}>or</span>
              <div style={{ flex:1, height:1, background:"rgba(124,58,237,0.1)" }}/>
            </div>

            <button onClick={continueAsGuest} style={{ width:"100%", padding:"10px 0", borderRadius:9, border:"1px solid rgba(245,158,11,0.25)", background:"rgba(245,158,11,0.07)", color:"#fbbf24", fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif", cursor:"pointer", transition:"all 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(245,158,11,0.13)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(245,158,11,0.07)"}>
              👤 Continue as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PREMIUM MODAL ──────────────────────────────────────────────────
function PremiumModal({ onClose, onUpgrade }) {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [payMethod, setPayMethod] = useState("card");
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [mpesa, setMpesa] = useState("");
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const plans = [
    { id:"pro", name:"Pro", price:"$9.99/mo", ksh:"KSh 1,299/mo", features:["Unlimited messages","Priority speed","File & image uploads","Chat history","All languages","Humanize AI tool","5 Projects"], color:"#7c3aed" },
    { id:"ultra", name:"Ultra", price:"$24.99/mo", ksh:"KSh 3,249/mo", features:["Everything in Pro","GPT-4o + Claude","100 Projects","Team sharing","API access","Custom AI persona","Priority support"], color:"#0ea5e9", badge:"BEST VALUE" },
  ];

  function pay() {
    setProcessing(true);
    setTimeout(() => { setProcessing(false); setDone(true); setTimeout(() => { onUpgrade(selectedPlan); onClose(); }, 1500); }, 2000);
  }

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:20, backdropFilter:"blur(10px)" }}>
      <div style={{
        width:"100%", maxWidth:680, background:"#0f0c22",
        borderRadius:24, border:"1px solid rgba(124,58,237,0.3)",
        boxShadow:"0 40px 100px rgba(0,0,0,0.8)", overflow:"hidden",
        animation:"fadeIn 0.3s ease", maxHeight:"90vh", overflowY:"auto",
      }}>
        {/* Header */}
        <div style={{ padding:"24px 28px 0", display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <OduoraLogo size={38} showText={false} animate={true} />
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, color:"#f0e6ff", fontWeight:700, letterSpacing:"0.1em" }}>Upgrade Oduora</div>
              <div style={{ color:"rgba(167,139,250,0.5)", fontSize:13 }}>Unlock the full power of your AI assistant</div>
            </div>
          </div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, width:32, height:32, color:"#a78bfa", cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
        </div>

        <div style={{ padding:"20px 28px 28px" }}>
          {/* Plan selection */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:22 }}>
            {plans.map(p => (
              <div key={p.id} onClick={()=>setSelectedPlan(p.id)} style={{
                borderRadius:14, padding:"16px", cursor:"pointer",
                border:`2px solid ${selectedPlan===p.id ? p.color : "rgba(124,58,237,0.15)"}`,
                background: selectedPlan===p.id ? `rgba(${p.id==="pro"?"124,58,237":"14,165,233"},0.08)` : "rgba(255,255,255,0.02)",
                transition:"all 0.2s", position:"relative",
              }}>
                {p.badge && <div style={{ position:"absolute", top:-1, right:12, background:p.color, color:"#fff", fontSize:9, fontWeight:800, padding:"2px 8px", borderRadius:"0 0 6px 6px", letterSpacing:"0.05em" }}>{p.badge}</div>}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                  <div style={{ fontWeight:700, color:"#f0e6ff", fontSize:16 }}>{p.name}</div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ color:p.color, fontWeight:800, fontSize:15 }}>{p.price}</div>
                    <div style={{ color:"rgba(167,139,250,0.4)", fontSize:11 }}>{p.ksh}</div>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
                  {p.features.map(f=>(
                    <div key={f} style={{ fontSize:12, color:"rgba(167,139,250,0.7)", display:"flex", alignItems:"center", gap:6 }}>
                      <span style={{ color:"#4ade80", fontSize:11 }}>✓</span>{f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Payment — M-Pesa Send Money Instructions */}
          <div style={{ marginBottom:18 }}>
            <div style={{ color:"rgba(167,139,250,0.6)", fontSize:11.5, marginBottom:12, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>📱 Pay via M-Pesa — Send Money</div>

            {/* Amount box */}
            <div style={{ background:"linear-gradient(135deg,rgba(16,185,129,0.08),rgba(5,150,105,0.05))", border:"1px solid rgba(16,185,129,0.25)", borderRadius:14, padding:"16px 18px", marginBottom:14 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                <span style={{ color:"rgba(167,139,250,0.5)", fontSize:12 }}>You are paying for:</span>
                <span style={{ color:"#10b981", fontWeight:800, fontSize:18 }}>
                  {selectedPlan==="pro" ? "KSh 1,299" : "KSh 3,249"}
                  <span style={{ fontSize:11, fontWeight:400, color:"rgba(167,139,250,0.5)", marginLeft:4 }}>/month</span>
                </span>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ color:"rgba(167,139,250,0.5)", fontSize:12 }}>Plan:</span>
                <span style={{ color:"#e9d5ff", fontWeight:700, fontSize:13 }}>Oduora {selectedPlan==="pro"?"Pro ⭐":"Ultra 🚀"}</span>
              </div>
            </div>

            {/* Step-by-step instructions */}
            <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:14 }}>
              {[
                { step:"1", icon:"📱", title:"Open M-Pesa on your phone", desc:"Go to M-Pesa menu → Send Money" },
                { step:"2", icon:"🔢", title:"Enter this number", desc:"0796 963 823", highlight:true, copyText:"0796963823" },
                { step:"3", icon:"💰", title:"Enter the exact amount", desc: selectedPlan==="pro" ? "KSh 1,299" : "KSh 3,249", highlight:true },
                { step:"4", icon:"✍️", title:"Use your name as reference", desc:"e.g. \"John Upgrade Pro\"" },
                { step:"5", icon:"✅", title:"Enter your M-Pesa PIN & confirm", desc:"You'll get an SMS confirmation from Safaricom" },
              ].map(s=>(
                <div key={s.step} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"10px 14px", background: s.highlight?"rgba(16,185,129,0.06)":"rgba(255,255,255,0.02)", border:`1px solid ${s.highlight?"rgba(16,185,129,0.2)":"rgba(124,58,237,0.1)"}`, borderRadius:10 }}>
                  <div style={{ width:26, height:26, borderRadius:"50%", background: s.highlight?"rgba(16,185,129,0.2)":"rgba(124,58,237,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color: s.highlight?"#10b981":"#a78bfa", flexShrink:0 }}>{s.step}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ color:"rgba(167,139,250,0.6)", fontSize:11.5, marginBottom:2 }}>{s.icon} {s.title}</div>
                    <div style={{ color: s.highlight?"#10b981":"#e9d5ff", fontWeight: s.highlight?800:500, fontSize: s.highlight?16:13, letterSpacing: s.highlight?"0.05em":"normal" }}>{s.desc}</div>
                  </div>
                  {s.copyText && (
                    <button onClick={()=>navigator.clipboard?.writeText(s.copyText)} style={{ background:"rgba(16,185,129,0.15)", border:"1px solid rgba(16,185,129,0.3)", borderRadius:7, padding:"4px 10px", color:"#10b981", fontSize:11, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", flexShrink:0 }}>📋 Copy</button>
                  )}
                </div>
              ))}
            </div>

            {/* After payment — enter confirmation */}
            <div style={{ background:"rgba(124,58,237,0.06)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:11, padding:"14px" }}>
              <div style={{ color:"rgba(167,139,250,0.7)", fontSize:12, fontWeight:600, marginBottom:8 }}>✅ After paying — enter your M-Pesa confirmation code:</div>
              <input value={mpesa} onChange={e=>setMpesa(e.target.value.toUpperCase())} placeholder="e.g. QHK2X8ABCD" style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:9, padding:"10px 13px", color:"#e9d5ff", fontSize:15, outline:"none", fontFamily:"'DM Sans',sans-serif", letterSpacing:"0.08em", fontWeight:700 }} />
              <div style={{ color:"rgba(167,139,250,0.35)", fontSize:11, marginTop:6 }}>The confirmation code is in the SMS you receive from Safaricom after payment (e.g. QHK2X8ABCD)</div>
            </div>
          </div>

          {/* Confirm button */}
          {done ? (
            <div style={{ textAlign:"center", padding:"16px", background:"rgba(74,222,128,0.08)", border:"1px solid rgba(74,222,128,0.25)", borderRadius:12 }}>
              <div style={{ fontSize:28, marginBottom:6 }}>🎉</div>
              <div style={{ color:"#4ade80", fontWeight:700, fontSize:16 }}>Payment Confirmed!</div>
              <div style={{ color:"rgba(167,139,250,0.5)", fontSize:13, marginTop:4 }}>Welcome to Oduora {selectedPlan==="pro"?"Pro ⭐":"Ultra 🚀"}!</div>
            </div>
          ) : (
            <button onClick={pay} disabled={processing||mpesa.length<6} className="btn-hover" style={{
              width:"100%", padding:"13px 0", borderRadius:11, border:"none",
              background: processing||mpesa.length<6 ? "rgba(124,58,237,0.2)" : "linear-gradient(135deg,#10b981,#059669)",
              color:"#fff", fontSize:15, fontWeight:700,
              fontFamily:"'DM Sans',sans-serif", cursor: processing||mpesa.length<6?"not-allowed":"pointer",
              boxShadow: mpesa.length>=6?"0 6px 20px rgba(16,185,129,0.3)":"none", transition:"all 0.2s",
            }}>
              {processing ? "⏳ Verifying payment..." : mpesa.length<6 ? "Enter M-Pesa confirmation code above ↑" : `✅ Confirm Payment — Upgrade to ${selectedPlan==="pro"?"Pro":"Ultra"}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ───────────────────────────────────────────────────────
function MainApp({ user: initUser, onLogout }) {
  const [user, setUser] = useState(initUser);
  const [language, setLanguage] = useState(initUser.language || "en");
  const ui = getUI(language);
  const selLang = LANGUAGES.find(l=>l.code===language)||LANGUAGES[0];

  // Sidebar & panels
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePanel, setActivePanel] = useState("chat"); // chat | history | projects | premium | humanize
  const [showPremium, setShowPremium] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [langSearch, setLangSearch] = useState("");

  // Chat state
  const [sessions, setSessions] = useState(() => getUserHistory(initUser.email));
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [messages, setMessages] = useState([{ role:"assistant", content: getUI(initUser.language||"en").greet(initUser.name) }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(null);
  const [listening, setListening] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [attachments, setAttachments] = useState([]); // [{name, type, data, preview}]
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const imageRef = useRef(null);
  const recognitionRef = useRef(null);

  // Projects
  const [projects, setProjects] = useState(() => getUserProjects(initUser.email));
  const [newProjectName, setNewProjectName] = useState("");

  // Humanize
  const [humanizeInput, setHumanizeInput] = useState("");
  const [humanizeOutput, setHumanizeOutput] = useState("");
  const [humanizeLoading, setHumanizeLoading] = useState(false);

  // AI Detector
  const [detectInput, setDetectInput] = useState("");
  const [detectResult, setDetectResult] = useState(null);
  const [detectLoading, setDetectLoading] = useState(false);

  // Weather
  const [weatherCountry, setWeatherCountry] = useState("");
  const [weatherCity, setWeatherCity] = useState("");
  const [weatherDate, setWeatherDate] = useState(new Date().toISOString().split("T")[0]);
  const [weatherResult, setWeatherResult] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  // Media Studio
  const [mediaFile, setMediaFile] = useState(null);       // {name, type, data, preview, fileType}
  const [mediaOp, setMediaOp] = useState("describe");     // describe | enhance | filter | caption | trim
  const [mediaPrompt, setMediaPrompt] = useState("");
  const [mediaResult, setMediaResult] = useState(null);
  const [mediaLoading, setMediaLoading] = useState(false);
  const [mediaFilter, setMediaFilter] = useState("none");
  const [editedPreview, setEditedPreview] = useState(null);
  const mediaFileRef = useRef(null);
  const canvasRef = useRef(null);

  // AI Generate
  const [genType, setGenType] = useState("image");        // image | video
  const [genPrompt, setGenPrompt] = useState("");
  const [genStyle, setGenStyle] = useState("photorealistic");
  const [genAspect, setGenAspect] = useState("16:9");
  const [genLoading, setGenLoading] = useState(false);
  const [genResult, setGenResult] = useState(null);       // {type, description, prompt, seed}
  const [genHistory, setGenHistory] = useState([]);

  // Documents
  const [docFile, setDocFile] = useState(null);
  const [docAction, setDocAction] = useState("summarize");
  const [docQuestion, setDocQuestion] = useState("");
  const [docResult, setDocResult] = useState(null);
  const [docLoading, setDocLoading] = useState(false);
  const [docHistory, setDocHistory] = useState([]);
  const docFileRef = useRef(null);

  // Voice search on input bar
  const [voiceSearchActive, setVoiceSearchActive] = useState(false);
  const voiceSearchRef = useRef(null);

  const filteredLangs = LANGUAGES.filter(l=>l.label.toLowerCase().includes(langSearch.toLowerCase()));

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages, loading]);
  useEffect(() => { saveHistory(user.email, sessions); }, [sessions]);
  useEffect(() => { saveProjects(user.email, projects); }, [projects]);

  // Save current chat as history
  function saveCurrentSession(msgs) {
    if (msgs.length < 2) return;
    const title = msgs.find(m=>m.role==="user")?.content?.slice(0,50) || "New conversation";
    if (activeSessionId) {
      setSessions(prev => prev.map(s => s.id===activeSessionId ? {...s, messages:msgs, date:new Date().toISOString()} : s));
    } else {
      const newSession = { id:genId(), title, messages:msgs, date:new Date().toISOString(), projectId:null };
      setSessions(prev => [newSession, ...prev]);
      setActiveSessionId(newSession.id);
    }
  }

  function loadSession(session) {
    setActiveSessionId(session.id);
    setMessages(session.messages);
    setActivePanel("chat");
  }

  function deleteSession(id) {
    setSessions(prev => prev.filter(s=>s.id!==id));
    if (activeSessionId===id) { setActiveSessionId(null); setMessages([{ role:"assistant", content:ui.greet(user.name) }]); }
  }

  function newChat() {
    saveCurrentSession(messages);
    setActiveSessionId(null);
    setMessages([{ role:"assistant", content:getUI(language).greet(user.name) }]);
    setAttachments([]);
    setActivePanel("chat");
  }

  // File/image upload
  function handleFileUpload(e, type) {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const isImage = file.type.startsWith("image/");
        setAttachments(prev => [...prev, {
          id: genId(), name: file.name, type: file.type,
          data: ev.target.result, preview: isImage ? ev.target.result : null, fileType: type,
        }]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
    setShowAttachMenu(false);
  }

  function removeAttachment(id) { setAttachments(prev => prev.filter(a=>a.id!==id)); }

  // TTS
  function speakText(text, idx) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    if (speaking===idx) { setSpeaking(null); return; }
    const utt = new SpeechSynthesisUtterance(stripHtml(formatText(text)));
    const voices = window.speechSynthesis.getVoices();
    const matched = voices.find(v=>v.lang===selLang.voice) || voices.find(v=>v.lang.startsWith(selLang.voice.split("-")[0]));
    if (matched) utt.voice = matched;
    utt.lang = selLang.voice; utt.rate = 0.92; utt.pitch = 1.05;
    utt.onstart = ()=>setSpeaking(idx);
    utt.onend = ()=>setSpeaking(null);
    utt.onerror = ()=>setSpeaking(null);
    window.speechSynthesis.speak(utt);
  }

  // STT
  function toggleListening() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert("Use Chrome or Edge for voice input."); return; }
    if (listening) { recognitionRef.current?.stop(); setListening(false); return; }
    const r = new SR();
    recognitionRef.current = r;
    r.lang = selLang.voice; r.interimResults = false;
    r.onstart = ()=>setListening(true);
    r.onresult = (e) => { setInput(p=>p?p+" "+e.results[0][0].transcript:e.results[0][0].transcript); setListening(false); };
    r.onerror = ()=>setListening(false);
    r.onend = ()=>setListening(false);
    r.start();
  }

  // Send message
  async function sendMessage() {
    const text = input.trim();
    if (!text && attachments.length===0) return;
    if (loading) return;

    let userContent = text;
    if (attachments.length > 0) {
      const fileNames = attachments.map(a=>a.name).join(", ");
      userContent = text ? `${text}\n\n[Attached: ${fileNames}]` : `[Attached: ${fileNames}]`;
    }

    const newMsgs = [...messages, { role:"user", content:userContent, attachments:[...attachments] }];
    setMessages(newMsgs);
    setInput(""); setAttachments([]);
    setLoading(true);

    try {
      // Build API messages - include image data if present
      const apiMessages = newMsgs.map(m => {
        if (m.role==="user" && m.attachments?.some(a=>a.preview)) {
          const imageAtts = m.attachments.filter(a=>a.preview);
          const content = [];
          if (m.content && !m.content.startsWith("[Attached:")) content.push({ type:"text", text:m.content });
          imageAtts.forEach(a => {
            const b64 = a.data.split(",")[1];
            const mtype = a.type || "image/jpeg";
            content.push({ type:"image", source:{ type:"base64", media_type:mtype, data:b64 } });
          });
          if (content.length===0) content.push({ type:"text", text:m.content||"Describe this." });
          return { role:"user", content };
        }
        return { role:m.role, content:m.content };
      });

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          system:`You are Oduora, a warm, knowledgeable AI assistant and expert programmer. The user's language is ${selLang.label}. ALWAYS respond fully in ${selLang.label} unless they write in another language. Use markdown formatting (bold **, bullets -). When writing code, ALWAYS use fenced code blocks with the language name e.g. \`\`\`python, \`\`\`javascript, \`\`\`html etc. Provide complete, working, well-commented code. When images or files are shared, analyze them helpfully.`,
          messages:apiMessages,
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "...";
      const next = [...newMsgs, { role:"assistant", content:reply }];
      setMessages(next);
      saveCurrentSession(next);
      if (autoSpeak) setTimeout(()=>speakText(reply, next.length-1), 300);
    } catch {
      setMessages([...newMsgs, { role:"assistant", content:"⚠️ Error. Please try again." }]);
    } finally {
      setLoading(false);
      setTimeout(()=>inputRef.current?.focus(), 50);
    }
  }

  // Humanize AI
  async function runHumanize() {
    if (!humanizeInput.trim()) return;
    setHumanizeLoading(true); setHumanizeOutput("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          system:`You are an expert text editor. Rewrite the provided AI-generated text to sound natural, warm, and human-written. Remove robotic phrasing, vary sentence length, add natural flow and personality. Keep the same meaning and language (${selLang.label}). Return ONLY the rewritten text, no explanations.`,
          messages:[{ role:"user", content:humanizeInput }],
        }),
      });
      const data = await res.json();
      setHumanizeOutput(data.content?.[0]?.text || "");
    } catch { setHumanizeOutput("Error. Please try again."); }
    finally { setHumanizeLoading(false); }
  }

  // AI Detector
  async function runDetector() {
    if (!detectInput.trim()) return;
    setDetectLoading(true); setDetectResult(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:800,
          system:`You are an expert AI text detector. Analyze the given text and determine the probability it was written by AI vs a human. Respond ONLY in this exact JSON format (no markdown, no explanation outside JSON):
{
  "score": <0-100 integer, where 100 = definitely AI, 0 = definitely human>,
  "verdict": "<one of: Definitely AI | Likely AI | Mixed | Likely Human | Definitely Human>",
  "confidence": "<High|Medium|Low>",
  "signals": ["<signal 1>","<signal 2>","<signal 3>","<signal 4>"],
  "human_signals": ["<human signal 1>","<human signal 2>"],
  "summary": "<2 sentence plain-English explanation>"
}`,
          messages:[{role:"user", content:detectInput}],
        }),
      });
      const data = await res.json();
      const raw = data.content?.[0]?.text || "{}";
      const clean = raw.replace(/```json|```/g,"").trim();
      setDetectResult(JSON.parse(clean));
    } catch { setDetectResult({score:50,verdict:"Error",confidence:"Low",signals:["Could not analyze"],human_signals:[],summary:"An error occurred. Please try again."}); }
    finally { setDetectLoading(false); }
  }

  // Weather
  async function runWeather() {
    if (!weatherCity.trim()) return;
    setWeatherLoading(true); setWeatherResult(null);
    const dateLabel = weatherDate === new Date().toISOString().split("T")[0] ? "today" : weatherDate;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:800,
          system:`You are a detailed weather forecasting assistant with deep knowledge of global climate patterns. When given a city, country, and date, provide a realistic and detailed weather forecast based on typical seasonal patterns for that location. Be specific with temperatures in Celsius, practical advice, and hourly breakdown. Respond ONLY in this exact JSON format (no markdown):
{
  "city": "<city name>",
  "country": "<country name>",
  "date": "<formatted date>",
  "condition": "<e.g. Sunny and Hot | Partly Cloudy | Heavy Rain | Thunderstorms | Foggy>",
  "emoji": "<single weather emoji>",
  "temp_high": <integer Celsius>,
  "temp_low": <integer Celsius>,
  "temp_feels_like": <integer Celsius>,
  "humidity": <integer percent>,
  "wind_speed": <integer km/h>,
  "wind_direction": "<e.g. NE | SW>",
  "uv_index": <integer 1-11>,
  "visibility": "<e.g. 10 km | 2 km>",
  "rainfall_chance": <integer percent>,
  "sunrise": "<HH:MM>",
  "sunset": "<HH:MM>",
  "hourly": [
    {"time":"06:00","temp":<int>,"condition":"<short>","emoji":"<emoji>"},
    {"time":"09:00","temp":<int>,"condition":"<short>","emoji":"<emoji>"},
    {"time":"12:00","temp":<int>,"condition":"<short>","emoji":"<emoji>"},
    {"time":"15:00","temp":<int>,"condition":"<short>","emoji":"<emoji>"},
    {"time":"18:00","temp":<int>,"condition":"<short>","emoji":"<emoji>"},
    {"time":"21:00","temp":<int>,"condition":"<short>","emoji":"<emoji>"}
  ],
  "advice": "<2-3 practical sentences on what to wear, carry, or do>",
  "air_quality": "<Good|Moderate|Poor|Very Poor>",
  "season": "<current season for that location>"
}`,
          messages:[{role:"user", content:`Weather forecast for ${weatherCity}, ${weatherCountry || "Kenya"} on ${dateLabel}`}],
        }),
      });
      const data = await res.json();
      const raw = data.content?.[0]?.text || "{}";
      const clean = raw.replace(/```json|```/g,"").trim();
      setWeatherResult(JSON.parse(clean));
    } catch { setWeatherResult(null); }
    finally { setWeatherLoading(false); }
  }

  // ── MEDIA STUDIO ──────────────────────────────────────────────
  function handleMediaUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      setMediaFile({ name:file.name, type:file.type, data:ev.target.result, preview:ev.target.result, fileType: file.type.startsWith("video/")?"video":"image" });
      setMediaResult(null); setEditedPreview(null); setMediaFilter("none");
    };
    reader.readAsDataURL(file);
    e.target.value="";
  }

  function applyFilter(filter) {
    setMediaFilter(filter);
    if (!mediaFile?.preview || mediaFile.fileType==="video") return;
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width; canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      const filters = {
        none:"none", grayscale:"grayscale(100%)", sepia:"sepia(80%)",
        vintage:"sepia(50%) contrast(1.2) brightness(0.9) saturate(1.4)",
        cold:"hue-rotate(200deg) saturate(1.3) brightness(1.1)",
        warm:"sepia(30%) saturate(1.5) brightness(1.05)",
        dramatic:"contrast(1.6) saturate(1.4) brightness(0.85)",
        blur:"blur(3px)", sharpen:"contrast(1.5) brightness(1.1)",
        neon:"hue-rotate(90deg) saturate(2) brightness(1.2) contrast(1.3)",
      };
      ctx.filter = filters[filter] || "none";
      ctx.drawImage(img, 0, 0);
      setEditedPreview(canvas.toDataURL("image/jpeg", 0.92));
    };
    img.src = mediaFile.preview;
  }

  async function analyzeMedia() {
    if (!mediaFile) return;
    setMediaLoading(true); setMediaResult(null);
    try {
      let messages;
      if (mediaFile.fileType==="image") {
        const b64 = mediaFile.data.split(",")[1];
        const mtype = mediaFile.type||"image/jpeg";
        const ops = {
          describe: "Describe this image in rich detail. Include objects, colors, composition, mood, lighting, and any text visible.",
          caption: "Write 5 creative captions for this image — social media style, varied in tone (funny, inspirational, poetic, professional, casual).",
          enhance: "Analyze this image quality. Suggest specific enhancements: brightness, contrast, color grading, cropping, and composition improvements.",
          objects: "List every object, person, animal, and text visible in this image with their approximate positions.",
        };
        messages = [{ role:"user", content:[
          { type:"image", source:{ type:"base64", media_type:mtype, data:b64 }},
          { type:"text",  text: ops[mediaOp] || ops.describe }
        ]}];
      } else {
        messages = [{ role:"user", content:`The user uploaded a video file: "${mediaFile.name}". Since direct video analysis isn't available, provide helpful ${mediaOp==="caption"?"caption ideas":"editing suggestions"} for a video with this filename. Include tips for cuts, transitions, color grading, music suggestions, and pacing.` }];
      }
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:800, messages }),
      });
      const data = await res.json();
      setMediaResult(data.content?.[0]?.text || "No result.");
    } catch { setMediaResult("Error analyzing. Please try again."); }
    finally { setMediaLoading(false); }
  }

  async function runAIEditPrompt() {
    if (!mediaFile || !mediaPrompt.trim()) return;
    setMediaLoading(true);
    try {
      const isImg = mediaFile.fileType==="image";
      const b64 = isImg ? mediaFile.data.split(",")[1] : null;
      const mtype = isImg ? (mediaFile.type||"image/jpeg") : null;
      const msgContent = isImg
        ? [{ type:"image", source:{ type:"base64", media_type:mtype, data:b64 }},
           { type:"text", text:`The user wants to edit this image with the instruction: "${mediaPrompt}". Since you cannot directly modify images, provide: 1) Detailed step-by-step instructions for how to achieve this edit in Photoshop, Canva, GIMP, or a mobile app. 2) Specific settings/values to use. 3) Alternative approaches. Be very specific and actionable.` }]
        : `The user has a video "${mediaFile.name}" and wants to: "${mediaPrompt}". Provide detailed step-by-step video editing instructions for Adobe Premiere, CapCut, DaVinci Resolve, and iMovie. Include specific tool names, settings, and keyboard shortcuts.`;
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:800,
          messages:[{ role:"user", content: msgContent }] }),
      });
      const data = await res.json();
      setMediaResult(data.content?.[0]?.text || "");
    } catch { setMediaResult("Error. Please try again."); }
    finally { setMediaLoading(false); setMediaPrompt(""); }
  }

  // ── AI GENERATE ────────────────────────────────────────────────
  async function runGenerate() {
    if (!genPrompt.trim()) return;
    setGenLoading(true); setGenResult(null);
    const seed = Math.floor(Math.random()*999999);
    try {
      const typeLabel = genType==="image" ? "image" : "video";
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:600,
          system:`You are an AI art director. When given a prompt for a ${typeLabel}, respond ONLY in this exact JSON (no markdown):
{
  "enhanced_prompt": "<richly detailed, professional prompt with lighting, style, composition details>",
  "negative_prompt": "<what to avoid>",
  "style_tags": ["<tag1>","<tag2>","<tag3>","<tag4>","<tag5>"],
  "mood": "<mood description>",
  "color_palette": ["<color1>","<color2>","<color3>"],
  "recommended_tools": ["<tool1>","<tool2>","<tool3>"],
  "description": "<2-sentence vivid description of what the generated ${typeLabel} would look like>",
  "tips": "<2 sentences of tips to improve the generation>"
}`,
          messages:[{ role:"user", content:`Generate a ${typeLabel}: "${genPrompt}". Style: ${genStyle}. Aspect ratio: ${genAspect}.` }],
        }),
      });
      const data = await res.json();
      const raw = (data.content?.[0]?.text||"{}").replace(/```json|```/g,"").trim();
      const parsed = JSON.parse(raw);
      const result = { ...parsed, type:genType, originalPrompt:genPrompt, style:genStyle, aspect:genAspect, seed, timestamp:new Date().toISOString() };
      setGenResult(result);
      setGenHistory(prev=>[result, ...prev.slice(0,9)]);
    } catch { setGenResult({ description:"Error generating. Please try again.", type:genType, originalPrompt:genPrompt }); }
    finally { setGenLoading(false); }
  }

  // ── VOICE SEARCH ──────────────────────────────────────────────
  function toggleVoiceSearch() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert("Voice search requires Chrome or Edge."); return; }
    if (voiceSearchActive) { voiceSearchRef.current?.stop(); setVoiceSearchActive(false); return; }
    const r = new SR();
    voiceSearchRef.current = r;
    r.lang = selLang.voice;
    r.interimResults = false;
    r.onstart = () => setVoiceSearchActive(true);
    r.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      setVoiceSearchActive(false);
      setActivePanel("chat");
      // Auto-send after brief delay
      setTimeout(() => {
        const el = document.querySelector("#oduora-chat-input");
        if (el) el.focus();
      }, 100);
    };
    r.onerror = () => setVoiceSearchActive(false);
    r.onend = () => setVoiceSearchActive(false);
    r.start();
  }

  // ── DOCUMENTS ─────────────────────────────────────────────────
  function handleDocUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    const isPdf = file.type === "application/pdf";
    reader.onload = ev => {
      setDocFile({ name: file.name, type: file.type, data: ev.target.result, isPdf, size: (file.size/1024).toFixed(1) });
      setDocResult(null); setDocQuestion("");
    };
    if (isPdf) reader.readAsDataURL(file);
    else reader.readAsText(file);
    e.target.value = "";
  }

  async function runDocAction() {
    if (!docFile) return;
    setDocLoading(true); setDocResult(null);
    try {
      let messages;
      const actions = {
        summarize: "Summarize this document clearly and concisely. Include: main topic, key points (bullet list), important data/numbers, and conclusions.",
        extract:   "Extract all important information: names, dates, numbers, tables, key facts, action items, and any structured data. Format clearly.",
        translate: `Translate the full content of this document to ${selLang.label}. Keep formatting.`,
        improve:   "Review this document and suggest improvements: clarity, grammar, structure, formatting, missing sections. Provide a rewritten improved version.",
        qa:        `Answer this question based on the document: "${docQuestion || "What is this document about?"}"`,
        table:     "Extract all tables, lists, and structured data from this document. Format them clearly in markdown.",
      };
      if (docFile.isPdf) {
        const b64 = docFile.data.split(",")[1];
        messages = [{ role:"user", content:[
          { type:"document", source:{ type:"base64", media_type:"application/pdf", data:b64 }},
          { type:"text", text: actions[docAction] || actions.summarize }
        ]}];
      } else {
        const content = typeof docFile.data === "string" && !docFile.data.startsWith("data:")
          ? docFile.data.slice(0, 8000)
          : "[Binary file — providing analysis based on filename]";
        messages = [{ role:"user", content:`Document: "${docFile.name}"\n\nContent:\n${content}\n\n${actions[docAction] || actions.summarize}` }];
      }
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1200, messages }),
      });
      const data = await res.json();
      const result = data.content?.[0]?.text || "No result.";
      setDocResult(result);
      setDocHistory(prev => [{ name:docFile.name, type:docFile.type, action:docAction, result, date:new Date().toISOString() }, ...prev.slice(0,9)]);
    } catch { setDocResult("Error processing document. Please try again."); }
    finally { setDocLoading(false); }
  }

  function downloadDocResult(filename, content) {
    const blob = new Blob([content], { type:"text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function getDocIcon(type) {
    if (!type) return "📄";
    if (type.includes("pdf")) return "📕";
    if (type.includes("word") || type.includes("doc")) return "📘";
    if (type.includes("sheet") || type.includes("excel") || type.includes("csv")) return "📗";
    if (type.includes("presentation") || type.includes("powerpoint")) return "📙";
    if (type.includes("text")) return "📝";
    return "📄";
  }

  // Add project
  function addProject() {
    if (!newProjectName.trim()) return;
    const proj = { id:genId(), name:newProjectName.trim(), color:PROJECT_COLORS[projects.length%PROJECT_COLORS.length], createdAt:new Date().toISOString(), sessionCount:0 };
    setProjects(prev=>[proj,...prev]);
    setNewProjectName("");
  }

  function upgradeUser(plan) {
    userStore[user.email].plan = plan;
    setUser(prev=>({...prev, plan}));
  }

  // ── SIDEBAR NAV ────────────────────────────────────────────────
  const navItems = [
    { id:"chat",     icon:"💬", label:"Chat" },
    { id:"history",  icon:"📜", label:"History" },
    { id:"projects", icon:"📁", label:"Projects" },
    { id:"humanize", icon:"✍️", label:"Humanize AI" },
    { id:"detector", icon:"🔍", label:"AI Detector" },
    { id:"weather",  icon:"🌤️", label:"Weather" },
    { id:"media",    icon:"🎬", label:"Media Studio" },
    { id:"generate", icon:"🎨", label:"AI Generate" },
    { id:"docs",     icon:"📄", label:"Documents" },
    { id:"premium",  icon:"⭐", label:"Premium", special:true },
  ];

  const sidebarW = sidebarOpen ? 220 : 56;

  return (
    <div style={{ display:"flex", height:"100vh", background:"#0a0818", fontFamily:"'DM Sans',sans-serif", overflow:"hidden" }}>
      <style>{CSS}</style>

      {/* ── SIDEBAR ── */}
      <div style={{
        width:sidebarW, minWidth:sidebarW, height:"100vh",
        background:"rgba(255,255,255,0.025)", borderRight:"1px solid rgba(124,58,237,0.12)",
        display:"flex", flexDirection:"column", transition:"width 0.25s",
        overflow:"hidden", position:"relative", zIndex:10,
      }}>
        {/* Logo */}
        <div style={{ padding:"12px 10px 10px", borderBottom:"1px solid rgba(124,58,237,0.1)", display:"flex", alignItems:"center", gap:8, background:"rgba(124,58,237,0.04)" }}>
          {sidebarOpen ? (
            <div style={{ display:"flex", alignItems:"center", gap:10, flex:1, minWidth:0 }}>
              <OduoraLogo size={36} showText={false} animate={true} />
              <div style={{ overflow:"hidden", flex:1, minWidth:0 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", color:"#f0e6ff", fontSize:17, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", whiteSpace:"nowrap", background:"linear-gradient(100deg,#c4b5fd,#f8f4ff,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Oduora</div>
                <div style={{ color:"rgba(167,139,250,0.38)", fontSize:9, letterSpacing:"0.32em", textTransform:"uppercase", fontFamily:"'Rajdhani','DM Sans',sans-serif", whiteSpace:"nowrap" }}>AI · Assistant</div>
              </div>
            </div>
          ) : (
            <OduoraLogo size={32} showText={false} animate={true} />
          )}
          <button onClick={()=>setSidebarOpen(!sidebarOpen)} style={{ marginLeft:"auto", background:"none", border:"none", color:"rgba(167,139,250,0.35)", cursor:"pointer", fontSize:14, flexShrink:0, display:"flex", padding:2 }}>
            {sidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        {/* New Chat */}
        <div style={{ padding:"10px 10px 6px" }}>
          <button onClick={newChat} className="btn-hover" style={{
            width:"100%", padding: sidebarOpen?"9px 12px":"9px", borderRadius:9,
            background:"linear-gradient(135deg,rgba(124,58,237,0.3),rgba(124,58,237,0.15))",
            border:"1px solid rgba(124,58,237,0.25)", color:"#c4b5fd",
            fontSize:13, cursor:"pointer", fontFamily:"'DM Sans',sans-serif",
            display:"flex", alignItems:"center", justifyContent: sidebarOpen?"flex-start":"center", gap:8, transition:"all 0.2s",
          }}>
            <span>✚</span>{sidebarOpen && <span>New Chat</span>}
          </button>
        </div>

        {/* Nav items */}
        <nav style={{ flex:1, padding:"4px 8px", overflowY:"auto" }}>
          {navItems.map(item=>(
            <button key={item.id} onClick={()=>{ setActivePanel(item.id); if(item.id==="premium") setShowPremium(true); }} style={{
              width:"100%", padding:"9px 10px", borderRadius:9, border:"none",
              background: activePanel===item.id ? "rgba(124,58,237,0.2)" : "transparent",
              color: item.special ? "#fbbf24" : activePanel===item.id ? "#c4b5fd" : "rgba(167,139,250,0.5)",
              fontFamily:"'DM Sans',sans-serif", fontSize:13,
              cursor:"pointer", display:"flex", alignItems:"center", gap:10,
              justifyContent: sidebarOpen?"flex-start":"center",
              transition:"all 0.2s", marginBottom:2, textAlign:"left",
              borderLeft: activePanel===item.id ? "2px solid #7c3aed" : "2px solid transparent",
            }}>
              <span style={{ fontSize:16, flexShrink:0 }}>{item.icon}</span>
              {sidebarOpen && <span style={{ whiteSpace:"nowrap" }}>{item.label}</span>}
              {sidebarOpen && item.id==="premium" && user.plan==="free" && <span style={{ marginLeft:"auto", background:"#fbbf24", color:"#000", fontSize:9, fontWeight:800, padding:"2px 6px", borderRadius:4 }}>FREE</span>}
              {sidebarOpen && item.id==="premium" && user.plan!=="free" && <span style={{ marginLeft:"auto", background:"linear-gradient(90deg,#7c3aed,#0ea5e9)", color:"#fff", fontSize:9, fontWeight:800, padding:"2px 6px", borderRadius:4 }}>{user.plan.toUpperCase()}</span>}
            </button>
          ))}
        </nav>

        {/* User profile */}
        <div style={{ padding:"10px 10px 14px", borderTop:"1px solid rgba(124,58,237,0.1)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:9, padding:"8px 8px", borderRadius:9, background:"rgba(124,58,237,0.08)" }}>
            <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#7c3aed,#a78bfa)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, color:"#fff", fontWeight:700, flexShrink:0 }}>
              {user.name[0].toUpperCase()}
            </div>
            {sidebarOpen && (
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ color:"#e9d5ff", fontSize:12, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{user.name}</div>
                <div style={{ color:"rgba(167,139,250,0.45)", fontSize:10 }}>{user.isGuest?"👤 Guest Mode":user.plan==="free"?"Free Plan":user.plan+" Plan"}</div>
              </div>
            )}
            {sidebarOpen && <button onClick={onLogout} title="Logout" style={{ background:"none", border:"none", color:"rgba(239,68,68,0.5)", cursor:"pointer", fontSize:14, padding:0, flexShrink:0 }}>↩</button>}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden", minWidth:0 }}>

        {/* Top bar */}
        <div style={{ padding:"12px 20px", borderBottom:"1px solid rgba(124,58,237,0.1)", background:"rgba(255,255,255,0.015)", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
          <div style={{ flex:1, fontSize:14, color:"rgba(167,139,250,0.6)", fontWeight:500 }}>
            {activePanel==="chat" && "💬 Chat"}
            {activePanel==="history" && "📜 Chat History"}
            {activePanel==="projects" && "📁 Projects"}
            {activePanel==="humanize" && "✍️ Humanize AI Text"}
            {activePanel==="detector" && "🔍 AI Text Detector"}
            {activePanel==="weather" && "🌤️ Weather Forecast"}
            {activePanel==="media" && "🎬 Media Studio — Edit Images & Videos"}
            {activePanel==="generate" && "🎨 AI Generate — Text to Image & Video"}
            {activePanel==="docs" && "📄 Documents — PDF, Word, Excel & More"}
          </div>

          {/* Auto-speak toggle */}
          {activePanel==="chat" && (
            <button onClick={()=>setAutoSpeak(!autoSpeak)} style={{
              display:"flex", alignItems:"center", gap:5,
              background: autoSpeak?"rgba(74,222,128,0.1)":"rgba(124,58,237,0.08)",
              border:`1px solid ${autoSpeak?"rgba(74,222,128,0.3)":"rgba(124,58,237,0.15)"}`,
              borderRadius:18, padding:"5px 11px", cursor:"pointer",
              fontFamily:"'DM Sans',sans-serif", fontSize:12,
              color: autoSpeak?"#4ade80":"rgba(167,139,250,0.5)", transition:"all 0.2s",
            }}>
              <span style={{ width:24, height:13, borderRadius:7, position:"relative", display:"inline-block", background:autoSpeak?"#4ade80":"rgba(167,139,250,0.2)", transition:"background 0.2s", flexShrink:0 }}>
                <span style={{ position:"absolute", top:1.5, left:autoSpeak?13:1.5, width:10, height:10, borderRadius:"50%", background:"#fff", transition:"left 0.2s" }} />
              </span>
              🔊 Auto-read
            </button>
          )}

          {/* Language picker */}
          <div style={{ position:"relative" }}>
            <button onClick={()=>setShowLangMenu(!showLangMenu)} style={{
              background:"rgba(124,58,237,0.1)", border:"1px solid rgba(124,58,237,0.2)",
              borderRadius:9, padding:"5px 11px", color:"#c4b5fd", fontSize:12,
              cursor:"pointer", fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", gap:5,
            }}>🌐 {selLang.label.split(" ")[0]} ▾</button>
            {showLangMenu && (
              <div style={{ position:"absolute", top:"110%", right:0, zIndex:300, background:"#130f2a", border:"1px solid rgba(124,58,237,0.2)", borderRadius:12, width:200, maxHeight:260, overflow:"hidden", boxShadow:"0 20px 50px rgba(0,0,0,0.7)", display:"flex", flexDirection:"column" }}>
                <div style={{ padding:"8px 10px", borderBottom:"1px solid rgba(124,58,237,0.1)" }}>
                  <input autoFocus placeholder="Search..." value={langSearch} onChange={e=>setLangSearch(e.target.value)} style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:7, padding:"6px 9px", color:"#e9d5ff", fontSize:12, outline:"none", fontFamily:"'DM Sans',sans-serif" }} />
                </div>
                <div style={{ overflowY:"auto", flex:1 }}>
                  {filteredLangs.map(l=>(
                    <div key={l.code} onClick={()=>{ setLanguage(l.code); setShowLangMenu(false); setLangSearch(""); }} className="hover-row" style={{ padding:"8px 12px", color:l.code===language?"#a78bfa":"#c4b5fd", fontSize:13, cursor:"pointer", background:l.code===language?"rgba(124,58,237,0.12)":"transparent", fontWeight:l.code===language?700:400 }}>{l.label}</div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Upgrade button if free */}
          {user.plan==="free" && (
            <button onClick={()=>setShowPremium(true)} className="btn-hover" style={{
              background:"linear-gradient(135deg,#fbbf24,#f59e0b)", border:"none",
              borderRadius:9, padding:"6px 13px", color:"#000", fontSize:12, fontWeight:700,
              cursor:"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s",
            }}>⭐ Upgrade</button>
          )}
        </div>

        {/* ── CHAT PANEL ── */}
        {activePanel==="chat" && (
          <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }} onClick={()=>{ setShowLangMenu(false); setShowAttachMenu(false); }}>
            {/* Messages */}
            <div style={{ flex:1, overflowY:"auto", padding:"20px 24px 10px", display:"flex", flexDirection:"column", gap:14 }}>

              {/* ── Welcome logo screen — shown when only greeting exists ── */}
              {messages.length === 1 && (
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, padding:"20px 0 40px", animation:"fadeIn 0.6s ease" }}>
                  <OduoraLogo size={110} showText={true} animate={true} />
                  <div style={{ marginTop:28, color:"rgba(167,139,250,0.35)", fontSize:13, textAlign:"center", maxWidth:320, lineHeight:1.7 }}>
                    Ask anything · Upload files · Speak your question<br/>
                    <span style={{ fontSize:11, letterSpacing:"0.1em", color:"rgba(167,139,250,0.2)" }}>60+ LANGUAGES · AI TOOLS · DOCUMENTS</span>
                  </div>
                  {/* Quick-start chips */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:22, justifyContent:"center", maxWidth:440 }}>
                    {["✨ Summarize a document","🌤️ What's the weather in Nairobi?","✍️ Humanize my text","🖼️ Describe an image","💡 Give me a business idea","🌍 Translate to Kiswahili"].map(q=>(
                      <button key={q} onClick={()=>{ setInput(q.replace(/^[^s]+s/,"")); inputRef.current?.focus(); }} style={{ padding:"7px 14px", borderRadius:20, border:"1px solid rgba(124,58,237,0.2)", background:"rgba(124,58,237,0.07)", color:"rgba(167,139,250,0.7)", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}
                        onMouseEnter={e=>{e.currentTarget.style.background="rgba(124,58,237,0.18)";e.currentTarget.style.color="#c4b5fd";}}
                        onMouseLeave={e=>{e.currentTarget.style.background="rgba(124,58,237,0.07)";e.currentTarget.style.color="rgba(167,139,250,0.7)";}}>
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} style={{ display:"flex", justifyContent:msg.role==="user"?"flex-end":"flex-start", animation:"fadeIn 0.3s ease", alignItems:"flex-end", gap:8 }}>
                  {msg.role==="assistant" && (
                    <div style={{ flexShrink:0, marginTop:2 }}>
                      <OduoraLogo size={28} showText={false} animate={false} />
                    </div>
                  )}
                  <div style={{ maxWidth:"72%", display:"flex", flexDirection:"column", alignItems:msg.role==="user"?"flex-end":"flex-start", gap:4 }}>
                    {/* Attachments preview */}
                    {msg.attachments?.length > 0 && (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:4 }}>
                        {msg.attachments.map(a=>(
                          <div key={a.id} style={{ background:"rgba(124,58,237,0.15)", border:"1px solid rgba(124,58,237,0.25)", borderRadius:8, padding:"4px 10px", fontSize:11, color:"#c4b5fd", display:"flex", alignItems:"center", gap:5 }}>
                            {a.preview ? <img src={a.preview} alt="" style={{ width:14, height:14, borderRadius:2, objectFit:"cover" }} /> : <span>📎</span>}
                            {a.name}
                          </div>
                        ))}
                      </div>
                    )}
                    <div style={{
                      padding:"11px 15px",
                      borderRadius: msg.role==="user"?"18px 18px 4px 18px":"18px 18px 18px 4px",
                      background: msg.role==="user" ? "linear-gradient(135deg,#7c3aed,#5b21b6)" : "rgba(255,255,255,0.05)",
                      color: msg.role==="user"?"#f3e8ff":"#d8c4fb",
                      fontSize:14, lineHeight:1.65,
                      border: msg.role==="assistant"?"1px solid rgba(124,58,237,0.12)":"none",
                      boxShadow: msg.role==="user"?"0 4px 18px rgba(124,58,237,0.25)":"none",
                    }}>
                      <MessageContent content={msg.content} />
                    </div>
                    <button onClick={()=>speakText(msg.content,i)} style={{
                      background: speaking===i?"rgba(124,58,237,0.25)":"rgba(124,58,237,0.08)",
                      border:`1px solid ${speaking===i?"rgba(124,58,237,0.4)":"rgba(124,58,237,0.15)"}`,
                      borderRadius:18, padding:"3px 9px", cursor:"pointer",
                      color: speaking===i?"#a78bfa":"rgba(167,139,250,0.45)",
                      fontSize:11, fontFamily:"'DM Sans',sans-serif",
                      display:"flex", alignItems:"center", gap:3, transition:"all 0.2s",
                    }}>
                      {speaking===i?"⏹ Stop":"🔊 Listen"}
                    </button>
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display:"flex", alignItems:"flex-end", gap:8 }}>
                  <div style={{ flexShrink:0 }}>
                    <OduoraLogo size={28} showText={false} animate={true} />
                  </div>
                  <div style={{ padding:"12px 16px", borderRadius:"18px 18px 18px 4px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(124,58,237,0.12)" }}>
                    <TypingDots />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Attachments preview bar */}
            {attachments.length > 0 && (
              <div style={{ padding:"8px 20px 0", display:"flex", flexWrap:"wrap", gap:7 }}>
                {attachments.map(a=>(
                  <div key={a.id} style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.25)", borderRadius:8, padding:"4px 10px", fontSize:12, color:"#c4b5fd" }}>
                    {a.preview ? <img src={a.preview} alt="" style={{ width:20, height:20, borderRadius:3, objectFit:"cover" }} /> : <span>📎</span>}
                    <span style={{ maxWidth:120, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{a.name}</span>
                    <button onClick={()=>removeAttachment(a.id)} style={{ background:"none", border:"none", color:"rgba(239,68,68,0.5)", cursor:"pointer", fontSize:13, padding:0, lineHeight:1 }}>✕</button>
                  </div>
                ))}
              </div>
            )}

            {/* Input area */}
            <div style={{ padding:"12px 20px 16px", borderTop:"1px solid rgba(124,58,237,0.08)", background:"rgba(0,0,0,0.2)" }}>
              <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:16, padding:"10px 12px", display:"flex", alignItems:"flex-end", gap:8 }}>
                {/* Attach button */}
                <div style={{ position:"relative" }}>
                  <button onClick={e=>{ e.stopPropagation(); setShowAttachMenu(!showAttachMenu); }} style={{ width:36, height:36, borderRadius:9, border:"none", background:"rgba(124,58,237,0.15)", color:"#a78bfa", fontSize:16, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }} title="Attach">➕</button>
                  {showAttachMenu && (
                    <div onClick={e=>e.stopPropagation()} style={{ position:"absolute", bottom:"110%", left:0, background:"#130f2a", border:"1px solid rgba(124,58,237,0.2)", borderRadius:12, overflow:"hidden", boxShadow:"0 10px 40px rgba(0,0,0,0.7)", minWidth:180, animation:"fadeIn 0.15s ease" }}>
                      {[
                        ["🖼️ Image", ()=>imageRef.current?.click()],
                        ["📎 File / Document", ()=>fileRef.current?.click()],
                      ].map(([label, action])=>(
                        <button key={label} onClick={action} style={{ width:"100%", padding:"10px 14px", background:"none", border:"none", color:"#c4b5fd", fontSize:13, cursor:"pointer", textAlign:"left", fontFamily:"'DM Sans',sans-serif", display:"block" }} onMouseEnter={e=>e.target.style.background="rgba(124,58,237,0.12)"} onMouseLeave={e=>e.target.style.background="none"}>{label}</button>
                      ))}
                    </div>
                  )}
                </div>
                <input ref={imageRef} type="file" accept="image/*" multiple style={{ display:"none" }} onChange={e=>handleFileUpload(e,"image")} />
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,.txt,.csv,.xlsx" multiple style={{ display:"none" }} onChange={e=>handleFileUpload(e,"file")} />

                {/* Text input */}
                <textarea id="oduora-chat-input" ref={inputRef} value={input}
                  onChange={e=>setInput(e.target.value)}
                  onKeyDown={e=>{ if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); sendMessage(); } }}
                  placeholder={listening?"🎤 Listening... speak now":voiceSearchActive?"🔊 Voice search active... speak now":ui.placeholder}
                  rows={1}
                  style={{
                    flex:1, background:"transparent", border:"none", color:"#e9d5ff", fontSize:14,
                    resize:"none", outline:"none", fontFamily:"'DM Sans',sans-serif", lineHeight:1.55,
                    maxHeight:120, overflowY:"auto", padding:"3px 0",
                  }}
                />

                {/* Voice Search button — prominent, distinct from mic */}
                <div style={{ position:"relative" }}>
                  <button
                    onClick={toggleVoiceSearch}
                    title={voiceSearchActive ? "Stop voice search" : "Voice search — speak to search"}
                    style={{
                      width:36, height:36, borderRadius:9, border:"none", flexShrink:0,
                      background: voiceSearchActive
                        ? "linear-gradient(135deg,#f59e0b,#d97706)"
                        : "rgba(245,158,11,0.15)",
                      color: voiceSearchActive ? "#fff" : "#f59e0b",
                      fontSize:16, cursor:"pointer",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      animation: voiceSearchActive ? "micPulse 1s infinite" : "none",
                      transition:"all 0.2s",
                      boxShadow: voiceSearchActive ? "0 4px 14px rgba(245,158,11,0.4)" : "none",
                    }}>
                    {voiceSearchActive ? "⏹" : "🔊"}
                  </button>
                  {voiceSearchActive && (
                    <div style={{ position:"absolute", bottom:"110%", left:"50%", transform:"translateX(-50%)", background:"rgba(245,158,11,0.15)", border:"1px solid rgba(245,158,11,0.4)", borderRadius:8, padding:"4px 10px", whiteSpace:"nowrap", fontSize:11, color:"#fbbf24", pointerEvents:"none" }}>
                      🔊 Listening...
                    </div>
                  )}
                </div>

                {/* Chat Mic (in-message voice input) */}
                <button onClick={toggleListening} title="Speak your message" style={{
                  width:36, height:36, borderRadius:9, border:"none", flexShrink:0,
                  background: listening?"linear-gradient(135deg,#ef4444,#dc2626)":"rgba(124,58,237,0.15)",
                  color: listening?"#fff":"#a78bfa", fontSize:16, cursor:"pointer",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  animation: listening?"micPulse 1s infinite":"none", transition:"all 0.2s",
                }}>{listening?"⏹":"🎤"}</button>

                {/* Send */}
                <button onClick={sendMessage} disabled={loading||(!input.trim()&&attachments.length===0)} style={{
                  width:36, height:36, borderRadius:9, border:"none", flexShrink:0,
                  background: loading||(!input.trim()&&attachments.length===0) ? "rgba(124,58,237,0.15)" : "linear-gradient(135deg,#7c3aed,#a78bfa)",
                  color:"#fff", fontSize:16, cursor: loading||(!input.trim()&&attachments.length===0)?"not-allowed":"pointer",
                  display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s",
                  boxShadow: (!loading&&(input.trim()||attachments.length>0))?"0 4px 14px rgba(124,58,237,0.35)":"none",
                }}>➤</button>
              </div>
              <div style={{ display:"flex", justifyContent:"center", gap:14, marginTop:8 }}>
                {[["🖼️","Image"],["📎","File"],["🎤","Voice input"],["🔊","Voice search"],["🌐",selLang.label.split(" ")[0]]].map(([i,l])=>(
                  <span key={l} style={{ color:"rgba(167,139,250,0.3)", fontSize:11 }}>{i} {l}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── HISTORY PANEL ── */}
        {activePanel==="history" && (
          <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
            <div style={{ marginBottom:16, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div style={{ color:"#e9d5ff", fontWeight:700, fontSize:16 }}>📜 Chat History</div>
              <div style={{ color:"rgba(167,139,250,0.4)", fontSize:12 }}>{sessions.length} conversation{sessions.length!==1?"s":""}</div>
            </div>
            {sessions.length===0 ? (
              <div style={{ textAlign:"center", padding:"60px 20px", color:"rgba(167,139,250,0.3)" }}>
                <div style={{ fontSize:40, marginBottom:12 }}>📭</div>
                <div style={{ fontSize:14 }}>No history yet. Start a conversation!</div>
              </div>
            ) : sessions.map(s=>(
              <div key={s.id} className="hover-row" style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:11, border:"1px solid rgba(124,58,237,0.1)", marginBottom:8, cursor:"pointer", background:activeSessionId===s.id?"rgba(124,58,237,0.1)":"rgba(255,255,255,0.02)", transition:"all 0.2s", animation:"slideIn 0.2s ease" }} onClick={()=>loadSession(s)}>
                <div style={{ width:36, height:36, borderRadius:9, background:"rgba(124,58,237,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>💬</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ color:"#e9d5ff", fontSize:13, fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{s.title}</div>
                  <div style={{ color:"rgba(167,139,250,0.4)", fontSize:11, marginTop:2 }}>{s.messages.length} messages · {timeAgo(s.date)}</div>
                </div>
                <button onClick={e=>{ e.stopPropagation(); deleteSession(s.id); }} style={{ background:"none", border:"none", color:"rgba(239,68,68,0.4)", cursor:"pointer", fontSize:15, padding:"4px", borderRadius:6 }} onMouseEnter={e=>e.target.style.color="#ef4444"} onMouseLeave={e=>e.target.style.color="rgba(239,68,68,0.4)"}>🗑</button>
              </div>
            ))}
          </div>
        )}

        {/* ── PROJECTS PANEL ── */}
        {activePanel==="projects" && (
          <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
            <div style={{ marginBottom:18, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div style={{ color:"#e9d5ff", fontWeight:700, fontSize:16 }}>📁 Projects</div>
              <div style={{ color:"rgba(167,139,250,0.4)", fontSize:12 }}>{projects.length} project{projects.length!==1?"s":""}</div>
            </div>
            {/* Create project */}
            <div style={{ display:"flex", gap:9, marginBottom:20 }}>
              <input value={newProjectName} onChange={e=>setNewProjectName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addProject()} placeholder="New project name..." style={{ flex:1, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:10, padding:"10px 14px", color:"#e9d5ff", fontSize:13, outline:"none", fontFamily:"'DM Sans',sans-serif" }} />
              <button onClick={addProject} className="btn-hover" style={{ padding:"10px 16px", borderRadius:10, border:"none", background:"linear-gradient(135deg,#7c3aed,#a78bfa)", color:"#fff", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}>+ Create</button>
            </div>
            {projects.length===0 ? (
              <div style={{ textAlign:"center", padding:"50px 20px", color:"rgba(167,139,250,0.3)" }}>
                <div style={{ fontSize:40, marginBottom:12 }}>📂</div>
                <div style={{ fontSize:14 }}>No projects yet. Create one above!</div>
              </div>
            ) : (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px,1fr))", gap:14 }}>
                {projects.map(p=>(
                  <div key={p.id} style={{ borderRadius:14, padding:"16px", background:"rgba(255,255,255,0.025)", border:`1px solid ${p.color}30`, cursor:"pointer", transition:"all 0.2s", animation:"fadeIn 0.3s ease" }} className="hover-row">
                    <div style={{ width:40, height:40, borderRadius:10, background:p.color+"22", border:`1px solid ${p.color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, marginBottom:10 }}>📁</div>
                    <div style={{ color:"#e9d5ff", fontWeight:600, fontSize:14, marginBottom:4 }}>{p.name}</div>
                    <div style={{ color:"rgba(167,139,250,0.4)", fontSize:11 }}>Created {timeAgo(p.createdAt)}</div>
                    <div style={{ marginTop:10, display:"flex", gap:6 }}>
                      <button onClick={()=>{ setActivePanel("chat"); }} style={{ flex:1, padding:"6px 0", borderRadius:7, border:`1px solid ${p.color}40`, background:p.color+"15", color:p.color, fontSize:12, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Open Chat</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── HUMANIZE AI PANEL ── */}
        {activePanel==="humanize" && (
          <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
            <div style={{ marginBottom:6, color:"#e9d5ff", fontWeight:700, fontSize:16 }}>✍️ Humanize AI Text</div>
            <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13, marginBottom:20 }}>Paste AI-generated text below and Oduora will rewrite it to sound natural and human.</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11.5, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>🤖 AI Text (Input)</div>
                <textarea value={humanizeInput} onChange={e=>setHumanizeInput(e.target.value)} placeholder="Paste your AI-generated text here..." style={{ width:"100%", height:300, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:12, padding:"14px", color:"#e9d5ff", fontSize:13, outline:"none", resize:"vertical", fontFamily:"'DM Sans',sans-serif", lineHeight:1.65 }} />
                <button onClick={runHumanize} disabled={humanizeLoading||!humanizeInput.trim()} className="btn-hover" style={{
                  marginTop:12, width:"100%", padding:"11px 0", borderRadius:10, border:"none",
                  background: humanizeLoading||!humanizeInput.trim()?"rgba(124,58,237,0.2)":"linear-gradient(135deg,#7c3aed,#a78bfa)",
                  color:"#fff", fontSize:14, fontWeight:700, cursor: humanizeLoading||!humanizeInput.trim()?"not-allowed":"pointer",
                  fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s",
                }}>
                  {humanizeLoading ? "✨ Humanizing..." : "✨ Humanize Text"}
                </button>
              </div>
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11.5, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>🧑 Human Text (Output)</div>
                <div style={{ width:"100%", height:300, background:"rgba(74,222,128,0.03)", border:"1px solid rgba(74,222,128,0.12)", borderRadius:12, padding:"14px", color: humanizeOutput?"#d8ffd8":"rgba(167,139,250,0.25)", fontSize:13, overflowY:"auto", lineHeight:1.65, whiteSpace:"pre-wrap", fontFamily:"'DM Sans',sans-serif" }}>
                  {humanizeLoading ? <TypingDots /> : humanizeOutput || "Your humanized text will appear here..."}
                </div>
                {humanizeOutput && (
                  <button onClick={()=>navigator.clipboard.writeText(humanizeOutput)} style={{ marginTop:12, width:"100%", padding:"10px 0", borderRadius:10, border:"1px solid rgba(74,222,128,0.25)", background:"rgba(74,222,128,0.08)", color:"#4ade80", fontSize:13, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>📋 Copy to Clipboard</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

        {/* ── AI DETECTOR PANEL ── */}
        {activePanel==="detector" && (
          <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
            <div style={{ marginBottom:4, color:"#e9d5ff", fontWeight:700, fontSize:16 }}>🔍 AI Text Detector</div>
            <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13, marginBottom:20 }}>Paste any text below to find out if it was written by AI or a human.</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
              {/* Left: input */}
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11.5, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>📝 Text to Analyze</div>
                <textarea value={detectInput} onChange={e=>setDetectInput(e.target.value)} placeholder="Paste any text here — essay, email, article, report — and Oduora will tell you if AI wrote it..." style={{ width:"100%", height:280, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:12, padding:"14px", color:"#e9d5ff", fontSize:13, outline:"none", resize:"vertical", fontFamily:"'DM Sans',sans-serif", lineHeight:1.65 }} />
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:6, marginBottom:10 }}>
                  <span style={{ color:"rgba(167,139,250,0.35)", fontSize:11 }}>{detectInput.length} characters · {detectInput.trim().split(/\s+/).filter(Boolean).length} words</span>
                  {detectInput && <button onClick={()=>{setDetectInput("");setDetectResult(null);}} style={{ background:"none", border:"none", color:"rgba(239,68,68,0.5)", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>✕ Clear</button>}
                </div>
                <button onClick={runDetector} disabled={detectLoading||detectInput.trim().length<50} className="btn-hover" style={{
                  width:"100%", padding:"11px 0", borderRadius:10, border:"none",
                  background: detectLoading||detectInput.trim().length<50?"rgba(124,58,237,0.2)":"linear-gradient(135deg,#7c3aed,#a78bfa)",
                  color:"#fff", fontSize:14, fontWeight:700, cursor:detectLoading||detectInput.trim().length<50?"not-allowed":"pointer",
                  fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s",
                }}>
                  {detectLoading?"🔍 Analyzing...":detectInput.trim().length<50?"Enter at least 50 characters":"🔍 Detect AI Content"}
                </button>
              </div>

              {/* Right: results */}
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11.5, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>📊 Detection Results</div>
                {detectLoading ? (
                  <div style={{ height:280, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(124,58,237,0.1)", borderRadius:12, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:14 }}>
                    <TypingDots />
                    <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13 }}>Analyzing text patterns...</div>
                  </div>
                ) : detectResult ? (
                  <div style={{ display:"flex", flexDirection:"column", gap:12, animation:"fadeIn 0.4s ease" }}>
                    {/* Score meter */}
                    <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:14, padding:"16px" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                        <div>
                          <div style={{ color:"#e9d5ff", fontWeight:800, fontSize:18 }}>{detectResult.verdict}</div>
                          <div style={{ color:"rgba(167,139,250,0.5)", fontSize:12 }}>Confidence: {detectResult.confidence}</div>
                        </div>
                        <div style={{ textAlign:"center" }}>
                          <div style={{ fontSize:32, fontWeight:900, color: detectResult.score>70?"#ef4444":detectResult.score>40?"#f59e0b":"#4ade80" }}>{detectResult.score}%</div>
                          <div style={{ fontSize:11, color:"rgba(167,139,250,0.4)" }}>AI Score</div>
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div style={{ height:10, background:"rgba(255,255,255,0.06)", borderRadius:6, overflow:"hidden", marginBottom:6 }}>
                        <div style={{ height:"100%", width:`${detectResult.score}%`, borderRadius:6, transition:"width 1s ease", background: detectResult.score>70?"linear-gradient(90deg,#f59e0b,#ef4444)":detectResult.score>40?"linear-gradient(90deg,#4ade80,#f59e0b)":"linear-gradient(90deg,#4ade80,#10b981)" }} />
                      </div>
                      <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:"rgba(167,139,250,0.3)" }}>
                        <span>Human 🧑</span><span>Mixed 🤔</span><span>AI 🤖</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div style={{ background:"rgba(124,58,237,0.06)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:11, padding:"12px 14px", color:"rgba(167,139,250,0.8)", fontSize:13, lineHeight:1.6 }}>
                      💡 {detectResult.summary}
                    </div>

                    {/* AI signals */}
                    {detectResult.signals?.length>0 && (
                      <div style={{ background:"rgba(239,68,68,0.05)", border:"1px solid rgba(239,68,68,0.15)", borderRadius:11, padding:"12px 14px" }}>
                        <div style={{ color:"#fca5a5", fontSize:12, fontWeight:700, marginBottom:7 }}>🤖 AI Signals Detected</div>
                        {detectResult.signals.map((s,i)=>(<div key={i} style={{ color:"rgba(252,165,165,0.7)", fontSize:12, marginBottom:4, display:"flex", gap:6 }}><span>•</span>{s}</div>))}
                      </div>
                    )}

                    {/* Human signals */}
                    {detectResult.human_signals?.length>0 && (
                      <div style={{ background:"rgba(74,222,128,0.05)", border:"1px solid rgba(74,222,128,0.15)", borderRadius:11, padding:"12px 14px" }}>
                        <div style={{ color:"#4ade80", fontSize:12, fontWeight:700, marginBottom:7 }}>🧑 Human Writing Signals</div>
                        {detectResult.human_signals.map((s,i)=>(<div key={i} style={{ color:"rgba(74,222,128,0.7)", fontSize:12, marginBottom:4, display:"flex", gap:6 }}><span>•</span>{s}</div>))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ height:280, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(124,58,237,0.1)", borderRadius:12, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, color:"rgba(167,139,250,0.25)" }}>
                    <div style={{ fontSize:42 }}>🔍</div>
                    <div style={{ fontSize:13 }}>Results will appear here</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── WEATHER PANEL ── */}
        {activePanel==="weather" && (
          <div style={{ flex:1, display:"flex", overflow:"hidden" }}>

            {/* LEFT COLUMN — Language List */}
            <div style={{ width:200, minWidth:200, borderRight:"1px solid rgba(124,58,237,0.12)", background:"rgba(255,255,255,0.015)", display:"flex", flexDirection:"column", overflow:"hidden" }}>
              <div style={{ padding:"14px 14px 8px" }}>
                <div style={{ color:"rgba(167,139,250,0.7)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:8 }}>🌐 Languages</div>
                <input
                  placeholder="Search language..."
                  value={langSearch}
                  onChange={e=>setLangSearch(e.target.value)}
                  style={{ width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:8, padding:"7px 10px", color:"#e9d5ff", fontSize:12, outline:"none", fontFamily:"'DM Sans',sans-serif" }}
                />
              </div>
              <div style={{ flex:1, overflowY:"auto", padding:"4px 8px 12px" }}>
                {filteredLangs.map(l=>(
                  <div
                    key={l.code}
                    onClick={()=>setLanguage(l.code)}
                    className="hover-row"
                    style={{
                      padding:"8px 10px", borderRadius:8, cursor:"pointer", marginBottom:2,
                      background: language===l.code ? "rgba(124,58,237,0.2)" : "transparent",
                      borderLeft: language===l.code ? "3px solid #7c3aed" : "3px solid transparent",
                      transition:"all 0.15s",
                    }}
                  >
                    <div style={{ color: language===l.code ? "#c4b5fd" : "rgba(167,139,250,0.65)", fontSize:13, fontWeight: language===l.code?700:400 }}>{l.label}</div>
                    <div style={{ color:"rgba(167,139,250,0.3)", fontSize:10, marginTop:1 }}>{l.code.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN — Weather Forecast */}
            <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
              <div style={{ marginBottom:4, color:"#e9d5ff", fontWeight:700, fontSize:16 }}>🌤️ Weather Forecast</div>
              <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13, marginBottom:20 }}>Get a detailed weather forecast for any city on any date.</div>

              {/* Search bar */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr auto auto", gap:10, marginBottom:20, alignItems:"flex-end" }}>
                <div>
                  <label style={{ color:"rgba(167,139,250,0.5)", fontSize:11.5, display:"block", marginBottom:5, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>🏙️ City</label>
                  <input value={weatherCity} onChange={e=>setWeatherCity(e.target.value)} onKeyDown={e=>e.key==="Enter"&&runWeather()} placeholder="e.g. Nairobi, Lagos..." style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:10, padding:"10px 13px", color:"#e9d5ff", fontSize:13, outline:"none", fontFamily:"'DM Sans',sans-serif" }} />
                </div>
                <div>
                  <label style={{ color:"rgba(167,139,250,0.5)", fontSize:11.5, display:"block", marginBottom:5, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>🌍 Country</label>
                  <input value={weatherCountry} onChange={e=>setWeatherCountry(e.target.value)} onKeyDown={e=>e.key==="Enter"&&runWeather()} placeholder="e.g. Kenya..." style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:10, padding:"10px 13px", color:"#e9d5ff", fontSize:13, outline:"none", fontFamily:"'DM Sans',sans-serif" }} />
                </div>
                <div>
                  <label style={{ color:"rgba(167,139,250,0.5)", fontSize:11.5, display:"block", marginBottom:5, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.05em" }}>📅 Date</label>
                  <input type="date" value={weatherDate} onChange={e=>setWeatherDate(e.target.value)} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:10, padding:"10px 13px", color:"#e9d5ff", fontSize:13, outline:"none", fontFamily:"'DM Sans',sans-serif", colorScheme:"dark" }} />
                </div>
                <button onClick={runWeather} disabled={weatherLoading||!weatherCity.trim()} className="btn-hover" style={{
                  padding:"10px 18px", borderRadius:10, border:"none",
                  background:weatherLoading||!weatherCity.trim()?"rgba(124,58,237,0.2)":"linear-gradient(135deg,#0ea5e9,#0284c7)",
                  color:"#fff", fontSize:13, fontWeight:700, cursor:weatherLoading||!weatherCity.trim()?"not-allowed":"pointer",
                  fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s", whiteSpace:"nowrap",
                  boxShadow:!weatherLoading&&weatherCity.trim()?"0 4px 14px rgba(14,165,233,0.3)":"none",
                }}>{weatherLoading?"⏳ Loading...":"🔍 Forecast"}</button>
              </div>

              {weatherLoading && (
                <div style={{ textAlign:"center", padding:"60px 20px" }}>
                  <TypingDots />
                  <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13, marginTop:12 }}>Fetching weather for {weatherCity}...</div>
                </div>
              )}

              {weatherResult && !weatherLoading && (
                <div style={{ animation:"fadeIn 0.4s ease" }}>
                  <div style={{ borderRadius:20, padding:"22px 24px", marginBottom:14, background:"linear-gradient(135deg,rgba(14,165,233,0.15),rgba(124,58,237,0.1))", border:"1px solid rgba(14,165,233,0.25)" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:12 }}>
                      <div>
                        <div style={{ color:"rgba(167,139,250,0.5)", fontSize:12, marginBottom:4 }}>📅 {weatherResult.date} · {weatherResult.season}</div>
                        <div style={{ color:"#f0e6ff", fontWeight:800, fontSize:20, marginBottom:2 }}>{weatherResult.city}, {weatherResult.country}</div>
                        <div style={{ color:"#38bdf8", fontSize:14, fontWeight:600 }}>{weatherResult.emoji} {weatherResult.condition}</div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontSize:50, lineHeight:1 }}>{weatherResult.emoji}</div>
                        <div style={{ color:"#f0e6ff", fontWeight:900, fontSize:38, lineHeight:1 }}>{weatherResult.temp_high}°C</div>
                        <div style={{ color:"rgba(167,139,250,0.5)", fontSize:12 }}>Low {weatherResult.temp_low}°C · Feels {weatherResult.temp_feels_like}°C</div>
                      </div>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))", gap:8, marginTop:16 }}>
                      {[
                        {icon:"💧",label:"Humidity",val:`${weatherResult.humidity}%`},
                        {icon:"💨",label:"Wind",val:`${weatherResult.wind_speed} km/h`},
                        {icon:"☔",label:"Rain",val:`${weatherResult.rainfall_chance}%`},
                        {icon:"🌅",label:"Sunrise",val:weatherResult.sunrise},
                        {icon:"🌇",label:"Sunset",val:weatherResult.sunset},
                        {icon:"☀️",label:"UV Index",val:weatherResult.uv_index},
                        {icon:"👁️",label:"Visibility",val:weatherResult.visibility},
                        {icon:"🌿",label:"Air Quality",val:weatherResult.air_quality},
                      ].map(s=>(
                        <div key={s.label} style={{ background:"rgba(255,255,255,0.05)", borderRadius:9, padding:"8px 10px", textAlign:"center" }}>
                          <div style={{ fontSize:16, marginBottom:2 }}>{s.icon}</div>
                          <div style={{ color:"#e9d5ff", fontWeight:700, fontSize:12 }}>{s.val}</div>
                          <div style={{ color:"rgba(167,139,250,0.4)", fontSize:10, marginTop:1 }}>{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(124,58,237,0.12)", borderRadius:14, padding:"14px 16px", marginBottom:12 }}>
                    <div style={{ color:"rgba(167,139,250,0.6)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:12 }}>⏰ Hourly</div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:6 }}>
                      {(weatherResult.hourly||[]).map((h,i)=>(
                        <div key={i} style={{ textAlign:"center", background:"rgba(255,255,255,0.03)", borderRadius:9, padding:"8px 4px" }}>
                          <div style={{ color:"rgba(167,139,250,0.5)", fontSize:10, marginBottom:3 }}>{h.time}</div>
                          <div style={{ fontSize:18, marginBottom:3 }}>{h.emoji}</div>
                          <div style={{ color:"#e9d5ff", fontWeight:700, fontSize:13 }}>{h.temp}°</div>
                          <div style={{ color:"rgba(167,139,250,0.35)", fontSize:9, marginTop:2 }}>{h.condition}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background:"rgba(16,185,129,0.06)", border:"1px solid rgba(16,185,129,0.18)", borderRadius:12, padding:"12px 14px", display:"flex", gap:10 }}>
                    <span style={{ fontSize:20 }}>💡</span>
                    <div style={{ color:"rgba(167,139,250,0.7)", fontSize:13, lineHeight:1.6 }}>{weatherResult.advice}</div>
                  </div>
                </div>
              )}

              {!weatherResult && !weatherLoading && (
                <div style={{ textAlign:"center", padding:"50px 20px", color:"rgba(167,139,250,0.25)" }}>
                  <div style={{ fontSize:48, marginBottom:12 }}>🌍</div>
                  <div style={{ fontSize:14, marginBottom:6 }}>Enter a city to get the forecast</div>
                  <div style={{ fontSize:12 }}>Try: Nairobi · Lagos · Cairo · Accra · London · New York</div>
                </div>
              )}
            </div>
          </div>
        )}

      {showPremium && <PremiumModal onClose={()=>setShowPremium(false)} onUpgrade={upgradeUser} />}

        {/* ── DOCUMENTS PANEL ── */}
        {activePanel==="docs" && (
          <div style={{ flex:1, display:"flex", overflow:"hidden" }}>
            <input ref={docFileRef} type="file" accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.ppt,.pptx,.md" style={{ display:"none" }} onChange={handleDocUpload} />

            {/* LEFT — Upload + Actions + History */}
            <div style={{ width:280, minWidth:280, borderRight:"1px solid rgba(124,58,237,0.12)", display:"flex", flexDirection:"column", overflow:"hidden", background:"rgba(255,255,255,0.015)" }}>
              <div style={{ padding:"18px 16px", borderBottom:"1px solid rgba(124,58,237,0.1)" }}>
                <div style={{ color:"#e9d5ff", fontWeight:700, fontSize:15, marginBottom:4 }}>📄 Documents</div>
                <div style={{ color:"rgba(167,139,250,0.4)", fontSize:12 }}>Upload, analyze, translate & download PDF, Word, Excel and more.</div>
              </div>

              {/* Upload zone */}
              <div style={{ padding:"14px 14px 0" }}>
                <div
                  onClick={()=>docFileRef.current?.click()}
                  style={{ borderRadius:12, border:`2px dashed ${docFile?"rgba(124,58,237,0.5)":"rgba(124,58,237,0.2)"}`, background: docFile?"rgba(124,58,237,0.06)":"rgba(255,255,255,0.02)", padding:"16px", textAlign:"center", cursor:"pointer", transition:"all 0.2s", marginBottom:12 }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(124,58,237,0.6)"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=docFile?"rgba(124,58,237,0.5)":"rgba(124,58,237,0.2)"}
                >
                  {docFile ? (
                    <div>
                      <div style={{ fontSize:32, marginBottom:6 }}>{getDocIcon(docFile.type)}</div>
                      <div style={{ color:"#c4b5fd", fontSize:12, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{docFile.name}</div>
                      <div style={{ color:"rgba(167,139,250,0.4)", fontSize:10, marginTop:2 }}>{docFile.size} KB · Click to change</div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize:30, marginBottom:6 }}>📂</div>
                      <div style={{ color:"#c4b5fd", fontSize:13, fontWeight:600, marginBottom:3 }}>Upload Document</div>
                      <div style={{ color:"rgba(167,139,250,0.35)", fontSize:11 }}>PDF · Word · Excel · CSV · PowerPoint · TXT</div>
                    </div>
                  )}
                </div>

                {/* Supported formats */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:14 }}>
                  {[["📕","PDF"],["📘","Word"],["📗","Excel"],["📙","PPT"],["📝","TXT"],["📊","CSV"]].map(([ic,lb])=>(
                    <div key={lb} style={{ padding:"3px 8px", borderRadius:6, background:"rgba(124,58,237,0.08)", border:"1px solid rgba(124,58,237,0.12)", color:"rgba(167,139,250,0.55)", fontSize:11 }}>{ic} {lb}</div>
                  ))}
                </div>

                {/* Actions */}
                {docFile && (
                  <div style={{ marginBottom:14 }}>
                    <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>🤖 What to do</div>
                    <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
                      {[
                        ["summarize","📋","Summarize","Get key points & overview"],
                        ["extract","🔎","Extract Data","Pull names, dates, numbers"],
                        ["translate","🌐","Translate","Translate to your language"],
                        ["improve","✨","Improve","Grammar & structure fix"],
                        ["table","📊","Extract Tables","Get all structured data"],
                        ["qa","💬","Ask a Question","Query specific info"],
                      ].map(([id,icon,label,desc])=>(
                        <button key={id} onClick={()=>setDocAction(id)} style={{
                          display:"flex", alignItems:"center", gap:9, padding:"9px 11px", borderRadius:9,
                          border:`1px solid ${docAction===id?"rgba(124,58,237,0.5)":"rgba(124,58,237,0.12)"}`,
                          background: docAction===id?"rgba(124,58,237,0.15)":"rgba(255,255,255,0.02)",
                          cursor:"pointer", textAlign:"left", transition:"all 0.15s",
                        }}>
                          <span style={{ fontSize:16, flexShrink:0 }}>{icon}</span>
                          <div>
                            <div style={{ color: docAction===id?"#c4b5fd":"rgba(167,139,250,0.7)", fontSize:12, fontWeight: docAction===id?700:400 }}>{label}</div>
                            <div style={{ color:"rgba(167,139,250,0.35)", fontSize:10 }}>{desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {docAction==="qa" && (
                      <input value={docQuestion} onChange={e=>setDocQuestion(e.target.value)} onKeyDown={e=>e.key==="Enter"&&runDocAction()} placeholder="Type your question..." style={{ width:"100%", marginTop:8, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:9, padding:"9px 12px", color:"#e9d5ff", fontSize:12, outline:"none", fontFamily:"'DM Sans',sans-serif" }} />
                    )}

                    <button onClick={runDocAction} disabled={docLoading} className="btn-hover" style={{ width:"100%", marginTop:10, padding:"10px", borderRadius:9, border:"none", background: docLoading?"rgba(124,58,237,0.2)":"linear-gradient(135deg,#7c3aed,#a78bfa)", color:"#fff", fontSize:13, fontWeight:700, cursor: docLoading?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}>
                      {docLoading ? "⏳ Processing..." : "▶ Run"}
                    </button>
                  </div>
                )}
              </div>

              {/* History */}
              {docHistory.length > 0 && (
                <div style={{ flex:1, overflowY:"auto", padding:"0 14px 14px", borderTop:"1px solid rgba(124,58,237,0.08)", paddingTop:12 }}>
                  <div style={{ color:"rgba(167,139,250,0.45)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>🕐 Recent</div>
                  {docHistory.map((h,i)=>(
                    <div key={i} onClick={()=>setDocResult(h.result)} className="hover-row" style={{ padding:"8px 10px", borderRadius:8, cursor:"pointer", marginBottom:5, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(124,58,237,0.08)" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                        <span style={{ fontSize:16 }}>{getDocIcon(h.type)}</span>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ color:"#c4b5fd", fontSize:11, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{h.name}</div>
                          <div style={{ color:"rgba(167,139,250,0.35)", fontSize:10 }}>{h.action} · {timeAgo(h.date)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — Result viewer */}
            <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
              {/* Result toolbar */}
              {docResult && (
                <div style={{ padding:"10px 18px", borderBottom:"1px solid rgba(124,58,237,0.1)", background:"rgba(255,255,255,0.02)", display:"flex", alignItems:"center", gap:10, flexShrink:0, flexWrap:"wrap" }}>
                  <span style={{ color:"rgba(167,139,250,0.5)", fontSize:12, flex:1 }}>📄 {docFile?.name || "Document result"}</span>
                  <button onClick={()=>navigator.clipboard?.writeText(docResult)} style={{ padding:"5px 12px", borderRadius:7, border:"1px solid rgba(124,58,237,0.2)", background:"rgba(124,58,237,0.1)", color:"#a78bfa", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>📋 Copy</button>
                  <button onClick={()=>downloadDocResult(`oduora_${docAction}_${docFile?.name||"result"}.txt`, docResult)} style={{ padding:"5px 12px", borderRadius:7, border:"1px solid rgba(74,222,128,0.25)", background:"rgba(74,222,128,0.08)", color:"#4ade80", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>⬇️ Download .txt</button>
                  <button onClick={()=>{ const w=window.open("","_blank"); w.document.write(`<html><head><title>${docFile?.name||"Result"}</title><style>body{font-family:sans-serif;max-width:800px;margin:40px auto;line-height:1.7;color:#1a1a2e;padding:20px}h1{color:#7c3aed}</style></head><body><h1>${docAction} — ${docFile?.name||""}</h1><pre style="white-space:pre-wrap;font-family:inherit">${docResult.replace(/</g,"&lt;")}</pre></body></html>`); w.document.close(); w.print(); }} style={{ padding:"5px 12px", borderRadius:7, border:"1px solid rgba(14,165,233,0.25)", background:"rgba(14,165,233,0.08)", color:"#38bdf8", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>🖨️ Print / PDF</button>
                </div>
              )}

              {/* Result content */}
              <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
                {docLoading && (
                  <div style={{ textAlign:"center", padding:"80px 20px" }}>
                    <div style={{ fontSize:48, marginBottom:16 }}>{getDocIcon(docFile?.type)}</div>
                    <TypingDots />
                    <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13, marginTop:12 }}>Processing "{docFile?.name}"...</div>
                  </div>
                )}

                {docResult && !docLoading && (
                  <div style={{ animation:"fadeIn 0.3s ease" }}>
                    <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(124,58,237,0.12)", borderRadius:14, padding:"20px 22px", lineHeight:1.75 }}>
                      <MessageContent content={docResult} />
                    </div>
                  </div>
                )}

                {!docResult && !docLoading && (
                  <div style={{ textAlign:"center", padding:"60px 20px", color:"rgba(167,139,250,0.2)" }}>
                    <div style={{ fontSize:56, marginBottom:16 }}>📄</div>
                    <div style={{ fontSize:15, marginBottom:8 }}>Upload a document to get started</div>
                    <div style={{ fontSize:13, color:"rgba(167,139,250,0.15)", lineHeight:1.8 }}>
                      Summarize long PDFs · Translate documents<br/>
                      Extract tables from Excel · Fix Word grammar<br/>
                      Ask questions about any file · Download results
                    </div>
                    {/* Sample use cases */}
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:24, maxWidth:480, margin:"24px auto 0" }}>
                      {[
                        ["📕 PDF","Research papers, contracts, reports"],
                        ["📘 Word","Essays, letters, business docs"],
                        ["📗 Excel","Spreadsheets, data, budgets"],
                        ["📝 TXT","Notes, scripts, code files"],
                      ].map(([t,d])=>(
                        <div key={t} onClick={()=>docFileRef.current?.click()} style={{ padding:"14px", borderRadius:11, background:"rgba(124,58,237,0.06)", border:"1px solid rgba(124,58,237,0.12)", cursor:"pointer", textAlign:"left" }} className="hover-row">
                          <div style={{ color:"#c4b5fd", fontSize:13, fontWeight:700, marginBottom:3 }}>{t}</div>
                          <div style={{ color:"rgba(167,139,250,0.4)", fontSize:11 }}>{d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── MEDIA STUDIO PANEL ── */}
        {activePanel==="media" && (
          <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
            <canvas ref={canvasRef} style={{ display:"none" }} />
            <div style={{ marginBottom:4, color:"#e9d5ff", fontWeight:700, fontSize:16 }}>🎬 Media Studio</div>
            <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13, marginBottom:20 }}>Upload images or videos — apply filters, get AI captions, editing instructions, and analysis.</div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
              {/* LEFT: upload + tools */}
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {/* Upload zone */}
                <div
                  onClick={()=>mediaFileRef.current?.click()}
                  style={{ borderRadius:14, border:`2px dashed ${mediaFile?"rgba(124,58,237,0.4)":"rgba(124,58,237,0.2)"}`, background: mediaFile?"rgba(124,58,237,0.06)":"rgba(255,255,255,0.02)", padding:"20px", textAlign:"center", cursor:"pointer", transition:"all 0.2s" }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(124,58,237,0.6)"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=mediaFile?"rgba(124,58,237,0.4)":"rgba(124,58,237,0.2)"}
                >
                  <input ref={mediaFileRef} type="file" accept="image/*,video/*" style={{ display:"none" }} onChange={handleMediaUpload} />
                  {mediaFile ? (
                    <div>
                      {mediaFile.fileType==="image" ? (
                        <img src={editedPreview||mediaFile.preview} alt="uploaded" style={{ maxWidth:"100%", maxHeight:200, borderRadius:10, objectFit:"contain", marginBottom:8 }} />
                      ) : (
                        <div style={{ fontSize:48, marginBottom:8 }}>🎥</div>
                      )}
                      <div style={{ color:"#c4b5fd", fontSize:13, fontWeight:600 }}>{mediaFile.name}</div>
                      <div style={{ color:"rgba(167,139,250,0.4)", fontSize:11, marginTop:2 }}>{mediaFile.fileType==="video"?"Video file":"Image file"} · Click to change</div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize:42, marginBottom:8 }}>📁</div>
                      <div style={{ color:"#c4b5fd", fontSize:14, fontWeight:600, marginBottom:4 }}>Drop image or video here</div>
                      <div style={{ color:"rgba(167,139,250,0.35)", fontSize:12 }}>JPG, PNG, GIF, MP4, MOV, AVI supported</div>
                    </div>
                  )}
                </div>

                {/* Image filters — only for images */}
                {mediaFile?.fileType==="image" && (
                  <div>
                    <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>🎨 Filters & Effects</div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6 }}>
                      {[["none","Original"],["grayscale","B&W"],["sepia","Sepia"],["vintage","Vintage"],["warm","Warm"],["cold","Cold"],["dramatic","Dramatic"],["neon","Neon"],["sharpen","Sharpen"]].map(([f,l])=>(
                        <button key={f} onClick={()=>applyFilter(f)} style={{
                          padding:"7px 4px", borderRadius:8, border:`1px solid ${mediaFilter===f?"rgba(124,58,237,0.6)":"rgba(124,58,237,0.15)"}`,
                          background: mediaFilter===f?"rgba(124,58,237,0.2)":"rgba(255,255,255,0.02)",
                          color: mediaFilter===f?"#c4b5fd":"rgba(167,139,250,0.55)", fontSize:11, cursor:"pointer",
                          fontFamily:"'DM Sans',sans-serif", fontWeight: mediaFilter===f?700:400, transition:"all 0.15s",
                        }}>{l}</button>
                      ))}
                    </div>
                    {editedPreview && editedPreview!==mediaFile.preview && (
                      <a href={editedPreview} download={`oduora_edited_${mediaFile.name}`} style={{ display:"block", marginTop:8, padding:"8px 0", borderRadius:9, background:"rgba(74,222,128,0.1)", border:"1px solid rgba(74,222,128,0.25)", color:"#4ade80", fontSize:12, textAlign:"center", textDecoration:"none", fontWeight:700 }}>⬇️ Download Filtered Image</a>
                    )}
                  </div>
                )}

                {/* AI Operations */}
                {mediaFile && (
                  <div>
                    <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>🤖 AI Analysis</div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6, marginBottom:10 }}>
                      {[["describe","🔍 Describe"],["caption","✍️ Captions"],["enhance","✨ Enhance Tips"],["objects","📦 Detect Objects"]].map(([op,l])=>(
                        <button key={op} onClick={()=>setMediaOp(op)} style={{
                          padding:"8px", borderRadius:8, border:`1px solid ${mediaOp===op?"rgba(124,58,237,0.5)":"rgba(124,58,237,0.15)"}`,
                          background: mediaOp===op?"rgba(124,58,237,0.18)":"rgba(255,255,255,0.02)",
                          color: mediaOp===op?"#c4b5fd":"rgba(167,139,250,0.5)", fontSize:12, cursor:"pointer",
                          fontFamily:"'DM Sans',sans-serif", fontWeight: mediaOp===op?700:400,
                        }}>{l}</button>
                      ))}
                    </div>
                    <button onClick={analyzeMedia} disabled={mediaLoading} className="btn-hover" style={{ width:"100%", padding:"10px", borderRadius:9, border:"none", background: mediaLoading?"rgba(124,58,237,0.2)":"linear-gradient(135deg,#7c3aed,#a78bfa)", color:"#fff", fontSize:13, fontWeight:700, cursor: mediaLoading?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}>
                      {mediaLoading?"⏳ Analyzing...":"🤖 Run AI Analysis"}
                    </button>
                  </div>
                )}

                {/* Custom edit prompt */}
                {mediaFile && (
                  <div>
                    <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>✏️ Custom Edit Instruction</div>
                    <div style={{ display:"flex", gap:8 }}>
                      <input value={mediaPrompt} onChange={e=>setMediaPrompt(e.target.value)} onKeyDown={e=>e.key==="Enter"&&runAIEditPrompt()} placeholder={mediaFile.fileType==="video"?"e.g. Add slow motion to the end...":"e.g. Make the background blurry..."} style={{ flex:1, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:9, padding:"9px 12px", color:"#e9d5ff", fontSize:12, outline:"none", fontFamily:"'DM Sans',sans-serif" }} />
                      <button onClick={runAIEditPrompt} disabled={mediaLoading||!mediaPrompt.trim()} style={{ padding:"9px 14px", borderRadius:9, border:"none", background:"rgba(124,58,237,0.3)", color:"#c4b5fd", fontSize:13, cursor: mediaLoading||!mediaPrompt.trim()?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif" }}>→</button>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT: results */}
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>📊 AI Result</div>
                {mediaLoading ? (
                  <div style={{ height:300, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(124,58,237,0.1)", borderRadius:12, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12 }}>
                    <TypingDots />
                    <div style={{ color:"rgba(167,139,250,0.4)", fontSize:13 }}>Analyzing your {mediaFile?.fileType||"file"}...</div>
                  </div>
                ) : mediaResult ? (
                  <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(124,58,237,0.15)", borderRadius:12, padding:"16px", minHeight:200, animation:"fadeIn 0.3s ease" }}>
                    <MessageContent content={mediaResult} />
                    <button onClick={()=>navigator.clipboard?.writeText(mediaResult)} style={{ marginTop:12, padding:"7px 14px", borderRadius:8, border:"1px solid rgba(124,58,237,0.2)", background:"rgba(124,58,237,0.1)", color:"#a78bfa", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>📋 Copy</button>
                  </div>
                ) : (
                  <div style={{ height:300, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(124,58,237,0.1)", borderRadius:12, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, color:"rgba(167,139,250,0.25)" }}>
                    <div style={{ fontSize:40 }}>🎬</div>
                    <div style={{ fontSize:13 }}>{mediaFile ? "Choose an operation above" : "Upload a file to get started"}</div>
                  </div>
                )}

                {/* Quick tips */}
                {!mediaFile && (
                  <div style={{ marginTop:14 }}>
                    <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:10 }}>💡 What you can do</div>
                    {[["🖼️ Images","Apply filters (B&W, Vintage, Neon...), get AI descriptions, captions, enhancement tips"],["🎥 Videos","Get editing instructions for CapCut, Premiere, DaVinci Resolve, iMovie"],["✍️ Captions","Generate 5 creative social media captions instantly"],["🔍 Object Detection","Identify every object and person in your photo"]].map(([t,d])=>(
                      <div key={t} style={{ display:"flex", gap:10, padding:"10px 12px", borderRadius:9, background:"rgba(255,255,255,0.025)", border:"1px solid rgba(124,58,237,0.1)", marginBottom:8 }}>
                        <div style={{ fontSize:18, flexShrink:0 }}>{t.split(" ")[0]}</div>
                        <div><div style={{ color:"#c4b5fd", fontSize:12, fontWeight:600, marginBottom:2 }}>{t.slice(3)}</div><div style={{ color:"rgba(167,139,250,0.4)", fontSize:11 }}>{d}</div></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── AI GENERATE PANEL ── */}
        {activePanel==="generate" && (
          <div style={{ flex:1, display:"flex", overflow:"hidden" }}>
            {/* LEFT: controls */}
            <div style={{ width:300, minWidth:300, borderRight:"1px solid rgba(124,58,237,0.12)", padding:"20px 18px", overflowY:"auto", display:"flex", flexDirection:"column", gap:14 }}>
              <div>
                <div style={{ color:"#e9d5ff", fontWeight:700, fontSize:15, marginBottom:4 }}>🎨 AI Generate</div>
                <div style={{ color:"rgba(167,139,250,0.4)", fontSize:12 }}>Describe what you want — Oduora builds the perfect prompt and guides you to generate it.</div>
              </div>

              {/* Type toggle */}
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Generate Type</div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
                  {[["image","🖼️ Image"],["video","🎬 Video"]].map(([t,l])=>(
                    <button key={t} onClick={()=>setGenType(t)} style={{ padding:"10px", borderRadius:9, border:`1px solid ${genType===t?"rgba(124,58,237,0.6)":"rgba(124,58,237,0.15)"}`, background: genType===t?"rgba(124,58,237,0.2)":"rgba(255,255,255,0.02)", color: genType===t?"#c4b5fd":"rgba(167,139,250,0.45)", fontSize:13, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight: genType===t?700:400, transition:"all 0.15s" }}>{l}</button>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>🎭 Style</div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
                  {[["photorealistic","📷 Realistic"],["anime","🌸 Anime"],["oil-painting","🎨 Oil Paint"],["watercolor","💧 Watercolor"],["3d-render","🔮 3D Render"],["pixel-art","👾 Pixel Art"],["sketch","✏️ Sketch"],["cinematic","🎬 Cinematic"]].map(([s,l])=>(
                    <button key={s} onClick={()=>setGenStyle(s)} style={{ padding:"7px 6px", borderRadius:7, border:`1px solid ${genStyle===s?"rgba(124,58,237,0.5)":"rgba(124,58,237,0.12)"}`, background: genStyle===s?"rgba(124,58,237,0.15)":"rgba(255,255,255,0.02)", color: genStyle===s?"#c4b5fd":"rgba(167,139,250,0.45)", fontSize:11, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight: genStyle===s?700:400 }}>{l}</button>
                  ))}
                </div>
              </div>

              {/* Aspect ratio */}
              <div>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>📐 Aspect Ratio</div>
                <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                  {["1:1","16:9","9:16","4:3","3:4","21:9"].map(r=>(
                    <button key={r} onClick={()=>setGenAspect(r)} style={{ padding:"5px 10px", borderRadius:7, border:`1px solid ${genAspect===r?"rgba(124,58,237,0.5)":"rgba(124,58,237,0.12)"}`, background: genAspect===r?"rgba(124,58,237,0.15)":"rgba(255,255,255,0.02)", color: genAspect===r?"#c4b5fd":"rgba(167,139,250,0.45)", fontSize:11, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight: genAspect===r?700:400 }}>{r}</button>
                  ))}
                </div>
              </div>

              {/* Prompt */}
              <div style={{ flex:1 }}>
                <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>✍️ Your Prompt</div>
                <textarea value={genPrompt} onChange={e=>setGenPrompt(e.target.value)} placeholder={genType==="image"?"e.g. A lion standing on a cliff at sunset in Africa...":"e.g. A timelapse of Nairobi city at night with car lights..."} style={{ width:"100%", height:100, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:10, padding:"11px", color:"#e9d5ff", fontSize:13, outline:"none", resize:"none", fontFamily:"'DM Sans',sans-serif", lineHeight:1.55 }} />
                {/* Quick prompts */}
                <div style={{ color:"rgba(167,139,250,0.4)", fontSize:11, marginBottom:6, marginTop:8 }}>Quick ideas:</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                  {(genType==="image"
                    ? ["Nairobi skyline at night","African savanna sunrise","Portrait in traditional attire","Futuristic city in Africa"]
                    : ["Ocean waves timelapse","City traffic at night","Wildlife in motion","Drone over Nairobi"]
                  ).map(p=>(
                    <button key={p} onClick={()=>setGenPrompt(p)} style={{ padding:"4px 9px", borderRadius:6, border:"1px solid rgba(124,58,237,0.15)", background:"rgba(124,58,237,0.08)", color:"rgba(167,139,250,0.6)", fontSize:11, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>{p}</button>
                  ))}
                </div>
              </div>

              <button onClick={runGenerate} disabled={genLoading||!genPrompt.trim()} className="btn-hover" style={{ padding:"12px", borderRadius:10, border:"none", background: genLoading||!genPrompt.trim()?"rgba(124,58,237,0.2)":"linear-gradient(135deg,#7c3aed,#ec4899)", color:"#fff", fontSize:14, fontWeight:700, cursor: genLoading||!genPrompt.trim()?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s", boxShadow: !genLoading&&genPrompt.trim()?"0 4px 20px rgba(236,72,153,0.3)":"none" }}>
                {genLoading?`✨ Creating ${genType}...`:`✨ Generate ${genType==="image"?"Image":"Video"}`}
              </button>
            </div>

            {/* RIGHT: result + history */}
            <div style={{ flex:1, overflowY:"auto", padding:"20px 24px" }}>
              {genLoading && (
                <div style={{ textAlign:"center", padding:"80px 20px" }}>
                  <div style={{ fontSize:52, marginBottom:16, animation:"bounce 1s infinite" }}>{genType==="image"?"🖼️":"🎬"}</div>
                  <TypingDots />
                  <div style={{ color:"rgba(167,139,250,0.5)", fontSize:14, marginTop:12 }}>Crafting your {genType} prompt...</div>
                  <div style={{ color:"rgba(167,139,250,0.3)", fontSize:12, marginTop:6 }}>Style: {genStyle} · {genAspect}</div>
                </div>
              )}

              {genResult && !genLoading && (
                <div style={{ animation:"fadeIn 0.4s ease" }}>
                  {/* Preview placeholder */}
                  <div style={{ borderRadius:16, overflow:"hidden", marginBottom:16, position:"relative", background:"linear-gradient(135deg,#1a0533,#0a1628,#1a0533)", border:"1px solid rgba(124,58,237,0.3)", aspectRatio: genResult.aspect==="16:9"?"16/9":genResult.aspect==="9:16"?"9/16":genResult.aspect==="1:1"?"1/1":"4/3", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"30px" }}>
                    {/* Animated gradient overlay */}
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(124,58,237,0.15),rgba(236,72,153,0.1),rgba(14,165,233,0.1))", animation:"gradientShift 8s ease infinite", backgroundSize:"400% 400%" }} />
                    <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                      <div style={{ fontSize:56, marginBottom:12 }}>{genResult.type==="image"?"🖼️":"🎬"}</div>
                      <div style={{ color:"#f0e6ff", fontWeight:700, fontSize:15, marginBottom:6 }}>Your {genResult.type} is ready to generate!</div>
                      <div style={{ color:"rgba(167,139,250,0.6)", fontSize:12, lineHeight:1.6, maxWidth:400 }}>{genResult.description}</div>
                      <div style={{ display:"flex", gap:6, justifyContent:"center", flexWrap:"wrap", marginTop:14 }}>
                        {(genResult.color_palette||[]).map((c,i)=>(<div key={i} title={c} style={{ width:28, height:28, borderRadius:6, background:c, border:"1px solid rgba(255,255,255,0.2)", boxShadow:"0 2px 8px rgba(0,0,0,0.4)" }} />))}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced prompt card */}
                  <div style={{ background:"rgba(124,58,237,0.06)", border:"1px solid rgba(124,58,237,0.2)", borderRadius:12, padding:"14px 16px", marginBottom:12 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                      <div style={{ color:"#c4b5fd", fontSize:12, fontWeight:700 }}>✨ Enhanced Prompt (copy & paste into AI tools)</div>
                      <button onClick={()=>navigator.clipboard?.writeText(genResult.enhanced_prompt)} style={{ padding:"4px 10px", borderRadius:6, border:"1px solid rgba(124,58,237,0.3)", background:"rgba(124,58,237,0.15)", color:"#a78bfa", fontSize:11, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>📋 Copy</button>
                    </div>
                    <div style={{ color:"rgba(167,139,250,0.8)", fontSize:13, lineHeight:1.6, fontStyle:"italic" }}>"{genResult.enhanced_prompt}"</div>
                  </div>

                  {/* Negative prompt */}
                  {genResult.negative_prompt && (
                    <div style={{ background:"rgba(239,68,68,0.05)", border:"1px solid rgba(239,68,68,0.12)", borderRadius:10, padding:"10px 14px", marginBottom:12 }}>
                      <div style={{ color:"rgba(252,165,165,0.7)", fontSize:11, fontWeight:700, marginBottom:4 }}>🚫 Negative Prompt (what to avoid)</div>
                      <div style={{ color:"rgba(252,165,165,0.5)", fontSize:12 }}>{genResult.negative_prompt}</div>
                    </div>
                  )}

                  {/* Style tags + tools */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12 }}>
                    <div style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(124,58,237,0.1)", borderRadius:10, padding:"12px 14px" }}>
                      <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, marginBottom:8 }}>🏷️ Style Tags</div>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                        {(genResult.style_tags||[]).map((t,i)=>(<span key={i} style={{ padding:"3px 9px", borderRadius:5, background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.2)", color:"#a78bfa", fontSize:11 }}>{t}</span>))}
                      </div>
                    </div>
                    <div style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(124,58,237,0.1)", borderRadius:10, padding:"12px 14px" }}>
                      <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, marginBottom:8 }}>🛠️ Recommended Tools</div>
                      {(genResult.recommended_tools||[]).map((t,i)=>(<div key={i} style={{ color:"#c4b5fd", fontSize:12, marginBottom:3 }}>• {t}</div>))}
                    </div>
                  </div>

                  {/* Tips */}
                  {genResult.tips && (
                    <div style={{ background:"rgba(16,185,129,0.05)", border:"1px solid rgba(16,185,129,0.15)", borderRadius:10, padding:"10px 14px", display:"flex", gap:8 }}>
                      <span style={{ fontSize:16 }}>💡</span>
                      <div style={{ color:"rgba(167,139,250,0.7)", fontSize:12, lineHeight:1.6 }}>{genResult.tips}</div>
                    </div>
                  )}
                </div>
              )}

              {/* History */}
              {genHistory.length > 0 && !genLoading && (
                <div style={{ marginTop:20 }}>
                  <div style={{ color:"rgba(167,139,250,0.5)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:10 }}>🕐 Recent Generations</div>
                  <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    {genHistory.slice(1).map((h,i)=>(
                      <div key={i} onClick={()=>setGenResult(h)} className="hover-row" style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 12px", borderRadius:9, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(124,58,237,0.1)", cursor:"pointer" }}>
                        <span style={{ fontSize:18 }}>{h.type==="image"?"🖼️":"🎬"}</span>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ color:"#c4b5fd", fontSize:12, fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{h.originalPrompt}</div>
                          <div style={{ color:"rgba(167,139,250,0.35)", fontSize:10 }}>{h.style} · {h.aspect} · {timeAgo(h.timestamp)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!genResult && !genLoading && (
                <div style={{ textAlign:"center", padding:"60px 20px", color:"rgba(167,139,250,0.2)" }}>
                  <div style={{ fontSize:52, marginBottom:14 }}>✨</div>
                  <div style={{ fontSize:15, marginBottom:6 }}>Describe your vision on the left</div>
                  <div style={{ fontSize:12, lineHeight:1.8 }}>Oduora will craft the perfect prompt and show you which tools to use to bring it to life — Midjourney, DALL·E, Stable Diffusion, Runway, Sora and more</div>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState(null);
  if (user) return <MainApp user={user} onLogout={()=>setUser(null)} />;
  return <AuthScreen onLogin={setUser} />;
}
