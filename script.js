// script.js — logika diagnosa yang diperbarui untuk mendukung multi-select
// (pastikan file HTML & CSS Anda sudah memuat elemen .symptom-item seperti sebelumnya)

/* Database penyakit (diperbarui: ditambahkan Ruam Kulit, Nyeri Sendi, Sesak Napas) */
const diseasesDatabase = {
  Demam: {
    diagnosis:
      "Kemungkinan penyakit:\n1. Demam ringan\n2. Infeksi virus\n3. Infeksi bakteri",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Kompres hangat", "3-4 kali sehari"],
      ["Minum air putih", "2-3 liter per hari"],
    ],
    severity: "low",
  },
  "Demam,Pusing": {
    diagnosis:
      "Kemungkinan penyakit:\n1. Tifus\n2. Infeksi virus\n3. Infeksi saluran pernapasan",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Cairan elektrolit", "Minum banyak"],
      ["Istirahat total", ""],
    ],
    severity: "medium",
  },
  "Demam,Sakit Tenggorokan": {
    diagnosis: "Faringitis (Radang Tenggorokan)",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Antibiotik", "Sesuai resep dokter"],
      ["Berkumur air garam", "3-4 kali sehari"],
    ],
    severity: "medium",
  },
  "Demam,Letih/Lesu": {
    diagnosis: "Kemungkinan penyakit:\n1. Anemia\n2. Infeksi virus\n3. Tifus",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Vitamin B kompleks", "1 tablet per hari"],
      ["Cairan elektrolit", "Minum banyak"],
    ],
    severity: "medium",
  },
  "Nyeri Sendi,Demam": {
    diagnosis: "Chikungunya",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Kompres hangat pada sendi", "3-4 kali sehari"],
      ["Minum air putih", "2-3 liter per hari"],
    ],
    severity: "medium",
  },
  "Ruam Kulit,Demam": {
    diagnosis: "Campak",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Antihistamin", "Sesuai petunjuk dokter"],
      ["Calamine lotion", "Oleskan pada ruam 3-4 kali sehari"],
    ],
    severity: "medium",
  },

  // Tambahan: entri tunggal untuk "Ruam Kulit"
  "Ruam Kulit": {
    diagnosis: "Dermatitis",
    medications: [
      ["Kompres sejuk", "2-3 kali sehari bila gatal"],
      ["Emolien / pelembap", "Oles sesuai kebutuhan"],
      ["Antihistamin oral", "Jika gatal hebat, sesuai petunjuk"],
      ["Konsultasi dokter kulit", "Jika ruam meluas atau berisi nanah"],
    ],
    severity: "low",
  },

  // Tambahan: entri tunggal untuk "Nyeri Sendi"
  "Nyeri Sendi": {
    diagnosis: "Cedera sendi (sprain/strain) atau nyeri otot",
    medications: [
      [
        "Istirahat + RICE (Rest, Ice, Compression, Elevation)",
        "Segera lakukan jika cedera",
      ],
      ["Analgesik ringan (mis. Paracetamol/NSAID)", "Sesuai dosis"],
      ["Kompres hangat setelah 48 jam", "Jika tidak bengkak akut"],
      ["Periksa ke dokter jika nyeri berat atau pembengkakan signifikan", ""],
    ],
    severity: "low",
  },

  "Nyeri Dada": {
    diagnosis:
      "Kemungkinan penyakit:\n1. Gastritis\n2. Nyeri otot\n3. Masalah jantung (waspada jika disertai sesak)",
    medications: [
      ["Antasida", "10-20ml 3 kali sehari"],
      ["Istirahat cukup", ""],
      ["Segera ke dokter jika nyeri berat", ""],
    ],
    severity: "medium",
  },
  "Nyeri Dada,Letih/Lesu": {
    diagnosis:
      "Kemungkinan penyakit:\n1. Anemia\n2. Masalah jantung\n3. Kelelahan berat",
    medications: [
      ["Vitamin B12", "1 tablet per hari"],
      ["Periksa ke dokter", "Jika keluhan berat"],
      ["Istirahat cukup", ""],
    ],
    severity: "high",
  },
  "Pilek,Sakit Tenggorokan": {
    diagnosis: "Rinitis dan Faringitis",
    medications: [
      ["Antihistamin", "1 tablet per hari"],
      ["Dekongestan", "setiap 12 jam"],
      ["Berkumur air garam", "3-4 kali sehari"],
    ],
    severity: "low",
  },

  Batuk: {
    diagnosis: "Kemungkinan penyakit:\n1. Batuk biasa\n2. Bronkitis\n3. Asma",
    medications: [
      ["Obat batuk hitam", "3x2 sendok makan per hari"],
      ["Obat batuk kering", "3x1 tablet per hari"],
      ["Jahe hangat", "2-3 kali sehari"],
    ],
    severity: "low",
  },
  Pilek: {
    diagnosis: "Kemungkinan penyakit:\n1. Rinitis Alergi\n2. Common Cold",
    medications: [
      ["Antihistamin", "1 tablet per hari"],
      ["Dekongestan", "setiap 12 jam"],
      ["Air garam untuk cuci hidung", "2-3 kali sehari"],
    ],
    severity: "low",
  },
  Pusing: {
    diagnosis:
      "Kemungkinan penyakit:\n1. Migrain\n2. Tension Headache\n3. Kelelahan",
    medications: [
      ["Paracetamol", "500mg saat diperlukan"],
      ["Istirahat yang cukup", ""],
      ["Perbanyak minum air", "2-3 liter per hari"],
    ],
    severity: "low",
  },

  // Prioritaskan Asma untuk sesak napas:
  "Batuk,Sesak Napas": {
    diagnosis: "Asma (lebih mungkin) atau Bronkitis",
    medications: [
      ["Bronkodilator / Inhaler", "Sesuai resep dokter"],
      ["Inhaler reliever (salbutamol)", "Saat diperlukan"],
      ["Konsultasi dokter jika serangan berulang", ""],
    ],
    severity: "medium",
  },

  // Tambahan: entri tunggal untuk "Sesak Napas" -> utamakan Asma
  "Sesak Napas": {
    diagnosis: "Asma",
    medications: [
      ["Inhaler bronkodilator (salbutamol)", "Gunakan sesuai resep"],
      ["Periksa ke dokter untuk manajemen jangka panjang", ""],
      ["Jika sesak parah atau disertai nyeri dada, pingsan, segera ke UGD", ""],
    ],
    severity: "high",
  },

  "Mual,Sakit Perut": {
    diagnosis: "Diare",
    medications: [
      ["Oralit", "Setiap kali BAB"],
      ["Loperamide", "2mg setelah setiap BAB cair"],
      ["Probiotik", "2 kali sehari"],
      ["Zinc", "20mg per hari selama 10 hari"],
    ],
    severity: "medium",
  },
  "Mual,Sakit Perut,Demam": {
    diagnosis: "Gastroenteritis (Radang Lambung dan Usus)",
    medications: [
      ["Oralit", "Setiap kali BAB"],
      ["Paracetamol", "500mg setiap 4-6 jam untuk demam"],
      ["Probiotik", "2 kali sehari"],
    ],
    severity: "high",
  },
  "Batuk,Pilek": {
    diagnosis: "Flu (Common Cold)",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Pseudoephedrine", "60mg setiap 4-6 jam"],
      ["Vitamin C", "500mg 2 kali sehari"],
    ],
    severity: "low",
  },
  "Batuk,Pilek,Demam": {
    diagnosis: "Infeksi Saluran Pernapasan Atas (ISPA)",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Amoxicillin", "500mg 3 kali sehari (dengan resep dokter)"],
      ["Vitamin C", "500mg 2 kali sehari"],
    ],
    severity: "medium",
  },
  "Batuk,Demam,Sesak Napas": {
    diagnosis: "Pneumonia (Harap segera ke dokter)",
    medications: [
      ["Antibiotik", "Harus dengan resep dokter"],
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Ekspektoran", "Sesuai resep dokter"],
    ],
    severity: "emergency",
  },
  "Demam,Nyeri Sendi,Letih/Lesu": {
    diagnosis: "Demam Berdarah (Perlu pemeriksaan dokter segera)",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Cairan elektrolit", "Minum banyak"],
      ["Vitamin C", "500mg 2 kali sehari"],
    ],
    severity: "emergency",
  },
  "Nyeri Dada,Sesak Napas,Letih/Lesu": {
    diagnosis: "Kemungkinan masalah jantung (SEGERA KE UGD)",
    medications: [
      ["Perlu pemeriksaan dokter segera", ""],
      ["Tidak disarankan self-medication", ""],
    ],
    severity: "emergency",
  },
};

