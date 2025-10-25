// Database penyakit
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
  // Gejala tunggal
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

  // Kombinasi gejala
  "Batuk,Pilek": {
    diagnosis: "Flu (Common Cold)",
    medications: [
      ["Paracetamol", "500mg setiap 4-6 jam"],
      ["Pseudoephedrine", "60mg setiap 4-6 jam"],
      ["Vitamin C", "500mg 2 kali sehari"],
    ],
    severity: "low",
  },
  "Batuk,Sesak Napas": {
    diagnosis: "Asma atau Bronkitis",
    medications: [
      ["Bronkodilator", "Sesuai resep dokter"],
      ["Inhaler", "Saat diperlukan"],
      ["Anti-inflamasi", "Sesuai resep dokter"],
    ],
    severity: "medium",
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

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const diagnoseBtn = document.getElementById("diagnoseBtn");
  diagnoseBtn.addEventListener("click", performDiagnosis);
});

// Fungsi utama untuk melakukan diagnosa
function performDiagnosis() {
  const selectedSymptoms = getSelectedSymptoms();
  if (selectedSymptoms.length === 0) {
    alert("Silakan pilih minimal satu gejala.");
    return;
  }

  const diagnosis = getDiagnosis(selectedSymptoms);
  displayResults(diagnosis);
}

// Fungsi untuk mendapatkan gejala yang dipilih
function getSelectedSymptoms() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  return Array.from(checkboxes).map((cb) => cb.value);
}

// Fungsi untuk mendapatkan diagnosa berdasarkan gejala
function getDiagnosis(symptoms) {
  const sortedSymptoms = symptoms.sort().join(",");
  let possibleDiagnoses = [];
  let mainDiagnosis = null;
  let highestSeverityScore = -1;

  // Fungsi untuk menghitung skor keparahan
  function getSeverityScore(severity) {
    switch (severity) {
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

  // Fungsi untuk menghitung skor kecocokan gejala
  function getMatchScore(dbSymptoms, userSymptoms) {
    const dbSymptomSet = new Set(dbSymptoms.split(","));
    const userSymptomSet = new Set(userSymptoms);
    let matchCount = 0;
    for (const symptom of dbSymptomSet) {
      if (userSymptomSet.has(symptom)) {
        matchCount++;
      }
    }
    return {
      matchCount,
      coverage: matchCount / dbSymptomSet.size,
      relevance: matchCount / userSymptomSet.size,
    };
  }

  // Cek semua kombinasi dalam database
  for (const [dbSymptoms, diagnosis] of Object.entries(diseasesDatabase)) {
    const matchScore = getMatchScore(dbSymptoms, symptoms);
    const severityScore = getSeverityScore(diagnosis.severity);

    // Jika ada kecocokan gejala
    if (matchScore.matchCount > 0) {
      const overallScore =
        matchScore.coverage *
        matchScore.relevance *
        (matchScore.matchCount + severityScore);

      possibleDiagnoses.push({
        ...diagnosis,
        matchScore: overallScore,
        originalSymptoms: dbSymptoms,
      });

      // Update diagnosa utama jika skor lebih tinggi
      if (overallScore > highestSeverityScore) {
        highestSeverityScore = overallScore;
        mainDiagnosis = {
          ...diagnosis,
          matchScore: overallScore,
          originalSymptoms: dbSymptoms,
        };
      }
    }
  }

  // Urutkan diagnosa berdasarkan skor
  possibleDiagnoses.sort((a, b) => b.matchScore - a.matchScore);

  // Ambil semua diagnosa tambahan yang berbeda dengan diagnosa utama (tanpa batasan jumlah)
  const additionalDiagnoses = possibleDiagnoses.filter(
    (d) => d.originalSymptoms !== mainDiagnosis.originalSymptoms
  );

  if (mainDiagnosis) {
    return {
      mainDiagnosis: mainDiagnosis,
      additionalDiagnoses: additionalDiagnoses,
      medications: mainDiagnosis.medications,
      severity: mainDiagnosis.severity,
    };
  }

  // Jika tidak ada diagnosa yang cocok
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

// Fungsi untuk menampilkan hasil diagnosa
function displayResults(diagnosis) {
  const resultSection = document.getElementById("resultSection");
  const diagnosisResult = document.getElementById("diagnosisResult");
  const medicationResult = document.getElementById("medicationResult");
  const warningBox = document.getElementById("warningBox");

  // Tampilkan bagian hasil
  resultSection.classList.add("active");

  // Tampilkan diagnosa utama dan kemungkinan lainnya (klik untuk detail obat)
  let diagnosisHtml = `
    <h3>Diagnosa Utama:</h3>
    <p class="main-diagnosis" id="mainDiagnosis">${diagnosis.mainDiagnosis.diagnosis}</p>
  `;

  if (
    diagnosis.additionalDiagnoses &&
    diagnosis.additionalDiagnoses.length > 0
  ) {
    diagnosisHtml += `
      <h4 class="other-diagnosis-title">Kemungkinan Lain (klik untuk detail obat):</h4>
      <ul class="other-diagnosis-list">
    `;
    diagnosis.additionalDiagnoses.forEach((d, idx) => {
      // Set data-idx agar bisa diidentifikasi saat diklik
      diagnosisHtml += `<li class="other-diagnosis-item" data-idx="${idx}">${d.diagnosis}</li>`;
    });
    diagnosisHtml += "</ul>";
  }

  diagnosisResult.innerHTML = diagnosisHtml;

  // Tampilkan rekomendasi obat untuk diagnosa utama
  let medicationHtml = "<h3>Rekomendasi Pengobatan:</h3><ul>";
  diagnosis.medications.forEach((med) => {
    medicationHtml += `<li><strong>${med[0]}</strong>: ${med[1]}</li>`;
  });
  medicationHtml += "</ul>";
  medicationResult.innerHTML = medicationHtml;

  // Tambahkan event listener pada kemungkinan diagnosa lain
  const otherDiagnosisItems = document.querySelectorAll(
    ".other-diagnosis-item"
  );
  otherDiagnosisItems.forEach((item) => {
    item.addEventListener("click", function () {
      const idx = parseInt(this.getAttribute("data-idx"));
      const selected = diagnosis.additionalDiagnoses[idx];
      // Tampilkan obat dan dosis untuk diagnosa yang diklik
      let medHtml = `<h3>Rekomendasi Pengobatan untuk:</h3><div class='main-diagnosis'>${selected.diagnosis}</div><ul>`;
      selected.medications.forEach((med) => {
        medHtml += `<li><strong>${med[0]}</strong>: ${med[1]}</li>`;
      });
      medHtml += "</ul>";
      medicationResult.innerHTML = medHtml;
    });
  });

  // Tambahkan event listener pada diagnosa utama agar bisa diklik kembali
  const mainDiagnosisEl = document.getElementById("mainDiagnosis");
  if (mainDiagnosisEl) {
    mainDiagnosisEl.style.cursor = "pointer";
    mainDiagnosisEl.title = "Klik untuk menampilkan kembali obat utama";
    mainDiagnosisEl.addEventListener("click", function () {
      let medHtml = `<h3>Rekomendasi Pengobatan:</h3><ul>`;
      diagnosis.mainDiagnosis.medications.forEach((med) => {
        medHtml += `<li><strong>${med[0]}</strong>: ${med[1]}</li>`;
      });
      medHtml += "</ul>";
      medicationResult.innerHTML = medHtml;
    });
  }

  // Tampilkan peringatan berdasarkan severity
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
