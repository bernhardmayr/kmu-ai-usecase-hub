const STORAGE_KEY = "kmu-ai-usecase-hub-v1";

const seedCases = [
  {
    id: "invoice-check", short: "ER", title: "Eingangsrechnungen auslesen und prüfen", area: "Finanzen", status: "Demo verfügbar",
    description: "Rechnungsdaten werden heute manuell übertragen und gegen Bestellungen geprüft.",
    aiOutput: "Extrahierte Rechnungsnummer, Lieferant, Datum, Nettobetrag, Umsatzsteuer und erkannte Abweichungen.",
    action: "Sachbearbeitung erhält einen strukturierten Prüfvorschlag. Auffällige Rechnungen werden zur Freigabe markiert.",
    impact: "Weniger Erfassungsaufwand, schnellere Freigaben und weniger Übertragungsfehler.",
    businessMetric: "Bearbeitungszeit je Rechnung von 8 auf 3 Minuten; Fehlerquote unter 2 %.",
    data: "PDF-Rechnungen, Bestellnummern, Lieferantenstamm und freigegebene Bestellungen.",
    improvement: "Korrekturen der Sachbearbeitung werden als Feedback gespeichert und monatlich ausgewertet.",
    risks: "Falsch erkannte Beträge; uneinheitliche Rechnungsformate; personenbezogene Daten. Menschliche Freigabe bleibt erforderlich.",
    proxyMetric: "Anteil automatisch vollständig erkannter Pflichtfelder.",
    mlMetric: "Feldgenauigkeit, Precision/Recall der Abweichungserkennung und Laufzeit.",
    value: 5, feasibility: 4, demoType: "Dokumentenanalyse",
    sampleInput: "RECHNUNG 2026-0815\nMuster Bürobedarf GmbH\nBestellung: PO-4711\nDatum: 18.08.2026\nNetto: 1.250,00 EUR\nMwSt. 19 %: 237,50 EUR\nGesamt: 1.487,50 EUR\nZahlbar innerhalb von 14 Tagen.",
    sampleOutput: "✓ Rechnungsnummer: 2026-0815\n✓ Lieferant: Muster Bürobedarf GmbH\n✓ Bestellnummer: PO-4711\n✓ Bruttobetrag: 1.487,50 €\n⚠ Abweichung: Rechnungsbetrag liegt 87,50 € über dem hinterlegten Bestellwert.\n\nEmpfohlene Aktion: Rechnung zur manuellen Prüfung markieren."
  },
  {
    id: "customer-mail", short: "KA", title: "Kundenanfragen klassifizieren und beantworten", area: "Kundenservice", status: "Demo verfügbar",
    description: "Eingehende E-Mails müssen gelesen, kategorisiert und an die richtige Stelle weitergeleitet werden.",
    aiOutput: "Kategorie, Dringlichkeit, Zusammenfassung und ein editierbarer Antwortvorschlag.",
    action: "Die Anfrage wird dem passenden Team vorgeschlagen; Mitarbeitende prüfen und versenden die Antwort.",
    impact: "Kürzere Antwortzeiten, konsistentere Kommunikation und weniger interne Weiterleitungen.",
    businessMetric: "Erstreaktionszeit um 50 % reduzieren; Lösungsquote beim Erstkontakt erhöhen.",
    data: "Kunden-E-Mails, Produktkategorien, FAQ, Serviceleitfäden und freigegebene Textbausteine.",
    improvement: "Angenommene und überarbeitete Antworten verbessern Prompt, Wissensbasis und Routingregeln.",
    risks: "Unpassende Antwort; sensible Kundendaten; falsche Dringlichkeit. Versand ausschließlich nach Freigabe.",
    proxyMetric: "Anteil angenommener Klassifizierungen und Antwortentwürfe.",
    mlMetric: "F1-Score je Kategorie, Halluzinationsrate und Antwortzeit.",
    value: 4, feasibility: 5, demoType: "Textklassifikation",
    sampleInput: "Betreff: Dringende Reklamation\n\nGuten Tag, meine Lieferung sollte am Montag eintreffen, ist aber noch nicht angekommen. Die Sendungsverfolgung wurde seit drei Tagen nicht aktualisiert. Wir benötigen die Ware spätestens morgen für einen Kundentermin. Bitte helfen Sie uns kurzfristig.\n\nViele Grüße\nAnna Berger",
    sampleOutput: "Kategorie: Lieferverzögerung\nDringlichkeit: Hoch\nStimmung: Besorgt, aber sachlich\nZuständig: Logistik / Kundenservice\n\nAntwortvorschlag:\nGuten Tag Frau Berger,\n\nvielen Dank für Ihre Nachricht. Es tut uns leid, dass sich Ihre Lieferung verzögert. Aufgrund Ihres morgigen Kundentermins behandeln wir die Anfrage mit hoher Priorität und klären den aktuellen Status direkt mit unserem Versandpartner. Sie erhalten heute noch eine Rückmeldung mit einer konkreten Lösung.\n\nFreundliche Grüße"
  },
  {
    id: "meeting-notes", short: "MP", title: "Besprechungsprotokolle und Aufgaben erstellen", area: "Geschäftsführung", status: "Demo verfügbar",
    description: "Entscheidungen und Aufgaben aus Besprechungen werden uneinheitlich dokumentiert und gehen teilweise verloren.",
    aiOutput: "Kurzzusammenfassung, Entscheidungen sowie Aufgaben mit Verantwortlichen und Terminen.",
    action: "Teilnehmende prüfen das Protokoll und übernehmen bestätigte Aufgaben in ihre Planung.",
    impact: "Bessere Verbindlichkeit, weniger Nacharbeit und einheitliche Dokumentation.",
    businessMetric: "Protokollaufwand um 70 % reduzieren; Anteil fristgerecht abgeschlossener Aufgaben erhöhen.",
    data: "Transkripte, Notizen, Teilnehmerliste und optional Projektkontext.",
    improvement: "Teilnehmende bewerten Zusammenfassungen und korrigieren Verantwortliche oder Termine.",
    risks: "Fehlinterpretierte Zusagen; vertrauliche Gesprächsinhalte; unvollständige Transkripte.",
    proxyMetric: "Anteil unverändert übernommener Aufgaben und Entscheidungen.",
    mlMetric: "Recall der Aufgaben, korrekte Zuordnung und Zusammenfassungsqualität.",
    value: 4, feasibility: 4, demoType: "Zusammenfassung",
    sampleInput: "Jour fixe vom 21.08.2026. Teilnehmer: Lisa, Markus, Elena. Lisa berichtet, dass der neue Webshop technisch fertig ist. Vor dem Start fehlt noch die Datenschutzfreigabe. Markus klärt das bis Freitag mit dem Datenschutzbeauftragten. Elena erstellt bis nächsten Dienstag die Kundendokumentation. Entscheidung: Der Pilot startet am 1. September zunächst mit zehn Bestandskunden. Nächster Termin am 28. August.",
    sampleOutput: "Zusammenfassung:\nDer Webshop ist technisch fertig. Vor dem Pilotstart ist noch die Datenschutzfreigabe erforderlich. Der Pilot beginnt am 1. September mit zehn Bestandskunden.\n\nEntscheidungen:\n• Pilotstart am 01.09.2026\n• Startgruppe: 10 Bestandskunden\n\nAufgaben:\n• Markus – Datenschutzfreigabe klären – bis 28.08.2026\n• Elena – Kundendokumentation erstellen – bis 25.08.2026\n\nNächster Termin: 28.08.2026"
  }
];

