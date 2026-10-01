// پایگاه داده برای ذخیره نتایج آزمون - نسخه اصلاح شده
let db = null;

const request = indexedDB.open("django_exam_db", 1);

request.onupgradeneeded = e => {
  const database = e.target.result;
  if (!database.objectStoreNames.contains("results")) {
    const store = database.createObjectStore("results", { keyPath: "id" });
    store.createIndex("score", "score", { unique: false });
    store.createIndex("date", "date", { unique: false });
    store.createIndex("nationalCode", "nationalCode", { unique: false });
  }
};

request.onsuccess = e => {
  db = e.target.result;
  console.log("✅ پایگاه داده با موفقیت باز شد.");
};

request.onerror = e => {
  console.error("❌ خطا در باز کردن پایگاه داده:", e.target.error);
};

function saveResult(result) {
  if (!db) {
    console.error("⚠️ پایگاه داده در دسترس نیست. ذخیره در localStorage...");
    saveToLocalStorage(result);
    return;
  }
  
  // 🔥 اصلاح حیاتی: بررسی و ایجاد id اگر وجود ندارد
  if (!result.id) {
    result.id = `exam_${result.nationalCode || 'unknown'}_${Date.now()}`;
    console.log("🆔 شناسه خودکار ایجاد شد:", result.id);
  }
  
  try {
    const tx = db.transaction("results", "readwrite");
    const store = tx.objectStore("results");
    
    const request = store.put(result);
    
    request.onsuccess = () => {
      console.log("✅ نتیجه با موفقیت در پایگاه داده ذخیره شد.");
    };
    
    request.onerror = (e) => {
      console.error("❌ خطا در ذخیره نتیجه در IndexedDB:", e.target.error);
      // ذخیره جایگزین در localStorage
      saveToLocalStorage(result);
    };
  } catch (error) {
    console.error("❌ خطا در تراکنش IndexedDB:", error);
    saveToLocalStorage(result);
  }
}

// تابع جدید برای ذخیره در localStorage
function saveToLocalStorage(result) {
  try {
    const key = `exam_backup_${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(result));
    console.log("📝 نتیجه در localStorage ذخیره شد (پشتیبان):", key);
  } catch (e) {
    console.error("❌ خطا در ذخیره در localStorage:", e);
  }
}

function getResults() {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("پایگاه داده در دسترس نیست.");
      return;
    }
    
    const tx = db.transaction("results", "readonly");
    const store = tx.objectStore("results");
    const request = store.getAll();
    
    request.onsuccess = (e) => {
      resolve(e.target.result);
    };
    
    request.onerror = (e) => {
      reject(e.target.error);
    };
  });
}

// تابع برای بررسی کد ملی تکراری در یک روز
function checkDuplicateNationalCode(nationalCode, date) {
  return new Promise((resolve, reject) => {
    if (!db) {
      resolve(false);
      return;
    }
    
    const tx = db.transaction("results", "readonly");
    const store = tx.objectStore("results");
    const index = store.index("nationalCode");
    const request = index.getAll(nationalCode);
    
    request.onsuccess = (e) => {
      const results = e.target.result;
      const hasDuplicate = results.some(result => 
        result.nationalCode === nationalCode && result.date.startsWith(date)
      );
      resolve(hasDuplicate);
    };
    
    request.onerror = (e) => {
      reject(e.target.error);
    };
  });
}