/* ---------------------------
   Helper & inisialisasi DOM
   --------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const diagnoseBtn = document.getElementById("diagnoseBtn");
  if (diagnoseBtn) diagnoseBtn.addEventListener("click", performDiagnosis);

  // Splash Start Button (jika ada)
  const startBtn = document.getElementById("startBtn");
  const splash = document.getElementById("splashScreen");
  const mainContainer = document.getElementById("mainContainer");
  if (startBtn && splash && mainContainer) {
    startBtn.addEventListener("click", () => {
      splash.classList.add("splash-hidden");
      setTimeout(() => {
        splash.style.display = "none";
        mainContainer.setAttribute("aria-hidden", "false");
        const firstCheckbox = document.querySelector('input[type="checkbox"]');
        if (firstCheckbox) firstCheckbox.focus();
      }, 480);
    });
    startBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startBtn.click();
      }
    });
  }

  // Jika fungsi enhanceSymptomItems tersedia, jalankan (memungkinkan klik area besar)
  if (typeof enhanceSymptomItems === "function") enhanceSymptomItems();
});

/* enable klik pada seluruh .symptom-item (jika Anda memakai markup item seperti sebelumnya) */
function enhanceSymptomItems() {
  const items = document.querySelectorAll(".symptom-item");
  items.forEach((item) => {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-pressed", "false");
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    item.addEventListener("click", (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "LABEL") return;
      checkbox.checked = !checkbox.checked;
      item.setAttribute("aria-pressed", checkbox.checked ? "true" : "false");
      checkbox.dispatchEvent(new Event("change", { bubbles: true }));
    });

    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        checkbox.checked = !checkbox.checked;
        item.setAttribute("aria-pressed", checkbox.checked ? "true" : "false");
        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    checkbox.addEventListener("change", () => {
      item.setAttribute("aria-pressed", checkbox.checked ? "true" : "false");
    });
  });
}