let cases = loadCases();
let currentCase = null;

function loadCases() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) && stored.length ? stored : structuredClone(seedCases);
  } catch { return structuredClone(seedCases); }
}

function saveCases() { localStorage.setItem(STORAGE_KEY, JSON.stringify(cases)); }
function esc(value = "") { return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]); }
function priorityFor(item) {
  if (item.value >= 4 && item.feasibility >= 4) return "Quick Win";
  if (item.value >= 4) return "Strategisch";
  if (item.feasibility >= 3) return "Später prüfen";
  return "Nicht empfohlen";
}

function showView(view) {
  const names = { dashboard: "Dashboard", cases: "Use Cases", matrix: "Priorisierung", demos: "Demo-Labor" };
  document.querySelectorAll(".view").forEach(el => el.classList.remove("active-view"));
  document.getElementById(`${view}View`).classList.add("active-view");
  document.querySelectorAll("[data-view]").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  document.getElementById("pageTitle").textContent = names[view];
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderAll();
}

function renderStats() {
  const avgValue = (cases.reduce((sum, c) => sum + Number(c.value), 0) / cases.length).toFixed(1);
  const stats = [
    ["Use Cases", cases.length, "+ Portfolio wächst", "◇"],
    ["Quick Wins", cases.filter(c => priorityFor(c) === "Quick Win").length, "Hohe Startpriorität", "↗"],
    ["Ø Business Value", `${avgValue}/5`, "Gewichtete Bewertung", "★"],
    ["Ausführbare Demos", cases.filter(c => c.sampleOutput).length, "Sicherer Demo-Modus", "▶"]
  ];
  document.getElementById("statsGrid").innerHTML = stats.map(([label, value, sub, icon]) => `<article class="stat-card"><div class="stat-top"><span>${label}</span><i class="stat-icon">${icon}</i></div><div class="stat-value">${value}</div><div class="stat-sub">${sub}</div></article>`).join("");
}

