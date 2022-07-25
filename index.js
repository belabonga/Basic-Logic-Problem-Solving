/* PSEUDOCODE 
STORE 31 AS tanggal
STORE [] AS array
LOOP i IN tanggal

IF tanggal MODULUS 5
DISPLAY "Tanggal" CONCAT WITH tanggal CONCAT WITH ": Tempat Fitness Tutup"
ELSE IF tanggal modulus 5
DISPLAY "Tanggal" CONCAT WITH tanggal CONCAT WITH ": Tono, Anton, Budi"
ELSE 
    IF tanggal - 7 THEN MODULUS 2 IS 0 (untuk memulai dari tanggal 7)
        ADD "Tono" TO array
    IF tanggal - 7 THEN MODULUS 4 IS 0
        ADD "Anton" TO array
    IF tanggal - 7 THEN MODULUS 5 IS 0
        ADD "Budi" TO ARRAY

DISPLAY "Tanggal" CONCAT WITH tanggal CONCAT WITH " : " JOIN>ARRAY
*/



let tgl = 31;
for (let i = 7; i <= tgl; i++) {
    let result = []
    if (i % 5 === 0) {
        console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
    } else if (i === 7) {
        console.log(`Tanggal ${i}: Tono, Anton, Budi`)
    } else {
        if ((i - 7) % 2 === 0) {
            result.push("Tono")
        }
        if ((i - 7) % 4 === 0) {
            result.push("Anton")
        }
        if ((i - 7) % 5 === 0) {
            result.push("Budi")
        }
        console.log(`Tanggal ${i}: ${result.join(", ")}`)
    }
}

/* OUTPUT
Tanggal 7: Tono, Anton, Budi
Tanggal 8: 
Tanggal 9: Tono
Tanggal 10: Tempat Fitness Tutup
Tanggal 11: Tono, Anton
Tanggal 12: Budi
Tanggal 13: Tono
Tanggal 14: 
Tanggal 15: Tempat Fitness Tutup
Tanggal 16: 
Tanggal 17: Tono, Budi
Tanggal 18: 
Tanggal 19: Tono, Anton
Tanggal 20: Tempat Fitness Tutup
Tanggal 21: Tono
Tanggal 22: Budi
Tanggal 23: Tono, Anton
Tanggal 24: 
Tanggal 25: Tempat Fitness Tutup
Tanggal 26: 
Tanggal 27: Tono, Anton, Budi
Tanggal 28: 
Tanggal 29: Tono
Tanggal 30: Tempat Fitness Tutup
Tanggal 31: Tono, Anton
*/
