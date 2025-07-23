const patterns = {
    pola1: [
        "🟩 Kotak Reguler",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  int n = 10; // << ubah ini
  for (int i = 0; i < n; i++) {
    for (int s = 0; s < 5; s++) {
      item += "*";
    }
    item += "\\n";
  }
  cout << item;  // pindah ke baris berikutnya
  return 0;
}`,
    ],

    pola2: [
        "Segitiga Rata Kiri 💔 (naik)",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  int n = 10; // << ubah ini
  for (int i = 0; i < n; i++) {
    for (int s = 0; s <= i; s++) {
      item += "*";
    }
    item += "\\n";
  }
  cout << item;
  return 0;
}`,
    ],

    pola3: [
        "Segitiga Rata Kanan 😎 (turun)",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  int n = 10; // << ubah ini
  for (int i = n; i >= 0; i--) {
    for (int s = 0; s < i; s++) {
      item += "*";
    }
    item += "\\n";
  }
  cout << item;
  return 0;
}`,
    ],

    pola4: [
        "▶️ Half Wajik/Diamond Rata Kiri",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  for (int i = 0; i <= 10; i++) {
    for (int s = 0; s <= i; s++) {
      item += "*";
    }
    item += "\\n";
  }
  for (int i = 10; i >= 0; i--) {
    for (int s = 0; s <= i; s++) {
      item += "*";
    }
    item += "\\n";
  }
  cout << item;
  return 0;
}`,
    ],

    pola5: [
        "🔢 Segitiga Angka",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  int n = 6; // << ubah ini
  for (int i = 1; i <= n; i++) {
    for (int j = 0; j < i; j++) {
      item += to_string(i);
    }
    item += "\\n";
  }
  cout << item;
  return 0;
}`,
    ],

    pola6: [
        "🔢 Deret Angka",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  int n = 6; // << ubah ini
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      item += to_string(j);
    }
    item += "\\n";
  }
  cout << item;
  return 0;
}`,
    ],

    pola7: [
        "◀️ Half Wajik/Diamond Rata Kanan",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  for (int i = 0; i <= 10; i++) {
    item += string(10 - i, ' ') + string(i + 1, '*') + "\\n";
  }
  for (int i = 10; i >= 0; i--) {
    item += string(10 - i, ' ') + string(i + 1, '*') + "\\n";
  }
  cout << item;
  return 0;
}`,
    ],

    pola8: [
        "♦️ Wajik/Diamond",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  for (int i = 1; i < 10; i++) {
    for (int j = 1; j < 10; j++) {
      if (i <= 5 && j >= 5 - (i - 1) && j <= 5 + (i - 1)) {
        item += "*";
      } else if (i >= 5 && j > i - 5 && j < 10 - (i - 5)) {
        item += "*";
      } else {
        item += " ";
      }
    }
    item += "\\n";
  }
  cout << item;
  return 0;
}`,
    ],

    pola9: [
        "🔺 Piramida (naik)",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
    string item = "";

    for (int i = 0; i < 10; i++) {
        // Spasi
        for (int k = 10; k >= i; k--) {
            item += " ";
        }
        // Bintang sisi kiri
        for (int l = 1; l <= i; l++) {
            item += "*";
        }
        // Bintang sisi kanan
        for (int m = 0; m <= i; m++) {
            item += "*";
        }
        // Pindah baris
        item += "\\n";
    }

    cout << item;

    return 0;
}`,
    ],

    pola10: [
        "🔻Piramida (turun)",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
    string item = ""; // Simpan hasil pola

    for (int i = 0; i < 10; i++) {
        // Tambah spasi & bintang ke string
        item += string(i, ' ') + string((10 - i) * 2 - 1, '*') + "\n";
    }

    cout << item; // Tampilkan hasilnya

    return 0;
}`,
    ],

    pola11: [
        "🏁 Checkerboard",
        `#include <iostream>
#include <string>
using namespace std;

int main() {
  string item = "";
  int n = 10; // << ubah ini
  for (int i = 0; i < n; i++) {
    if (i % 2 == 0) {
      item += "# # # # # #";
    } else {
      item += " # # # # # #";
    }
    item += "\\n";
  }
  cout << item;
  return 0;
}`,
    ],
    pola12: [
        "➕ Fibonacci",
        `#include <iostream>
using namespace std;

int main() {
    int rows = 4, a = 0, b = 1; // rows = jumlah baris (var), a & b = awal deret

    for (int i = 1; i <= rows; i++) { // loop baris
        for (int j = 1; j <= i; j++) { // loop cetak angka per baris
            cout << a << " ";

            int next = a + b; // hitung angka
            a = b; // ubah angka ke depan
            b = next; // angka baru
        }
        cout << endl;
    }

    return 0;
}`,
    ],
    pola13: [
        "✖️",
        `#include <iostream>
using namespace std;

int main() {
    int n = 7; // ukuran pola, bisa diubah (sebaiknya ganjil biar simetris)

    for (int i = 0; i < n; i++) {         // loop baris
        for (int j = 0; j < n; j++) {     // loop kolom
            if (j == i || j == n - i - 1) // kondisi buat garis X
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }

    return 0;
}`,
    ],
    pola14: [
        "🐍 Angka Zig-Zag",
        `#include <iostream>
#include <iomanip> // merapihkan tampilan angka (setw)
using namespace std;

int main() {
    int rows, cols;
    cout << "Masukkan jumlah baris: ";  // input baris
    cin >> rows;
    cout << "Masukkan jumlah kolom: ";  // input kolom
    cin >> cols;

    int num = 1; // start

    for (int i = 0; i < rows; i++) {
        if (i % 2 == 0) {
            // baris genap (mulai 0) cetak kanan
            for (int j = 0; j < cols; j++) {
                cout << setw(3) << num++;
            }
        } else {
            // baris ganjil cetak kiri
            int temp = num + cols - 1; // mulai angka paling kanan
            for (int j = 0; j < cols; j++) {
                cout << setw(3) << temp--;
                num++;
            }
        }
        cout << endl;
    }

    return 0;
}`,
    ],
    pola15: [
        "🔠 Segitiga Alphabet",
        `#include <iostream>
using namespace std;

int main() {
    int n = 5; // << ubah ini

    for (int i = 0; i < n; i++) {
        char huruf = 'A' + i; // mulai huruf A lalu naik
        for (int j = 0; j <= i; j++) {
            cout << huruf;
        }
        cout << endl;
    }

    return 0;
}`,
    ],
    pola16: [
        "🔠 Deret Alphabet",
        `#include <iostream>
using namespace std;

int main() {
    int n = 5; // << ubah ini

    for (int i = 0; i < n; i++) {
        for (char c = 'A'; c <= 'A' + i; c++) {
            cout << c; // cetak huruf A lalu sesuai baris
        }
        cout << endl;
    }

    return 0;
}`,
    ],
    pola17: [
        "🔠🐍 Zig-Zag Alphabet",
        `#include <iostream>
using namespace std;

int main() {
    int n = 5;  // << ubah ini
    int total = n * 2 - 1; // total kolom bentuk simetris
    char huruf = 'A';

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < total; j++) {
            if (j == i || j == total - 1 - i) {
                cout << huruf++; // cetak huruf dan naik ke huruf berikutnya
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }

    return 0;
}`,
    ],
    pola18: [
        "🌪️ Spiral (final boss)",
        `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n = 7;
    vector<vector<char>> matrix(n, vector<char>(n, ' ')); // matrix 2d
    
    int top = 0, bottom = n - 1;    // variabel batas atas, bawah, kiri, kanan
    int left = 0, right = n - 1;
    char fill = '*';    // dapat diganti

    // mengisi satu lapisan penuh
    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) matrix[top][i] = fill; // baris atas
        top++;
        for (int i = top; i <= bottom; i++) matrix[i][right] = fill; // kolom kanan
        right--;
        for (int i = right; i >= left; i--) matrix[bottom][i] = fill; // baris bawah
        bottom--;
        for (int i = bottom; i >= top; i--) matrix[i][left] = fill; // kolom kiri
        left++;
    }
    
    // output baris per baris
    for (auto row : matrix) {
        for (char c : row) cout << c;
        cout << endl;
    }
    return 0;
}`,
    ],
};

export default patterns;