function renderTopCases() {
  const top = [...cases].sort((a, b) => (b.value + b.feasibility) - (a.value + a.feasibility)).slice(0, 4);
  document.getElementById("topCases").innerHTML = top.map(item => `<div class="top-case"><div><strong>${esc(item.title)}</strong><small>${esc(item.area)} · ${priorityFor(item)}</small></div><div class="mini-score"><b>${item.value}/5</b><span>Nutzen</span><div class="score-bar"><i style="width:${item.value * 20}%"></i></div></div><div class="mini-score"><b>${item.feasibility}/5</b><span>Machbarkeit</span><div class="score-bar"><i style="width:${item.feasibility * 20}%"></i></div></div><button class="text-btn" data-open="${item.id}" aria-label="Öffnen">→</button></div>`).join("");
}

function renderStatus() {
  const counts = cases.reduce((acc, item) => ((acc[item.status] = (acc[item.status] || 0) + 1), acc), {});
  const colors = ["#3568e8", "#0c9b82", "#e9842a", "#7d64d5"];
  document.getElementById("statusChart").innerHTML = Object.entries(counts).map(([status, count], index) => `<div class="status-row"><label>${esc(status)}</label><b>${count}</b><div class="status-track"><i style="width:${(count / cases.length) * 100}%;background:${colors[index % colors.length]}"></i></div></div>`).join("");
}

function filterOptions() {
  const areaSelect = document.getElementById("areaFilter");
  const statusSelect = document.getElementById("statusFilter");
  const areaValue = areaSelect.value, statusValue = statusSelect.value;
  const areas = [...new Set(cases.map(c => c.area))].sort();
  const statuses = [...new Set(cases.map(c => c.status))].sort();
  areaSelect.innerHTML = `<option value="all">Alle Bereiche</option>${areas.map(x => `<option>${esc(x)}</option>`).join("")}`;
  statusSelect.innerHTML = `<option value="all">Alle Status</option>${statuses.map(x => `<option>${esc(x)}</option>`).join("")}`;
  areaSelect.value = areas.includes(areaValue) ? areaValue : "all";
  statusSelect.value = statuses.includes(statusValue) ? statusValue : "all";
}

function renderCases() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const area = document.getElementById("areaFilter").value, status = document.getElementById("statusFilter").value;
  const filtered = cases.filter(c => (`${c.title} ${c.description} ${c.area}`.toLowerCase().includes(search)) && (area === "all" || c.area === area) && (status === "all" || c.status === status));
  document.getElementById("caseGrid").innerHTML = filtered.length ? filtered.map(item => `<article class="case-card"><div class="case-top"><span class="area-chip">${esc(item.area)}</span><span class="status-chip">${esc(item.status)}</span></div><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="case-scores"><div class="case-score"><span>BUSINESS VALUE</span><strong>${item.value}/5</strong></div><div class="case-score"><span>MACHBARKEIT</span><strong>${item.feasibility}/5</strong></div></div><div class="case-actions"><button class="secondary-btn" data-open="${item.id}">Canvas</button><button class="primary-btn" data-demo="${item.id}">▶ Demo</button></div></article>`).join("") : `<div class="panel empty-state">Keine passenden Use Cases gefunden.</div>`;
}

