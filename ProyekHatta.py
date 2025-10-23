def tampilkan_menu_gejala():
    print("\n=== SISTEM DIAGNOSA PENYAKIT UMUM ===")
    print("Pilih gejala yang Anda rasakan (pisahkan dengan koma):")
    print("1. Batuk")
    print("2. Pilek")
    print("3. Pusing")
    print("4. Demam")
    print("5. Sakit Tenggorokan")
    print("6. Mual")
    print("7. Sakit Perut")
    print("8. Sesak Napas")
    print("9. Nyeri Dada")
    print("10. Letih/Lesu")
    print("11. Nyeri Sendi")
    print("12. Ruam Kulit")
    print("0. Selesai memilih")

def dapatkan_gejala():
    gejala_terpilih = set()
    while True:
        tampilkan_menu_gejala()
        pilihan = input("\nMasukkan nomor gejala (0 untuk selesai): ")
        
        if pilihan == "0":
            break
        
        try:
            nomor = int(pilihan)
            if 1 <= nomor <= 12:
                if nomor == 1:
                    gejala_terpilih.add("Batuk")
                elif nomor == 2:
                    gejala_terpilih.add("Pilek")
                elif nomor == 3:
                    gejala_terpilih.add("Pusing")
                elif nomor == 4:
                    gejala_terpilih.add("Demam")
                elif nomor == 5:
                    gejala_terpilih.add("Sakit Tenggorokan")
                elif nomor == 6:
                    gejala_terpilih.add("Mual")
                elif nomor == 7:
                    gejala_terpilih.add("Sakit Perut")
                elif nomor == 8:
                    gejala_terpilih.add("Sesak Napas")
                elif nomor == 9:
                    gejala_terpilih.add("Nyeri Dada")
                elif nomor == 10:
                    gejala_terpilih.add("Letih/Lesu")
                elif nomor == 11:
                    gejala_terpilih.add("Nyeri Sendi")
                elif nomor == 12:
                    gejala_terpilih.add("Ruam Kulit")
            else:
                print("Pilihan tidak valid. Silakan pilih nomor 1-12 atau 0 untuk selesai.")
        except ValueError:
            print("Masukan tidak valid. Mohon masukkan angka.")
    
    return gejala_terpilih

