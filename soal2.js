const productBin = {
    requestId: null,
    data: [
      {
        id: 100000057465,
        storageId: 10000008207,
        code: "A01-01-01-A",
        productId: 110000081009,
        productName: "FloBrand-DressBSPink",
        productCode: "FBR00040101",
        quantity: 76,
        createdTime: "2021-12-21T13:54:48Z",
      },
      {
        id: 100000057466,
        storageId: 10000002181,
        code: "A01-01-01-B",
        productId: 110000081009,
        productName: "FloBrand-DressBSPink",
        productCode: "FBR00040101",
        quantity: 71,
        createdTime: "2021-12-21T13:54:48Z",
      },
      {
        id: 100000065224,
        storageId: 10000008884,
        code: "Tgt00-A-A-01",
        productId: 110000081009,
        productName: "FloBrand-DressBSPink",
        productCode: "FBR00040101",
        quantity: 10,
        createdTime: "2022-02-08T10:35:19Z",
      },
    ],
    message: "success",
  };

// Fungsi untuk menghitung total quantity berdasarkan productCode
function calculateTotalQuantity(productCode) {
  let totalQuantity = 0;

  // Loop melalui array data untuk mencari productCode yang sesuai
  productBin.data.forEach(e => {
    if (e.productCode === productCode) {
      totalQuantity += e.quantity; // Tambahkan quantity jika productCode cocok
    }
  });

  return totalQuantity;
}

// Fungsi untuk mendapatkan productName berdasarkan productCode
function getProductNameByCode(productCode) {
    const product = productBin.data.find(e => e.productCode === productCode); // Cari item pertama yang cocok
    return product ? product.productName : "Product name not found"; // Jika ditemukan, kembalikan productName
}

  // Mendefinisikan productCode dan productName yang akan dicari
  const productCode = "FBR00040101";
  const productName = getProductNameByCode(productCode);

  // Menghitung total quantity untuk produk dengan productCode 'FBR00040101'
  const result = calculateTotalQuantity(productCode);
  console.log(`Total quantity untuk produk ${productName} (${productCode}) : ${result}`);
 