function renderMatrix() {
  document.getElementById("matrixDots").innerHTML = cases.map((item, index) => {
    const x = 6 + ((item.feasibility - 1) / 4) * 88 + ((index % 2) * 2 - 1);
    const y = 94 - ((item.value - 1) / 4) * 88 + ((index % 3) - 1) * 2;
    const priority = priorityFor(item);
    const cls = priority === "Quick Win" ? "quick-win" : priority === "Strategisch" ? "strategic-case" : "later-case";
    return `<button class="matrix-dot ${cls}" style="left:${x}%;top:${y}%" data-open="${item.id}" data-title="${esc(item.title)}">${esc(item.short || String(index + 1))}</button>`;
  }).join("");
}

function renderDemos() {
  const icons = { Dokumentenanalyse: "▤", Textklassifikation: "✦", Zusammenfassung: "≡" };
  document.getElementById("demoGrid").innerHTML = cases.map(item => `<article class="demo-card"><div class="demo-icon">${icons[item.demoType] || "AI"}</div><h3>${esc(item.title)}</h3><p>${esc(item.aiOutput)}</p><button class="primary-btn" data-demo="${item.id}">▶ Demo starten</button></article>`).join("");
}

function openCanvas(id) {
  const item = cases.find(c => c.id === id); if (!item) return;
  currentCase = item; document.getElementById("dialogTitle").textContent = item.title;
  const cells = [["AI Output", item.aiOutput, "primary"], ["Action", item.action, ""], ["Impact", item.impact, "positive"], ["Business Metric", item.businessMetric, "positive"], ["Data", item.data, ""], ["Continuous Improvement", item.improvement, ""], ["Risks", item.risks, "risk"], ["Proxy Metric", item.proxyMetric, ""], ["AI/ML Metric", item.mlMetric, "primary"]];
  document.getElementById("canvasContent").innerHTML = cells.map(([title, value, cls]) => `<article class="canvas-cell ${cls}"><h4>${title}</h4><p>${esc(value || "Noch nicht beschrieben")}</p></article>`).join("");
  document.getElementById("caseDialog").showModal();
}

function openDemo(id) {
  const item = cases.find(c => c.id === id); if (!item) return;
  currentCase = item;
  if (document.getElementById("caseDialog").open) document.getElementById("caseDialog").close();
  document.getElementById("demoTitle").textContent = item.title;
  document.getElementById("demoInput").value = item.sampleInput || item.description;
  document.getElementById("demoResult").textContent = "Starte die Demo, um das Ergebnis zu sehen.";
  document.getElementById("demoResult").className = "demo-result empty-result";
  document.getElementById("confidenceBadge").textContent = "Bereit";
  document.getElementById("confidenceBadge").className = "confidence";
  document.getElementById("processSteps").innerHTML = "";
  document.getElementById("feedbackBar").classList.add("hidden");
  document.getElementById("demoDialog").showModal();
}

async function runDemo() {
  if (!currentCase) return;
  const button = document.getElementById("runDemoBtn"), result = document.getElementById("demoResult"), stepsEl = document.getElementById("processSteps");
  if (!document.getElementById("demoInput").value.trim()) return toast("Bitte zuerst eine Beispieleingabe ergänzen.");
  button.disabled = true; button.textContent = "Analyse läuft …";
  result.className = "demo-result empty-result"; result.textContent = "Die Beispieldaten werden verarbeitet …";
  const steps = ["Eingabe validieren", "Inhalte analysieren", "Ergebnis strukturieren", "Aktion ableiten"];
  stepsEl.innerHTML = steps.map((step, i) => `<div class="process-step" id="step-${i}"><span>${step}</span><span>○</span></div>`).join("");
  for (let i = 0; i < steps.length; i += 1) {
    await new Promise(resolve => setTimeout(resolve, 260));
    const step = document.getElementById(`step-${i}`); step.classList.add("done"); step.lastElementChild.textContent = "✓";
  }
  result.className = "demo-result";
  result.textContent = currentCase.sampleOutput || `Beispielanalyse abgeschlossen.\n\nErkanntes Ziel: ${currentCase.aiOutput}\n\nEmpfohlene Aktion: ${currentCase.action}`;
  document.getElementById("confidenceBadge").textContent = "91 % Sicherheit";
  document.getElementById("confidenceBadge").className = "confidence success";
  document.getElementById("feedbackBar").classList.remove("hidden");
  button.disabled = false; button.innerHTML = "<span>↻</span> Erneut ausführen";
}