def diagnosa_penyakit(gejala):
    database_penyakit = {
        # Diagnosa untuk gejala tunggal
        frozenset(["Batuk"]): {
            "diagnosis": "Kemungkinan penyakit:\n1. Batuk biasa\n2. Bronkitis\n3. Asma",
            "obat": [
                ("Obat batuk hitam", "3x2 sendok makan per hari"),
                ("Obat batuk kering", "3x1 tablet per hari"),
                ("Jahe hangat", "2-3 kali sehari")
            ]
        },
        frozenset(["Pilek"]): {
            "diagnosis": "Kemungkinan penyakit:\n1. Rinitis Alergi\n2. Common Cold",
            "obat": [
                ("Antihistamin", "1 tablet per hari"),
                ("Dekongestan", "setiap 12 jam"),
                ("Air garam untuk cuci hidung", "2-3 kali sehari")
            ]
        },
        frozenset(["Pusing"]): {
            "diagnosis": "Kemungkinan penyakit:\n1. Migrain\n2. Tension Headache\n3. Kelelahan",
            "obat": [
                ("Paracetamol", "500mg saat diperlukan"),
                ("Istirahat yang cukup", ""),
                ("Perbanyak minum air", "2-3 liter per hari")
            ]
        },
        
        # Diagnosa untuk kombinasi gejala spesifik
        frozenset(["Batuk", "Pilek"]): {
            "diagnosis": "Flu (Common Cold)",
            "obat": [
                ("Paracetamol", "500mg setiap 4-6 jam"),
                ("Pseudoephedrine", "60mg setiap 4-6 jam"),
                ("Vitamin C", "500mg 2 kali sehari")
            ]
        },
        frozenset(["Batuk", "Sesak Napas"]): {
            "diagnosis": "Asma atau Bronkitis",
            "obat": [
                ("Bronkodilator", "Sesuai resep dokter"),
                ("Inhaler", "Saat diperlukan"),
                ("Anti-inflamasi", "Sesuai resep dokter")
            ]
        },
        frozenset(["Mual", "Sakit Perut"]): {
            "diagnosis": "Diare",
            "obat": [
                ("Oralit", "Setiap kali BAB"),
                ("Loperamide", "2mg setelah setiap BAB cair"),
                ("Probiotik", "2 kali sehari"),
                ("Zinc", "20mg per hari selama 10 hari")
            ]
        },
        frozenset(["Mual", "Sakit Perut", "Demam"]): {
            "diagnosis": "Gastroenteritis (Radang Lambung dan Usus)",
            "obat": [
                ("Oralit", "Setiap kali BAB"),
                ("Paracetamol", "500mg setiap 4-6 jam untuk demam"),
                ("Probiotik", "2 kali sehari"),
                ("Domperidone", "10mg 3 kali sehari sebelum makan")
            ]
        },
        frozenset(["Batuk", "Pilek", "Demam"]): {
            "diagnosis": "Infeksi Saluran Pernapasan Atas (ISPA)",
            "obat": [
                ("Paracetamol", "500mg setiap 4-6 jam"),
                ("Amoxicillin", "500mg 3 kali sehari (dengan resep dokter)"),
                ("Vitamin C", "500mg 2 kali sehari")
            ]
        },
        frozenset(["Batuk", "Demam", "Sesak Napas"]): {
            "diagnosis": "Pneumonia (Harap segera ke dokter)",
            "obat": [
                ("Antibiotik", "Harus dengan resep dokter"),
                ("Paracetamol", "500mg setiap 4-6 jam"),
                ("Ekspektoran", "Sesuai resep dokter")
            ]
        },
        frozenset(["Pusing", "Demam", "Letih/Lesu"]): {
            "diagnosis": "Tifus (Perlu pemeriksaan lebih lanjut)",
            "obat": [
                ("Paracetamol", "500mg setiap 4-6 jam"),
                ("Cairan elektrolit", "Minum banyak"),
                ("Probiotik", "2 kali sehari")
            ]
        },
        frozenset(["Demam", "Nyeri Sendi", "Letih/Lesu"]): {
            "diagnosis": "Demam Berdarah (Perlu pemeriksaan dokter segera)",
            "obat": [
                ("Paracetamol", "500mg setiap 4-6 jam"),
                ("Cairan elektrolit", "Minum banyak"),
                ("Vitamin C", "500mg 2 kali sehari")
            ]
        },
        frozenset(["Demam", "Ruam Kulit", "Letih/Lesu"]): {
            "diagnosis": "Kemungkinan:\n1. Campak\n2. Rubella\n3. Demam Chikungunya",
            "obat": [
                ("Antihistamin", "Sesuai petunjuk dokter"),
                ("Paracetamol", "500mg setiap 4-6 jam"),
                ("Calamine lotion", "Oleskan pada ruam 3-4 kali sehari")
            ]
        },
        frozenset(["Nyeri Dada", "Sesak Napas", "Letih/Lesu"]): {
            "diagnosis": "Kemungkinan masalah jantung (SEGERA KE UGD)",
            "obat": [
                ("Perlu pemeriksaan dokter segera", ""),
                ("Tidak disarankan self-medication", "")
            ]
        },
        frozenset(["Pusing", "Nyeri Dada", "Letih/Lesu"]): {
            "diagnosis": "Kemungkinan:\n1. Anemia\n2. Tekanan Darah Tinggi",
            "obat": [
                ("Perlu pemeriksaan dokter", ""),
                ("Istirahat yang cukup", ""),
                ("Perbanyak makanan bergizi", "")
            ]
        },
        frozenset(["Sakit Tenggorokan", "Demam", "Letih/Lesu"]): {
            "diagnosis": "Faringitis atau Radang Tenggorokan",
            "obat": [
                ("Paracetamol", "500mg setiap 4-6 jam"),
                ("Antibiotik", "Sesuai resep dokter"),
                ("Berkumur air garam", "3-4 kali sehari")
            ]
        },
        frozenset(["Ruam Kulit", "Letih/Lesu"]): {
            "diagnosis": "Kemungkinan:\n1. Alergi\n2. Dermatitis",
            "obat": [
                ("Antihistamin", "1 tablet per hari"),
                ("Calamine lotion", "Oleskan pada ruam 3-4 kali sehari"),
                ("Hindari makanan/benda pemicu alergi", "")
            ]
        }
    }

    kemungkinan_diagnosa = []
    for kondisi, info in database_penyakit.items():
        if any(g in gejala for g in kondisi):
            kemungkinan_diagnosa.append(info)

    return kemungkinan_diagnosa

def tampilkan_hasil(diagnosa):
    if not diagnosa:
        print("\nMaaf, tidak dapat menentukan diagnosis yang tepat.")
        print("Silakan konsultasi dengan dokter untuk pemeriksaan lebih lanjut.")
        return

    print("\n=== HASIL DIAGNOSA ===")
    for index, hasil in enumerate(diagnosa, 1):
        print(f"\nKemungkinan {index}:")
        print(f"Diagnosis: {hasil['diagnosis']}")
        print("Rekomendasi Obat:")
        for obat, dosis in hasil['obat']:
            print(f"- {obat} ({dosis})")
    
    print("\nPERINGATAN:")
    print("1. Diagnosa ini hanya sebagai referensi awal")
    print("2. Jika gejala memburuk, segera konsultasi dengan dokter")
    print("3. Pastikan tidak ada alergi terhadap obat yang direkomendasikan")
    print("4. Ikuti dosis yang dianjurkan dengan tepat")

def main():
    while True:
        print("\nSelamat datang di Sistem Diagnosa Penyakit Umum")
        gejala = dapatkan_gejala()
        
        if not gejala:
            print("\nAnda belum memilih gejala apapun.")
            continue
            
        print("\nGejala yang Anda pilih:", ", ".join(gejala))
        hasil_diagnosa = diagnosa_penyakit(gejala)
        tampilkan_hasil(hasil_diagnosa)
        
        lanjut = input("\nApakah ingin melakukan diagnosa lagi? (y/n): ")
        if lanjut.lower() != 'y':
            break
    
    print("\nTerima kasih telah menggunakan Sistem Diagnosa Penyakit Umum")
    print("Jaga kesehatan selalu!")

if __name__ == "__main__":
    main()