/* ---------------------------
   Fungsi Diagnosa
   --------------------------- */

// Ambil gejala yang dipilih
function getSelectedSymptoms() {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  return Array.from(checked)
    .map((c) => c.value.trim())
    .filter(Boolean);
}

// Normalisasi key (untuk membandingkan entri DB)
function normalizeKey(keyOrArray) {
  let arr = [];
  if (Array.isArray(keyOrArray)) {
    arr = keyOrArray.map((s) => String(s).trim());
  } else {
    arr = String(keyOrArray)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return arr.sort().join(",");
}

// Konversi severity -> skor
function getSeverityScore(sev) {
  switch (sev) {
    case "emergency":
      return 4;
    case "high":
      return 3;
    case "medium":
      return 2;
    case "low":
      return 1;
    default:
      return 0;
  }
}

// Menghitung diagnosa berdasarkan gejala (ditingkatkan untuk multi-select)
function getDiagnosis(symptoms) {
  const userSymptoms = Array.from(
    new Set((symptoms || []).map((s) => s.trim()))
  ).filter(Boolean);
  const normalizedUserKey = normalizeKey(userSymptoms);
  const userSize = userSymptoms.length;
  const userSet = new Set(userSymptoms);

  // 1) Exact match prioritas tinggi
  for (const [dbKey, diag] of Object.entries(diseasesDatabase)) {
    if (normalizeKey(dbKey) === normalizedUserKey) {
      return {
        mainDiagnosis: {
          ...diag,
          originalSymptoms: dbKey,
          matchMetrics: { exactMatch: true },
        },
        additionalDiagnoses: [],
        medications: diag.medications || [],
        severity: diag.severity || "unknown",
      };
    }
  }

  // 2) Kalkulasi skor untuk semua entry yang memiliki minimal 1 kecocokan
  const possible = [];

  for (const [dbKey, diag] of Object.entries(diseasesDatabase)) {
    const dbArr = dbKey
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const dbSize = dbArr.length;
    const dbSet = new Set(dbArr);

    // hitung matchCount
    let matchCount = 0;
    for (const s of dbSet) if (userSet.has(s)) matchCount++;

    if (matchCount === 0) continue; // tidak cocok sama sekali -> skip

    const coverage = dbSize === 0 ? 0 : matchCount / dbSize; // seberapa lengkap DB gejala terpenuhi
    const relevance = userSize === 0 ? 0 : matchCount / userSize; // seberapa signifikan terhadap input user
    const severityScore = getSeverityScore(diag.severity);

    // bonus jika DB symptoms adalah subset dari userSymptoms (semua gejala DB ada di input user)
    const dbIsSubsetOfUser = dbArr.every((s) => userSet.has(s));
    let bonus = 1;
    if (dbIsSubsetOfUser) bonus *= 1.4;

    // jika coverage==1 dan relevance==1 (perfect match subset-equal), beri bonus lebih besar
    if (coverage === 1 && relevance === 1) bonus *= 1.2;

    // penalti ringan bila DB punya lebih banyak gejala dari user (dbSize > userSize) dan tidak semua terpenuhi
    if (dbSize > userSize && coverage < 1) bonus *= 0.85;

    // skor akhir (formula bisa disesuaikan): coverage * relevance * (matchCount + severityScore) * bonus
    const baseScore = coverage * relevance * (matchCount + severityScore);
    const overallScore = baseScore * bonus;

    possible.push({
      ...diag,
      originalSymptoms: dbKey,
      matchMetrics: {
        matchCount,
        dbSize,
        cakupan: coverage, // coverage -> cakupan (disimpan tetap detail)
        relevansi: relevance, // relevance -> relevansi
        dbIsSubsetOfUser,
      },
      severityScore,
      matchScore: overallScore,
    });
  }

  // Jika tidak ada possible (seharusnya jarang), fallback ke output default
  if (possible.length === 0) {
    return {
      mainDiagnosis: {
        diagnosis: "Tidak dapat menentukan diagnosa yang spesifik",
      },
      additionalDiagnoses: [],
      medications: [
        [
          "Konsultasi dengan dokter",
          "Segera kunjungi dokter untuk pemeriksaan lebih lanjut",
        ],
      ],
      severity: "unknown",
    };
  }

  // Urutkan hasil berdasarkan skor
  possible.sort((a, b) => b.matchScore - a.matchScore);

  // Ambil diagnosa utama = skor tertinggi
  const mainDiagnosis = possible[0];

  // Ambil beberapa kemungkinan lain (top 4 selain utama) untuk disajikan
  const additionalDiagnoses = possible.slice(1, 5);

  return {
    mainDiagnosis,
    additionalDiagnoses,
    medications: mainDiagnosis.medications || [],
    severity: mainDiagnosis.severity || "unknown",
  };
}

/* ---------------------------
   Menampilkan hasil ke UI
   --------------------------- */
function displayResults(diagnosis) {
  const resultSection = document.getElementById("resultSection");
  const diagnosisResult = document.getElementById("diagnosisResult");
  const medicationResult = document.getElementById("medicationResult");
  const warningBox = document.getElementById("warningBox");

  resultSection.classList.add("active");

  // Main diagnosis (label lebih ringkas)
  const mainDiagText =
    diagnosis.mainDiagnosis.diagnosis || "Tidak ada diagnosa spesifik";
  let diagnosisHtml = `
    <h3>Diagnosa:</h3>
    <p class="main-diagnosis" id="mainDiagnosis">${mainDiagText}</p>
  `;

  // Tampilkan beberapa metrik kecil (ringkas) di bawah diagnosa utama untuk transparansi
  if (diagnosis.mainDiagnosis.matchMetrics) {
    const m = diagnosis.mainDiagnosis.matchMetrics;
    // jika tersedia metrik matchCount/dbSize/relevansi tampilkan ringkas dengan label singkat
    if (m.matchCount !== undefined) {
      // catatan: data metrik utama disimpan di matchMetrics (cakupan/relevansi) untuk entri yang dihitung
      // gunakan cakupan/relevansi jika tersedia (beberapa exactMatch mungkin tidak punya metrik detil)
      const cakupanPct =
        (m.cakupan !== undefined ? m.cakupan : m.coverage || 0) * 100;
      const relevansiPct =
        (m.relevansi !== undefined ? m.relevansi : m.relevance || 0) * 100;
      diagnosisHtml += `<div style="margin-top:8px;font-size:0.93rem;color:#4b5563">Kecocokan: ${
        m.matchCount
      }/${m.dbSize} (Cakup ${Math.round(cakupanPct)}%, Rel ${Math.round(
        relevansiPct
      )}%)</div>`;
    }
  }

  // Additional diagnoses list (label lebih ringkas)
  if (
    diagnosis.additionalDiagnoses &&
    diagnosis.additionalDiagnoses.length > 0
  ) {
    diagnosisHtml += `
      <h4 class="other-diagnosis-title" style="margin-top:14px">Kemungkinan:</h4>
      <ul class="other-diagnosis-list">
    `;
    diagnosis.additionalDiagnoses.forEach((d, idx) => {
      // sertakan atribut data-idx agar dapat ditangani
      diagnosisHtml += `<li class="other-diagnosis-item" data-idx="${idx}">${d.diagnosis}</li>`;
    });
    diagnosisHtml += "</ul>";
  }

  diagnosisResult.innerHTML = diagnosisHtml;

  // Medication untuk main
  let medicationHtml = "<h3>Rekomendasi Pengobatan:</h3><ul>";
  (diagnosis.medications || []).forEach((med) => {
    medicationHtml += `<li><strong>${med[0]}</strong>: ${med[1]}</li>`;
  });
  medicationHtml += "</ul>";
  medicationResult.innerHTML = medicationHtml;

  // Event untuk kemungkinan lain
  const otherDiagnosisItems = document.querySelectorAll(
    ".other-diagnosis-item"
  );
  otherDiagnosisItems.forEach((item) => {
    item.addEventListener("click", function () {
      const idx = parseInt(this.getAttribute("data-idx"));
      const selected = diagnosis.additionalDiagnoses[idx];
      let medHtml = `<h3>Rekomendasi Pengobatan untuk:</h3><div class='main-diagnosis' style="margin-bottom:8px">${selected.diagnosis}</div><ul>`;
      (selected.medications || []).forEach((med) => {
        medHtml += `<li><strong>${med[0]}</strong>: ${med[1]}</li>`;
      });
      medHtml += "</ul>";
      medicationResult.innerHTML = medHtml;
    });
  });

  // Klik pada diagnosa utama untuk menampilkan obat utama kembali
  const mainDiagnosisEl = document.getElementById("mainDiagnosis");
  if (mainDiagnosisEl && diagnosis.mainDiagnosis.medications) {
    mainDiagnosisEl.style.cursor = "pointer";
    mainDiagnosisEl.title = "Klik untuk menampilkan kembali obat utama";
    mainDiagnosisEl.addEventListener("click", function () {
      let medHtml = `<h3>Rekomendasi Pengobatan:</h3><ul>`;
      (diagnosis.mainDiagnosis.medications || []).forEach((med) => {
        medHtml += `<li><strong>${med[0]}</strong>: ${med[1]}</li>`;
      });
      medHtml += "</ul>";
      medicationResult.innerHTML = medHtml;
    });
  }

  // Peringatan berdasar severity
  let warningMessage = "";
  switch (diagnosis.severity) {
    case "emergency":
      warningMessage =
        "<strong>PERINGATAN DARURAT!</strong> Segera cari pertolongan medis!";
      warningBox.style.backgroundColor = "#ff4444";
      warningBox.style.color = "white";
      break;
    case "high":
      warningMessage =
        "Kondisi serius. Sebaiknya segera konsultasi dengan dokter.";
      warningBox.style.backgroundColor = "#ffbb33";
      break;
    case "medium":
      warningMessage =
        "Perhatikan perkembangan gejala. Jika memburuk, segera ke dokter.";
      warningBox.style.backgroundColor = "#ffeb3b";
      break;
    default:
      warningMessage =
        "Lakukan perawatan mandiri sesuai anjuran. Jika gejala bertahan, konsultasi dengan dokter.";
      warningBox.style.backgroundColor = "#fff3cd";
  }
  warningBox.innerHTML = warningMessage;
}

/* ---------------------------
   Fungsi utama untuk dipanggil oleh tombol Diagnosa
   --------------------------- */
function performDiagnosis() {
  const selected = getSelectedSymptoms();
  if (selected.length === 0) {
    alert("Silakan pilih minimal satu gejala.");
    return;
  }
  const diagnosis = getDiagnosis(selected);
  displayResults(diagnosis);
}