function addCase(event) {
  event.preventDefault(); const form = new FormData(event.target); const title = form.get("title").trim();
  cases.push({
    id: `${Date.now()}`, short: title.split(/\s+/).slice(0, 2).map(x => x[0]).join("").toUpperCase(), title,
    area: form.get("area"), status: form.get("status"), description: form.get("description").trim(), aiOutput: form.get("aiOutput").trim(), action: form.get("action").trim(), impact: form.get("impact").trim(),
    businessMetric: "Ausgangswert und Zielwert müssen noch ergänzt werden.", data: "Benötigte Datenquellen müssen noch konkretisiert werden.", improvement: "Fachliches Feedback erfassen und regelmäßig auswerten.", risks: "Datenschutz, falsche Ergebnisse und Akzeptanz müssen bewertet werden.", proxyMetric: "Anteil der angenommenen KI-Empfehlungen.", mlMetric: "Qualität, Laufzeit und Kosten pro Ausführung.",
    value: Number(form.get("value")), feasibility: Number(form.get("feasibility")), demoType: "Workflow-Simulation", sampleInput: form.get("description").trim(), sampleOutput: `Beispielanalyse abgeschlossen.\n\nKI-Ergebnis: ${form.get("aiOutput").trim()}\n\nEmpfohlene Aktion: ${form.get("action").trim()}`
  });
  saveCases(); event.target.reset(); document.getElementById("newCaseDialog").close(); filterOptions(); renderAll(); showView("cases"); toast("Use Case wurde gespeichert.");
}

function exportData() {
  const blob = new Blob([JSON.stringify(cases, null, 2)], { type: "application/json" });
  const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "kmu-ai-usecases.json"; link.click(); URL.revokeObjectURL(link.href); toast("Portfolio wurde exportiert.");
}

function toast(message) {
  const el = document.getElementById("toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
}

function renderAll() { renderStats(); renderTopCases(); renderStatus(); renderCases(); renderMatrix(); renderDemos(); }

document.addEventListener("click", event => {
  const target = event.target.closest("button"); if (!target) return;
  if (target.dataset.view) showView(target.dataset.view);
  if (target.dataset.go) showView(target.dataset.go);
  if (target.dataset.open) openCanvas(target.dataset.open);
  if (target.dataset.demo) openDemo(target.dataset.demo);
  if (target.dataset.close) document.getElementById(target.dataset.close).close();
  if (target.dataset.feedback) { toast(target.dataset.feedback === "yes" ? "Danke – positives Feedback gespeichert." : "Danke – als Verbesserungsfall markiert."); document.getElementById("feedbackBar").classList.add("hidden"); }
});

document.getElementById("newCaseBtn").addEventListener("click", () => document.getElementById("newCaseDialog").showModal());
document.getElementById("newCaseForm").addEventListener("submit", addCase);
document.getElementById("dialogDemoBtn").addEventListener("click", () => currentCase && openDemo(currentCase.id));
document.getElementById("runDemoBtn").addEventListener("click", runDemo);
document.getElementById("exportBtn").addEventListener("click", exportData);
document.getElementById("searchInput").addEventListener("input", renderCases);
document.getElementById("areaFilter").addEventListener("change", renderCases);
document.getElementById("statusFilter").addEventListener("change", renderCases);
["value", "feasibility"].forEach(name => document.getElementById(`${name}Range`).addEventListener("input", event => { document.getElementById(`${name}Output`).value = event.target.value; }));
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); }));

filterOptions(); renderAll();
